import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer class="footer ">
      <div class="container">
        <div class="copyright mb-3 ml-auto">
          &copy; University of Eastern Africa, Baraton {date}, made with{" "}
          <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} /> by{" "}
          <strong href="#">Peter & Douglas</strong>
        </div>
      </div>
    </footer>
  );
};
