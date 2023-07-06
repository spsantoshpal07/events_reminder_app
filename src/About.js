import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <h4>Version 1.0.0</h4>
            <h4>All rights reserved.</h4>
            <p>~ Santosh Pal</p>
            <Link to={'/'}>Home</Link>
        </>
    );
}

export default About;