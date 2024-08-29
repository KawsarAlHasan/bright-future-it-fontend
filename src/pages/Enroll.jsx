import React, { useState, useEffect } from "react";
import { useUserProfile, useSingleCourses } from "../api/allApi";
import API from "../api/axios";
import EnrollForm from "../components/EnrollForm";
import LoginSignupModal from "../components/LoginSignupModal";
import Loader from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSchool } from "@fortawesome/free-solid-svg-icons";

function Enroll() {
  const { user } = useUserProfile();
  const { courses } = useSingleCourses();

  const [enrollStatus, setEnrollStatus] = useState(null);
  const [ensLoading, setEnsLoading] = useState(false);

  const userID = user?.id;
  const courseID = courses?.data?.id;

  // check course
  useEffect(() => {
    const fetchEnrollStatus = async () => {
      setEnsLoading(true);
      try {
        const response = await API.get(
          `/enroll/check?coursesid=${courseID}&userid=${userID}`
        );
        if (response.status === 201) {
          setEnrollStatus(response.data);
        }
      } catch (error) {
        console.error("Error fetching enrollment status:", error);
      }
      setEnsLoading(false);
    };
    fetchEnrollStatus();
  }, [courseID, userID]);

  console.log(enrollStatus, courseID, userID);
  return (
    <div>
      {ensLoading ? (
        <Loader />
      ) : !enrollStatus ? (
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
              Various versions have evolved over the years, sometimes by
              accident,
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
      ) : (
        <div className="my-12">
          <h2
            data-aos="fade-up"
            data-aos-delay="0"
            className="text-center text-[28px] md:text-[40px] font-semibold "
          >
            You have allready{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#884AFF] to-[#C54AFF]">
              enrolled
            </span>
          </h2>
          <div className="justify-center items-center flex gap-4 my-8">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="lg:items-center lg:justify-center flex"
            >
              <span className="text-[45px]">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <div className="mx-3 mt-1">
                <h2 className="text-[18px] font-semibold text-gray-300">
                  Orientation Starts
                </h2>
                <h2 className="text-[22px] font-semibold mt-[-10px]">
                  28 December, 2024
                </h2>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="lg:items-center lg:justify-center flex"
            >
              <span className="text-[45px]">
                <FontAwesomeIcon icon={faSchool} />
              </span>
              <div className="mx-3 mt-1">
                <h2 className="text-[18px] font-semibold text-gray-300">
                  Class Starts
                </h2>
                <h2 className="text-[22px] font-semibold mt-[-10px]">
                  31 December, 2024
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Enroll;
