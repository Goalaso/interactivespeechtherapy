import React from "react";

const MainLayout = ({ setCurrentPage, children }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Navigation */}
      <nav style={{ width: "200px", backgroundColor: "#333", color: "#fff", padding: "20px" }}>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <button
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}
              onClick={() => setCurrentPage("progress")}
            >
              Progress
            </button>
          </li>
          <li>
            <button
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}
              onClick={() => setCurrentPage("feature1")}
            >
              Feature 1
            </button>
          </li>
          <li>
            <button
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}
              onClick={() => setCurrentPage("feature2")}
            >
              Feature 2
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
};

export default MainLayout;
