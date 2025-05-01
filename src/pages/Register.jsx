import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-2xl text-center font-semibold text-primary my-5">
          Register your account
        </h2>
        <form className="fieldset">
          <label className="label text-primary text-base">Your Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Enter your name"
          />
          <label className="label text-primary text-base">Photo URL</label>
          <input
            type="text"
            name="photo-url"
            className="input w-full"
            placeholder="Enter your photo URL"
          />
          <label className="label text-primary text-base">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />
          <label className="label text-primary text-base">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
          />
          <div className="flex items-center gap-2 my-3">
            <input type="checkbox" className="checkbox" />
            <p className="text-accent text-sm">
              Accept <span className="font-semibold">Term & Conditions</span>
            </p>
          </div>
          <button className="btn btn-primary mt-4">Register</button>
          <p className="text-primary text-center font-medium pt-3">
            Already Have An Account?{" "}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
