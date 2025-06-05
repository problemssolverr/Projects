import React from 'react'

const Ants = () => {
  return (
    <section className="bg-cover bg-center text-white" style={{ backgroundImage: "url('assets/ants.jpg')" }}>
      <div className="bg-black bg-opacity-60 py-16 px-6 md:px-12 lg:px-24">
        <div className="text-center">
          <h2 className="text-lime-400 text-lg font-semibold uppercase tracking-wide">Ant Control</h2>
          <h1 className="text-4xl sm:text-md font-extrabold mt-2">
            Ant Control Services | Expert Ant Exterminators
            <br className="hidden sm:block" />
            in Ogun State, Nigeria
          </h1>
        </div>
        {/* <p className="mt-6 max-w-5xl mx-auto text-lg sm:text-xl text-gray-100 leading-relaxed">
          Unfortunately, Missouri’s warm, humid summers create the perfect environment for ants to thrive. 
          While this is great for the ecosystem of our state, it’s tragic for home and business owners. 
          Like fleas, mosquitos, spiders, or any other pest—if these are not dealt with by an ant exterminator, 
          then the problem will only get worse, resulting in an unhealthy environment and a serious pest problem.
          Ants are incredibly common in Missouri due to the state's climate and geography, which provide ideal 
          conditions for these pests to flourish. Once they establish a colony inside or near your property, they 
          can be difficult to eliminate without professional help. This is why it’s important not only to have proper 
          ant pest control but also to work with a local company in Springfield, Missouri who can properly address 
          the issue and are familiar with the area.
        </p> */}
      </div>
    </section>
  );
}

export default Ants