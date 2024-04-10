const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires: 5*60
    }
})

async function sendVerificationEmail(email,otp){
    try{
        const response = await mailSender(email,"Verification-Email",otp);
        console.log(response)
    }catch(error){
        console.log("errors while sending mail",error)
        throw error;
    }
}

otpSchema.pre("save", async function(next){
    await sendVerificationEmail(this.email, this.otp);
    next()
})


module.exports = new mongoose.model("Otp", otpSchema)