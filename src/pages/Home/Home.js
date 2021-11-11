import React, { useRef, useState } from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';

export const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();
    const searchInputRef = useRef();
    const onSearchHandler = (event) => {
        event.preventDefault();
        if (searchValue === "") {
            return;
        }
        const query = {
            title: searchInputRef.current.value
        }
        const queryString = new URLSearchParams(query).toString();
        history.push({pathname: '/search-results', search: queryString}); 
    }
    return (
        <div className="home-container"> 
            <div id="indicator" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#indicator" data-slide-to="0" class="active"></li>
                    <li data-target="#indicator" data-slide-to="1"></li>
                    <li data-target="#indicator" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active" id="carousel-item-one" style={{backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh"}}>
                    </div>
                    <div class="carousel-item" id="carousel-item-two" style={{backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh"}}>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#indicator" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#indicator" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>       
            <div className="masthead">
                <div className="masthead-content text-white">
                    <div className="container-fluid px-4 px-lg-0">
                        <h1 className="landing-heading lh-1 mb-4">UNIVERSITY GALLERY</h1>
                        <p className="mb-5 text-light">Access E-learning like a PRO. Get the latest photos for events here and Catch up with the latest Elearning tutorials here</p>
                        <form id="searchForm">
                            <div className="row input-group-newsletter">
                                <div className="col">
                                    <input 
                                        className="form-control" 
                                        id="search" type="text" 
                                        placeholder="Search for Tutorial..." 
                                        aria-label="Search for Tutorial..."
                                        value={searchValue}
                                        required
                                        ref={searchInputRef}
                                        onChange={(event) => {setSearchValue(event.target.value)}}
                                    />
                                </div>
                                <div className="col-auto">
                                    <button 
                                        className="btn btn-primary" 
                                        id="submitButton" 
                                        type="submit"
                                        onClick={onSearchHandler}
                                        >
                                        Search!
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}