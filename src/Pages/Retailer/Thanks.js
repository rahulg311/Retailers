import React from "react";
import thankslogo from "../../Images/thankslogos.png";
import logo from "../../Images/Group 26.png";
// import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Celebration from "../Users/Celebration";
// import logo from "../../../Images/Group 26.png";

const Thanks = () => {
  const navigate = useNavigate();

  function onHandle(){
    sessionStorage.clear("Pancard")
    navigate("/")
  }
  
  return (
    <div className="h-full">
      <Celebration/>
      <div className="headerLogin row  ">
        <div className="col-md-12 flex p-3 px-5">
          <img src={logo} className=" mr-2" />
          <p className="text-white ml-2 mt_10">RETAILER</p>
        </div>
      </div>
      <div class="bg-zinc-10 flex items-center justify-center  p-4 mt-5 h-full mt-10 ">
        <div class="max-w-sm mx-auto p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg text-center mt-5 cardContainer">
          <div class="mb-4">
            <img src={thankslogo} alt="completion badge" class="mx-auto" />
          </div>
          <h2 class="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
            Thank you for completing registration form.
          </h2>
          <button
              className="bg-gray-500 flex mr-3 justify-center  btn_bggray btn_l mt-3 text-dark px-4 py-2 rounded-md  w-full"
              type="submit"
              onClick={onHandle}
              
            >
             {/* <FaArrowLeft className="mr-3 mt-1" /> */}
              Thank You
            </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
