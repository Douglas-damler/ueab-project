import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTutorials } from '../../features/tutorialsSlice';
import { TutorialList } from '../../components/tutorialList/tutorialList';
import ReactLoading from 'react-loading';
import './Tutorials.css';

export const AllTutorials = () => {
    const dispatch = useDispatch();
    const tutorials = useSelector((state) => state.tutorials.tutorials);
    const isLoading = useSelector((state) => state.tutorials.isLoadingTutorials);

    useEffect(() => {
        dispatch(loadTutorials());
    }, [dispatch]);

    return (
        <div className="main">
            <h3 className="featured-title">E-learning Tutorials</h3>

            {isLoading === false ? (
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