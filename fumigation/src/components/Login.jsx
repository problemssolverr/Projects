// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase/firebase';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/admin'); // redirect to AdminDashboard
//     } catch (err) {
//       setError(err.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
//       <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg">
//         <h2 className="text-2xl font-semibold text-center text-lime-400 mb-4">Admin Login</h2>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block mb-1 text-sm">Email</label>
//             <input
//               type="email"
//               className="w-full p-2 bg-gray-700 rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm">Password</label>
//             <input
//               type="password"
//               className="w-full p-2 bg-gray-700 rounded"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2 px-4 rounded"
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



// src/pages/AdminLogin.js
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        />
        <button type="submit" className="bg-lime-500 px-4 py-2 rounded text-black font-bold hover:bg-lime-600 w-full">
          Login
        </button>
        <p className="mt-3 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-lime-400 underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

