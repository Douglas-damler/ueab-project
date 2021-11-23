import React, { useState, useEffect } from "react";
import { Breadcrumb, Button, Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddAdmins.css";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const AddAdmins = () => {
  const [ users, setUsers ] = useState([]);
  const [ update, setUpdate ] = useState(false);
  const [ remove, setRemove ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirm, setConfirm ] = useState('');

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
          setUsers(response.data);
        }).catch(err => console.log(err.message))
    }).catch(err => console.log(err.message))
  },[update, token, remove]);


  const handleRemoveAdmin = (id) => {
      if (id === 1) {
        toast.error("You cannot remove the initial admin")
        return
      }
      if (id.toString() === sessionStorage.getItem("id"))
      {
        toast.error("You cannot remove Yourself, Please ask another admin to remove you.")
        return
      }
      if (!token) {
        return
      }
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
      axios.delete(`http://127.0.0.1:8000/api/users/${id}`, {headers: {Authorization: `Bearer ${token}`}})
      .then((response) =>{
        setRemove(true)
        toast.success("User Removed")
      } 
      ).catch(err => console.log(err.message))
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
      axios.post('http://127.0.0.1:8000/api/users',data,{headers: {Authorization: `Bearer ${token}`}})
      .then((response) => {
        setUpdate(true)
        toast.success("User Registered")
        setEmail("")
        setConfirm("")
        setPassword("")
      }).catch((error) => {
        toast.error("Probably a duplicated email or unmatching passwords")
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
                  <th className="border-bottom">Date Created</th>
                  <th className="border-bottom border-right">Time Created</th>
                  <th className="border-bottom">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.email}</td>
                    <td>{user.created_at.split("T")[0]}</td>
                    <td>{user.created_at.split("T")[1].split(".")[0]}</td>
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
          <form onSubmit={handleSubmit} className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add New Admin
                </h5>
              </div>
              <div className="modal-body" id="modal">
                <div className="md-form mt-5 mb-0">
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
                </div>
              </div>
              <div className="modal-footer mt-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
