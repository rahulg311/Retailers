import { Input } from 'antd';
import React, { useState } from 'react';
import { Form } from "react-bootstrap";

import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ReatlierNavbar from '../Retailer/RetailerNavbar';
import { baseUrl } from '../../Constant/constant';
import { ServicesApi } from '../Api';
import { MethodNames } from '../../Constant/methodNames';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const ChangePassword = () => {
    const navigate = useNavigate();
    const GetUserid =sessionStorage.getItem('token');

    const [ChangePass, setChangePass ] = useState({
      UserId: GetUserid,
      OldPassword:"",
      NewPassword:"",
      ConfirmPassword:""
  })




    // Validation checks
    const hasUpperCase = /[A-Z]/.test(ChangePass.NewPassword);
    const hasLowerCase = /[a-z]/.test(ChangePass.NewPassword);
    const hasNumber = /[0-9]/.test(ChangePass.NewPassword);
    const hasSpecialChar = /[@!#]/.test(ChangePass.NewPassword);
    const isMinLength = ChangePass.NewPassword.length >= 8;
    const passwordsMatch = ChangePass.NewPassword === ChangePass.ConfirmPassword;
  //----------- handle change data ---------------
    const handleChange =(e)=>{
      const { name, value } = e.target;
      setChangePass({...ChangePass , [name]:value})
  
    }
  
    //----------- user login  ---------------
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      console.log( !hasUpperCase ,!hasLowerCase , hasNumber)
      if(ChangePass?.NewPassword !=ChangePass?.ConfirmPassword){
        toast.error("confirm passwrod does not match");
        return

       
      }if(hasUpperCase === false || hasLowerCase === false || hasNumber === false || hasSpecialChar  === false ||isMinLength  === false){
        toast.error("please correct formmet password");
        return

      }

      console.log("res------Chnage", ChangePass);
      let apiUrl = baseUrl + MethodNames.UpsertCreateUser;
      let res = await ServicesApi(apiUrl, ChangePass);
      console.log("res------Chnage", res);
      try {
        if (res.UpsertCreateUser[0].RecordStatus === "Success") {
          toast.success(" Login to Successfully");
         
    
          setTimeout(() => {
          navigate("/UserList")
          },1000);
          setChangePass({
            OldPassword:"",
            NewPassword:"",
            ConfirmPassword:""
          })
        } else if(res.UpsertCreateUser[0].RecordStatus === "Failed"){
          toast.error(" Worng Old Password");
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
    <div>
    <ReatlierNavbar/>
    </div>
    
    <div className="flex flex-col items-center justify-center  vh_90 p-3  vh-100">
    <div className="bg-white cardContainer p-6 max-w-lg w-full">
      <h3 className="mb-1 text-2xl font-bold text-cente">
      Change Password
      </h3>
     <Form onSubmit={handleSubmit}>
        <div className="mb-3 px-2 mt-8">
          <div className="flex items-center border- border-gray-300 py-2">
            <input 
              class="w-full px-2 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              type="text"
              name="OldPassword"
              value={ChangePass.OldPassword}
              onChange={(e)=>handleChange(e)}
              placeholder="Old Password"
              required
            />
          </div>
          <div className="flex items-center border- border-gray-300 py-2">
          <Input.Password
            size="large"
            type="password"
            name="NewPassword"
            value={ChangePass.NewPassword}
            onChange={(e)=>handleChange(e)}
            placeholder=" New Password"
            required
          />
         
          </div>
          <div className="flex items-center border- border-gray-300 py-2">
          <Input.Password
            size="large"
            disabled={ ChangePass &&ChangePass.NewPassword.length >0? false:true}
            type="password"
            name="ConfirmPassword"
            value={ChangePass.ConfirmPassword}
            onChange={(e)=>handleChange(e)}
            placeholder="Confirm Password"
            required
          />

          </div>
          {/* Validation change password Messages */}

         { ChangePass &&ChangePass.NewPassword.length >0?
          <div>
           <p className="flex items-center">
                {hasUpperCase ? (
                    <>
                        <FaCheckCircle className="text-green-600 mr-2" />
                        <span className="text-green-500">Contains at least one uppercase letter</span>
                    </>
                ) : (
                    <>
                        <FaTimesCircle className="text-rose-600 mr-2" />
                        <span className="text-rose-500">Must contain at least one uppercase letter</span>
                    </>
                )}
            </p>

            <p className="flex items-center">
                {hasLowerCase ? (
                    <>
                        <FaCheckCircle className="text-green-600 mr-2" />
                        <span className="text-green-500">Contains at least one lowercase letter</span>
                    </>
                ) : (
                    <>
                        <FaTimesCircle className="text-rose-600 mr-2" />
                        <span className="text-rose-500">Must contain at least one lowercase letter</span>
                    </>
                )}
            </p>

            <p className="flex items-center">
                {hasNumber ? (
                    <>
                        <FaCheckCircle className="text-green-600 mr-2" />
                        <span className="text-green-500">Contains at least one number</span>
                    </>
                ) : (
                    <>
                        <FaTimesCircle className="text-rose-600 mr-2" />
                        <span className="text-rose-500">Must contain at least one number</span>
                    </>
                )}
            </p>

            <p className="flex items-center">
                {hasSpecialChar ? (
                    <>
                        <FaCheckCircle className="text-green-600 mr-2" />
                        <span className="text-green-500">Contains at least one special character (@, !, #)</span>
                    </>
                ) : (
                    <>
                        <FaTimesCircle className="text-rose-600 mr-2" />
                        <span className="text-rose-500">Must contain at least one special character (@, !, #)</span>
                    </>
                )}
            </p>

            <p className="flex items-center">
                {isMinLength ? (
                    <>
                        <FaCheckCircle className="text-green-600 mr-2" />
                        <span className="text-green-500">Password meets the minimum length requirement</span>
                    </>
                ) : (
                    <>
                        <FaTimesCircle className="text-rose-600 mr-2" />
                        <span className="text-rose-500">At least 8 characters required</span>
                    </>
                )}
            </p>

            <p className="flex items-center">
                {ChangePass.ConfirmPassword.length > 0 && passwordsMatch ? (
                    <>
                        <FaCheckCircle className="text-green-600 mr-2" />
                        <span className="text-green-600">Passwords match</span>
                    </>
                ) : ChangePass.ConfirmPassword.length > 0 ? (
                    <>
                        <FaTimesCircle className="text-rose-600 mr-2" />
                        <span className="text-rose-600">Passwords do not match</span>
                    </>
                ) : null}
            </p>
            </div>
          :""
         }

   </div>


        {/* <div>
            Check if the passwords do not match and display an error message
            <p className="flex items-center">
                {ChangePass.ConfirmPassword.length > 0 && ChangePass.NewPassword !== ChangePass.ConfirmPassword ? (
                    <>
                        <FaTimesCircle className="text-rose-500 mr-2" />
                        <span className="text-rose-500">Passwords do not match</span>
                    </>
                ) : ChangePass.NewPassword.length > 0 && ChangePass.ConfirmPassword.length > 0 ? (
                    <>
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span className="text-green-500">Passwords match</span>
                    </>
                ) : null}
            </p> 

            Check if the new password meets the minimum length requirement
            <p className="flex items-center">
                { ChangePass.NewPassword.length >= 8 ? (
                    <>
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span className="text-green-500">The minimum length is reached</span>
                    </>
                ) : ChangePass.NewPassword.length > 0? (
                    <>
                        <FaTimesCircle className="text-rose-500 mr-2" />
                        <span className="text-rose-500">At least 8 characters required</span>
                    </>
                ) :null}
            </p>
        </div>  */}
        <button  className="bg-blue-500 btn_l text-white px-4 py-2 rounded-md  w-full" >
         Change Password 
        </button>
      </Form>
    </div>
  </div>
  </div>
  </>
  );
}

export default ChangePassword;
