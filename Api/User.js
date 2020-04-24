const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async (req, res) => {
    const { firstName, lastName, dpi, noCuenta, saldoInicial, correo, password } = req.body;
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
route.get('/', async (req, res) => {
    console.log('entra en get de usuario');
    try {
        var user = await User.find().exec();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});
route.get('/get/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id).exec();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});
route.post('/login', async(req, res) => {
    const { correo, password } = req.body;
    let usrLog = {};
    usrLog.correo = correo;
    usrLog.password = password;
    console.log(usrLog);

    var userFound = await User.findOne({ 'correo': usrLog.correo, 'password': usrLog.password }, function (err, person) {
        if (err) return handleError(err);
    });
    res.send(userFound);

});

module.exports = route;
