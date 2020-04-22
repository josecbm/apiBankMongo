const express = require('express');
const connectDB = require('./DB/Connection')
const app = express();

connectDB()
app.use(express.json({extended:false}));
app.use('/api/userModel',require('./Api/User'));
app.use('/api/transModel',require('./Api/Transferencia'));
const port = process.env.PORT || 3000;

app.listen(port ,()=>console.log("Servidor levantado"));