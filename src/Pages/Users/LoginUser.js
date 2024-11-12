import { Form, Button, Navbar,nav,Container,Carousel,Table,card} from "react-bootstrap";
import { FaIdCard } from "react-icons/fa6";
import logo from "../../Images/Group 26.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { baseUrl } from "../../Constant/constant";
import { MethodNames } from "../../Constant/methodNames";
import { toast, ToastContainer } from "react-toastify";
import { ServicesApi } from "../Api";
import { Input } from "antd";

function LoginUser({setToken}) {
  const navigate = useNavigate();

  const [UserLogin, setUserLogin ] = useState({
    UserId: "",
    Password:""
})
//----------- handle change data ---------------
  const handleChange =(e)=>{
    const { name, value } = e.target;
    setUserLogin({...UserLogin , [name]:value})

  }

  //----------- user login  ---------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    let apiUrl = baseUrl + MethodNames.UserLogin;
    let res = await ServicesApi(apiUrl, UserLogin);
    console.log("res------", res.UserLogin);
    try {
      
      if(res.UserLogin[0].RecStatus === "Failure"){
        toast.error(" Worng UserId Password");
      } else if (res?.UserLogin.length>0) {
        toast.success(" Login to Successfully");
        sessionStorage.setItem('token', UserLogin.UserId);
        sessionStorage.setItem('UserDetails', JSON.stringify((res?.UserLogin)))
        await setToken(UserLogin.UserId);
        setTimeout(() => {
        navigate("/Dashboard")
        },1000);
        setUserLogin({
          UserId: "",
          Password:""
        })
      }
    } catch (error) {
      toast.error(res.error);
      console.log(error);
    }
  };
  
  return (
    <>
      <div className="App backgoundlogin vh-100">
      <ToastContainer />
        {/* <div className="headerLogin row">
          <div className="col-md-12 flex p-3 px-5">
            <img src={logo} className="loginLogo mr-2" />
            <p className="text-white ml-2 mt_10">RETAILER</p>
          </div>
        </div> */}
        <div className="headerLogin text-white row md:flex justify-between">
          <div className="col-md-5 flex p-3 px-5">
            <img src={logo} className="loginLogo mr-2" />
            <p className="text-white ml-2 mt_10">RETAILER</p>
          </div>
         
          <div className="col-md-2  p-3 px-5 py-2">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>navigate("/")}>Other Login</button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center  vh_90 p-3">
          <div className="bg-white cardContainer p-6 max-w-sm w-full">
            <h3 className="mb-1 text-2xl font-bold text-center">
              {" "}
              User Sign in
            </h3>

            <p className=" text-center text-neutral-500">
              Join now for exclusive perks!
            </p>
            <Form onSubmit={handleSubmit}>
              <div className="mb-3 px-2 mt-8">
                <div className="flex items-center border- border-gray-300 py-2">
                  <input
                    class="w-full px-2 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    type="text"
                    name="UserId"
                    value={UserLogin.UserId}
                    onChange={(e)=>handleChange(e)}
                
                    placeholder="User Id"
                    required
                  />
                </div>
                <div className="flex items-center border- border-gray-300 py-2">
                <Input.Password
                  size="large"
                  type="password"
                  name="Password"
                  value={UserLogin.Password}
                  onChange={(e)=>handleChange(e)}
                  placeholder="Password"
                  required
                />
               
                </div>
              </div>
              <button  className="bg-blue-500 btn_l text-white px-4 py-2 rounded-md  w-full" >
                Sign in
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginUser;
