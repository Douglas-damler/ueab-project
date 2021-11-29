import React from 'react';
import { Link } from 'react-router-dom';
import './tutorial.css';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Tutorial = (props) => {
    
    return (
        <Link className="redirect" to={`/tutorials/${props.tutorial.id}`}>
            <div className="tutorial" >
                <div className="tutorial-container">
                <div className="image-container"> 
                    <img 
                    className="tutorial-image" 
                    src={`https://img.youtube.com/vi/${props.tutorial.youtubeUrl.split(".be/")[1]}/hqdefault.jpg`} 
                    alt={''}/>
                </div>
                <div className="mt-3 title-container">
                    <h3>{props.tutorial.title}</h3>
                </div>
                <div className="card-meta">
                    <p className="tutorial-description">{props.tutorial.description.substring(0, 160)}</p>
                </div>
                </div>
            </div>
        </Link>
    )
};