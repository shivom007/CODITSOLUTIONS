import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup/Signup";
import { Login } from "./components/login/Login";
// import {  useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
// import PropTypes from 'prop-types';
// import { any } from 'prop-types'
import Home from "./components/home/Home";
function App() {
  
  

  const token = sessionStorage.getItem('token')
   
  // console.log(token + " app me hu")
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/signup" element={token ? <Navigate to="/" replace={true} /> : <Signup/>} />
          <Route
            path="/login"
            element={token ? <Navigate to="/" replace={true} /> :
              <Login /> 
              
            }
          />
           <Route exact
              path="/"
              element={ <Home /> }
            />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
