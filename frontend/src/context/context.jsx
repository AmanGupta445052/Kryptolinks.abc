import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    link: "",
    name: "",
    desc: "",
    pfpLink: "",
    walletAddress: "",
    github: "",
    twitter: "",
  });

  const connectWallet = () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Get Metamask");
    } else {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (accounts) => {
          console.log("Connected", accounts[0]);
          setFormData({...formData,walletAddress:accounts[0]});
        })
        .catch((err) => console.log(err));
    }
  };

  const checkIfWalletIsConnected = () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
      ethereum.request({ method: "eth_accounts" }).then(async (accounts) => {
        if (accounts.length !== 0) {
          const account = accounts[0];
          setFormData({ ...formData, walletAddress: account });
        } else {
          console.log("No authorized account found");
        }
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ formData, setFormData, checkIfWalletIsConnected, connectWallet }}
    >
      {children}
    </UserContext.Provider>
  );
};
