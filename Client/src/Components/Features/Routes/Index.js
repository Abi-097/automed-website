import React from "react";
import { Routes, Route } from "react-router-dom";
import OnConstruction from "../Construction/index";
const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/page" element={<OnConstruction />} />
      </Routes>
    </div>
  );
};

export default Index;
