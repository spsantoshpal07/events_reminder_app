import './css/Button.css';

const Button = ({ color, text, onBtnClick, clsName, type }) => {
    return (
        <div className='add-event-btn'>
            <button className={`btn ${clsName}`} 
                type={type}
                style={{backgroundColor: color}} 
                onClick={onBtnClick}>{text}</button>
        </div>
    );
}

export default Button;