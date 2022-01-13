const express = require("express");
const User = require("../models/user");

exports.createLink = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err)
      return res
        .json(400)
        .json({ error: "Link creation unsuccessfull", msg: err });
    return res.status(200).json(user);
  });
};

exports.getInfo = (req, res) => {
  const { username } = req.params;
  console.log(username);
  User.findOne({ linkAddress: username }, (err, user) => {
    if (err || !user)
      return res.status(400).json({ err, msg: "User not found in DB" });
    const {
      name,
      linkAddress,
      walletAddress,
      description,
      pfpLink,
      githubLink,
      twitterLink,
      transactions,
      pageView,
    } = user;
    return res
      .status(200)
      .json({
        name,
        linkAddress,
        walletAddress,
        description,
        pfpLink,
        githubLink,
        twitterLink,
        transactions,
        pageView,
      });
  });
};
