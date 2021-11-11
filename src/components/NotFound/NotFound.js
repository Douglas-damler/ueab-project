import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
    return (
        <div className="not-found-container">
           <div className="not-found">
            <h1>404</h1>
            <p>Not Found</p>
            <p className="looking">The page you're looking for does not exist!</p>
                <Link className="return-home-button" to="/">
                    return home
                </Link>
           </div>
        </div>
    )
}