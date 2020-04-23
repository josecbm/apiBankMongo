const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/',async(req,res)=>{
    const { firstName, lastName , dpi , noCuenta,saldoInicial,correo, password } = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.dpi = dpi;
    user.noCuenta = noCuenta;
    user.saldoInicial = saldoInicial;
    user.correo = correo;
    user.password = password;
    let userModel = new User(user);
    await userModel.save();
    console.log(userModel);
    res.json(userModel);
});

 
module.exports = route;
