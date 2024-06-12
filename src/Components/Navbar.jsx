import { Link } from "react-router-dom";
import logo from '../assets/Logo.svg'
import { useState } from "react";

function Navbar({ isLoggedin, setIsLoggedin }) {

    function LoginHandler()
    {
        setIsLoggedin(!isLoggedin);
    }

    return (
        <div className="flex bg-blue-500 justify-evenly p-2">

            <div className="">
                <Link to='/'>
                    <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
                </Link>
            </div>


            <div className="">
                <ui className="flex gap-2">
                    <Link to='/' className="">Home</Link>
                    <Link to='/' className="">About</Link>
                    <Link to='/' className="">Contact</Link>
                </ui>
            </div>

            <div className="flex gap-4 w-[20%] ml-5">

                {
                    !isLoggedin ?
                        <>
                            <Link to="/login">
                                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={LoginHandler}>Login</button>
                            </Link>

                            <Link to="/signup">
                                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">sign Up</button>
                            </Link>
                        </>
                        :
                        <>
                            <Link to="/">
                                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={LoginHandler}>Log Out</button>
                            </Link>

                            <Link to="/dashboard">
                                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
                            </Link>
                        </>
                }






            </div>

        </div>
    );
}

export default Navbar;
