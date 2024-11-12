import {
  Form,
  Button,
  Navbar,
  nav,
  Container,
  Carousel,
  Table,
  card,
} from "react-bootstrap";
import "./App.css";
import { BsTvFill, BsTelephoneFill, BsWalletFill } from "react-icons/bs";
import { FaIdCard } from "react-icons/fa6";
import logo from "../../../Images/Group 26.png";

import { Link, useNavigate } from "react-router-dom";
import { increment, decrement } from '../../../Redux/Reudecer/Action';
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const count = useSelector(state => state.counter);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function Show() {
    navigate("/Signup");
  }
  function AuditHome() {
    navigate("/LoginAdmin");
  }
  function Otp() {
    navigate("/Otp");
  }
  return (
    <>
      <div className="App backgoundlogin vh-100">
        <div className="headerLogin text-white row md:flex justify-between">
          <div className="col-md-5 flex p-3 px-5">
            <img src={logo} className="loginLogo mr-2" />
            <p className="text-white ml-2 mt_10">RETAILER</p>
           
         
          </div>
          <div className="col-md-2  p-3 px-5 py-2">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>navigate("/LoginUser")}>Other Login</button>
          </div>

        </div>

     
        <div className="flex flex-col items-center justify-center  vh_90 p-3">
          <div className="bg-white cardContainer p-6 max-w-sm w-full">
            <h3 className="mb-1 text-2xl font-bold text-center">Sign in</h3>
            
            <p className=" text-center text-neutral-500 ">Join now for exclusive perks!</p>
            <form>
            <div className="mb-3 px-2 mt-8">
              <div className="flex items-center border- border-gray-300 py-2">
               <input
                  class="w-full px-2 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  type="text"
                  id="pan"
                  placeholder="Enter pan"
                />
              </div>
            </div>
            </form>
            <button
              className="bg-blue-500 btn_l text-white px-4 py-2 rounded-md  w-full"
              type="submit"
              onClick={Otp}
            >
              Login
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

export default Login;
