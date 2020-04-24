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

// const userModel = mongoose.model("user",{
//     firstname:String,
//     lastname:String,
//     dpi:Number,
//     noCuenta:Number,
//     saldoInicial:Number,
//     correo:Number,
//     password:String
// });

module.exports = User = mongoose.model('user',user);