import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import {verifyOtpStart, verifyOtpSuccess, verifyOtpFailure,signInStart, signInSuccess, signInFailure,getOtpStart, getOtpSuccess, getOtpFailure,} from '../../../redux/user/userSlice'
import poster from '../../../assets/Login/poster.png'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCircleCheck } from "react-icons/fa6";

export default function Login() {
  const {loading, error} = useSelector((state)=>state.user);
  let [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.id === 'mobile') {
      setMobile(e.target.value);
    } else if (e.target.id === 'otp') {
      setOtp(e.target.value);
    }
  };


  const handleSendOtp = async () => {
    try {
      if(!mobile){
        toast.error("Please enter your number!")
        dispatch(getOtpFailure());
        return;
      }
      if (!mobile.startsWith("+91")) {
        mobile = "+91" + mobile;
      }  
      dispatch(getOtpStart());
      const res = await axios.post('/api/auth/signin', { mobile });
      console.log(res.data);
      setOtpSent(true);
      dispatch(getOtpSuccess());
      toast.success('OTP send successfully!')
    } catch (error) {
      console.error('Error sending OTP:', error);
      // setErrorMsg(error.response.data.msg);
      dispatch(getOtpFailure());
      toast.error('Please enter valid mobile number!')
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      dispatch(verifyOtpStart());
      if(!otp){
        toast.error('Please enter OTP!')
        dispatch(verifyOtpFailure());
        return;
      }
      const res = await axios.post('/api/auth/verifyotp', { mobile, otp });
      const data = res.data;
      if (data.success === false) {
        toast.error('Please enter valid OTP!')
        dispatch(verifyOtpFailure(data.msg));
        return;
      }
      if (data.success === true) {
        dispatch(verifyOtpSuccess(data));
        // toast.success('Login successful!')
        // navigate('/');
        setVerified(true)
      }
    } catch (error) {
      dispatch(verifyOtpFailure(error.message));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }), // Wrap mobile in an object
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='w-full flex items-center justify-center'>
      <div className="bg-[#FFFFFF] w-11/12 h-screen flex items-center justify-evenly">
        <div className="w-5/12 hidden lg:block">
          <h1 className="pl-12 mb-6 text-5xl font-medium">MyFast<span className="text-green-600">X</span></h1>
          <img className="ml-5" src={poster} alt=""/>
        </div>
        <div className="md:w-4/12">
          <h1 className="text-center font-medium mb-8 md:mb-16 text-xl md:text-4xl">Welcome to MyFast<span className="text-green-600">X</span></h1>
          <h1 className=" underline  decoration-[#62B179] underline-offset-4 text-xl md:text-2xl font-medium">LOGIN</h1>
          <div className='flex flex-col gap-4 md:gap-6 mt-6'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className="border-2 border-deep-green rounded-md p-2 border-[#E5E5E5] flex justify-between">
                  <input className='w-full outline-none' type="tel" id="mobile" defaultValue="+91" required onChange={handleChange}/>
                </div>
                <div>
                  {!otpSent ? (
                    <button className="w-full bg-deep-green rounded-md py-1 text-white" type="button" onClick={handleSendOtp}>{loading ? 'Please wait...':'Get OTP'}</button>
                  ) : (
                    <div>
                      <div className="flex flex-col">
                        <label className="w-full" htmlFor="otp">Enter OTP:</label>
                        <div className="flex items-center border-2 border-deep-green rounded-md">
                          <input className="mx-2 my-1 rounded-md w-11/12 outline-none"  type="text" id="otp" value={otp} onChange={handleChange}/>
                          {verified? <FaCircleCheck className="text-deep-green text-xl mr-2"/>:''}
                        </div>
                      </div>
                      {!verified?<button onClick={verifyOtp} className="w-full bg-deep-green rounded-md py-1 text-white mt-4">{loading ? 'loading...':'Submit'}</button>:''}
                    </div>
                  )}
                </div>
                {verified?
                <div>
                    <button className="w-full bg-deep-green rounded-md py-1 text-white" type="submit">{loading ? 'Please wait...':'Log In'}</button>
                </div>
                :''}
            </form>
          </div>  
          <div className='flex gap-2 mt-5'>
            <p className="md:text-medium text-sm">Don't have an account?</p>
            <Link to={'/signup'} className='text-deep-green text-sm md:text-base'>Sign Up</Link>
          </div>
          {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

