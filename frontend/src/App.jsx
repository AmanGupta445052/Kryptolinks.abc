import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfile from "./components/Dashboard/EditProfile";
import Main from "./components/Dashboard/Main";
import { ProfileProvider } from "./context/profile";
import Dashboard from "./pages/Dashboard";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserBioPage from "./pages/UserBioPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/:user" element={<UserBioPage />} />
        <Route
          path="/dashboard/analytics"
          element={
            <ProfileProvider>
              <Dashboard>
                <Main />
              </Dashboard>
            </ProfileProvider>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <ProfileProvider>
              <Dashboard>
                <EditProfile />
              </Dashboard>
            </ProfileProvider>
          }
        />
        <Route path="/oops" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
