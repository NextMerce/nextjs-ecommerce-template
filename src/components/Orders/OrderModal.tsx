import React, { useRef, useEffect } from "react";
import OrderDetails from "./OrderDetails";
import EditOrder from "./EditOrder";

const OrderModal = ({ showDetails, showEdit, toggleModal, order }: any) => {
  if (!showDetails && !showEdit) {
    return null;
  }

  return (
    <>
      <div
        className={`backdrop-filter-sm visible fixed left-0 top-0 z-99999 flex min-h-screen w-full justify-center items-center bg-[#000]/40 px-4 py-8 sm:px-8`}
      >
        <div className="shadow-7 relative w-full max-w-[600px] h-[242px] scale-100 transform rounded-[15px] bg-white transition-all flex flex-col justify-center items-center">
          <button
            onClick={() => toggleModal(false)}
            className="text-body absolute -right-6 -top-6 z-9999 flex h-11.5 w-11.5 items-center justify-center rounded-full border-2 border-stroke bg-white hover:text-dark"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9983 10.586L17.9483 5.63603L19.3623 7.05003L14.4123 12L19.3623 16.95L17.9483 18.364L12.9983 13.414L8.04828 18.364L6.63428 16.95L11.5843 12L6.63428 7.05003L8.04828 5.63603L12.9983 10.586Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          <>
            {showDetails && <OrderDetails orderItem={order} />}

            {showEdit && <EditOrder order={order} toggleModal={toggleModal} />}
          </>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
