import React, { useState } from 'react';
import { GalleryImage } from '../GalleryImage/GalleryImage';
import { GalleryModal } from '../GalleryModal/GalleryModal';
import './Gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

export const Gallery = (props) => {
    const [ showModal, setShowModal ] = useState(false);
    const [ url, setUrl ] = useState('');

    const openModal = (url ,e) => {
        setShowModal(true);
        setUrl(url);
    }

    const closeModal = () => {
        setShowModal(false);
        setUrl('');
    }

    return (
        <div refs="gallery-container" className="container-fluid gallery-container">
            <div className="row">
                {
                    props.imgUrls.map((url, index) => {
                        return <div className="col-sm-6 col-md-3 col-xl-2">
                            <div className="gallery-card">
                                <GalleryImage
                                    className="gallery-thumbnail"
                                    src={url}
                                    alt={'Image number ' + (index + 1)} 
                                />
                                <span
                                    className="card-icon-open"
                                    value={url}
                                    onClick={(e) => openModal(url, e)}
                                ><FontAwesomeIcon icon={faExpandArrowsAlt}/></span>
                            </div>
                        </div>
                    })
                }
            </div>
            <GalleryModal
                isOpen={showModal}
                onClick={closeModal}
                src={url} 
            />
        </div>
    )
}