const mongoose = require('mongoose');

const transfer = new mongoose.Schema({
    origen:{
        type:Number
    },
    destino:{
        type:Number
    },
    cantidad:{
        type:Number
    },
    fecha:{
        type:Date , default:Date.now
    }

})

module.exports = Transferencia = mongoose.model('transferencia',transfer);