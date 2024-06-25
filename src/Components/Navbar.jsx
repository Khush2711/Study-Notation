import { Link } from "react-router-dom";
import logo from '../assets/Logo.svg'
import { useState } from "react";
import toast from "react-hot-toast";

function Navbar({ isLoggedin, setIsLoggedin }) {

    function LoginHandler() {
        setIsLoggedin(!isLoggedin);
        if (!isLoggedin) toast.success("Logged in");
        else toast.success("Logged out");
    }

    return (
        <div className="flex justify-between pt-4 px-20">

            <div className="">
                <Link to='/'>
                    <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
                </Link>
            </div>


            <div className="">
                <ul className="flex gap-8">
                    <Link to='/' className="">Home</Link>
                    <Link to='/' className="">About</Link>
                    <Link to='/' className="">Contact</Link>
                </ul>
            </div>

            <div className="">

                {
                    !isLoggedin ?
                        <div className="flex gap-4">
                            <Link to="/login">
                                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 w-full" onClick={LoginHandler}>Login</button>
                            </Link>

                            <Link to="/signup">
                                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 w-full">sign Up</button>
                            </Link>
                        </div>
                        :
                        <div className="flex gap-4">
                            <Link to="/">
                                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 w-full" onClick={LoginHandler}>Log Out</button>
                            </Link>

                            <Link to="/dashboard">
                                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 w-full">Dashboard</button>
                            </Link>
                        </div>
                }
            </div>

        </div>
    );
}

export default Navbar;
