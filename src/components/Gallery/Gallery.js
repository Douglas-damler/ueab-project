import React, { useState, useEffect } from "react";
import { GalleryImage } from "../GalleryImage/GalleryImage";
import { GalleryModal } from "../GalleryModal/GalleryModal";
import "./Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEllipsisV, faExpandArrowsAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import Filesaver from 'file-saver';
import { domain } from "../../app/utilities";

export const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState("");
  const [images, setImages] = useState([]);

  const openModal = (url, e) => {
    setShowModal(true);
    setUrl(url);
  };

  const closeModal = () => {
    setShowModal(false);
    setUrl("");
  };

  useEffect(() => {
    axios.get(`${domain}api/photos`).then((res) => {
      setImages(res.data.images);
      console.log(res.data.images)
    }).catch((err) => console.log(err.message));
  }, []);

  const handleDeleteImage = (id) => {
    axios.get(`${domain}sanctum/csrf-cookie`).then((response) => {
      axios.delete(`${domain}api/photos/${id}`, {headers: {Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`}})
      .then((response) => {
        toast.success("Image Deleted");
      }).catch((err) => console.log(err.message));
    });
  }

  const downloadImage = (imagePath, name) => {
    Filesaver(imagePath, name);
  };

  return (
    <div refs="gallery-container" className="container-fluid gallery-container">
      <div className="row">
        {images.map((image, index) => {
          return (
            <div key={index} className="col-sm-6 col-md-3 col-xl-2">
              <div className="gallery-card">
                <GalleryImage
                  className="gallery-thumbnail"
                  src={`${domain}storage/${image.label}`}
                  alt={"Image number " + image.label}
                />

                <span
                  className="card-icon-open"
                  value={url}
                  onClick={(e) =>
                    openModal(`${domain}storage/${image.label}`, e)
                  }
                >
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </span>

                <p className="image-description mt-1">{image.description}</p>

                <div className="dropdown-container">
                  <div className="dropdown dropleft">
                    <FontAwesomeIcon 
                      className="m-1  dropdown-toggle" 
                      type="button" 
                      id="dropdownMenu2" 
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      icon={faEllipsisV}
                    />
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <button 
                        className="dropdown-item" 
                        type="button"
                        onClick={() => {
                          downloadImage(`${domain}storage/${image.label}`, image.label)
                        }}
                        > 
                        <FontAwesomeIcon 
                          className="dropdown-icon" 
                          icon={faDownload} 
                      /> Download
                      </button>
                      { sessionStorage.getItem("auth_token") ? (
                         <button 
                          className="dropdown-item mt-0" 
                          id="dropdown-delete"onClick={(event) => {
                            handleDeleteImage(image.id)
                          }}
                          type="button"><FontAwesomeIcon 
                          className="dropdown-icon" 
                          style={{color: "red"}}
                          icon={faTrash}
                         /> Delete</button>
                      ) : (<></>)}
                    </div>
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <GalleryModal  isOpen={showModal} onClick={closeModal} src={url} />
    </div>
  );
};
