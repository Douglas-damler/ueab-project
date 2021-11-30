import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "react-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
  faImages,
  faVideo,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { domain } from "../../../app/utilities";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const token = sessionStorage.getItem("auth_token");

  useEffect(() => {
    axios
      .get(`${domain}sanctum/csrf-cookie`)
      .then((response) => {
        axios
          .get(`${domain}api/users`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            setUsers(response.data);
          })
          .catch((err) => console.log(err));
      })
      .then(() => {
        axios.get(`${domain}api/photos`).then((response) => {
          setPhotos(response.data.images);
        });
      })
      .then(() => {
        axios.get(`${domain}api/videos`).then((response) => {
          setVideos(response.data);
        });
      })
      .catch((err) => console.log(err.message));
  }, [token]);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="dashboard">
        <div className="mb-4 mb-lg-0">
          <Breadcrumb
            className="d-none d-md-inline-block mt-4"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          >
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2 p-2">Admin Dashboard</h1>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <div className="card card-stats bg-success">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <FontAwesomeIcon className="dash-icon" icon={faImages} />
                    </div>
                  </div>
                  <div className="col-7 d-flex align-items-center">
                    <div className="numbers">
                      <p className="card-category">Posted Images</p>
                      <h4 className="card-title">{photos.length}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card card-stats bg-warning">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <FontAwesomeIcon className="dash-icon" icon={faVideo} />
                    </div>
                  </div>
                  <div className="col-7 d-flex align-items-center">
                    <div className="numbers">
                      <p className="card-category">Posted Videos</p>
                      <h4 className="card-title">{videos.length}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card card-stats bg-primary">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <FontAwesomeIcon className="dash-icon" icon={faUserCog} />
                    </div>
                  </div>
                  <div className="col-7 d-flex align-items-center">
                    <div className="numbers">
                      <p className="card-category">Total Admins</p>
                      <h4 className="card-title">{users.length}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">List of Admins</div>
              </div>
              <div className="card-body">
                <table className="table table-hover user-table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      {/* <th scope="col">First Name</th>
                        <th scope="col">Last Name</th> */}
                      <th scope="col">Email address</th>
                      <th scope="col">Date Created</th>
                      <th scope="col">Time Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.email}</td>
                        <td>{data.created_at.split("T")[0]}</td>
                        <td>{data.created_at.split("T")[1].split(".")[0]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
