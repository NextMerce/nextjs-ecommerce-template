import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative z-1 overflow-hidden rounded-xl">
          {/* <!-- bg shapes --> */}
          <Image
            src="/images/shapes/newsletter-bg.jpg"
            alt="background illustration"
            className="absolute -z-1 w-full h-full left-0 top-0 rounded-xl"
            width={1170}
            height={200}
          />
          <div className="absolute -z-1 max-w-[523px] max-h-[243px] w-full h-full right-0 top-0 bg-gradient-1"></div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-4 sm:px-7.5 xl:pl-12.5 xl:pr-14 py-11">
            <div className="max-w-[491px] w-full">
              <h2 className="max-w-[399px] text-white font-bold text-lg sm:text-xl xl:text-heading-4 mb-3">
                Don&apos;t Miss Out Latest Trends & Offers
              </h2>
              <p className="text-white">
                Register to receive news about the latest offers & discount
                codes
              </p>
            </div>

            <div className="max-w-[477px] w-full">
              <form>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-1 border border-gray-3 outline-hidden rounded-md placeholder:text-dark-4 py-3 px-5"
                  />
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-7 text-white bg-blue font-medium rounded-md ease-out duration-200 hover:bg-blue-dark"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
