const express = require("express");
const User = require("../models/user");

exports.createLink = (req, res) => {
  try {
    const user = new User(req.body);
    user.save((err, user) => {
      if (err || !user) {
        return res
          .status(400)
          .json({ error: "Link creation unsuccessfull", msg: err });
      }
      if (user )return res.status(200).json(user);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getInfo = (req, res) => {
  const { username } = req.params;
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
    return res.status(200).json({
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

exports.updateProfile = async (req, res) => {
  try {
    const { pfpLink, twitter, github, name, desc, walletAddress } = req.body;
    if (walletAddress) {
      const updatedUser = await User.findOneAndUpdate(
        { walletAddress },
        {
          pfpLink,
          description: desc,
          twitterLink: twitter,
          githubLink: github,
          name,
        },
        { new: true }
      );
      if (updatedUser === null)
        return res.status(400).json({ error: "User not found" });
      return res.status(200).json({ msg: "Successfully Updated!" });
    }
  } catch (err) {
    console.log(err);
  }
};
