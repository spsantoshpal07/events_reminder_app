import { Link } from 'react-router-dom';

import './css/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <h4>Copyright &copy; 2023</h4>
            <Link to='/about'>About</Link>
        </div>
    );
}

export default Footer;