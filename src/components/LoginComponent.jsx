import React, { useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";

function LoginComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/user/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.setItem("token", response.data.data.token);
      toast(`Login successful`);
      window.location.reload();
    } catch (error) {
      if (error.response) {
        toast.error(`Login failed: ${error.response.data.error}`);
      } else {
        toast.error("An error occurred during login. Please try again.");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body">
        <h2 className="text-center text-[28px] font-semibold">
          Please{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#884AFF] to-[#C54AFF]">
            Login
          </span>
        </h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="email"
            className="input input-sm input-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
            className="input input-sm input-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <button
            type="submit"
            className="btn btn-primary btn-sm text-white bg-gradient-to-r from-[#884AFF] to-[#C54AFF] hover:from-teal-400 hover:to-blue-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginComponent;
