import React from "react";
import bannerImage from "../assets/bg-banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faProjectDiagram,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

function CoursInfo() {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-2 md:mx-16 mt-[-98px] md:mt-[-150px] lg:mt-[-240px] lg:mx-72">
        <iframe
          data-aos="fade-up"
          data-aos-delay="1100"
          width="100%"
          src="https://www.youtube.com/embed/ndAQfTzlVjc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg shadow-lg h-[196px] md:h-[300px] lg:h-[480px]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-5 md:mx-16 lg:mx-36 my-12 lg:my-16">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="card bg-base-100 w-full shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faVideo} />
            </h2>
            <h2 className="card-title">Live Class</h2>
            <p>
              The Programming Hero web development course includes 950 videos,
              providing extensive coverage of MERN stack technologies. These
              videos are designed to cater to learners at all levels, from
              beginners to advanced developers.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="card bg-base-100 w-full shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faProjectDiagram} />
            </h2>
            <h2 className="card-title">20+ Project</h2>
            <p>
              The course includes 45 projects that give students many chances to
              practice what they learn. These projects start with simple tasks
              and gradually become more complex, helping students build their
              skills step by step.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="card bg-base-100 w-full shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faCode} />
            </h2>
            <h2 className="card-title">12 Assignment</h2>
            <p>
              The course has 12 assignments that help check how well students
              understand and use what they've learned. These assignments are
              spread out throughout the course to test both their knowledge and
              their ability to apply it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursInfo;
