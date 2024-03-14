import React from "react";
import Login from "./login";
import RegisterPageDetails from "./EditForms";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Forms" element={<RegisterPageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
