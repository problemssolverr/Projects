import React from 'react'

const BedBug = () => {
    return (
        <section className="flex flex-col lg:flex-row w-full">

            {/* Right: Text Content */}
            <div className="lg:w-1/2 w-full bg-lime-400 text-white px-6 py-10 md:px-12 lg:px-16 flex flex-col justify-center">
                <h2 className="text-3xl font-extrabold mb-2 uppercase">Bed Bug</h2>
                <h3 className="text-xl font-semibold underline mb-4">CIMEX LECTULARIUS</h3>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                    Bed bug infestations are a major concern for homes and businesses in Ogun State, Nigeria. Recognized by their small, reddish-brown, and flattened bodies, bed bugs can rapidly invade areas where people sleep and relax. They thrive especially during the warmer months as they seek out blood meals, making your property an ideal environment for their spread. Effective bed bug control in Nigeria requires accurate identification and swift action to manage and prevent these pests. Ensuring timely intervention helps keep your home or business comfortable and pest-free.
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

export default BedBug