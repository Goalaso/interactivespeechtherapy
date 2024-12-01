import React from "react";
import Progress from "./Progress";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the Dashboard</h1>
      
      {/* Include the Progress Bar without the header */}
      <div style={{ marginTop: "20px" }}>
        <Progress showHeader={false} />
      </div>
      
      {/* Add additional sections as needed */}
      <div style={{ marginTop: "20px" }}>
        <h2>Other Features</h2>
        <p>Explore the other sections of your application from the navigation bar above.</p>
        {/* <p>I will eventually add a win streak </p> */}
      </div>
    </div>
  );
};

export default Dashboard;
