import React, { useState, useEffect } from 'react';
import { Form, Button, Navbar, nav } from 'react-bootstrap';
import { MdSupervisorAccount } from "react-icons/md";
import './App.css';
import { BsTvFill,BsTelephoneFill,BsWalletFill,BsFillEnvelopeFill } from "react-icons/bs";
import { useNavigate,useLocation } from 'react-router-dom';
import AuditHeader from './AuditHeader';

function AuditKycreqs() {
  const navigate = useNavigate();
  const location = useLocation();



  return (
    <>
<AuditHeader/>
<p class="font-weight-normal mt-1 text-center col-md-3 col-12"  style={{backgroundColor:"skyblue"}}>Kyc Reqs</p>

    {/* all users profile  */}
    <div class="mt-4 container">
    <div class="card">
  <div class="card-header text-center">
    Kyc Req.
  </div>
  <div class="card-body">
  <table class="table table-striped table-responsive">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"  style={{width:"350px"}}>Username</th>
      <th scope="col" style={{width:"350px"}}>Email</th>
      <th scope="col" style={{width:"350px"}}>Details</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><a class="btn btn-primary" style={{ backgroundColor: "#dd4b39" }} href="AuditDetails">Details</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><button class="btn btn-primary" style={{ backgroundColor: "#dd4b39" }}>Details</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td><button class="btn btn-primary" style={{ backgroundColor: "#dd4b39" }}>Details</button></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Denial</td>
      <td>not Bird</td>
      <td><button class="btn btn-primary" style={{ backgroundColor: "#dd4b39" }}>Details</button></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Suresh</td>
      <td>Suresh@gmail.com</td>
      <td><button class="btn btn-primary" style={{ backgroundColor: "#dd4b39" }}>Details</button></td>
    </tr>
  </tbody>
</table>
  </div>
</div>
</div>
    </>
  );
}

export default AuditKycreqs;
