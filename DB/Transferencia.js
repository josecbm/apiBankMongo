const mongoose = require('mongoose');

const transfer = new mongoose.Schema({
    origen:{
        noCuenta: Number, required : true
    },
    destino:{
        noCuenta: Number , required : true
    },
    cantidad:Number,
    fecha_transaccion:Date
})

module.exports = Transferencia = mongoose.model('transferencia',transfer);