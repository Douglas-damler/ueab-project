import React, { useState } from "react";
import "./SignIn.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { rerender } from "../../features/signinSlice";
import { useDispatch } from "react-redux";

export const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [ load, setLoad ] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true)
    const data = {
      email: email,
      password: password,
    };
    if (sessionStorage.getItem("auth_token")) {
      toast.error("You are already signed in");
      return;
    }
    axios
      .get("http://127.0.0.1:8000/sanctum/csrf-cookie")
      .then((response) => {
        axios
          .post("http://127.0.0.1:8000/api/login", data)
          .then((res) => {
            if (res.status === 201) {
              sessionStorage.setItem("auth_token", res.data.token);
              sessionStorage.setItem("auth_name", res.data.user.email);
              sessionStorage.setItem("id", res.data.user.id.toString());
              dispatch(rerender(true));
              setLoad(false);
              history.push("/admin/dashboard");
            } else {
              setError("Invalid credentials");
              setLoad(false)
            }
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3"></i>
                        <span className="h1 fw-bold mb-0">
                          Login as an Administrator
                        </span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3">
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          required
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                          className="form-control 
                            form-control-lg"
                        />
                        <label className="form-label" htmlFor="email">
                          Email address
                        </label>{" "}
                        <br />
                        <small style={{ color: "red" }}>{error}</small>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                          className="form-control 
                            form-control-lg"
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button class="btn btn-primary" type="submit">
                          <span
                            class={load ? (`spinner-border spinner-border-sm`):(``)}
                            role="status"
                            aria-hidden="true"
                          ></span> { load ? (`Loading...`): (`Submit`)}
                        </button>
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
};
