import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./GalleryModal.css";

export const GalleryModal = (props) => {
  if (props.isOpen === false) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={props.onClick} name={props.name}>
      <div className="modal-body modal-image">
        <i className="modal-close" onClick={props.onClick}>
          <span>
            <FontAwesomeIcon className="close-icon" icon={faTimes} />
          </span>
        </i>
        <img
          className="image-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
          src={props.src}
          alt=""
        />
      </div>
    </div>
  );
};
