const express = require('express');
const mongoose = require('mongoose');
const Transferencia = require('../DB/User');
const route = express.Router();

route.post('/',async(req,res)=>{
    const{origen , destino , cantidad, fecha_transaccion} = req.body;
    let trans = {};
    trans.origen = origen;
    trans.destino = destino;
    trans.cantidad = cantidad;
    trans.fecha_transaccion;
    let transModel = new Transferencia(trans);
    await transModel.save();
    console.log(transModel);
    res.json(transModel);
});
module.exports = route;