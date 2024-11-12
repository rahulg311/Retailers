import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import './App.css';
import { BsFillPersonLinesFill } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();

function Earning(){
  navigate('/Earnings')
}
  return (
    <>
  
   <nav class="navbar navbar-expand-lg bg_color"
    // style={{backgroundColor: "#e3f2fd"}}
    >

  <a class="navbar-brand" href="#"><img className='logo_size' src='https://www.in.cpm-int.com/hubfs/CPM_Theme_2021/images/home_Page/CPM%20Logo.svg'></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white" href="/Home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" onClick={Earning}>My Earnings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="/Pendinginvoice">Pending invoice</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="/Payouts">Payouts</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      
    <a class="mr-sm-2 text-white" href="/Myaccount">My account</a>
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </form>
  </div>

</nav>




    </>
  );
}

export default Header;
