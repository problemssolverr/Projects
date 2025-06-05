import React from 'react'
import { assets } from '../assets/assets';


const About = () => {
  return (
    <div className="px-4 py-12 md:px-16 space-y-24">
      {/* Section 1: Meet the Founder */}
      <section className="text-center">
        <span className="flex flex-col md:flex-row items-center gap-4 w-full">
            <hr className="flex-grow border-t border-gray-300" />
            <h1 className="text-2xl md:text-4xl font-extrabold uppercase text-center px-4">
                Meet the Founder
            </h1>
            <hr className="flex-grow border-t border-gray-300" />
        </span>

        <p className="mt-2 text-gray-600 text-lg">
          A local family protecting Ogun State homes and organizations from bugs year-round.
        </p>
      </section>

      {/* Section 2: Behind the Bug Man */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-extrabold uppercase">A S O God's CEO</h2>
          <p className="mt-4 text-gray-700">
            I am Mr. Akinsanya Oriyomi Wasiu . MD/CEO, A S O GOD'S GRACE NIG.ENT and I am your most important asset in protecting your company, home and family against irritating, destructive and unwanted pests.
          </p>
          <p className="mt-2 text-gray-700">
            I will make sure that your pest control plan meet your unique needs. I will always be available to adjust your plan in case your  needs change.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={assets.fum_ceo} alt="Founder with family" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

      

      {/* Section 3: Our Promise */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img src={assets.fum_team} alt="Pest Control Professional" className="w-full rounded-lg shadow-lg" />
        </div>
        
        <div className="md:w-1/2">
          <h2 className="text-3xl font-extrabold uppercase">Our Promise</h2>
          <p className="mt-4 text-gray-700">
            We guarantee a professional, efficient, and affordable <span className="text-lime-600 font-medium">pest control services</span> to our valued families and businesses. Our team owned business doesn’t just eliminate pests but it aims at providing a peace of mind for families and businesses.
          </p>
          
        </div>
        
      </section>
    </div>
  
  );
};


export default About