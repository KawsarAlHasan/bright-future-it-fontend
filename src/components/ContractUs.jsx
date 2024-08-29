import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function ContractUs() {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  return (
    <div className="my-16">
      <h2
        data-aos="fade-up"
        data-aos-delay="0"
        className="text-center text-[28px] md:text-[40px] font-semibold "
      >
        Contract{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#884AFF] to-[#C54AFF]">
          Us
        </span>
      </h2>

      <div className="mx-4 md:mx-8 lg:mx-36 grid grid-cols-1 md:grid-cols-2 gap-4 mt-[-15px]">
        <div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Message</span>
              </label>
              <textarea
                type="text"
                name="message"
                placeholder="Your message"
                className="textarea textarea-bordered focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
                required
              />
            </div>
            <div className="form-control">
              <button
                type="submit"
                className="btn btn-primary text-white bg-gradient-to-r from-[#884AFF] to-[#C54AFF] hover:from-teal-400 hover:to-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className=" w-full mt-16">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29218.671962646767!2d90.39770767790634!3d23.735466285527497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85a65c3cbbb%3A0x445b8d15d2b435a6!2sMotijheel!5e0!3m2!1sen!2sbd!4v1724937788136!5m2!1sen!2sbd"
              width="100%"
              height="320px"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 md:16 lg:mx-36">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="lg:items-center lg:justify-center flex"
        >
          <span className="text-[45px] text-[#884AFF]">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <div className="mx-3 mt-1">
            <h2 className="text-[18px] font-semibold mt-[-10px]">Location</h2>

            <h2 className="text-[13px] font-normal text-gray-500">
              Green Model Town, Mugda, Dhaka
            </h2>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="lg:items-center lg:justify-center flex"
        >
          <span className="text-[45px] text-[#884AFF]">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <div className="mx-3 mt-1">
            <h2 className="text-[18px] font-semibold mt-[-10px]">Email</h2>

            <h2 className="text-[13px] font-normal text-gray-500">
              brightfutureit@gmail.com
            </h2>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="lg:items-center lg:justify-center flex"
        >
          <span className="text-[45px] text-[#884AFF]">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <div className="mx-3 mt-1">
            <h2 className="text-[18px] font-semibold mt-[-10px]">Phone</h2>

            <h2 className="text-[13px] font-normal text-gray-500">
              01785898351
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractUs;
