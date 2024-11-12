import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import './App.css';
import { BsTvFill,BsFillKeyFill,BsWalletFill } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';
function Login_admin() {
  const navigate = useNavigate();

  function Audit(){
    navigate('/AuditHome')
}

  return (
    <>
    <div className="App">
<section class="vh-100" style={{backgroundColor: ""}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style={{borderRadius: "1rem"}}>
          <div class="card-body p-5 text-center">

            <h3 class="mb-1">Sign in</h3>
            <label for="exampleInputPassword1" class="mb-5">Sign in to your account </label>
            <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"><BsTvFill /></span>
  </div>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">< BsFillKeyFill/></span>
  </div>
  <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

        

            <button class="btn btn-primary btn-lg btn-block" type="submit"  onClick={Audit}>Login</button>

            <hr class="my-4"/>
             {/*
            Don't have an account?
            <button class="btn btn-lg btn-block btn-primary" style={{backgroundColor: "#dd4b39"}}
              type="submit" onClick={Show}><i class="fab fa-google me-2"></i> Sign Up</button>
           */}

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
{/* 
<section class="">

  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-5 mb-7 mb-lg-0">
          <h1 class="my-5 display-3 fw-bold ls-tight">
          <img src='logoj.png' ></img>
            <span class="text-primary">for your business</span>
          </h1>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div class="col-lg-5 mb-5 mb-lg-0">
          <div class="card"  style={{borderRadius: "1rem"}}>
            <div class="card-body py-5 px-md-5">
              <form>
           
        
              <h3 class="mb-1">Sign in</h3>
            <label for="exampleInputPassword1" class="mb-5">Sign in to your account </label>
            <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">< BsWalletFill/></span>
  </div>
  <input type="text" class="form-control" placeholder="GST" aria-label="Username" aria-describedby="basic-addon1"/>
</div> 
 <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"><BsTvFill /></span>
  </div>
  <input type="text" class="form-control" placeholder="Pan" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
              
             
             

                
                <button type="submit" class="btn btn-primary btn-block mb-4" onClick={Otp}>
                  Sign in
                </button>

              
                <div class="text-center">
                <hr class="my-2"/>
            Don't have an account?
            <button type="submit" class="btn btn-primary btn-block mb-4" style={{backgroundColor: "#dd4b39"}} onClick={Show}>
                  Sign up
                </button>
          
               
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section> */}



    </>
  );
}

export default Login_admin;
