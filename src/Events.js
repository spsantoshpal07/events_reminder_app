import './css/Events.css'

const Events = ({ event, deleteEvent, toggleReminder }) => {
    const {id, text, day, reminder} = event;
    return (
        <div className={`events-container ${reminder && 'reminder'}`} onDoubleClick={() => toggleReminder(id)}>
            <div className='events-container-box'>
                <h3>{text}</h3>
                <p>{day}</p>
            </div>
            <button 
                type='text' 
                className='btn delBtn' 
                onClick={() => deleteEvent(id)}>Delete</button>
        </div>
    );
}

export default Events;