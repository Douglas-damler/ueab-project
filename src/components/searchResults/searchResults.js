import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { TutorialList } from '../tutorialList/tutorialList';
import './searchResults.css';
import axios from 'axios';
import notfound from '../../images/not_found.jpg';

export const SearchResults = () => {
    const [ tutorials, setTutorials ] = useState([]);
    const [ results, setResults ] = useState([]);
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const searchTerm = queryParams.get('title');
    
    //search videos when the document loads
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/videos')
        .then((response) => {
            setTutorials(response.data);
            const results = response.data.filter(
                (dat) => dat.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setResults(results);
        }).catch(err => console.log(err.message));
    },[])
    
    return (
        tutorials.length ? (
            results.length ? (
                <div className="pt-5 search-results">
                    <div className="search-title-container">
                        <h3>{`Search Results for "${searchTerm}"`}</h3>
                        <TutorialList tutorials={results} />
                    </div>
                </div>
            ): (
                // <div className="pt-5 search-results">
                //     <p>Sorry, we couldn't find any results for <span style={{fontWeight: 'bold'}}>{searchTerm}</span>. Please try a different query instead😎</p>
                // </div>

                <div className="search-results-image">
                    <div>
                        <img src={notfound} />
                    </div>
                </div>
            )
        ): (
            <div className="p-5 seach-results"> 
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading video...</span>
                </div>
            </div>
        )
    )
}