import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import './VideoPlayer.css';
import { findTutorialById } from '../../app/utilities';

export const VideoPlayer = () => {
    const [ loading, setLoading ] = useState(true);
    const { id } = useParams();
    console.log(id)
    const tutorials = useSelector((state) => state.tutorials.tutorials);
    const tutorial = findTutorialById(tutorials, id);
    let youtubeVideoLink;
    if (tutorial) {
        youtubeVideoLink = tutorial.youtubeLink;
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000)
    }, [])
   
    return(
        loading ? (
            <div className="video-player">
                <h2>Loading video...</h2>
                <div className="loader">

                </div>
            </div>
        ): (

            youtubeVideoLink ? (
                <div className="video-player">
                    <h3>
                        { tutorial ? (`${tutorial.title}`): ('')}
                    </h3>
                
                    <ReactPlayer 
                        className="react-player"
                        width="100%"
                        controls={true}
                        url={youtubeVideoLink}
                    />
            </div>
            ): (
                <div className="video-player">
                    <p>Oooh, No! A video with that link does not exist. Maybe you changed something on the address bar😉</p>
                </div>
            )
        )
    )
}