import React, { useState, useEffect } from 'react';
import { Form, Button, Navbar, nav } from 'react-bootstrap';
import './App.css';
import { BsTvFill,BsTelephoneFill,BsWalletFill,BsFillEnvelopeFill } from "react-icons/bs";
import { useNavigate,useLocation } from 'react-router-dom';

function SalesHeader() {
  const navigate = useNavigate();
  const location = useLocation();



  return (
    <>
   <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>

<a class="navbar-brand" href="#"><img src='https://www.in.cpm-int.com/hubfs/CPM_Theme_2021/images/home_Page/CPM%20Logo.svg' height="50px"></img></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="/SalesHome">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/SalesVerified">Users</a>
    </li>
 
    
  </ul>
  <form class="form-inline my-2 my-lg-0">
  <ul class="navbar-nav ml-auto nav-flex-icons col-12">
      <li class="nav-item avatar">
        <a class="nav-link p-0" href="/SalesProfile">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp" class="rounded-circle z-depth-0"
            alt="avatar image" height="35"/>
        </a>
      </li>
    </ul>

  {/* <a class="mr-sm-2" href="/Myaccount">My account</a> */}
    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </form>
</div>

</nav>
    </>
  );
}

export default SalesHeader;
