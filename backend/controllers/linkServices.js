const User = require("../models/user");
const mongoose = require("mongoose");

// Incrementing page view on every page load
const updatePageView = (id) => {
  User.findByIdAndUpdate(id, { $inc: { pageView: 1 } }, (err, user) => {
    if (err) console.log(err);
  });
};

// Get the user info
exports.getUserInfo = (req, res) => {
  const { link } = req.params;
  User.findOne({ linkAddress: link }, (err, user) => {
    if (err || !user) return res.status(400).json({ error: "Invalid Link" });
    const {
      id,
      name,
      linkAddress,
      walletAddress,
      description,
      pfpLink,
      githubLink,
      twitterLink,
    } = user;
    updatePageView(id);
    return res.status(200).json({
      name,
      linkAddress,
      walletAddress,
      description,
      pfpLink,
      githubLink,
      twitterLink,
    });
  });
};

// TODO: ADD TRANSACTIONS
exports.addTransactionInfo = async (req, res) => {
  try {
    const { addressTo, amount, timestamp, payerAddress } = req.body;
    User.findOne({ walletAddress: addressTo }, (err, user) => {
      if (err)
        return res
          .status(400)
          .json({ error: err, msg: "User not found in DB" });
      const { id, transactions } = user;
      const transactionList = transactions;
      const newTransaction = { payerAddress, amount, timestamp };
      transactionList.push(newTransaction);
      return User.findByIdAndUpdate(
        id,
        { transactions: transactionList },
        (err, docs) => {
          if (err)
            return res
              .status(400)
              .json({ error: err, msg: "Failed to record transaction" });
          return res.status(200).json({msg:"Transaction Added Successfully"});
        }
      );
    });

  } catch (err) {
    console.log(err);
  }
};
