import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams, useHistory } from "react-router";
import "./VideoPlayer.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { domain } from "../../app/utilities";

export const VideoPlayer = () => {
  const [loading, setLoading] = useState(true);
  const [tutorial, setTutorial] = useState("");
  const { id } = useParams();
  const history = useHistory();

  const handleDeleteVideo = (id) => {
    axios.get(`${domain}sanctum/csrf-cookie`).then((response) => {
      axios
        .delete(`${domain}api/videos/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
          },
        })
        .then((response) => {
          console.log(response);
          toast.success("Video Deleted");
          history.push("/tutorials");
        });
    });
  };

  useEffect(() => {
    axios
      .get(`${domain}api/videos/${id}`)
      .then((response) => {
        setTutorial(response.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  return loading ? (
    <div className="video-player pt-5">
      <div className="loader "></div>
    </div>
  ) : tutorial.youtubeUrl ? (
    <div className=" container">
      <div className="video-player row">
        <h3 className="pt-5 col-12">{tutorial ? `${tutorial.title}` : ""}</h3>
        <div class="holds-the-iframe col-md-9">
          <ReactPlayer
            className="react-player"
            width="100%"
            controls={true}
            url={tutorial.youtubeUrl}
          />
        </div>
        <div className="video-description mt-3 col-md-3">
          <h5>Video description</h5>
          <p>{tutorial.description}</p>
        </div>
      </div>
      <div className="delete-container">
        {sessionStorage.hasOwnProperty("auth_token") ? (
          <div>
            <button
              onClick={() => {
                handleDeleteVideo(tutorial.id);
              }}
              id="delete-video-button"
            >
              <FontAwesomeIcon style={{ color: "red" }} icon={faTrash} /> Delete
            </button>
          </div>
        ) : (
          <></>
        )}
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
