import React from "react";
import AsteroidData from "../asteroidData/AsteroidData";
import Home from "../home/Home";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asteroidData" element={<AsteroidData />} />
      </Routes>
    </div>
  );
};

export default Router;
