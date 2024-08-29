import React from "react";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";

function LoginSignupModal() {
  return (
    <div className="max-w-md mx-auto mt-[-30px]">
      <button
        className="btn btn-primary w-full "
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Continue
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* tap start  */}
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-semibold"
              aria-label="Login"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <LoginComponent />
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-semibold"
              aria-label="Signup"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <SignUpComponent />
            </div>
          </div>
          {/* tap end  */}
        </div>
      </dialog>
    </div>
  );
}

export default LoginSignupModal;
