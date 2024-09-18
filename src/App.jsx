import "./index.css";
// eslint-disable-next-line no-unused-vars
import React, { Children } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AuthProvider from "./components/Context/authProvider";
import ErrorPage from "./components/Error";
import Persional from "./components/Persional";
// import AuthProvider from "./components/Context";
// import { AuthContext } from "./components/Context/authProvider";

App.propTypes = {

};

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
        </AuthProvider>
        <Routes>
          <Route path="/" element={
            <Login />
          }>
          </Route>

          <Route path="/home" element={
            <Home />
          }>
          </Route>
          <Route path="/error" element={<ErrorPage />}>
          </Route>
          <Route path="/persional" element={<Persional/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
