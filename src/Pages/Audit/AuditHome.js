import React, { useState, useEffect } from 'react';
import { Form, Button, Navbar, nav } from 'react-bootstrap';
import { MdSupervisorAccount } from "react-icons/md";
import './App.css';
import { BsTvFill,BsTelephoneFill,BsWalletFill,BsFillEnvelopeFill } from "react-icons/bs";
import { useNavigate,useLocation } from 'react-router-dom';
import AuditHeader from './AuditHeader';

function AuditHome() {
  const navigate = useNavigate();
  const location = useLocation();



  return (
    <>
<AuditHeader/>
<p class="font-weight-normal mt-1 text-center col-md-3 col-12"  style={{backgroundColor:"skyblue"}}>Home</p>
{/* total users box */}
<div class="container">
<div class="row mt-4">
<div class="col-sm-4 col-12">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                <MdSupervisorAccount size={"25px"}/>
                </div>
                <div class="media-body text-right">
                  <h3>110000</h3>
                  <span>    Total Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4 mt-4 mt-md-0 col-6">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                <MdSupervisorAccount size={"25px"}/>
                </div>
                <div class="media-body text-right">
                  <h3>6000</h3>
                  <span>veryfied Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4 mt-4 mt-md-0 col-6">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                <MdSupervisorAccount  size={"25px"}/>
                </div>
                <div class="media-body text-right">
                  <h3>2400</h3>
                  <span>Rejected Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    {/* all users profile  */}
    <div class="mt-4 container">
    <div class="card">
  <div class="card-header text-center">
    Kyc Req.
  </div>
  <div class="card-body">
  <table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Status.</th>
     
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
      <td>Pending</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>Pending</td>
    </tr>
  </tbody>
</table>
  </div>
</div>
</div>
    </>
  );
}

export default AuditHome;
