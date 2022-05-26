import React from "react";
import List from "../List/List"


const Dashboard = () => {
  
  return (
    <>
    <header>
      <h1>React CRUD operations</h1>
      <div>
        <a href="/add">
        <button className="round-button">
          Add Entry
        </button>
        </a>
      </div>
    </header>
    <List />
    </>
  );
};

export default Dashboard;
