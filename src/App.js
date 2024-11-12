import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "../src/styles/style.css";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { Helmet } from "react-helmet"; // Import Helmet

// retailer auth Routes
import Login from "./Pages/Retailer/auth/Login";
import Signup from "./Pages/Retailer/auth/Signup";
import Otp from "./Pages/Retailer/auth/Otp";
import Myaccount from "./Pages/Retailer/auth/Myaccount";
// retailer Routes
import Home from "./Pages/Retailer/Home";
import Pendinginvoice from "./Pages/Retailer/Pendinginvoice";
import Earnings from "./Pages/Retailer/Earnings";
import Payouts from "./Pages/Retailer/Payouts";
import Addaccount from "./Pages/Retailer/Addaccount";
import Addpersonald from "./Pages/Retailer/Addpersonald";
import Allearnings from "./Pages/Retailer/Allearnings";
import InvoiceForm from "./Pages/Retailer/InvoiceForm";
import Signature from "./Pages/Retailer/Signature";
// admin Routes
import Login_admin from "./Pages/Admin/Login_admin";
// Audit Routes
import AuditHeader from "./Pages/Audit/AuditHeader";
import AuditHome from "./Pages/Audit/AuditHome";
import AuditKycreqs from "./Pages/Audit/AuditKycreqs";
import AuditVeryfied from "./Pages/Audit/AuditVeryfied";
import AuditDetails from "./Pages/Audit/AuditDetails";
import AuditProfile from "./Pages/Audit/AuditProfile";
// Sales Routes
import SalesHome from "./Pages/Sales/SalesHome";
import SalesProfile from "./Pages/Sales/SalesProfile";
import SalesVerified from "./Pages/Sales/SalesVerified";
// Client Routes
import ClientHome from "./Pages/Client/ClientHome";
import WelcomePages from "./Pages/Retailer/auth/WelcomePages";

import Thanks from "./Pages/Retailer/Thanks";
import KycDetiles from "./Pages/Retailer/auth/KycDetiles";

import Company from "./Pages/Admin/Company";
import ProgramMaster from "./Pages/Admin/ProgramMaster";
import ProgramHead from "./Pages/Admin/ProgramHead";
import Dashboard from "./Pages/Retailer/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";
import LoginUser from "./Pages/Users/LoginUser";
import CreateUser from "./Pages/Users/CreateUser";
import UserList from "./Pages/Users/UserList";
import ChangePassword from "./Pages/Users/ChangePassword";
import Celebration from "./Pages/Users/Celebration";
import RoleMapping from "./Pages/Users/RoleMapping";
import axios from "axios";
import { baseUrl } from "./Constant/constant";
import { MethodNames } from "./Constant/methodNames";
import KYCAudit from "./Pages/Audit/KYCAudit";
import KycStatus from "./Pages/Audit/KycStatus";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const GetUserid = sessionStorage.getItem("token");
  const [masterMenu, setMasterMenu] = useState([]);
  useEffect(() => {
    if (token) {
      setUser(token);
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [token]);
  useEffect(() => {
    fetchMasterMenu();
  }, []);

  const fetchMasterMenu = async () => {
    const menudata = {
      OperationType: "Viewall",
      UserId: GetUserid,
    };

    let url = baseUrl + MethodNames.ViewUserMenu;
    console.log("----------1", menudata, url);
    try {
      const response = await axios.post(url, menudata); // Replace with your API endpoint
      // const data = await response.json();
      console.log("response data api0-----------", response.data.ViewUserMenu);
      setMasterMenu(response?.data?.ViewUserMenu);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching master menu:", error);
      setLoading(false);
    }
  };

  console.log("App user----:", user, masterMenu);
  console.log("App token:", token);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Retailer auth route */}
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Otp" element={<Otp setToken={setToken} />} />
      <Route
        path="/Signup"
        element={
          // <ProtectedRoute user={user}>
          <>
            <Helmet>
              <title>Signup - Retailer</title>
            </Helmet>
            <Signup />
          </>
          
        
          // </ProtectedRoute>
        }
      />
      <Route
        path="/KycDetiles"
        element={
          // <ProtectedRoute user={user}>
          <KycDetiles />
          // </ProtectedRoute>
        }
      />
        <Route
        path="/KYCAudit"
        element={
          <ProtectedRoute user={user}>
          <KYCAudit />
           </ProtectedRoute>
        }
      />
        <Route
        path="/KycStatus"
        element={
          <ProtectedRoute user={user}>
          <KycStatus />
         </ProtectedRoute>
        }
      />
      



      <Route
        path="/Thanks"
        element={
          // <ProtectedRoute user={user}>
          <Thanks />
          // </ProtectedRoute>
        }
      />
        <Route
        path="/CreateUser"
        element={
          <ProtectedRoute user={user}>
          <CreateUser />
          </ProtectedRoute>
        }
      />
          <Route
        path="/KycStatus"
        element={
          <ProtectedRoute user={user}>
          <KycStatus />
          </ProtectedRoute>
        }
      />
      

      {/* Users Routes */}
      <Route path="/LoginUser" element={<LoginUser setToken={setToken} />} />
      {masterMenu &&
        masterMenu?.map((menu) => (
          <Route
            key={menu.PageId}
            path={`/${menu.URL}`}
            element={
              <ProtectedRoute user={token}>
                <Helmet>
                <title>{menu.URL} - Retailer</title>
               </Helmet>
                {React.createElement(getComponentByName(menu.URL))}
              </ProtectedRoute>
            }
          />
        ))}
    </Routes>
  );
}

export default App;

const getComponentByName = (name) => {
  const components = {
    Signup: Signup,
    KycDetiles: KycDetiles,
    Thanks: Thanks,
    Dashboard: Dashboard,
    WelcomePages: WelcomePages,
    Loginadmin: Login_admin,
    Myaccount: Myaccount,
    Home: Home,
    Addaccount: Addaccount,
    Addpersonald: Addpersonald,
    Earnings: Earnings,
    Pendinginvoice: Pendinginvoice,
    Payouts: Payouts,
    InvoiceForm: InvoiceForm,
    Allearnings: Allearnings,
    Signature: Signature,
    AuditHeader: AuditHeader,
    AuditHome: AuditHome,
    AuditKycreqs: AuditKycreqs,
    AuditVeryfied: AuditVeryfied,
    AuditDetails: AuditDetails,
    AuditProfile: AuditProfile,
    SalesHome: SalesHome,
    SalesProfile: SalesProfile,
    SalesVerified: SalesVerified,
    Company: Company,
    Program: ProgramMaster,
    ProgramHead: ProgramHead,
    ClientHome: ClientHome,
    LoginUser: LoginUser,
    // CreateUser: CreateUser,
    UserList: UserList,
    ChangePassword: ChangePassword,
    Celebration: Celebration,
    RoleMapping: RoleMapping,
    Masters:Company
  };

  return components[name] || NotFound; // Default to a component if name not found
};
