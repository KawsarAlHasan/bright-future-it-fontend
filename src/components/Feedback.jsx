import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sudent1 from "../assets/Rectangle 25.png";
import sudent2 from "../assets/Rectangle 25 (1).png";
import sudent3 from "../assets/Rectangle 25 (2).png";
import vector from "../assets/Vector.png";
import leftArray from "../assets/left.png";
import rightArray from "../assets/right.png";
import "../pages/Home.css";

const feedbacks = [
  {
    imageUrl: sudent1,
    name: "Guy Hawkins",
    position: "Fontend Developer",
    feedbackText:
      " Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    imageUrl: sudent2,
    name: "Guy Hawkins",
    position: "Fontend Developer",
    feedbackText:
      " Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    imageUrl: sudent3,
    name: "Guy Hawkins",
    position: "Fontend Developer",
    feedbackText:
      " Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    imageUrl: sudent1,
    name: "Guy Hawkins",
    position: "Fontend Developer",
    feedbackText:
      " Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    imageUrl: sudent2,
    name: "Guy Hawkins",
    position: "Fontend Developer",
    feedbackText:
      " Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    imageUrl: sudent3,
    name: "Guy Hawkins",
    position: "Fontend Developer",
    feedbackText:
      " Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    imageUrl: sudent1,
    name: "Guy Hawkins",
    position: "Fontend Developer",
    feedbackText:
      " Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    imageUrl: sudent2,
    name: "Guy Hawkins",
    position: "Fontend Developer",
    feedbackText:
      " Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
  {
    imageUrl: sudent3,
    name: "Guy Hawkins",
    position: "Fontend Developer",
    feedbackText:
      " Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.",
  },
];

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2  bg-base-300 rounded-full"
  >
    <img className="mx-2 my-1 " src={leftArray} alt="" />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-base-300 rounded-full"
  >
    <img className="mx-2 my-1 " src={rightArray} alt="" />
  </button>
);

function Feedback() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="my-20">
      <div className=" mb-5">
        <h2
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-center text-[24px] md:text-[40px] font-semibold "
        >
          Student{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#884AFF] to-[#C54AFF]">
            Feedback
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center mx-4 text-[16px] md:text-[20px] font-normal"
        >
          Various versions have evolved over the years, sometimes by accident,
        </p>
      </div>
      <div data-aos="fade-up">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={300}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
          className="my-4 lg:mx-32"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="card bg-base-100 rounded-lg shadow-xl mb-10 mx-4 p-3 md:p-6 "
            >
              <div className="flex justify-between">
                <div className="flex">
                  <img src={feedback.imageUrl} alt="sudent1" />
                  <div className="mx-3">
                    <h2 className="text-[20px] md:text-[24px] font-semibold">
                      {feedback.name}
                    </h2>
                    <h2 className="text-[16px] md:text-[16px] font-normal ">
                      {feedback.position}
                    </h2>
                  </div>
                </div>
                <img
                  className="w-[32] h-[24px] md:w-[40px] md:h-[29px]"
                  src={vector}
                  alt="vector"
                />
              </div>
              <p className="mt-2">{feedback.feedbackText}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Feedback;
