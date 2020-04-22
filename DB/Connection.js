const mongoose = require('mongoose');
const URI3 = 'mongodb://josecbm:123@cluster0-shard-00-00-hzowm.mongodb.net:27017,cluster0-shard-00-01-hzowm.mongodb.net:27017,cluster0-shard-00-02-hzowm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
const connectDB = async()=>{
   await mongoose.connect(URI3,{ 
      useNewUrlParser: true,
      useUnifiedTopology:true 
      
   });
   console.log('db connected...!');
}

module.exports = connectDB;