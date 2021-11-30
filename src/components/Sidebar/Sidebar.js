import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
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
    <div className="row">
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse mt-3"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/dashboard">
                <span data-feather="home"></span>
                <h5>Administrator</h5>
                <small
                  style={{ color: "orange", fontWeight: "bold" }}
                >{`${sessionStorage
                  .getItem("auth_name")
                  .split("@")[0]
                  .toLocaleUpperCase()}`}</small>
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link className="nav-link" to="/admin/dashboard">
                <span data-feather="home"></span>
                Dashboard
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link className="nav-link" to="/admin/add-photos-and-videos">
                <span data-feather="shopping-cart"></span>
                Add Videos & Photos
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link className="nav-link" to="/admin/add-new-admins">
                <span data-feather="users"></span>
                Users
              </Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#"
                onClick={() => {
                  handleSignout(history, token);
                }}
              >
                <span data-feather="users"></span>
                SignOut <FontAwesomeIcon icon={faSignOutAlt} />
              </Link>
            </li>
            <hr />
          </ul>
        </div>
      </nav>
    </div>
  );
};
