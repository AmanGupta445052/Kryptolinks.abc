import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("analytics");
  const [profile,setProfile] = useState({})
  return (
    <ProfileContext.Provider value={{activeTab,setActiveTab,profile,setProfile}}>
      {children}
    </ProfileContext.Provider>
  );
};
