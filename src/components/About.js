import React from 'react'
import {Link} from 'react-router-dom'
export const About = () => {
    return (
        <div>
            <h4 >Version 1.0.1</h4>
            <Link style ={{color:'green'}} to="/">Go Back TO Task Tracker</Link>
        </div>
    )
}
export default About;
