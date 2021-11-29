import React, { useState } from "react";
import "./Add.css";
import { Breadcrumb } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from 'react-toastify';

export const AddPhotosAndVideos = () => {
  const [ link, setLink ] = useState(false);
  const [ video, setVideo ] = useState(false);
  const [ title, setTitle ] = useState("");
  const [ youtubeLink, setYoutubeLink ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ isFile, setIsFile ] = useState(false);
  const [ images, setImages ] = useState([]);
  const [ imagesError, setImagesError ] = useState('');
  const [ linkError, setLinkError ] = useState('');
  const [ imageDescription, setImageDescription ] = useState('');
 
  const token = sessionStorage.getItem("auth_token");

  function onChangeImages(e) {
    const imagesArray = [];
    for (let i = 0; i < e.target.files.length; i++) {
      var file = e.target.files[i];
      var fsize = (file.size / 1024 / 1024).toFixed(2); 
      var t = file.type.split('/').pop().toLowerCase();
      if (t !== "jpeg" && t !== "jpg" && t !== "png" && t !== "bmp" && t !== "gif") {
        setImagesError("Allowed formats are .jpeg, .jpg, .png, .bmp, .gif")
        return;
      }
      if(fsize > 2) {
        setImagesError("Maximum file size is 2 mbs");
        return;
      }
      imagesArray.push(e.target.files[i]);
      setImagesError("");
      setImages(imagesArray);
    }
  }

  //function to clear video form after submission
  const clearVideoForm = () => {
    setTitle("");
    setDescription("");
    setIsFile(false);
    setYoutubeLink("");
    setLinkError("");
  }

  const handleSubmitImages = (event) => {
    event.preventDefault();
    const data = new FormData();
    for (let i = 0; i < images.length; i++) {
      data.append("photos[]", images[i]);
    }
    
    const description = {
      description: imageDescription
    }

    data.append("description", description)

    if (!images.length) {
      return;
    }
    axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then((response) => {
      axios
        .post("http://127.0.0.1:8000/api/photos",data, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
          toast.success("Images Uploaded");
          setImages([]);
          setImagesError("");
          
        }).catch(err => err.message)
    }).catch(err => err.message)
  };

  const handleSubmitVideos = (event) => {
    event.preventDefault();
    var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if(!youtubeLink.match(regExp)){
        setLinkError("Please Enter a valid youtube link");
        return;
    }
    
    const data = {
      title: title,
      description: description,
      youtubeUrl: youtubeLink,
      isFile: isFile,
    };

    axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then((response) => {
      axios.post("http://127.0.0.1:8000/api/videos", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
          clearVideoForm();
          toast("Video uploaded")
        }).catch(err => err.message)
    }).catch(err => console.log(err.message));
    
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="container-fluid mt-0">
        <div className="mb-4 mb-lg-0">
          <Breadcrumb
            className="d-none d-md-inline-block mt-5"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          >
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Add photos and videos</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h4 className="page-title mb-3">Upload Videos and Images</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="card" id="upload-images">
              <div className="card-header">
                <div className="card-title">Upload Images</div>
              </div>

              <form onSubmit={handleSubmitImages} className="form-group">
                <label htmlFor="exampleFormControlFile1">
                  You can upload multiple images
                </label>{" "}
                <br />
                <input
                  type="file"
                  name="photos"
                  required
                  className="form-control mt-4"
                  onChange={onChangeImages}
                  multiple
                />
                <br/>
                <small style={{color:"red"}}>{imagesError}</small>

                <div className="form-group">
                  <label htmlFor="comment">Short Descriptionr(optional)</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    minLength="5"
                    maxLength= "50"
                    value={imageDescription}
                    onChange={(e) => {
                      setImageDescription(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="card-action mt-3">
                  <button type="submit" className="btn btn-success mr-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <form onSubmit={handleSubmitVideos} className="col-md-6">
            <div className="card" id="upload-videos">
              <div className="card-header">
                <div className="card-title text-bold">Upload Videos</div>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="squareInput">Enter the Video Title</label>
                  <input
                    type="text"
                    required
                    minLength = "5"
                    maxLength = "100"
                    className="form-control input-square"
                    id="squareInput"
                    placeholder="Enter the title here..."
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>

                <div className="form-check mt-3">
                  <label>Type</label>
                  <br />
                  <label className="form-radio-label mt-1">
                    <input
                      className="form-radio-input"
                      type="radio"
                      required
                      name="optionsRadios"
                      value=""
                      onChange={() => {
                        setLink(true);
                        setVideo(false);
                        setIsFile(false);
                      }}
                    />
                    <span className="form-radio-sign"> Youtube Link</span>
                  </label>
                  <br />
                  <label className="form-radio-label ml-3 mt-2">
                    <input
                      className="form-radio-input"
                      type="radio"
                      name="optionsRadios"
                      required
                      value=""
                      onChange={() => {
                        setLink(false);
                        setVideo(true);
                        setIsFile(true);
                      }}
                    />
                    <span className="form-radio-sign"> Upload Video</span>
                  </label>
                </div>

                <div className="form-group" hidden={!link}>
                  <label htmlFor="pillInput">Enter Youtube Link</label>
                  <input
                    type="text"
                    required
                    className="form-control input-pill"
                    id="pillInput"
                    placeholder="Youtube link here..."
                    value={youtubeLink}
                    onChange={(e) => {
                      setYoutubeLink(e.target.value);
                    }}
                  />
              
                  <small>{linkError}</small>
                </div>

                <div className="form-group" hidden={!video}>
                  <label>Upload a Video</label>{" "}
                  <br />
                  <input type="file" className="form-control mt-4" />
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Video Description</label>
                  <textarea
                    className="form-control"
                    id="comment"
                    rows="5"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="card-action">
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
