import React, { } from "react";
import { Breadcrumb, Button, Card, Table  } from "react-bootstrap";
import { Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import './AddAdmins.css';
// import axios from 'axios';
import { useSelector } from "react-redux";


export const AddAdmins = () => {
  const isAunthenticated = useSelector((state) => state.signin.isAunthenticated);
  // const [ email, setEmail ] = useState('');
  // const [ password, setPassword ] = useState('');
  // const [ confirmPassword, setConfirmPassword ] = useState('');

  if (!localStorage.getItem('auth_token')) {
    return <Redirect to="/sign-in" />
  }

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="add-admins">
        <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="mb-4 mb-lg-0">
                <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                    <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                    <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item >Admins List</Breadcrumb.Item>
                </Breadcrumb>
                <h4>Admins List</h4>

            </div>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
        <Button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New Admin
        </Button>
        </div>

        <Card border="light" className="table-wrapper table-responsive shadow-sm mt-3">
    <Card.Body>
        <Table className="user-table align-items-center">
            <thead>
                <tr>
                    <th className="border-bottom">First Name</th>
                    <th className="border-bottom">Second Name</th>
                    <th className="border-bottom">Email Address</th>
                    <th className="border-bottom">Admin Created At</th>
                    <th className="border-bottom">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Douglas</td>
                    <td>Kathurima</td>
                    <td>douglasdamler@gmail.com</td>
                    <td>4-12-2020</td>
                    <td className="remove">Remove</td>
                </tr>
            </tbody>
        </Table>
    </Card.Body>
</Card>




<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add New Admin</h5>
      </div>
      <div className="modal-body">
      <form className="md-form mt-5 mb-0">
        {/* <div className="form-group ">
                <label>First Name</label>
                <input type="text" className="form-control form-control" id="largeInput" placeholder="Firstname"></input>
            </div>
          <div className="form-group">
            <label>Second Name</label>
            <input type="text" className="form-control form-control" id="largeInput" placeholder="Second name"></input>
          </div> */}

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              className="form-control 
              form-control" 
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
              required
              minLength="8"
            />
          </div>
      </form>

      </div>
      <div className="modal-footer mt-0">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>
    
</div>
</main>

        

    )
}