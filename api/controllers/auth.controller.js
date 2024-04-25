import User from '../models/user.model.js';                             
import {errorHandler} from '../utils/error.js';
import jwt from 'jsonwebtoken';

import OtpModel from '../models/otp.model.js'                          
import {otpVerification} from '../helpers/otpValidate.js'


import otpGenerator from 'otp-generator';
import twilio from 'twilio';

const accountSid = 'ACd8977ecb66e910b0e66ff352f638f758';
const authToken = '0a1e8d2dfc6372f282da632d735f55d6';
const twilioClient = new twilio(accountSid, authToken);


export const signup =async (req, res,next)=>{
    let {username, email, mobile} = req.body;
    if(!username || !email || !mobile || username ==='' || email==='' || mobile===''){
        next(errorHandler(400, 'All fields are required'));
    }
    const newUser = new User({username, email, mobile});
    try{                                                       
      await newUser.save()                                    
      res.status(201).json("SignUp successfully")        
    }catch(error){                                             
      next(error);
    }
}

export const signin = async (req, res, next)=>{ 
    const { mobile } = req.body;
    try {
      const validUser = await User.findOne({ mobile }); 
      if (!validUser) return next(errorHandler(404, 'User not found!'));
      
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

    } catch(error) {
      next(error);   
    }
  }

  export const verifyotp = async (req, res, next) => {
    try {
      const { mobile, otp } = req.body;
      const otpData = await OtpModel.findOne({ mobile, otp });
  
      if (!otpData) {
        return res.status(400).json({
          success: false,
          msg: 'You entered wrong OTP!'
        });
      }
  
      const isOtpExpired = await otpVerification(otpData.otpExpiration);
      if (isOtpExpired) {
        return res.status(400).json({
          success: false,
          msg: 'Your OTP has expired!'
        });
      }
      return res.status(200).json({
        success: true,
        msg: 'OTP verified successfully!',
      });
    } catch (error) {
      next(error);
    }
  };

  export const login = async (req, res, next)=>{
    const {mobile}=req.body;
    try{
      const validUser = await User.findOne({mobile});
      if(!validUser) return next(errorHandler(404, `user ${mobile} not found`));
      const token = jwt.sign({ id: validUser._id }, 'jfdaklfjaljf3598248959');
      const {mobile:pass, ...rest}=validUser._doc;
      res.cookie('access_token', token, { httpOnly: true}).status(200).json(rest);
    }catch(error){
      next(error);
    }

  }
  export const signout = async (req, res, next) => {
    try {
      res.clearCookie('access_token');
      res.status(200).json('User has been logged out!');
    } catch (error) {
      next(error);
    }
  };
