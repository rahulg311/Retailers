import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import './App.css';
import { BsFillPersonLinesFill } from "react-icons/bs";
import Header from './Header';

import { useNavigate } from 'react-router-dom';
function Earnings() {
  const navigate = useNavigate();


  return (
    <>
  <Header/>
<div class="container card mt-5">
<div class="col-12 head_ref mb-3">
<h5 class="text- mt-2">Earnings </h5>
</div>
<div class="row mt-4">
  <div class="col-sm-6 ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Company: Reckitt</h5>
        <p class="card-text">Program : Visibility program</p>
         <a href="/Allearnings">See all earnings</a>
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
         <a href="/Allearnings">See all earnings</a>
        <div class="text-right">
        <p class="card-text">Rs: 2680</p>
      </div>
      </div>
    </div>
  </div>
</div>



</div>
    </>
  );
}

export default Earnings;
