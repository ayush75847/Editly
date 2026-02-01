import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo/logo.png'
import { api_base_url } from "../helper";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const navigate = useNavigate();

   const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    
    fetch(api_base_url + '/login', {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            pwd: pwd
        })
    })
    .then(res => {
        console.log("Response received:", res);
        return res.json();
    })
    .then(data => {
        console.log("=== FULL DATA ===");
        console.log(data);
        console.log("data.success:", data.success);
        console.log("Type of success:", typeof data.success);
        
        if (data.success) {
            console.log("SUCCESS BLOCK ENTERED!");
            
            localStorage.setItem('token', data.token);
            console.log("Token set. Check:", localStorage.getItem('token'));
            
            localStorage.setItem('isLoggedIn', 'true');
            console.log("isLoggedIn set. Check:", localStorage.getItem('isLoggedIn'));
            
            toast.success("Login Successful!");
            
            console.log("About to redirect in 500ms...");
            setTimeout(() => {
                console.log("Redirecting now!");
                window.location.href = '/';
            }, 500);
            
        } else {
            console.log("FAILED - entered else block");
            console.log("Error message:", data.msg);
            toast.error(data.msg);
        }
    })
    .catch(err => {
        console.error("ERROR CAUGHT:", err);
        toast.error("Failed to login");
    });
}
    return (
        <>
            <div className='con flex flex-col items-center justify-center min-h-screen bg-[#121212]'>
                <form onSubmit={submitForm} className='w-[25vw] flex flex-col items-center bg-[#1a1a1a] p-[10px] rounded-lg border border-[#2b2b2b] rounded-lg shadow-xl shadow-black/50'>
                    <img className='w-[250px] h-[100px] object-cover' src={logo} alt="" />

                    <div className="inputBox">
                        <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" placeholder='Email' required />
                    </div>

                    <div className="inputBox">
                        <input onChange={(e) => { setPwd(e.target.value) }} value={pwd} type="password" placeholder='Password' required />
                    </div>

                    <p className="mt-4 text-[13px] text-gray-400 tracking-wide">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-[#3a7afe] font-semibold hover:underline hover:text-[#4c8aff] transition duration-200"
                        >
                            Sign Up
                        </Link>
                    </p>

                    <button className='btnNormal'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login
