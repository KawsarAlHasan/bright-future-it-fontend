import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bannerImage from "../assets/bg-banner.png";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { name, phone, email, password } = formData;
      const response = await API.post(
        "/user/signup",
        { name, phone, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", response.data.data.token);
      toast(`Signup successful`);
      navigate("/");
      window.location.reload();
    } catch (error) {
      if (error.response) {
        toast.error(`Signup failed: ${error.response.data.error}`);
      } else {
        toast.error("An error occurred during signup. Please try again.");
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="hero "
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center hidden md:block lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Your Name"
                className="input input-sm md:input-md input-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                placeholder="Phone Number"
                className="input input-sm md:input-md input-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="email"
                className="input input-sm md:input-md input-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
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
                className="input input-sm md:input-md input-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                onChange={handleConfirmPasswordChange}
                placeholder="confirm password"
                className="input input-sm md:input-md input-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button
                type="submit"
                className="btn btn-primary btn-sm md:btn-md  text-white bg-gradient-to-r from-[#884AFF] to-[#C54AFF] hover:from-teal-400 hover:to-blue-500"
              >
                Sign Up
              </button>
            </div>
            <div className="md:flex justify-center items-center  md:space-x-2 mt-4">
              <span>Already have an account?</span>{" "}
              <a
                href="/login"
                className="text-[#884AFF] hover:text-[#C54AFF] font-normal md:font-semibold underline"
              >
                Login Here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
