import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Auth from "./pages/Auth/Auth";
import Reg from "./pages/Reg/Reg";

import Home from "./pages/Home/Home";
import AddQuiz from "./pages/AddQuiz/AddQuiz";

import "./App.css";

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/AddQuiz" element={<AddQuiz/>}></Route>
          <Route path="/Registration" element={<Reg/>}></Route>
          <Route path="/Authorization" element={<Auth/>}></Route> 
          {/* <Route path="/game/" element={<AddQuiz/>}></Route> */}
      </Routes>
    
    </>
  );

}

export default App;
