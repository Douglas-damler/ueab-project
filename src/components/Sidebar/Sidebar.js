import React from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const Sidebar = () => {
    const token = localStorage.getItem('auth_token');
    const history = useHistory();
    const handleSignout = () => {
        axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
        .then((response) => {
            axios.get('http://127.0.0.1:8000/api/logout', {headers: {"Authorization": `Bearer ${token}`}})
            .then((response) => {
                console.log(response);
            })
        })
        sessionStorage.removeItem('auth_token');
        history.push("/sign-in");
    }
    return (
        <div>
           {/* <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="#">Sign out</a>
                    </div>
                </div>
          </header> */}

            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse mt-3">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link  className="nav-link" to="/admin/dashboard">
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
                        Add Users
                        </Link>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="#"
                            onClick={handleSignout}
                        >
                        <span data-feather="users"></span>
                        SignOut <FontAwesomeIcon icon={faSignOutAlt} />
                        </Link>
                    </li>
                    
                    <hr />
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="bar-chart-2"></span>
                        Settings
                        </a>
                    </li> */}
                    </ul>
                </div>
                </nav>
            </div>
            </div>
    )
}