import React, { useState, useEffect } from 'react';
import { Form, Button, Navbar, nav } from 'react-bootstrap';
import { MdSupervisorAccount } from "react-icons/md";
import './App.css';
import { BsTvFill,BsTelephoneFill,BsWalletFill,BsFillEnvelopeFill } from "react-icons/bs";
import { useNavigate,useLocation } from 'react-router-dom';
import SalesHeader from './SalesHeader';

function SalesVerified() {
  const navigate = useNavigate();
  const location = useLocation();



  return (
    <>
<SalesHeader/>
<div className='row'>
    <div className='col-md-3 col-12'>
    <p class="font-weight-normal mt-1 text-center "  style={{backgroundColor:"skyblue"}}>Verified Users</p>
</div>
<div class="col-md-7"></div>
<div className='col-md-2 mt-1'>
{/* <div class="dropdown">
        <button class="text-center col-md-12 col-6 mt-1 bg-block" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"skyblue"}}>
          fillter Users
        </button>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Pending</a>
          <a class="dropdown-item" href="#">Success</a>
          <a class="dropdown-item" href="#">Verified</a>
         
        </div>
      </div> */}
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle col-md-11 col-6 mt-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Pending</a>
    <a class="dropdown-item" href="#">Success</a>
    <a class="dropdown-item" href="#">Verified</a>
  </div>
</div>
</div>

</div>

    {/* all users profile  */}
    <div class="mt-4 container">
    <div class="card">
  <div class="card-header text-center">
  Verified Users
  </div>
  <div class="card-body">
  <table class="table table-striped table-responsive">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"  style={{width:"350px"}}>Username</th>
      <th scope="col" style={{width:"350px"}}>Shop name</th>
      <th scope="col" style={{width:"350px"}}>Status</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Pending</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>success</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>Verified</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Denial</td>
      <td>not Bird</td>
      <td>Verified</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Suresh</td>
      <td>Suresh@gmail.com</td>
      <td>success</td>
    </tr>
  </tbody>
</table>
  </div>
</div>
</div>
    </>
  );
}

export default SalesVerified;
