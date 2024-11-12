import { Form, Button } from "react-bootstrap";
import "./App.css";
import { BsTvFill, BsTelephoneFill, BsWalletFill } from "react-icons/bs";
import { useNavigate, useLocation, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../../../Images/Group 26.png";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setField, signup } from "../../../Redux/Reudecer/RetailerRegistration";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { RetailerSignup, loading } = useSelector((state) => state);
  console.log("RetailerSignup",RetailerSignup)

   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ RetailerSignup, navigate }));
  };

  return (
    <>
      <ToastContainer />
      <div className="App backgoundlogin vh-100">
        <div className="headerLogin row">
          <div className="col-md-12 flex p-3 px-5">
            <img src={logo} className="loginLogo mr-2" />
            <p className="text-white ml-2 mt_10">RETAILER</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  vh_90 p-3">
          <div className="bg-white cardContainer p-6 max-w-sm w-full">
            <h3 className="mb-1 text-2xl font-bold text-center">Sign up</h3>
            <p className=" text-center ">Join now for exclusive perks!</p>
            <Form onSubmit={handleSubmit}>
              <div className="mb-3 px-2 mt-8">
                <div className="flex items-center border- border-gray-300 py-2">
                  <input
                    class="w-full px-2 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    type="text"
                    value={RetailerSignup.PanNo}
                    onChange={(e) => dispatch(setField({ field: 'PanNo', value: e.target.value.slice(0, 10) }))}
                    placeholder="Enter pan"
                    required
                  />
                </div>
                <div className="flex items-center border- border-gray-300 py-2">
                  <input
                    class="w-full px-2 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    type="number"
                    value={RetailerSignup.Mobile}
                    onChange={(e) => dispatch(setField({ field: 'Mobile', value: e.target.value.slice(0, 10) }))}
                    placeholder="Mobile number"
                    required
                  />
                </div>
              </div>
                 <button
                className="bg-blue-500 btn_l text-white px-4 py-2 rounded-md  w-full"
                type="submit"
              >
                Sign up
              </button>
            </Form>
            <div className="mt-3 text-center mt-6">
              <span>Already have an account? </span>
              <Link to="/" className="text-blue-500">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
