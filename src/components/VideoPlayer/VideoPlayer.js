import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
import "./VideoPlayer.css";
import axios from "axios";

export const VideoPlayer = () => {
  const [loading, setLoading] = useState(true);
  const [ tutorial, setTutorial ] = useState('');
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`http://127.0.01:8000/api/videos/${id}`)
    .then((response) => {
      setTutorial(response.data.data)
      setLoading(false)
    })
  },[id]);

  return loading ? (
    <div className="video-player">
      <h2>Loading video...</h2>
      <div className="loader"></div>
    </div>
  ) : tutorial.youtubeUrl ? (
    <div className="video-player">
      <h3>{tutorial ? `${tutorial.title}` : ""}</h3>

      <ReactPlayer
        className="react-player"
        width="100%"
        controls={true}
        url={tutorial.youtubeUrl}
      />
    </div>
  ) : (
    <div className="video-player">
      <p>
        Oooh, No! A video with that link does not exist. Maybe you changed
        something on the address bar😉
      </p>
    </div>
  );
};
