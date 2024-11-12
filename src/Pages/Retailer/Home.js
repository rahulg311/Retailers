import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import './App.css';
import { BsFillPersonLinesFill } from "react-icons/bs";
import Header from './Header';

import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();


  return (
    <>
  
<Header/>




<div class="mt-1 container card mt-5">
<div class="col-12 head_ref mb-3">
<h5 class="text- pt-2">Home </h5>
</div>
<div class="container">

<div class="row mt-4">
<div className='col-md-12  mb-4'>

  <button class="btn btn-primary float-right text-center" style={{backgroundColor:""}} data-toggle="modal" data-target="#exampleModal">Add Outlet</button>

  


</div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Retailer id: CPM7985</h5>
        <p class="card-text">Suresh jurnal store.134,<br></br>street number 12A Sarojni nagar market <br></br>New delhi - 110034</p>
    
    
        <a href="#" class="btn btn-primary">Select Outlet</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-4 mt-md-0">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Retailer id: CPM7985</h5>
        <p class="card-text">Suresh jurnal store.134,<br></br>street number 12A Sarojni nagar market <br></br>New delhi - 110034</p>
    
    
        <a href="#" class="btn btn-primary">Select Outlet</a>
      </div>
    </div>
  </div>
</div>



</div>
</div>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Outlet</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Store Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Store Name"/>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Store Address</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Store Address"/>
  </div>


</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Home;
