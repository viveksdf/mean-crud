const mongoose = require('mongoose');




mongoose.connect("mongodb://localhost:27017/tutorial",(err)=>{
    if(!err){
        console.log("MongoDB connection succeeded.");
    }
    else{
        console.log("Failed to connect :"+ JSON.stringify(err));
    }
});

module.exports = mongoose;