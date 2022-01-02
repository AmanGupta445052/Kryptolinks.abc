import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import UserBioPage from "./pages/UserBioPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/user" element={<UserBioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
