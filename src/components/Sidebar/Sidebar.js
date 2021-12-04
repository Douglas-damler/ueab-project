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
  const token = sessionStorage.getItem("auth_token");

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
      <div class="border-end bg-white" id="sidebar-wrapper">
        <div class="list-group list-group-flush">
        <Link
            class="list-group-item list-group-item-action list-group-item-light p-3"
            to="#"
          >
           <h5>Administrator</h5>
          <small style={{ color: "orange" , fontWeight: "bold" }}>{`${sessionStorage
            .getItem("auth_name")
            .split("@")[0]
            .toLocaleUpperCase()}`}</small>
          </Link>

          <Link
            class="list-group-item list-group-item-action list-group-item-light p-3"
            to="/admin/dashboard"
          >
            <span><FontAwesomeIcon icon={faTachometerAlt} /> </span>
            Dashboard
          </Link>
          <Link
            class="list-group-item list-group-item-action list-group-item-light p-3"
            to="/admin/add-photos-and-videos"
          >
            <span> <FontAwesomeIcon icon={faPlus} /> </span>
            Add Photos and Videos
          </Link>
          <Link
            class="list-group-item list-group-item-action list-group-item-light p-3"
            to="/admin/add-new-admins"
          >
             <span> <FontAwesomeIcon icon={faUsers} /> </span>
            Users
          </Link>
          <Link
            class="list-group-item list-group-item-action list-group-item-light p-3"
            to="#"
            onClick={handleSignout}
          >
             <span> <FontAwesomeIcon icon={faSignOutAlt} /> </span>
            Signout
          </Link>
        </div>
      </div>
    </div>
  );
};
