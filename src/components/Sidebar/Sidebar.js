import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSignOutAlt,
  faTachometerAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { rerender } from "../../features/signinSlice";
import { toast } from "react-toastify";
import { domain } from "../../app/utilities";

export const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("auth_token"); //get aunthetication token from the local storage

  const handleSignout = () => {
    axios
      .get(`${domain}sanctum/csrf-cookie`)
      .then((response) => {
        axios
          .get(`${domain}api/logout`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            toast.success(response.data.message);
          });
      })
      .catch((err) => console.log(err.message));
    sessionStorage.removeItem("auth_token");
    sessionStorage.removeItem("auth_name");
    sessionStorage.removeItem("id");
    dispatch(rerender(false));
    history.push("/sign-in");
  };

  return (
    <div className="sidebar mt-2">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="#"
          >
            <h5>Administrator</h5>
            <small className="administrator-name">
              {`${sessionStorage
                .getItem("auth_name")
                .split("@")[0]
                .toLocaleUpperCase()}`}
            </small>
          </Link>

          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/admin/dashboard"
          >
            <span>
              <FontAwesomeIcon
                className="sidebar-icons"
                icon={faTachometerAlt}
              />{" "}
            </span>
            Dashboard
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/admin/add-photos-and-videos"
          >
            <span>
              {" "}
              <FontAwesomeIcon className="sidebar-icons" icon={faPlus} />{" "}
            </span>
            Add Photos and Videos
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/admin/add-new-admins"
          >
            <span>
              {" "}
              <FontAwesomeIcon className="sidebar-icons" icon={faUsers} />{" "}
            </span>
            Users
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="#"
            onClick={handleSignout}
          >
            <span>
              {" "}
              <FontAwesomeIcon
                className="sidebar-icons"
                icon={faSignOutAlt}
              />{" "}
            </span>
            Signout
          </Link>
        </div>
      </div>
    </div>
  );
};
