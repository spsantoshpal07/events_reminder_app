import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import EventForm from './EventForm';
import Events from './Events';
import { data } from './resources/data';
import Footer from './Footer';
import About from './About';

import './css/App.css';

const App = () => {
  const [showEventsForm, setShowEventsForm] = useState(false);
  const [events, setEvents] = useState(data);
  const [task, setTask] = useState({ text: '', day: '', reminder: false });
  const [showEvents, setShowEvents] = useState(false);

  useEffect(() => {
    if(events.length > 0) {
      return setShowEvents(true);
    }
    return setShowEvents(false);
  }, [events]);

  const toggleEventsForm = () => {
    setShowEventsForm(!showEventsForm);
  }

  const handleChange = (e) => {
    let value = null;
    let name = null;
    if(e.target.name === 'text' || e.target.name === 'day') {
      name = e.target.name;
      value = e.target.value;
    } else if(e.target.name === 'reminder') {
      name = e.target.name;
      value = e.target.checked;
    }
    setTask({ ...task, [name]: value });
  };

  const addEvent = (e) => {
    e.preventDefault();
    if(task.text && task.day) {
      const newEvent = {...task, id: new Date().getTime().toString()};
      setEvents([...events, newEvent]);
    }
    setTask({ text: '', day: '', reminder: false });
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(eve => eve.id !== id));
  }

  const toggleReminder = (id) => {
    setEvents(events.map(eve => eve.id === id ? {...eve, reminder: !eve.reminder} : eve));
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header toggleEventsForm={toggleEventsForm} showEventsForm={showEventsForm}/>
          <Routes>
            <Route path='/' element={
              <>
                <div className="event-body">
                  { showEventsForm && <EventForm 
                                        task={task} 
                                        handleChange={handleChange} 
                                        addEvent={addEvent} 
                                      /> 
                  }

                  { showEvents ? events.map(event =>
                    <Events 
                      key={event.id} 
                      event={event}
                      deleteEvent={deleteEvent}
                      toggleReminder={toggleReminder}
                    />
                    ) : <h2>No Events to display</h2>
                  }
                </div>
              </>
            }/>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
