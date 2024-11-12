import React, { useState, useEffect } from 'react';
import { Form, Button, Navbar, nav } from 'react-bootstrap';
import { MdSupervisorAccount } from "react-icons/md";
import './App.css';
import { BsTvFill, BsTelephoneFill, BsWalletFill, BsFillEnvelopeFill } from "react-icons/bs";
import { useNavigate, useLocation } from 'react-router-dom';
import AuditHeader from './AuditHeader';

function AuditDetails() {
    const navigate = useNavigate();
    const location = useLocation();



    return (
        <>
         <AuditHeader />
            <p class="font-weight-normal mt-1 text-center col-md-3 col-12" style={{ backgroundColor: "skyblue" }}>Kyc Details</p>
            {/*Kyc Details*/}
            <div class="mt-3 container">
                <div class="card">

                    <div class="card-body">
                        <table class="table table-striped table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" >Shop Address</th>
                                    <th scope="col" >Contect No.</th>
                                    <th scope="col" >Bank Name </th>
                                    <th scope="col" style={{width:"200px"}}>Bank Address</th>
                                    <th scope="col" >GST No.</th>
                                    <th scope="col" >PAN No. </th>
                                    <th scope="col" style={{width:"200px"}}>Bank IFSC</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">09</th>
                                    <td>Delhi </td>
                                    <td>9077766689</td>
                                    <th>PNB Bank</th>
                                    <td>New Delhi Rohini </td>
                                    <td>JHHGJG766689HKJ</td>
                                    <td>JHHGJ7666H</td>
                                    <td>PNB67I0</td>
                                </tr>
                            </tbody>
    
                        </table>
                    </div>
                </div>
            </div>
            <div class="mt-3 container">
                <div class="card">
                    <div class="card-body">
                        <div class="row mt-2">
                            <div class="col-sm-6">
                                <img src='/dummy.jpg' class="col-sm-12 col-12" height="250px" width="500px"></img>
                            </div>
                            <div class="col-sm-6 mt-4 mt-md-0">
                            <img src='/dummy.jpg' class="col-sm-12 col-12" height="250px" width="500px"></img>
                            </div>
                        </div>
                        <hr/>
                        <div className='row mt-4'>
                            <div className='col-sm-5'><h5>Verify the Images</h5></div>
                         
                        <div class="form-check col-sm-1 col-6">
  <input class="form-check-input" type="radio" name="flexRadioDefaultrow6" id="flexRadioDefault99" checked/>
  <label class="form-check-label" for="flexRadioDefault99">
  Accepted
  </label>
</div>
<div class="form-check col-sm-1 col-6">
  <input class="form-check-input" type="radio" name="flexRadioDefaultrow6" id="flexRadioDefault10" />
<label class="form-check-label" for="flexRadioDefault10">
  Rejected
  </label>
</div>
<div class="col-sm-3 mt-2 mt-md-0"> </div>
 <button class="btn btn-primary col-sm-2" style={{ backgroundColor: "#dd4b39" }} >Next</button></div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuditDetails;
