const express = require('express');
const User = require('../models/user');

exports.createLink = (req,res) => {
    const user = new User(req.body);
    user.save((err,user) => {
        if (err) return res.json(400).json({error : "Link creation unsuccessfull",msg:err});
        return res.json(user);
    })
}