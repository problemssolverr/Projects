import React from 'react'

const CockRoachInfoSection = () => {
  return (
    <section className="bg-cover bg-center text-white" style={{ backgroundImage: "url('assets/cockroach.jpg')" }}>
      <div className="bg-black bg-opacity-60 py-16 px-6 md:px-12 lg:px-24">
        <div className="text-center">
          <h2 className="text-lime-400 text-lg font-semibold uppercase tracking-wide">COCKROACH PEST CONTROL</h2>
          <h1 className="text-4xl sm:text-md font-extrabold mt-2">
            Cockroach Control Services | Expert Cockroach Exterminators
            <br className="hidden sm:block" />
            in Ogun State, Nigeria
          </h1>
        </div>
        <p className="mt-6 max-w-5xl mx-auto text-lg sm:text-xl text-gray-100 leading-relaxed">
          Cockroach infestations are a significant concern in Ogun State,  Nigeria, affecting both residential and commercial properties. These pests, like termites and rodents, are not only a nuisance but also pose serious health risks by carrying allergens and bacteria that can lead to respiratory issues and infections. Given the challenges it presents, a professional pest control expert in Nigeria becomes crucial for the effective management and extermination of a cockroach.
        </p> 
      </div>
    </section>
  );
}

export default CockRoachInfoSection