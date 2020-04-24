const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    dpi:{ 
        type:Number
    },
    noCuenta:{
        type:Number
    },
    saldoInicial:{
        type:Number
    },
    correo:{
        type:String
    },
    password:{
        type:String
    }
})


module.exports = User = mongoose.model('user',user);