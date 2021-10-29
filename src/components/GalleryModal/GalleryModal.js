import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const GalleryModal = (props) => {
    if (props.isOpen === false) { 
        return null;
    }

    return (
        <div
            isOpen={props.isOpen}
            className="modal-overlay"
            onClick={props.onClick}
            name={props.name}
        >
            <div className="modal-body">
                <i className="modal-close" onClick={props.onClick}><span><FontAwesomeIcon icon={faTimes} /></span></i>
                <img src={props.src} alt="" />
            </div>

        </div>
    )
}