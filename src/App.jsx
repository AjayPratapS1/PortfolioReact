import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Cursor from "./components/common/Cursor";
function App() {
  
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto scroll-smooth box-border font-vietnam">
      <Cursor/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/work" element={<Work/>}/>
      </Routes>
    </div>
  );
}

export default App;
