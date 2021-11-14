import React, { useState, useEffect } from "react";
import { GalleryImage } from "../GalleryImage/GalleryImage";
import { GalleryModal } from "../GalleryModal/GalleryModal";
import "./Gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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
    axios.get("http://127.0.0.1:8000/api/photos").then((res) => {
      setImages(res.data.images);
      console.log(images);
    });
  }, []);

  return (
    <div refs="gallery-container" className="container-fluid gallery-container">
      <div className="row">
        {images.map((image, index) => {
          return (
            <div className="col-sm-6 col-md-3 col-xl-2">
              <div className="gallery-card">
                <GalleryImage
                  className="gallery-thumbnail"
                  src={`http://127.0.0.1:8000/storage/${image.label}`}
                  alt={"Image number " + image.label}
                />

                <span
                  className="card-icon-open"
                  value={url}
                  onClick={(e) =>
                    openModal(`http://127.0.0.1:8000/storage/${image.label}`, e)
                  }
                >
                  <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <GalleryModal isOpen={showModal} onClick={closeModal} src={url} />
    </div>
  );
};
