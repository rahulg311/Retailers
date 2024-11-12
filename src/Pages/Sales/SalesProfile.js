import React, { useState, useEffect } from 'react';
import { Form, Button, Navbar, nav } from 'react-bootstrap';
import { MdSupervisorAccount } from "react-icons/md";
import './App.css';
import { BsTvFill,BsTelephoneFill,BsWalletFill,BsFillEnvelopeFill } from "react-icons/bs";
import { useNavigate,useLocation } from 'react-router-dom';
import SalesHeader from './SalesHeader';

function SalesProfile() {
  const navigate = useNavigate();
  const location = useLocation();



  return (
    <>
<SalesHeader/>
<p class="font-weight-normal mt-1 text-center col-md-3 col-12"  style={{backgroundColor:"skyblue"}}>My Account</p>

    {/* my profile  */}
    <div class="mt-4 container">
    <div class="card">
  <div class="card-header text-center">
    My Profile
  </div>
  <div class="card-body">
    <blockquote class="blockquote">
    <ul class="list-group ">
        <div class="row">
        <div class="col-sm-6">
<li class="list-group-item ">Denial Singh</li><br></br></div>
<div class="col-sm-6">
  <li class="list-group-item ">denial@gmail.com</li> <br></br>
  </div>
  <div class="col-sm-6">
  <li class="list-group-item col-sm-12">893357890</li> <br></br>
  </div>
  <div class="col-sm-6">
  <li class="list-group-item col-sm-12">empty</li> <br></br>
  </div>
  
  </div>
</ul>

      <button class="btn btn-primary mt-2">Edit profile</button>
    </blockquote>
  </div>
</div>
</div>
  
    </>
  );
}

export default SalesProfile;
