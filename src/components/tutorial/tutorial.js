import React from 'react';
import { Link } from 'react-router-dom';
import './tutorial.css';

export const Tutorial = (props) => {
    
    return (
        <Link className="redirect" to={`/tutorials/${props.tutorial.id}`}>
            <div className="tutorial" >
                <div className="tutorial-container">
                <div className="image-container"> <img className="tutorial-image" src={props.tutorial.thumbnail} alt={''}/></div>
                <div className="title-container">
                    <h3>{props.tutorial.title}</h3>
                </div>
                <div className="card-meta">
                    <p className="tutorial-description">{props.tutorial.description}</p>
                </div>
                {/* <p className="tutorialAuthor">by <a href={'' || '#'}>{'' || 'Elearning-team'}</a></p> */}
                </div>
            </div>
        </Link>
    )
};