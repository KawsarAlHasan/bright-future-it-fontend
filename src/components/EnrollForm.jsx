import React, { useState, useEffect } from "react";
import bkash from "../assets/bkash.png";
import nagad from "../assets/nagad.png";
import rocket from "../assets/rocket.png";
import { useUserProfile, useSingleCourses } from "../api/allApi";
import API from "../api/axios";
import { toast } from "react-toastify";

const EnrollForm = () => {
  const { user } = useUserProfile();
  const { courses } = useSingleCourses();
  const course = courses?.data;
  const coursePrice = courses?.data?.price;
  const courseFullpayDiscount = courses?.data?.full_payment_discount;

  const userID = user?.id;
  const courseID = courses?.data?.id;

  const [formData, setFormData] = useState({
    user_id: null,
    payment_method: "Bkash",
    sender_number: "",
    txnid: "",
    amount: "",
    promo_code: "",
    payment_type: "full",
    courses_id: null,
  });

  const [paymentInfo, setPaymentInfo] = useState("");
  const [promoValid, setPromoValid] = useState(true);
  const [clculateAmount, setCalculateAmount] = useState(coursePrice);

  useEffect(() => {
    const updatePaymentInfo = () => {
      switch (formData.payment_method) {
        case "Bkash":
          setPaymentInfo({
            logo: bkash,
            text: "Bkash Personal: 01712345678",
          });
          break;
        case "Nagad":
          setPaymentInfo({
            logo: nagad,
            text: "Nagad Personal: 017123456",
          });
          break;
        case "Rocket":
          setPaymentInfo({
            logo: rocket,
            text: "Rocket Personal: 017123456",
          });
          break;
        default:
          setPaymentInfo("");
      }
    };

    const calculateFinalAmount = () => {
      let calculatedAmount = coursePrice;

      // Apply full payment discount if applicable
      if (formData.payment_type === "full") {
        calculatedAmount -= courseFullpayDiscount;
      }

      // Validate and apply promo code discount if applicable
      if (formData.promo_code && formData.promo_code === course.promo_code) {
        calculatedAmount -= course.promo_code_discount;
        setPromoValid(true);
      } else if (
        formData.promo_code &&
        formData.promo_code !== course.promo_code
      ) {
        setPromoValid(false);
      } else {
        setPromoValid(true);
      }

      setCalculateAmount(calculatedAmount);

      setFormData((prevFormData) => ({
        ...prevFormData,
        amount: calculatedAmount,
      }));
    };

    updatePaymentInfo();
    calculateFinalAmount();
  }, [
    formData.payment_method,
    formData.payment_type,
    formData.promo_code,
    course,
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const installmentAmount = (clculateAmount / 100) * 50;

  const calAmaout =
    formData.payment_type === "full" ? clculateAmount : installmentAmount;

  useEffect(() => {
    if (user && courses) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        amount: calAmaout,
        user_id: userID,
        courses_id: courseID,
      }));
    }
  }, [user, course]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/enroll/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.statusText) {
        toast(`Enroll successful`);
      }
    } catch (error) {
      if (error.response) {
        toast.error(`Enroll failed: ${error.response.data.error}`);
      } else {
        toast.error("An error occurred during Enroll. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Enroll{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#884AFF] to-[#C54AFF]">
            Now
          </span>
        </h2>

        <div className="mb-3">
          <label
            htmlFor="payment_method"
            className="block font-semibold text-gray-700 mb-2"
          >
            Payment Method
          </label>
          <select
            name="payment_method"
            value={formData.payment_method}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
            <option value="Rocket">Rocket</option>
          </select>
        </div>

        {paymentInfo && (
          <div className="mb-8 flex items-center">
            <img
              src={paymentInfo.logo}
              alt={formData.payment_method}
              className="w-8 h-8 mr-3 rounded-md "
            />
            <p className="text-gray-700 font-semibold">{paymentInfo.text}</p>
          </div>
        )}

        <div className="flex gap-1 mb-8">
          <div className="">
            <label
              htmlFor="payment_type"
              className=" font-semibold text-gray-700"
            >
              Payment Type
            </label>
            <select
              name="payment_type"
              value={formData.payment_type}
              onChange={handleChange}
              className="mt-2 select select-bordered w-full"
              required
            >
              <option value="full">Full</option>
              <option value="installment">Installment</option>
            </select>
          </div>

          <div className="ml-5">
            <label
              htmlFor="promo_code"
              className="font-semibold text-gray-700 mb-2"
            >
              Promo Code <span className="text-sm">(Operational)</span>
            </label>
            <input
              type="text"
              placeholder="Promo Code"
              name="promo_code"
              value={formData.promo_code}
              onChange={handleChange}
              className=" mt-2 input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
            />
            {!promoValid && (
              <p className="text-red-500 text-xs mt-1">Invalid Promo Code</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h2 className=" font-normal">
            Total Amount:{" "}
            <span className="text-[#C54AFF]">{clculateAmount}</span>
          </h2>
        </div>
        <div className="mb-8">
          <h2 className=" font-normal">
            Pay Now:{" "}
            <span className="text-[#884AFF]">
              {" "}
              {formData.payment_type === "full"
                ? `${clculateAmount} (Full Payment)`
                : `${installmentAmount} (50% Installment Payment)`}{" "}
            </span>
          </h2>
        </div>

        {user && (
          <div>
            <div className="mb-8">
              <label
                htmlFor="sender_number"
                className="font-semibold block text-gray-700 mb-2"
              >
                Sender Number
              </label>
              <input
                type="text"
                name="sender_number"
                placeholder="Sender Number"
                value={formData.sender_number}
                onChange={handleChange}
                className="font-semibold input input-sm input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
                required
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="txnid"
                className="font-semibold block text-gray-700 mb-2"
              >
                Transaction ID
              </label>
              <input
                type="text"
                name="txnid"
                placeholder="txnid.."
                value={formData.txnid}
                onChange={handleChange}
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#884AFF] focus:border-transparent transition-transform transform duration-300 ease-in-out hover:scale-105"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full   text-white bg-gradient-to-r from-[#884AFF] to-[#C54AFF] hover:from-teal-400 hover:to-blue-500"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EnrollForm;
