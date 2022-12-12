import React from "react";
import { Routes, Route } from "react-router-dom"
import "./App.css";
import { Admin, Home, Registration, NotFound } from "./pages";


const App: React.FC = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signin" element={<Registration />} />

          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
