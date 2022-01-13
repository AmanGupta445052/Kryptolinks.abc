import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("analytics");
  const [link,setLink] = useState("user");
  const [profile,setProfile] = useState({})
  return (
    <ProfileContext.Provider value={{activeTab,setActiveTab,link,profile,setProfile}}>
      {children}
    </ProfileContext.Provider>
  );
};
