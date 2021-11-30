import React from "react";

export const GalleryImage = (props) => {
  return <img className={props.className} src={props.src} alt={props.alt} />;
};
