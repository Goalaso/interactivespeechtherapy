import React from "react";
import Progress from "./Progress";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="page-title">Welcome to the Dashboard</h1>
      
      {/* Include the Progress Bar without the header */}
      <div className="progress-section">
        <Progress showHeader={false} />
      </div>
      
      {/* Add additional sections as needed */}
      <div className="features-section">
        <h2>Other Features</h2>
        <p>Explore the other sections of your application from the navigation bar above.</p>
        {/* <p>I will eventually add a win streak </p> */}
      </div>
    </div>
  );
};

export default Dashboard;
