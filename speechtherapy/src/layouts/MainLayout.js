import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <nav style={{ width: "200px", backgroundColor: "#282c34", color: "#fff", padding: "20px" }}>
        <h2>Dashboard</h2>
        <ul>
          <li><Link to="/progress">Progress</Link></li>
          <li><Link to="/feature1">Feature 1</Link></li>
          <li><Link to="/feature2">Feature 2</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
