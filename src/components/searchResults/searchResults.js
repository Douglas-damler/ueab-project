import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { TutorialList } from "../tutorialList/tutorialList";
import "./searchResults.css";
import axios from "axios";
import notfound from "../../images/not_found.jpg";
import { domain } from "../../app/utilities";

export const SearchResults = () => {
  const [tutorials, setTutorials] = useState([]);
  const [results, setResults] = useState([]);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchTerm = queryParams.get("title");

  //search videos when the document loads
  useEffect(() => {
    axios
      .get(`${domain}api/videos`)
      .then((response) => {
        setTutorials(response.data);
        const results = response.data.filter((dat) =>
          dat.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(results);
      })
      .catch((err) => console.log(err.message));
  }, [searchTerm]);

  return tutorials.length ? (
    results.length ? (
      <div className="pt-5 search-results">
        <div className="search-title-container">
          <h3>{`Search Results for "${searchTerm}"`}</h3>
          <TutorialList tutorials={results} />
        </div>
      </div>
    ) : (
      <div className="search-results-image">
        <div>
          <img src={notfound} className="img-fluid" alt="not-found arts" />
        </div>
      </div>
    )
  ) : (
    <div className="p-5 seach-results">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading video...</span>
      </div>
    </div>
  );
};
