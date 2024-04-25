import OtpModel from '../models/otp.model.js'                          
import {errorHandler} from '../utils/error.js';
import {otpVerification} from '../helpers/otpValidate.js'


import otpGenerator from 'otp-generator';
import twilio from 'twilio';

const accountSid = 'ACd8977ecb66e910b0e66ff352f638f758';
const authToken = '0a1e8d2dfc6372f282da632d735f55d6';
const twilioClient = new twilio(accountSid, authToken);


export const sendotp = async(req, res, next)=>{
  const {mobile} = req.body;
  try {
    if (!mobile) {
      return res.status(400).json({
        success: false,
        msg: "phone number is required.",
      });
    }
    const otp = otpGenerator.generate(6, {upperCaseAlphabets:false, lowerCaseAlphabets:false, specialChars:false });
    const cDate= new Date();
    await OtpModel.findOneAndUpdate(
      {mobile},
      {otp, otpExpiration: new Date(cDate.getTime())},
      {upsert: true, new:true, setDefaultsOnInsert:true}
    );

    await twilioClient.messages.create({
      body:`Your OTP is: ${otp}`,
      to: mobile,
      from: process.env.TWILIO_PHONE_NUMBER
    });

    return res.status(200).json({
      success:true,
      msg:"OTP Send successfully!"
    })
  } catch (error) {
    next(error);
  }
}  
export const verifyotp = async(req, res, next)=>{
  try {
    const {mobile, otp} = req.body
    const otpData = await OtpModel.findOne({
      mobile,
      otp
    });

    if (!otpData) {
      return res.status(400).json({
        success:false,
        msg: 'You entered wrong OTP!'
      })
    }
    const isOtpExpired = await otpVerification(otpData.otpExpiration);
    if(isOtpExpired){
      return res.status(400).json({
        success:false,
        msg: 'Your OTP has beed expired!'
      })
    }
    return res.status(200).json({
      success:true,
      msg: 'OTP verified successfully!'
    });
  } catch (error) {
    next(error);
  }
}  
