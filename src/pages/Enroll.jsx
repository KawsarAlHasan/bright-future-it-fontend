import React from "react";
import { useUserProfile } from "../api/allApi";
import EnrollForm from "../components/EnrollForm";
import LoginSignupModal from "../components/LoginSignupModal";

function Enroll() {
  const { user, loading, error } = useUserProfile();
  return (
    <div className="mb-12">
      <div className="mt-10">
        <h2
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-center text-[28px] md:text-[40px] font-semibold "
        >
          Enroll{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#884AFF] to-[#C54AFF]">
            Process
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center text-[16px] md:text-[20px] font-normal mx-4"
        >
          Various versions have evolved over the years, sometimes by accident,
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="lg:mx-36 mt-4 rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="bg-gradient-to-b from-[#884AFF] to-[#C54AFF] p-2">
          <marquee
            className="text-white font-semibold shadow-inner"
            behavior="scroll"
            direction="left"
          >
            25th August Friday, our all outlets are open except Chattogram
            Agrabad, Khulna, Rangpur & Rajshahi outlets. Additionally, our
            online activities are open and operational.
          </marquee>
        </div>
      </div>

      <div className="mx-5 md:mx-16 lg:mx-36 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <iframe
              data-aos="fade-up"
              data-aos-delay="100"
              src="https://www.youtube.com/embed/ndAQfTzlVjc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg shadow-lg w-full h-[200px] md:h-[330px]"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="">
            <EnrollForm />

            {!user && <LoginSignupModal />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
