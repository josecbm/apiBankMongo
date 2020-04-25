const express = require('express');
const mongoose = require('mongoose');
const Transferencia = require('../DB/Transferencia');
const route = express.Router();

route.post('/',async(req,res)=>{
    const{origen , destino , cantidad, fecha_transaccion} = req.body;
    let trans = {};
    trans.origen = origen;
    trans.destino = destino;
    trans.cantidad = cantidad;
    trans.fecha_transaccion = fecha_transaccion;
    let transModel = new Transferencia(trans);
    await transModel.save();
    console.log(transModel);
    res.json(transModel);
});
route.get('/',async(req,res)=>{
    try{
        var transfers = await Transferencia.find().exec();
        res.send(transfers);
    }catch(error){
        res.status(500).send(error);
    }
});
route.get('/:id',async(req,res)=>{
    try{
        var transf = await Transferencia.findById(req.params.id).exec();
        res.send(transf);
    }catch(error){
        res.status(500).send(error);
    }
});


module.exports = route;