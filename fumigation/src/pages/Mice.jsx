import React from 'react'

const Mice = () => {
    return (
        <section className="flex flex-col lg:flex-row w-full">
            {/* Left: Image Section */}
            <div className="lg:w-1/2 w-full h-80 lg:h-auto bg-cover bg-center" style={{ backgroundImage: "url('assets/mice.jpg')" }}>
                {/* Optional dark overlay */}
                <div className="w-full h-full bg-black bg-opacity-30"></div>
            </div>
            
            {/* Right: Text Content */}
            <div className="lg:w-1/2 w-full bg-lime-400 text-white px-6 py-10 md:px-12 lg:px-16 flex flex-col justify-center">
                <h2 className="text-3xl font-extrabold mb-2 uppercase">MICE</h2>
                <h3 className="text-xl font-semibold underline mb-4">MUS MUSCULUS
</h3>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                    Mice problems are a common concern for homes and businesses in Nigeria. These small rodents can invade homes, offices, and restaurants, causing a lot of trouble. Mice have slender bodies, large ears, and long tails, often seen scurrying around in search of food, shelter, and warmth. They can invade properties year-round but are particularly active in the colder months as they seek indoor spaces to nest. Mice can be a serious issue because they not only cause damage to property by chewing on wires, insulation, and furniture, but they also pose health risks by contaminating food and spreading diseases. Timely identification and proactive measures are key to preventing mice infestations and ensuring that your home or business remains safe and pest-free. For effective management, consider professional mice pest control.
                </p>
                <a href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20pest%20control%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="w-fit border border-white px-6 py-3 text-white font-medium hover:bg-white hover:text-lime-500 transition">
                        GET RID OF MICE NOW →
                    </button>
                </a>
            </div>

            
        </section>
    );
}

export default Mice