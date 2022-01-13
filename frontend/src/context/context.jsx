import { ethers, providers } from "ethers";
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

  const [payerAddress, setPayerAddress] = useState("");
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const connectWallet = () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Get Metamask");
    } else {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (accounts) => {
          console.log("Connected", accounts[0]);
          setFormData({ ...formData, walletAddress: accounts[0] });
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

  const checkIfPayerWalletIsConnected = () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      ethereum.request({ method: "eth_accounts" }).then(async (accounts) => {
        if (accounts.length !== 0) {
          const account = accounts[0];
          setPayerAddress(account);
        }
      });
    }
  };

  const connectPayerWallet = () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Get Metamask");
    } else {
      ethereum.request({ method: "eth_accounts" }).then(async (accounts) => {
        if (accounts.length !== 0) {
          const account = accounts[0];
          setPayerAddress(accounts[0]);
          return;
        }
      });
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (accounts) => {
          console.log("Connected", accounts[0]);
          setPayerAddress(accounts[0]);
        })
        .catch((err) => console.log(err));
    }
  };

  const sendTransaction = async (addressTo, amount, userSlug) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const parsedAmount = ethers.utils.parseEther(amount);
        setIsPaymentLoading(true);
        const payment = await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: payerAddress,
              to: addressTo,
              gas: "0x5208",
              value: parsedAmount._hex,
            },
          ],
        });
        const provider = new ethers.providers.Web3Provider(ethereum);
        let txn_test = await provider.getTransaction(payment);
        while (!txn_test.blockNumber) {
          txn_test = await provider.getTransaction(payment);
        }
        // fetch("http://localhost:8000/api/transaction/add",{
        //   method:"POST"
        // });
        setIsPaymentLoading(false);
        setIsPaymentCompleted(true);
        setTimeout(() => {
          setIsPaymentCompleted(false)
        },5000);
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.error(error)
      setIsPaymentLoading(false);
      setIsPaymentCompleted(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        formData,
        setFormData,
        checkIfWalletIsConnected,
        connectWallet,
        sendTransaction,
        connectPayerWallet,
        payerAddress,
        checkIfPayerWalletIsConnected,
        isPaymentLoading,
        isPaymentCompleted,
        setIsPaymentCompleted,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
