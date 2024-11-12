import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import './App.css';
import { BsFillPersonLinesFill } from "react-icons/bs";
import Header from './Header';

import { useNavigate } from 'react-router-dom';
function Allearnings() {
  const navigate = useNavigate();


  return (
    <>
  
<Header/>
{/* <p class="font-weight-normal col-md-3 mt-1 text-center col-6" style={{backgroundColor:"skyblue"}}>Total Reckitt Earnings.</p> */}

{/* cards */}  
<div class="card text-center">
  {/* <div class="card-header">
  Reckitt Earnings.
  </div> */}
  <div class="card-body">
  
    <div class="container card">
    <div class="col-12 head_ref mb-3">
<h5 class="text- mt-2">Total Reckitt Earnings. </h5>
</div>
<div class="row mt-4">
  <div class="col-sm-6 ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Company: Reckitt</h5>
        <p class="card-text">Program : Visibility program</p>
       
        <div class="text-right">
        <p class="card-text">Rs: 2680</p>
</div>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-4 mt-md-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Company: Reckitt</h5>
        <p class="card-text">Program : Visibility program</p>
        
        <div class="text-right">
        <p class="card-text">Rs: 6789</p>
</div>
      </div>
    </div>
  </div>
</div>
<div class="row mt-4">
  <div class="col-sm-6 ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Company: Reckitt</h5>
        <p class="card-text">Program : Visibility program</p>
         
        <div class="text-right">
        <p class="card-text">Rs:8905</p>
</div>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-4 mt-md-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Company: Reckitt</h5>
        <p class="card-text">Program : Visibility program</p>
       
        <div class="text-right">
        <p class="card-text">Rs: 1048</p>
</div>
      </div>
    </div>
  </div>
</div>



</div>

 
  </div>
  <div class="card-footer text-muted">
    One Year Amount
  </div>
</div>

    </>
  );
}

export default Allearnings;
