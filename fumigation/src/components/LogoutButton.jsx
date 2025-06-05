// src/components/LogoutButton.js
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const LogoutButton = () => {
  const { logout } = useContext(AppContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded mt-4"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
