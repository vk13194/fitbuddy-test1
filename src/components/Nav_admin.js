import React from "react";
import "./styles/nav.css";

export default function Nav_admin() {
  const handleLogout = () => {
    console.log("logged out!");
  };

  return (
    <nav>
      <img src="/assets/logo.png" alt="logo" />
      <button onClick={handleLogout}>logout</button>
    </nav>
  );
}
