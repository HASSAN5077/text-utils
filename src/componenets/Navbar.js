import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <div className="nav" style={props.style}>
            <h1>{props.title}</h1>
            <ul style={props.style}>
                <li><Link to="/">{props.home}</Link></li>
                <li><Link to="/about">{props.aboutText}</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText:PropTypes.string,
    contact:PropTypes.string
}
