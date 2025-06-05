import React, { useEffect, useState } from "react";

const images = [
  "/assets/pc_1.jpg",
  "/assets/pc_3.jpg",
  "/assets/pc_4.jpg"
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      {/* Hero Section with Slideshow */}
      <section
        className="relative bg-cover bg-center text-white min-h-[500px] flex items-center justify-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center px-4">
          <p className="text-lime-400 font-medium uppercase mb-2 text-sm md:text-base">
            A S O God's Grace Pest Control and Wildlife Removal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            LIFE AT HOME CAN BE ENJOYED
          </h1>
          <p className="text-lg md:text-xl mb-6">
            By safeguarding what matters the most.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="tel:+234 706 656 3261"
              className="bg-lime-400 text-black px-6 py-3 font-bold rounded text-lg hover:bg-lime-500"
            >
              CALL TODAY +234 706 656 3261
            </a>
            <a
              href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20pest%20control%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-lime-400 px-6 py-3 font-bold rounded text-lg hover:bg-lime-400"
            >
              BOOK ONLINE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

















// const HeroSection = () => {
//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="bg-purple-800 text-white text-sm px-4 py-2 flex justify-between items-center">
//         <span className="hidden md:flex">A-S-O Pest Control and Wildlife Removal Experts</span>
//         <div className="flex space-x-4 text-sm">
//           <a href="tel:4177427995">Call Now: +234 706 656 3261</a>
//           <a href="mailto:info@417pestsolutions.com">Email: oriyomiwasiu552@gmail.com</a>
//         </div>
//       </div>

//       {/* Header */}
//       <header className="bg-black text-white px-4 py-4 flex flex-wrap justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <img src={assets.logo} alt="417 Pest Solutions" className="h-8" />
//           <span className="text-green-500 font-bold text-lg">ASO GOD'S GRACE NIG. ENT.</span>
//         </div>
//         <nav className="hidden md:flex space-x-6 text-sm">
//           <a href="#">ABOUT US</a>
//           <a href="#">PESTS</a>
//           <a href="#">WILDLIFE</a>
//           <a href="#">COMMERCIAL</a>
//           <a href="#">SERVICE PLANS</a>
//           <a href="#">AREAS SERVED</a>
//           <a href="#">FAQS</a>
//           <button className="bg-lime-400 text-black font-semibold px-4 py-2 rounded">BOOK NOW</button>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="relative bg-cover bg-center text-white min-h-[500px] flex items-center justify-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="relative z-10 text-center px-4">
//           <p className="text-lime-400 font-medium uppercase mb-2 text-sm md:text-base">Springfield MO Pest Control and Wildlife Removal</p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">LIFE AT HOME CAN BE ENJOYED</h1>
//           <p className="text-lg md:text-xl mb-6">By safeguarding what matters the most.</p>
//           <div className="flex flex-col md:flex-row items-center justify-center gap-4">
//             <a href="tel:4177427995" className="bg-lime-400 text-black px-6 py-3 font-bold rounded text-lg">CALL TODAY +234 706 656 3261</a>
//             <a href="#" className="border-2 border-white px-6 py-3 font-bold rounded text-lg">BOOK ONLINE</a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;
