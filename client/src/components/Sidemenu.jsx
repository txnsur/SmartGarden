import React from 'react';
import { Link } from 'react-router-dom';

function Sidemenu() {
    return (
        <nav id="sidebar-wrapper">
            <div className="list-group list-group-flush">
                <Link to="/login" className="list-group-item list-group-item-action bg-light">Login</Link>
                <Link to="/register" className="list-group-item list-group-item-action bg-light">Sign Up</Link>
            </div>
        </nav>
    );
}

export default Sidemenu;
