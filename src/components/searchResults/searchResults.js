import React from 'react';
import { useSelector } from 'react-redux';
import { filterData } from '../../app/utilities';
import { useLocation } from 'react-router';
import { TutorialList } from '../tutorialList/tutorialList';
import './searchResults.css';

export const SearchResults = () => {
    const tutorials = useSelector((state) => state.tutorials.tutorials);
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const searchTerm = queryParams.get('title');
    const results = filterData(tutorials, searchTerm);
    
    return (
        results.length ? (
            <div className="search-results">
                <div className="search-title-container">
                    <h3>{`Search Results for "${searchTerm}"`}</h3>
                    <TutorialList tutorials={results} />
                </div>
            </div>
        ): (
            <div className="search-results">
                <p>Sorry, we couldn't find any results for <span style={{fontWeight: 'bold'}}>{searchTerm}</span>. Please try a different query instead😎</p>
            </div>
        )
    )
}