const express = require("express");
const User = require("../models/user");


exports.getUserInfo = (req,res) => {
    const {link} = req.params;
    console.log(link);
    User.findOne({linkAddress:link},(err,user) => {
        if (err || !user) return res.status(400).json({error : "Invalid Link"});
        const {name,linkAddress,walletAddress,description,pfpLink,githubLink,twitterLink} = user;
        return res.status(200).json({name,linkAddress,walletAddress,description,pfpLink,githubLink,twitterLink})
    });
}

// TODO: ADD TRANSACTIONS
// TODO: PAGE VIEW ++