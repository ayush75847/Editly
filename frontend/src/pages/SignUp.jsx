import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo/logo.png'
import { api_base_url } from "../helper";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const navigate= useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        fetch(api_base_url + '/signup', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                pwd: pwd
            })
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    navigate('/login');
                    
                } else {
                    toast.error(data.msg);
                }
            })
    }
    return (
        <>
            <div className='con flex flex-col items-center justify-center min-h-screen bg-[#121212]'>
                <form onSubmit={submitForm} className='w-[25vw] flex flex-col items-center bg-[#1a1a1a] p-[10px] rounded-lg border border-[#2b2b2b] rounded-lg shadow-xl shadow-black/50'>
                    <img className='w-[250px] h-[100px] object-cover' src={logo} alt="" />

                    <div className="inputBox">
                        <input onChange={(e) => { setFullName(e.target.value) }} value={fullName} type="text" placeholder='Full Name' required />
                    </div>

                    <div className="inputBox">
                        <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" placeholder='Email' required />
                    </div>

                    <div className="inputBox">
                        <input onChange={(e) => { setPwd(e.target.value) }} value={pwd} type="password" placeholder='Password' required />
                    </div>

                    <p className="mt-4 text-[13px] text-gray-400 tracking-wide">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-[#3a7afe] font-semibold hover:underline hover:text-[#4c8aff] transition duration-200"
                        >
                            Login
                        </Link>
                    </p>

                    <button className='btnNormal'>Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp