import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const Login = () => {
  const [error, setError] = useState();
  const location = useLocation();
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // sign in user
    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        <Loading />;
        navigate(location?.state || "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-2xl text-center font-semibold text-primary my-5">
          Login your Account
        </h2>
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label text-primary">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />
          <label className="label text-primary">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          {error && (
            <p className="text-red-400 text-sm">
              Wrong! Your email or password
            </p>
          )}
          <button type="submit" className="btn btn-primary mt-4">
            Login
          </button>
          <p className="text-primary text-center font-semibold pt-3">
            Don't Have An Account?{" "}
            <Link className="text-secondary" to="/auth/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
