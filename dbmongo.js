var Usuario = {
    nombres: String,
    apellidos: String,
    dpi: Number,
    noCuenta: Number,
    saldoInicial: Number,
    correo: String,
    password: String
};

var Transferencia = {
    origen:{
        noCuenta: ObjectID
    },
    destino:{
        noCuenta: ObjectID
    },
    cantidad:Number,
    fecha_transaccion: Date
};
