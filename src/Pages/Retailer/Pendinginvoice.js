import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import './App.css';
import { BsFillPersonLinesFill } from "react-icons/bs";
import Header from './Header';

import { useNavigate } from 'react-router-dom';
function Pendinginvoice() {
  const navigate = useNavigate();



  return (
    <>
  
<Header/>




{/* <p class="font-weight-normal mt-1 text-center col-md-3 col-12"  style={{backgroundColor:"skyblue"}}>Pending Invoice.</p> */}

{/* <p class="font-weight-normal col-md-3 col-6 mt-1 text-align-center" style={{backgroundColor:"skyblue"}}>Pending Invoice.</p> */}
{/* cards */}

<div class="container card mt-5">
<div class="col-12 head_ref mb-3">
<h5 class="text- mt-2">Pending Invoice. </h5>
</div>
<div class="row mt-4">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Company: Reckitt</h5>
        <p class="card-text">Program : Visibility program <br></br>Periode: JFM 2023</p>
    
        <a href="/InvoiceForm" class="btn btn-primary">Genreate invoice</a>
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
        <p class="card-text">Program : Visibility program <br></br>Periode: JFM 2023</p>
    
        <a href="/InvoiceForm" class="btn btn-primary">Genreate invoice</a>
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

export default Pendinginvoice;
