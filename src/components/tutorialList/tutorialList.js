import React from "react";
import { Tutorial } from "../tutorial/tutorial";
import "./tutorialList.css";

export const TutorialList = (props) => {
  return (
    <div className="tutorials-container">
      {props.tutorials.map((tutorial) => (
        <Tutorial tutorial={tutorial} key={tutorial.id} />
      ))}
    </div>
  );
};
