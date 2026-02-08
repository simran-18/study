import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function SidebarWrapper() {
  return (
    <div
      style={{
        display: "flex",     
        height: "100vh",
      }}
    >
      <SideBar />

      <div style={{ flex: 1, padding: "20px" }}>
       <Outlet/>
      </div>
    </div>
  );
}

export default SidebarWrapper;
