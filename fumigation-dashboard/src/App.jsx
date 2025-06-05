import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(true); // toggle state for login/signup

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-lime-400">Admin</h1>
        {user && (
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-bold"
          >
            Logout
          </button>
        )}
      </header>

      {user ? (
        <Dashboard />
      ) : (
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-xl">
          {showLogin ? <Login /> : <Signup />}
          <div className="mt-4 text-center">
            {showLogin ? (
              <p>
                Don't have an account?{" "}
                <button
                  onClick={() => setShowLogin(false)}
                  className="text-lime-400 underline"
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => setShowLogin(true)}
                  className="text-lime-400 underline"
                >
                  Log In
                </button>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
