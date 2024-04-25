import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/admin/logo.png';
import loginImg from '../../assets/admin/loginImg.png';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [vis, setVis] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://emonoid.com/api/v1/admin/loginAdmin', { // Adjust the API path accordingly
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password: pass }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('adminToken', data.token); // Storing the token
        localStorage.setItem('adminDetails', JSON.stringify(data.admin)); // Storing the admin details
        navigate("/fastx/admin/dashboard"); // Navigate to the dashboard or any other internal page
      } else {
        alert(data.message); // Handling error messages from the server
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while trying to log in.");
    }
  };

  return (
    <div className='flex w-full h-screen items-center justify-evenly'>
            <div className='flex w-10/12 items-center justify-center'>
                <div className='w-full lg:w-6/12  flex flex-col justify-center items-center'>
                    <div className=''>
                        <img className='h-12' src={logo} alt="" />
                    </div>
                    <div className='mt-10 mb-4'>
                        <h1 className='text-xl font-semibold text-gray-700'>Admin login</h1>
                    </div>
                    <div className='my-4'>
                        <h1 className='text-sm text-center md:text-lg text-gray-500'>Please fill in your unique admin login details below</h1>
                    </div>
                    <div className='w-full flex flex-col items-center my-4'>
                        <h1 className='text-base w-9/12 font-medium text-gray-500'>Email address</h1>
                        <input
                            className='h-10 pl-3 w-9/12 focus:outline-none bg-gray-100 rounded-md'
                            type="text"
                            placeholder='type here'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <h1 className='text-base w-9/12 font-medium text-gray-500'>Password</h1>
                    <div className=' w-9/12 flex items-center justify-between  bg-gray-100 rounded-md'>
                        <input  value={pass} type={vis ? "text" :"password"} id='password' placeholder='Confirm Password' onChange={(e) => setPass(e.target.value)} 
                        className='h-10 pl-3 w-10/12 focus:outline-none bg-gray-100 rounded-md'/>
                        <div className='px-4 py-2 cursor-pointer' onClick={() => setvis(!vis)}>{vis ? <BsEyeFill /> : <BsEyeSlashFill /> }</div>
                    </div>
                    <div className='w-9/12 flex justify-end my-4'>
                        <button onClick={()=>navigate("/admin_forgot_password")} className='text-gray-500'>Forgot Password?</button>
                    </div>
                    <div className='w-9/12'>
                     <button
                        className='bg-deep-green h-10 rounded-md w-full text-white'
                        onClick={handleLogin} // Triggering login on click
                    >
                        Sign In
                    </button>
                    </div>
                </div>
                <div className='lg:w-6/12 flex items-center justify-center '>
                    <div className='11/12 pt-12 hidden lg:block'>
                        <img className=' h-96' src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </div>


  );
};

export default AdminLogin;
