import React from "react";

function HomeAboutInfo() {
  return (
    <div className="bg-gradient-to-b from-[#884AFF] to-[#C54AFF] text-white py-8 md:py-12 lg:py-16">
      <div className="mx-3 lg:mx-36 bg-black md:p-8 rounded-lg grid grid-cols-1 lg:grid-cols-2 md:gap-4">
        <div className="md:my-16 mx-4">
          <h2 className="text-[24px] md:text-[28px] font-semibold">
            Get More Info About us
          </h2>
          <h2 className="text-[16px] font-normal my-4 md:my-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </h2>
          <div className="flex gap-4 mb-5 md:mb-0">
            <button className="btn btn-sm text-white bg-gradient-to-r from-[#884AFF] to-[#C54AFF] hover:from-teal-400 hover:to-blue-500 px-7 md:px-12 py-2 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Book Now
            </button>
            <button className="btn btn-sm btn-outline btn-primary px-7 md:px-12 py-2 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white text-primary transition duration-300 ease-in-out transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
        <div className="order-first lg:order-last">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ndAQfTzlVjc"
            title="YouTube video player"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutInfo;
