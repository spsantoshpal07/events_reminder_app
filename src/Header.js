import Button from './Button';
import { useLocation } from 'react-router-dom';

import './css/Header.css';

const Header = ({ toggleEventsForm, showEventsForm }) => {
    const location = useLocation();

    return (
        <>
            <div className="header">
                <div>
                    <label className='header-label'>Events Reminder</label>
                </div>
                { location.pathname === '/' && <Button text={!showEventsForm ? 'Add Event' : 'Close'} color={!showEventsForm ? 'green' : 'red'} onBtnClick={toggleEventsForm}/>}
            </div>
        </>
    );
}

export default Header;