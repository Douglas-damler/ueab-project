import React, { useState} from 'react';
import './SignIn.css';
// import { aunthenticate } from '../../features/signinSlice';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';
import apiClient from '../../services/services';

export const SignIn = () => {
  // const hasAunthenticated = useSelector(state => state.signin.isAunthenticated);
  // const dispatch = useDispatch();
  const history = useHistory();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ userEmail, setUserEmail ] = useState('')

  // const handleSubmit = () => {
  //   dispatch(aunthenticate({}));
  //   console.log(hasAunthenticated);
  //   if (hasAunthenticated) {
  //     history.push("/admin/add-new-admins");
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data =  {
      email: email,
      password: password
    }
  

//     apiClient.get('/sanctum/csrf-cookie')
//     .then(response => {
//       apiClient.post('http://127.0.0.1:8000/api/login', data)
//       .then(res => {
//           console.log(res);
//           if (res.status === 201) {
//             localStorage.setItem('auth_token', res.data.token);
//             localStorage.setItem('auth_name', res.data.email);
//             history.push('/admin/dashboard');
//           }

//           else if (res.data.status === 401) {

//           }

//           else {

//           }
//       });
//   });
// }

    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
    .then(response => {
      axios.post('http://127.0.0.1:8000/api/login', data)
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.email);
          history.push('/admin/dashboard');
        }

        else if (res.data.status === 401) {

        }

        else {

        }
      })
    })
  }

    return (
        <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" ></i>
                          <span className="h1 fw-bold mb-0">Login as an Administrator</span>
                        </div>
      
                        <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5>
      
                        <div className="form-outline mb-4">
                          <input 
                            type="email" 
                            name="email"
                            value={email}
                            required
                            onChange={(event) => {
                              setEmail(event.target.value)
                            }}
                            className="form-control 
                            form-control-lg" />
                          <label className="form-label" htmlFor="email">Email address</label>
                        </div>
      
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(event) => {setPassword(event.target.value)}} 
                            className="form-control 
                            form-control-lg" />
                          <label className="form-label" htmlFor="password">Password</label>
                        </div>
      
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleSubmit}>Login</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}