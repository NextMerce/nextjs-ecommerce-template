import React from "react";

const Discount = () => {
  return (
    <div className="lg:max-w-[670px] w-full">
      <form>
        {/* <!-- coupon box --> */}
        <div className="bg-white shadow-1 rounded-[10px]">
          <div className="border-b border-gray-3 py-5 px-4 sm:px-5.5">
            <h3 className="">Have any discount code?</h3>
          </div>

          <div className="py-8 px-4 sm:px-8.5">
            <div className="flex flex-wrap gap-4 xl:gap-5.5">
              <div className="max-w-[426px] w-full">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  placeholder="Enter coupon code"
                  className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex font-medium text-white bg-blue py-3 px-8 rounded-md ease-out duration-200 hover:bg-blue-dark"
              >
                Apply Code
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Discount;
