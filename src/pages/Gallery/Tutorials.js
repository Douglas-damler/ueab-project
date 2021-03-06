import React, { useEffect, useState } from "react";
import { TutorialList } from "../../components/tutorialList/tutorialList";
import ReactLoading from "react-loading";
import "./Tutorials.css";
import axios from "axios";
import { domain } from "../../app/utilities";
import comeBackLater from "../../../src/images/later.jpg";

export const AllTutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { //Request the tutorials when the page loads
    axios
      .get(`${domain}api/videos`)
      .then((response) => {
        console.log(response.data)
        setTutorials(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="main">
      {loading ? (
        <div>
          <ReactLoading type="bars" className="pt-5" color="gray" />
        </div>
      ) : tutorials.length ? (
        <div>
          <h3 className="featured-title pt-5">Tutorials</h3>
          <TutorialList tutorials={tutorials} />
        </div>
      ) : (
        <div className="tutorials-not-available pt-5">
          <p>
            Uuhm! It looks like there are no tutorials. Please come
            back later
          </p>
          <img src={comeBackLater} alt="come back later" />
        </div>
      )}
    </div>
  );
};
