import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import './App.css';
import { FaRupeeSign } from "react-icons/fa";
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
function Myaccount() {
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <>
<Header/>
{/* {isMobile &&  <h2>my account</h2>} */}
{/* <p class="font-weight-normal mt-1 text-center col-md-3 col-12"  style={{backgroundColor:"skyblue"}}>My account.</p> */}
{/* Rs box */}
<div class="container  card my-3">
<div class="col-12 head_ref mb-3">
<h5 class="text- pt-2">My account. </h5>
</div>
<div class="row mt-4">
<div class="col-sm-4 col-12">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                <FaRupeeSign size={"25px"}/>
                </div>
                <div class="media-body text-right">
                  <h3>110000</h3>
                  <span>    Total earnings</span>
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
                <FaRupeeSign size={"25px"}/>
                </div>
                <div class="media-body text-right">
                  <h3>6000</h3>
                  <span>Last month</span>
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
                <FaRupeeSign size={"25px"}/>
                </div>
                <div class="media-body text-right">
                  <h3>2400</h3>
                  <span>This month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    {/* my profile card */}
    <div class="mt-4 container card mb-2">
    <div class="">
  {/* <div class="card-header text-center">
    My Profile
  </div> */}
  <div class="col-12 head_ref mb-3 d-f">
  <div class=" d-flex w-100 justify-content-between">
  <h5 class="text- pt-2">My Profile </h5>
<button class="btn btn-primary mt-2 float-righ">Profile edit</button>
  </div>

</div>
  <div class="card-body">
    <blockquote class="blockquote">
    <ul class="list-group ">
        <div class="row">
        <div class="col-sm-6">
<li class="list-group-item fs_12 ">Suresh Kumar</li><br></br></div>
<div class="col-sm-6">
  <li class="list-group-item fs_12 ">sures@gmail.com</li> <br></br>
  </div>
  <div class="col-sm-6">
  <li class="list-group-item fs_12 col-sm-12">8743357890</li> <br></br>
  </div>
  <div class="col-sm-6">
  <li class="list-group-item fs_12 col-sm-12">empty</li> <br></br>
  </div>
  
  </div>
</ul>

      
    </blockquote>
  </div>
</div>
</div>
{/* <div class="container">
<div class="row mt-4">
  <div class="col-sm-4 col-12">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">Total earning    Rs: 110000</h5>
     
    
    
    
      </div>
    </div>
  </div>
  <div class="col-sm-4 mt-4 mt-md-0 col-6">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Last month Rs :  8900</h5>
     
      </div>
    </div>
  </div>
  <div class="col-sm-4 mt-4 mt-md-0 col-6">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">This month Rs : 3000</h5>
    
      </div>
    </div>
  </div>
</div>



</div> */}



        </>
    );
}

export default Myaccount;
