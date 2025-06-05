import React from 'react'

const AntInfoSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full">
      {/* Left: Image Section */}
      <div className="lg:w-1/2 w-full h-80 lg:h-auto bg-cover bg-center" style={{ backgroundImage: "url('assets/ants.jpg')" }}>
        {/* Optional dark overlay */}
        <div className="w-full h-full bg-black bg-opacity-30"></div>
      </div>

      {/* Right: Text Content */}
      <div className="lg:w-1/2 w-full bg-lime-400 text-white px-6 py-10 md:px-12 lg:px-16 flex flex-col justify-center">
        <h2 className="text-3xl font-extrabold mb-2 uppercase">Ants</h2>
        <h3 className="text-xl font-semibold underline mb-4">Formicidae</h3>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Ant problems are a significant issue for homes and businesses in Ogun State, Nigeria. 
          Ants are easily recognizable by their segmented bodies and antennae, and they can quickly 
          establish large colonies. They are especially prevalent in the spring and summer months as 
          they search for food sources and suitable nesting sites, making your property an attractive 
          target for their activities. Proper identification and timely intervention are essential to 
          manage and prevent ant infestations effectively, ensuring that your home or business remains 
          comfortable and pest-free.
        </p>
        <a href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20pest%20control%20service."
            target="_blank"
            rel="noopener noreferrer"
        >
        <button className="w-fit border border-white px-6 py-3 text-white font-medium hover:bg-white hover:text-lime-500 transition">
          GET RID OF ANTS TODAY →
        </button>
        </a>
      </div>
    </section>
  );
}

export default AntInfoSection