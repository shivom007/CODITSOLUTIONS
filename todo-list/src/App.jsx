import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup/Signup";
import { Login } from "./components/login/Login";
import { Toaster } from "@/components/ui/sonner";
import Home from "./components/home/Home";
function App() {
  const token = sessionStorage.getItem('token')
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
