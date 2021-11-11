import React, { useEffect } from "react";
import "./Dashboard.css";
import { Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "react-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export const Dashboard = (props) => {
  if (!localStorage.getItem('auth_token')) {
    return <Redirect to="/sign-in" />
  }
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="dashboard">

      <div className="mb-4 mb-lg-0">
            <Breadcrumb className="d-none d-md-inline-block mt-4" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                <Breadcrumb.Item >Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            </div>


        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Admin Dashboard</h1>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="card card-stats bg-warning">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <i className="la la-users"></i>
                    </div>
                  </div>
                  <div className="col-7 d-flex align-items-center">
                    <div className="numbers">
                      <p className="card-category">Posted Videos</p>
                      <h4 className="card-title">0.0</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-stats bg-success">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5">
                    <div className="icon-big text-center">
                      <i className="la la-bar-chart"></i>
                    </div>
                  </div>
                  <div className="col-7 d-flex align-items-center">
                    <div className="numbers">
                      <p className="card-category">Posted Photos</p>
                      <h4 className="card-title">0.0</h4>
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
                      <i className="la la-check-circle"></i>
                    </div>
                  </div>
                  <div className="col-7 d-flex align-items-center">
                    <div className="numbers">
                      <p className="card-category">Total Admins</p>
                      <h4 className="card-title">0.0</h4>
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
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
