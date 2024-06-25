import React from "react";
import SignUp from "../Pages/Signup";
import Login from "../Pages/Login";
import grid from "../assets/frame.png"
import loginImg from "../assets/login.png"

function Template({ title, heading1, heading2, formType }) {
    return (
        <div className="flex items-center h-[90vh] w-[90vw] mx-auto justify-evenly items-center bg-richblack-900">

            <div className="flex flex-col gap-12 w-[50%]">

                <div className="">
                    <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                    <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                        <span className="text-richblack-100">{heading1}</span>
                        <br />
                        <span className="text-[0.9rem] text-blue-100 italic">{heading2}</span>
                    </p>
                </div>

                {
                    formType === "signup" ?
                        <SignUp />
                        :
                        <Login />
                }

                <div className="">
                    <div>
                        <button>Sign in</button>
                    </div>
                    <p>OR</p>
                    <div className="">
                        <button>Sign in with google</button>
                    </div>
                </div>

            </div>

            <div className="">
                <div className="relative">
                    <img src={loginImg} alt="" width="450px" className="absolute -top-5 -left-5" />
                    <img src={grid} alt="" width="450px" className="" />
                </div>
            </div>



        </div>
    );
}

export default Template;
