import React, { useEffect, useState } from 'react';
import { TutorialList } from '../../components/tutorialList/tutorialList';
import ReactLoading from 'react-loading';
import './Tutorials.css';
import axios from 'axios';

export const AllTutorials = () => {
   const [ tutorials, setTutorials ] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/videos')
        .then((response) => {
            console.log(response)
            setTutorials(response.data);
        }).catch((err) => console.log(err.message));
    },[])

    return (
        <div className="main">
            <h3 className="featured-title pt-5">E-learning Tutorials</h3>

            {tutorials.length  ? (
                <TutorialList tutorials={tutorials} />
            ): (
                <ReactLoading
                    type="bars"
                    color="gray" 
                />
            )}
        </div>
    )
}