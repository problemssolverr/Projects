import React from "react";

const pests = [
  { name: "Ants", img: "/assets/ants.jpg" },
  { name: "Centipede", img: "/assets/centipede.jpg" },
  { name: "Housefly", img: "/assets/housefly.jpg" },
  { name: "Rodent", img: "/assets/Rodents.jpg" },
  { name: "Sheep tick", img: "/assets/sheep_tick.jpg" },
  { name: "Silver Fish", img: "/assets/Silver_Fish.jpg" },
  { name: "spider", img: "/assets/spider.jpg" },
  { name: "Roaches", img: "/assets/roaches.jpg" },
  { name: "Termites", img: "/assets/Termites.jpg" },
];

const PestCoverage = () => {
  return (
    <section className="py-10 bg-white">
      <span className="flex flex-col md:flex-row items-center gap-4 w-full mb-7">
            <hr className="flex-grow border-t border-gray-300" />
            <h1 className="text-2xl md:text-4xl font-extrabold uppercase text-center px-4">
                WE COVER IT ALL
            </h1>
            <hr className="flex-grow border-t border-gray-300" />
        </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {pests.map((pest, index) => (
          <div
            key={index}
            className="flex flex-col items-center group transform transition duration-300 hover:scale-105"
          >
            <div className="border-4 border-green-500 rounded-full p-6 w-24 h-24 flex items-center justify-center">
              <img
              width={150}
                src={pest.img}
                alt={pest.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-gray-800">
              {pest.name.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PestCoverage;
