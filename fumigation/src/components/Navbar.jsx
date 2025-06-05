// import React, { useState, useEffect } from "react";
// import { assets } from '../assets/assets.js';
// import { NavLink } from "react-router-dom";
// import { auth } from '../firebase/firebase'; // make sure this is your Firebase config
// import { onAuthStateChanged } from "firebase/auth";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="bg-purple-800 text-white text-sm px-4 py-2 flex justify-between items-center flex-wrap">
//         <span className="hidden md:flex">A S O Pest Control and Wildlife Removal Experts</span>
//         <div className="flex space-x-4 text-sm">
//           <a href="tel:+2347066563261">Call Now: +234 706 656 3261</a>
//           <a href="mailto:oriyomiwasiu552@gmail.com">Email: oriyomiwasiu552@gmail.com</a>
//         </div>
//       </div>

//       {/* Header */}
//       <header className="bg-black text-white px-4 py-4 flex flex-wrap justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <NavLink to='/'><img src={assets.logo} alt="417 Pest Solutions" className="h-8" /></NavLink>
//           <NavLink to='/'><span className="text-green-500 font-bold text-lg">ASO God's Grace Nig. Ent.</span></NavLink>
//         </div>
//         <nav className="hidden md:flex space-x-6 text-sm">
//           <NavLink to='/about' className="hover:border-b-2 hover:border-lime-400 pb-1">ABOUT US</NavLink>
//           <NavLink to='/pests' className="hover:border-b-2 hover:border-lime-400 pb-1">PESTS</NavLink>
//           <NavLink to='/wildlife' className="hover:border-b-2 hover:border-lime-400 pb-1">WILDLIFE</NavLink>
//           <NavLink to='/projects' className="hover:border-b-2 hover:border-lime-400 pb-1">PROJECTS</NavLink>
//           <NavLink to='/faqs' className="hover:border-b-2 hover:border-lime-400 pb-1">FAQS</NavLink>

//           {/* ✅ Only show if user is logged in */}
//           {user && (
//             <NavLink to='/admin' className="hover:border-b-2 hover:border-lime-400 pb-1">ADMIN DASHBOARD</NavLink>
//           )}

//           <a
//             href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20pest%20control%20service."
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="bg-lime-400 text-black font-semibold px-4 py-2 rounded">
//               BOOK NOW
//             </button>
//           </a>
//         </nav>

//         {/* Hamburger for Mobile */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d={!menuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
//             </svg>
//           </button>
//         </div>
//       </header>

//       {/* Mobile Nav */}
//       {menuOpen && (
//         <div className="md:hidden bg-black text-white px-4 py-4 space-y-4">
//           <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">ABOUT US</NavLink>
//           <NavLink to="/pests" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">PESTS</NavLink>
//           <NavLink to="/wildlife" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">WILDLIFE</NavLink>
//           <NavLink to="/projects" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">PROJECTS</NavLink>
//           <NavLink to="/faqs" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">FAQS</NavLink>

//           {/* ✅ Only show in mobile menu if logged in */}
//           {user && (
//             <NavLink to="/admin" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">ADMIN DASHBOARD</NavLink>
//           )}

//           <a
//             href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20pest%20control%20service."
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="w-full bg-lime-400 text-black font-semibold px-4 py-2 rounded">
//               BOOK NOW
//             </button>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




















// import React, { useState, useContext } from "react";
// import { assets } from "../assets/assets.js";
// import { NavLink } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { user, logout } = useContext(AppContext); // 🔥 grab user and logout from context

//   const handleLogout = async () => {
//     await logout();
//   };

//   return (
//     <div>
//       {/* Top Bar */}
//       <div className="bg-purple-800 text-white text-sm px-4 py-2 flex justify-between items-center flex-wrap">
//         <span className="hidden md:flex">A S O Pest Control and Wildlife Removal Experts</span>
//         <div className="flex space-x-4 text-sm">
//           <a href="tel:+2347066563261">Call Now: +234 706 656 3261</a>
//           <a href="mailto:oriyomiwasiu552@gmail.com">Email: oriyomiwasiu552@gmail.com</a>
//         </div>
//       </div>

//       {/* Header */}
//       <header className="bg-black text-white px-4 py-4 flex flex-wrap justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <NavLink to="/">
//             <img src={assets.logo} alt="ASO Logo" className="h-8" />
//           </NavLink>
//           <NavLink to="/">
//             <span className="text-green-500 font-bold text-lg">ASO God's Grace Nig. Ent.</span>
//           </NavLink>
//         </div>

//         <nav className="hidden md:flex space-x-6 text-sm">
//           <NavLink to="/about" className="hover:border-b-2 hover:border-lime-400 pb-1">ABOUT US</NavLink>
//           <NavLink to="/pests" className="hover:border-b-2 hover:border-lime-400 pb-1">PESTS</NavLink>
//           <NavLink to="/wildlife" className="hover:border-b-2 hover:border-lime-400 pb-1">WILDLIFE</NavLink>
//           <NavLink to="/projects" className="hover:border-b-2 hover:border-lime-400 pb-1">PROJECTS</NavLink>
//           <NavLink to="/faqs" className="hover:border-b-2 hover:border-lime-400 pb-1">FAQS</NavLink>

//           {user ? (
//             <>
//               <NavLink to="/admin" className="hover:border-b-2 hover:border-lime-400 pb-1">ADMIN DASHBOARD</NavLink>
//               <button onClick={handleLogout} className="hover:border-b-2 hover:border-lime-400 pb-1">LOGOUT</button>
//             </>
//           ) : (
//             <NavLink to="/login" className="hover:border-b-2 hover:border-lime-400 pb-1">LOGIN / SIGNUP</NavLink>
//           )}

//           <a
//             href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20pest%20control%20service."
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="bg-lime-400 text-black font-semibold px-4 py-2 rounded">
//               BOOK NOW
//             </button>
//           </a>
//         </nav>

//         {/* Hamburger for Mobile */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d={!menuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
//             </svg>
//           </button>
//         </div>
//       </header>

//       {/* Mobile Nav */}
//       {menuOpen && (
//         <div className="md:hidden bg-black text-white px-4 py-4 space-y-4">
//           <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">ABOUT US</NavLink>
//           <NavLink to="/pests" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">PESTS</NavLink>
//           <NavLink to="/wildlife" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">WILDLIFE</NavLink>
//           <NavLink to="/projects" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">PROJECTS</NavLink>
//           <NavLink to="/faqs" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">FAQS</NavLink>

//           {user ? (
//             <>
//               <NavLink to="/admin" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">ADMIN DASHBOARD</NavLink>
//               <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="block w-full text-left hover:border-b-2 hover:border-lime-400 pb-1">LOGOUT</button>
//             </>
//           ) : (
//             <NavLink to="/login" onClick={() => setMenuOpen(false)} className="block w-full hover:border-b-2 hover:border-lime-400 pb-1">LOGIN / SIGNUP</NavLink>
//           )}

//           <a
//             href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20pest%20control%20service."
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="w-full bg-lime-400 text-black font-semibold px-4 py-2 rounded">
//               BOOK NOW
//             </button>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




















import React, { useState, useContext } from "react";
import { assets } from "../assets/assets.js";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-purple-800 text-white text-sm px-4 py-2 flex justify-between items-center flex-wrap">
        <span className="hidden md:flex">A S O Pest Control and Wildlife Removal Experts</span>
        <div className="flex space-x-4 text-sm">
          <a href="tel:+2347066563261">Call Now: +234 706 656 3261</a>
          <a href="mailto:oriyomiwasiu552@gmail.com">Email: oriyomiwasiu552@gmail.com</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-black text-white px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <NavLink to="/">
            <img src={assets.logo} alt="ASO Logo" className="h-8" />
          </NavLink>
          <NavLink to="/">
            <span className="text-green-500 font-bold text-lg">ASO God's Grace Nig. Ent.</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm items-center">
          <NavLink to="/about" className="hover:border-b-2 hover:border-lime-400 pb-1">ABOUT US</NavLink>
          <NavLink to="/pests" className="hover:border-b-2 hover:border-lime-400 pb-1">PESTS</NavLink>
          <NavLink to="/cleaning-service" className="hover:border-b-2 hover:border-lime-400 pb-1">CLEANING SERVICES</NavLink>
          <NavLink to="/projects" className="hover:border-b-2 hover:border-lime-400 pb-1">PROJECTS</NavLink>
          <NavLink to="/faqs" className="hover:border-b-2 hover:border-lime-400 pb-1">FAQS</NavLink>

          {/* {user ? (
            <>
              <NavLink to="/dashboard" className="hover:border-b-2 hover:border-lime-400 pb-1">DASHBOARD</NavLink>
              <button onClick={handleLogout} className="hover:border-b-2 hover:border-lime-400 pb-1">LOGOUT</button>
            </>
          ) : (
            <NavLink to="/login" className="hover:border-b-2 hover:border-lime-400 pb-1">LOGIN / SIGNUP</NavLink>
          )} */}

          <a
            href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20pest%20control%20service."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-lime-400 text-black font-semibold px-4 py-2 rounded">
              BOOK NOW
            </button>
          </a>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={!menuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-4 py-4 space-y-4">
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block hover:border-b-2 hover:border-lime-400 pb-1">ABOUT US</NavLink>
          <NavLink to="/pests" onClick={() => setMenuOpen(false)} className="block hover:border-b-2 hover:border-lime-400 pb-1">PESTS</NavLink>
          <NavLink to="/cleaning-service" onClick={() => setMenuOpen(false)} className="block hover:border-b-2 hover:border-lime-400 pb-1">CLEANING SERVICES</NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)} className="block hover:border-b-2 hover:border-lime-400 pb-1">PROJECTS</NavLink>
          <NavLink to="/faqs" onClick={() => setMenuOpen(false)} className="block hover:border-b-2 hover:border-lime-400 pb-1">FAQS</NavLink>

          {/* {user ? (
            <>
              <NavLink to="/dashboard" onClick={() => setMenuOpen(false)} className="block hover:border-b-2 hover:border-lime-400 pb-1">DASHBOARD</NavLink>
              <button
                onClick={handleLogout}
                className="block w-full text-left hover:border-b-2 hover:border-lime-400 pb-1"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <NavLink to="/login" onClick={() => setMenuOpen(false)} className="block hover:border-b-2 hover:border-lime-400 pb-1">LOGIN / SIGNUP</NavLink>
          )} */}

          <a
            href="https://wa.me/2347066563261?text=Hi%2C%20I%27d%20like%20to%20book%20a%20pest%20control%20service."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full bg-lime-400 text-black font-semibold px-4 py-2 rounded">
              BOOK NOW
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
