import { useState } from "react";
import logo from "../../../Images/Group 26.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Otp({ setToken }) {  // Make sure to accept setToken as a prop
  const navigate = useNavigate();
  const location = useLocation();
  const [OtpRetailer, setOtpRetailer] = useState("");

  const  handleOtpSubmit = async ()=> {  // Renamed function to avoid confusion
    try {
      if (OtpRetailer !== "") {
        sessionStorage.setItem('token', JSON.stringify(OtpRetailer));
        await setToken(OtpRetailer);
        navigate("/Dashboard");
      } else {
        alert("Please enter OTP");
      }
    } catch (error) {
      console.error("Error in OTP submission:", error);
    }
  }

  function back() {
    navigate("/");
  }

  return (
    <>
      <div className="App backgoundlogin vh-100">
        <div className="headerLogin row">
          <div className="col-md-12 flex p-3 px-5">
            <img src={logo} className="loginLogo mr-2" alt="logo" />
            <p className="text-white ml-2 mt_10">RETAILER</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  vh_90 p-3">
          <div className="bg-white cardContainer p-6 max-w-sm w-full">
            <div className="">
              <h2 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                OTP Verification
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                Please enter the code sent to <br /> <strong>0000868094</strong>.
              </p>
            </div>
            <div className="flex mt-5">
              <span className="text-zinc-700 dark:text-zinc-300 ms-2">02:43</span>
              <span className="mx-2 text-zinc-700 dark:text-zinc-300">|</span>
              <a href="#" className="text-blue-600 dark:text-blue-400">
                Resend code
              </a>
            </div>
            <div className="mb-3 px-2">
              <div className="flex items-center border-gray-300 py-2">
                <input
                  name="otp"
                  onChange={(e) => setOtpRetailer(e.target.value)}
                  className="w-full px-2 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  type="text"
                  id="otp"
                  placeholder="Enter OTP"
                />
              </div>
            </div>
            <button
              className="bg-blue-500 btn_l text-white px-4 py-2 rounded-md w-full"
              type="submit"
              onClick={handleOtpSubmit}
            >
              Verify
            </button>
            <button
              className="bg-gray-500 flex mr-3 justify-center btn_bggray btn_l mt-3 text-dark px-4 py-2 rounded-md w-full"
              type="button"
              onClick={back}
            >
              <FaArrowLeft className="mr-3 mt-1" />
              Back
            </button>
            <div className="mt-3 text-center mt-6">
              <span>Not a member? </span>
              <Link to="/Signup" className="text-blue-500">
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
