import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { UserContext } from "../../context/context";

const BioToast = () => {
  const { setIsPaymentCompleted, isPaymentCompleted } = useContext(UserContext);

  return (
    <div className="bottom-0 right-0 absolute animate-toast mb-2">
      <div
        className="bg-green-500 shadow-lg mx-auto w-72 mr-3 md:w-96 max-w-full text-md pointer-events-auto bg-clip-padding rounded-lg block mb-3"
        id="static-example"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-mdb-autohide="false"
      >
        <div className="bg-green-500 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-green-400 rounded-lg">
          <p className="font-bold text-white flex items-center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check-circle"
              className="w-4 h-4 mr-2 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
              ></path>
            </svg>
            Payment Confirmed!
          </p>
          <div className="flex items-center">
            <div
              onClick={() => {
                setIsPaymentCompleted(false);
              }}
              type="button"
              className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
              aria-label="Close"
            >
              <AiFillCloseCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioToast;
