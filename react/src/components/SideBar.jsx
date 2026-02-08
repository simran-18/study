import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "200px",
        background: "gray",
        padding: "20px",
      }}
    >
      <h1>Menu</h1>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px",color:"black !important" }}>
        <Link to="/">HomePage</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default SideBar;
