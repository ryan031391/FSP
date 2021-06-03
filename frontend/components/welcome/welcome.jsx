import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = (props) => {
    const not_logged_in = () => (
        <nav>
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign Up!</Link>
        </nav>
    );

    const logged_in = () => (
        <div>
            <h1>Welcome, {props.currentUser.username}</h1>
            <button onClick={props.logout}>Log out</button>
        </div>
    );

    return props.currentUser ? logged_in() : not_logged_in();
}

export default Welcome;