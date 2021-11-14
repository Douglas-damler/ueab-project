import React, { useState, useEffect } from "react";
import { Breadcrumb, Button, Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddAdmins.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const AddAdmins = () => {
  const [ users, setUsers ] = useState([]);
  const [ update, setUpdate ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirm, setConfirm ] = useState('');
  const [ error, setError ] = useState(false);

  const token = sessionStorage.getItem('auth_token');

  useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/sanctum/csrf-cookie")
    .then((response) => {
      axios
        .get("http://127.0.0.1:8000/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
          setUsers(response.data);
        });
    })
  },[token, update]);


  const handleRemoveAdmin = (id) => {
      if (id === 3) {
        toast.error("You cannot remove the initail admin")
        return
      }
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
      axios.delete(`http://127.0.0.1:8000/api/users/${id}`, {headers: {Authorization: `Bearer ${token}`}})
      .then((response) => 
        setUpdate(false),
      ).then(() => {
        toast.success("User Removed")
      });
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
      password_confirmation: confirm
    }

    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
      axios.post('http://127.0.0.1:8000/api/register', data)
      .then((response) => 
        setUpdate(true)
      ).then(() => {
        toast.success("User Registered")
        setEmail("")
        setConfirm("")
        setPassword("")
      });
    });
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="add-admins">
        <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="mb-4 mb-lg-0">
            <Breadcrumb
              className="d-none d-md-inline-block"
              listProps={{
                className: "breadcrumb-dark breadcrumb-transparent",
              }}
            >
              <Breadcrumb.Item>
                <FontAwesomeIcon icon={faHome} />
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Admins List</Breadcrumb.Item>
            </Breadcrumb>
            <h4>Admins List</h4>
          </div>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New Admin
          </Button>   
        </div>

        <Card
          border="light"
          className="table-wrapper table-responsive shadow-sm mt-3"
        >
          <Card.Body>
            <Table className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom">#</th>
                  <th className="border-bottom">Email Address</th>
                  <th className="border-bottom">Admin Created At</th>
                  <th className="border-bottom">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.email}</td>
                    <td>{user.created_at}</td>
                    <td 
                      className="remove"
                      onClick={() => {
                        handleRemoveAdmin(user.id)
                      }}
                    >Remove</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add New Admin
                </h5>
              </div>
              <div className="modal-body" id="modal">
                <form className="md-form mt-5 mb-0">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange = {(e) => {
                        setEmail(e.target.value)
                      }}
                      className="form-control form-control"
                      id="largeInput"
                      required
                      placeholder="Email address"
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control form-control"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Password"
                      required
                      minLength="8"
                    />
                  </div>

                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control form-control"
                      placeholder="Password"
                      value={confirm}
                      onChange = {(e) => {
                        setConfirm(e.target.value)
                      }}
                      required
                      minLength="8"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer mt-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
