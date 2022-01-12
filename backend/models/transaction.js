const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    fromAddress:{
        type:String,
        maxlength:42,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Transaction",transactionSchema);
