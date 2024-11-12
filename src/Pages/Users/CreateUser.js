import React, { useDebugValue, useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import logo from "../../Images/Group 26.png";
import { Input } from "antd";
import axios from "axios";
import { ServicesApi } from "../Api";
import { baseUrl } from "../../Constant/constant";
import { MethodNames } from "../../Constant/methodNames";
import { toast, ToastContainer } from "react-toastify";
import ReatlierNavbar from '../Retailer/RetailerNavbar';

const CreateUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { EditUserList } = location.state || {}; // Fallback to {} in case state is undefined
  const EditUserListLength = EditUserList && ( Object.keys(EditUserList).length > 0)
  const [UserRegisterdata, setUserRegisterdata] = useState({
    UserId: "",
    UserName: "",
    Designation: "",
    City: "",
    Gender: "",
    Mobile: "",
    Email: "",
    Password: "",
    RoleId:"",
    PasswordHash: "",
    CreateBy: "admin",
  });

  console.log("UserRegisterdata,",UserRegisterdata)
  const [ViewRoleList, setViewRoleList] = useState([]);


 

  console.log("EditUserList ", EditUserList)
  useEffect(()=>{
    if (EditUserListLength) {
      setUserRegisterdata(EditUserList)
   }
   },[EditUserList])
   
   useEffect(()=>{
    ViewRole()
   },[])


     //  view role api call
  const ViewRole = async () => {
    const UserRole = {
      OperationType: "Viewall",
      UserId: "Admin",
    };

    let apiUrl = baseUrl + MethodNames.ViewRole;
    let res = await ServicesApi(apiUrl, UserRole);
    if (res?.ViewRole) {
      setViewRoleList(res?.ViewRole);
    } else {
      console.log(" ViewRole no data");
    }
  };

  //  -------------- user create code ------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const UserRegStrigify = JSON.stringify(UserRegisterdata);
    console.log("res------2",UserRegisterdata);
    const UserReg = {
      OperationType: "Add",
      JsonData: UserRegStrigify,
    };
    
    let apiUrl = baseUrl + MethodNames.UpsertMasterUser;
    let res = await ServicesApi(apiUrl, UserReg);
    console.log("res------", res.error);
    try {
      if (res.UpsertMasterUser[0].RecordStatus === "Success") {
        toast.success("Success has been User registered.");
        setTimeout(()=>{
          navigate("/UserList")
        },1000)
        setUserRegisterdata({
          UserName: "",
          Designation: "",
          City: "",
          Gender: "",
          Address:"",
          Mobile: "",
          Email: "",
          RoleId:"",
          Password: "",
          PasswordHash: "",
          CreateBy: "",
        });
      }
    } catch (error) {
      toast.error(res.error);
      console.log(error);
    }

    console.log("UserRegisterdata", UserRegisterdata);
  };
    //  -------------- user update  code ------------------
    const handleUpdateUser = async (e) => {
      e.preventDefault();
      const UserRegStrigify = JSON.stringify(UserRegisterdata);
      console.log("res------2",UserRegisterdata);
      const UserReg = {
        OperationType: "Update",
        JsonData: UserRegStrigify,
      };
      
      let apiUrl = baseUrl + MethodNames.UpsertMasterUser;
      let res = await ServicesApi(apiUrl, UserReg);
      console.log("res------ Update", res.error);
      try {
        if (res.UpsertMasterUser[0].RecordStatus === "Success") {
          toast.success("Success has been User Update.");
           setTimeout(()=>{
            navigate("/UserList")
          },1000)
        }
      } catch (error) {
        toast.error(res.error);
        console.log(error);
      }
  
      console.log("UserRegisterdata", UserRegisterdata);
    };
  

 //  -------------- handle data------------------
  const changeData = (e) => {
    const { name, value } = e.target;
    setUserRegisterdata({ ...UserRegisterdata, [name]: value });
  };

  return (
    <div className="h-full">
      <ToastContainer />
       <div className="min-h-20">
      <ReatlierNavbar/>
      </div>
       <div className=" flex items-center justify-center p-2 mt-2 h-full">
        <div className="bg-white shadow-m shadow_css rounded-lg  py-2 px-6 w-full max-w-3xl">
          <div className="flex flex-wrap items-center mb-">
            <h5 className=" text-xl font-bold p-0 m-1 "> {EditUserListLength ? <>Update User</> :<>Create User</> }</h5>
          </div>
          <div className="bg-white p-1 rounded-lg shadow-outer">
            <h3 className="text-lg font-normal mb-">Personal details</h3>
            <Form type="submit" onSubmit={  EditUserListLength ?handleUpdateUser:handleSubmit} >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="UserName"
                  disabled={EditUserListLength ? true:false }
                  value={UserRegisterdata.UserName}
                  onChange={(e) => changeData(e)}
                  placeholder="Full name"
                  className={
                    EditUserListLength 
                        ? "no-drop  bg-gray-50 border border-zinc-300 rounded-lg p-2 w-full"
                        : " border border-zinc-300 rounded-lg p-2 w-full"
                    }
                
                  required
                />

                <select
                  name="Gender"
                  value={UserRegisterdata.Gender}
                  onChange={(e) => changeData(e)}
                  required
                  class="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled value="">
                    Choose a Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

              </div>

              <h3 className="text-lg font-normal mb-2 mt-2">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="Email"
                  value={UserRegisterdata.Email}
                  onChange={(e) => changeData(e)}
                  placeholder="Email Address"
                  className="border border-zinc-300 rounded-lg p-2 w-full"
                  required
                />
                <input
                  type="number"
                  name="Mobile"
                  value={UserRegisterdata.Mobile}
                  onChange={(e) => changeData(e)}
                  placeholder="Mobile Number"
                  className="border border-zinc-300 rounded-lg p-2 w-full"
                  required
                />
                  <input
                  type="text"
                  name="City"
                  value={UserRegisterdata.City}
                  onChange={(e) => changeData(e)}
                  placeholder="City"
                  className="border border-zinc-300 rounded-lg p-2 w-full"
                  required
                />
                <input
                  type="text"
                  name="Address"
                  value={UserRegisterdata.Address}
                  onChange={(e) => changeData(e)}
                  placeholder="Address"
                  className="border border-zinc-300 rounded-lg p-2 w-full"
                  required
                />

                 <select
                  name="RoleId"
                  value={UserRegisterdata.RoleId}
                  onChange={(e) => changeData(e)}
                  required
                  class="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled value="0">
                    Choose a Role
                  </option>
                  {
                    ViewRoleList?.map((i)=>{
                      return(
                        <><option value={i.RoleId}>{i.Role}</option> </>
                      )
                    })
                  }
               
                </select>
              </div>
              <h3 className="text-lg font-normal mb-2 mt-2">
                Account Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="UserId"
                  value={UserRegisterdata.UserId}
                  onChange={(e) => changeData(e)}
                  placeholder="User Id"
                  className="border border-zinc-300 rounded-lg p-2 w-full"
                  required
                />
                <input
                  type="text"
                  name="Designation"
                  value={UserRegisterdata.Designation}
                  onChange={(e) => changeData(e)}
                  placeholder="Designation"
                  className="border border-zinc-300 rounded-lg p-2 w-full"
                  required
                />
           

           {
            EditUserListLength ? "" :
             <> <Input.Password
                  size="large"
                  type="password"
                  name="Password"
                  value={UserRegisterdata.Password}
                  onChange={(e) => changeData(e)}
                  placeholder="Password"
                  required
                />
                <Input.Password
                  size="large"
                  disabled={UserRegisterdata.Password ?false:true}
                  type="password"
                  value={UserRegisterdata.PasswordHash}
                  name="PasswordHash"
                  onChange={(e) => changeData(e)}
                  placeholder="Confirm Password"
                  required
                />

                {
                    UserRegisterdata.PasswordHash && UserRegisterdata.Password != UserRegisterdata.PasswordHash ? <p className="text-rose-600">Passwords did not match</p>:""
                }
                
                </>
              }
              </div>
              <div className=" grid grid-cols-1 md:flex justify-end mt-4">
                {/* <div className="text-center ">
                  <span>Already have an account? </span>
                  <Link to="/LoginUser" className="text-blue-500">
                    Log in
                  </Link>
                </div> */}
                {
                  EditUserListLength ?
                  <button className="bg-blue-800 text-white px-4 py-2 mt-2 md:mt-0  rounded"  >
                  Update User
                </button>:<button className="bg-blue-800 text-white px-4 py-2 mt-2 md:mt-0  rounded"  >
                  Create User
                </button>
                }
                
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
