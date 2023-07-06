import Button from './Button';

import './css/EventForm.css';

const EventForm = ({ task, handleChange, addEvent }) => {
    return (
        <div className="add-event-form">
            <div className="add-event-input">
                <label className="add-event-input-label">Event</label>
                <input 
                    className='add-event-input-box' 
                    type='text' 
                    placeholder='Add Event'
                    name='text'
                    value={task.text}
                    onChange={handleChange} 
                />
            </div>

            <div className="add-event-input">
                <label className="add-event-input-label">Day & Time</label>
                <input 
                    className='add-event-input-box' 
                    type='text'
                    placeholder='Add Day & Time'
                    name='day'
                    value={task.day}
                    onChange={handleChange}
                />
            </div>

            <div className='add-event-input'>
                <label className="add-event-input-label" style={{display: 'inline'}}>Set Reminder</label>
                <input 
                    className='add-event-input-box' 
                    style={{width: '50%', height:'2rem'}} 
                    type='checkbox'
                    name='reminder' 
                    value={task.reminder}
                    checked={task.reminder}
                    onChange={handleChange}    
                />
            </div>
            <Button 
                type='submit' 
                clsName='btn-save-event' 
                onBtnClick={addEvent} text='Save Event'/>
        </div>
    );
}

export default EventForm;