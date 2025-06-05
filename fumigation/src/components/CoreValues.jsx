import React from "react";

const CoreValues = () => {
  return (
    <section className="py-12 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="flex flex-col md:flex-row items-center gap-4 w-full">
            <hr className="flex-grow border-t border-gray-300" />
            <h1 className="text-2xl md:text-4xl font-extrabold uppercase text-center px-4">
                ABOUT US
            </h1>
            <hr className="flex-grow border-t border-gray-300" />
        </span>
        <p className="text-gray-500 text-base md:text-lg">
          Guiding Principles That Drive Our Success and Strengthen Our Commitment to You
        </p>
        <div className="mt-6 border-t border-gray-200 w-20 mx-auto"></div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 space-y-8 text-gray-700">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            We Are Certified
          </h3>
          <p className="text-base leading-relaxed">
            A S O God’s Grace Nigeria Enterprises is a certified and Government accredited pests Control Company, serving individual, commercial in a city of Abeokuta and other parts of city in Ogun State Nigeria  for more than a decade with unsurpassed integrity and value.
            Pests control is what we do and Your satisfaction is our priority.
            We live in Abeokuta Ogun State Nigeria and we can work in any part of this country just like you do.
            Our number one priority is keeping your property from pests looking invade assets, staff and make your customer happy and comfortable.

          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Our Team</h4>
          <p className="text-base leading-relaxed">
            At A S O God’s Grace Nigeria Enterprises, we are a tight-knit family, dedicated to serving our client. We each pledge to uphold the highest of quality standards at all times, and thoroughly meet your needs.
            Our pests control operators are passionate about pest control, each of them is professionally licensed and experienced serving the needs of individual home owner and commercial set up.

          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Ownership</h4>
          <p className="text-base leading-relaxed">
            Taking responsibility for our actions and their outcomes is at the heart of what we do. Ownership means being accountable for both successes and setbacks, focusing on solutions instead of blame, and committing to achieving the best possible results in every situation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
