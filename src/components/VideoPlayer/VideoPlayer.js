import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams, useHistory } from "react-router";
import "./VideoPlayer.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShare } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

export const VideoPlayer = () => {
  const [loading, setLoading] = useState(true);
  const [ tutorial, setTutorial ] = useState('');
  const { id } = useParams();
  const history = useHistory();
  
  const handleDeleteVideo = (id) => {
    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then((response) => {
      axios.delete(`http://127.0.0.1:8000/api/videos/${id}`, {headers: {Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`}})
      .then((response) => {
        console.log(response)
        toast.success("Video Deleted");
        history.push("/tutorials");
      })
    })
  }

  useEffect(() => {
    axios.get(`http://127.0.01:8000/api/videos/${id}`)
    .then((response) => {
      setTutorial(response.data.data)
      setLoading(false)
    }).catch(err => console.log(err.message))
  },[id]);

  return loading ? (
    <div className="video-player pt-5">
      <div className="loader "></div>
    </div>
  ) : tutorial.youtubeUrl ? (
    <div className="video-player">
      <h3 className="pt-5">{tutorial ? `${tutorial.title}` : ""}</h3>

      <ReactPlayer
        className="react-player"
        width="100%"
        controls={true}
        url={tutorial.youtubeUrl}
      />
      <div className="delete-container">
        {sessionStorage.hasOwnProperty("auth_token") ? (
          <FontAwesomeIcon 
          id="delete" 
          onClick={() => {
            handleDeleteVideo(tutorial.id)
          }} 
          className="vicon" 
          icon={faTrash} />
        ): (<></>)}
      </div>
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
