import React from 'react'

const Cockroach = () => {
    return (
        <section className="flex flex-col lg:flex-row w-full">

            {/* Right: Text Content */}
            <div className="lg:w-1/2 w-full bg-lime-400 text-white px-6 py-10 md:px-12 lg:px-16 flex flex-col justify-center">
                <h2 className="text-3xl font-extrabold mb-2 uppercase">COCKROACHES</h2>
                <h3 className="text-xl font-semibold underline mb-4">BLATTODEA
</h3>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                    Cockroach control is a critical concern for residents and businesses in Ogun State, Nigeria. Cockroaches are easily identified by their flat, oval bodies, long antennae, and rapid movements. These pests are not only a nuisance but also pose health risks as they can carry various pathogens. They thrive in warm environments and are often found in kitchens, bathrooms, and anywhere food and moisture are present. Effective cockroach pest control requires proper identification, a thorough understanding of their habits, and timely intervention. By addressing these infestations promptly, you can maintain a healthy and pest-free environment in your home or business.
                </p>
                <a href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20pest%20control%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="w-fit border border-white px-6 py-3 text-white font-medium hover:bg-white hover:text-lime-500 transition">
                        SAY GOODBYE TO BED BUGS →
                    </button>
                </a>
            </div>

            {/* Left: Image Section */}
            <div className="lg:w-1/2 w-full h-80 lg:h-auto bg-cover bg-center" style={{ backgroundImage: "url('assets/bed_bug.jpg')" }}>
                {/* Optional dark overlay */}
                <div className="w-full h-full bg-black bg-opacity-30"></div>
            </div>
        </section>
    );
}

export default Cockroach