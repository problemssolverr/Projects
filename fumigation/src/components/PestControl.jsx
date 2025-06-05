import React from "react";
import { FaStar, FaHeart, FaCheckCircle } from "react-icons/fa";

const PestControlSection = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <span className="flex flex-col md:flex-row items-center mb-10 gap-4 w-full">
            <hr className="flex-grow border-t border-gray-300" />
            <h1 className="text-2xl md:text-4xl font-extrabold uppercase text-center px-4">
                100% GUARANTEED PEST CONTROL
            </h1>
            <hr className="flex-grow border-t border-gray-300" />
        </span>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Veteran and Family Owned */}
        <div className="flex flex-col items-center">
          <FaStar className="text-green-500 text-5xl mb-4" />
          <h3 className="text-lg font-semibold tracking-wider uppercase text-gray-800 mb-2">
            Family Owned
          </h3>
          <p className="text-gray-600 text-sm max-w-xs">
            A S O God's grace operated right here in Nigeria. We are fully trained and licensed to ensure you are in the best hands, making us one of the best pest control companies in Nigeria.
          </p>
        </div>

        {/* Pet & Kid Friendly */}
        <div className="flex flex-col items-center">
          <FaHeart className="text-green-500 text-5xl mb-4" />
          <h3 className="text-lg font-semibold tracking-wider uppercase text-gray-800 mb-2">
            Pet & Kid Friendly
          </h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Every service we perform is done with care, using family friendly products. Each of our technicians is highly trained and licensed to ensure your family’s safety. We treat all of our customers like family.
          </p>
        </div>

        {/* Convenient and Effective */}
        <div className="flex flex-col items-center">
          <FaCheckCircle className="text-green-500 text-5xl mb-4" />
          <h3 className="text-lg font-semibold tracking-wider uppercase text-gray-800 mb-2">
            Convenient and Effective
          </h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Our high quality pest control services in Nigeria are convenient, effective and affordable. We guarantee all of our work. If you’re not satisfied, we come back for free, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PestControlSection;
