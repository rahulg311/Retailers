import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import './Form.css';
import { BsTvFill,BsTelephoneFill,BsWalletFill,BsFillEnvelopeFill } from "react-icons/bs";

import { useNavigate,useLocation } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const location = useLocation();

  function Show(){
    navigate('/Signup')
}


  return (
    <div className="App">
	<form class="form">
	  <h2>Account details</h2>
	  <div class="form-group">
		  <label for="email">Account Number:</label>
		  <div class="relative">
			  <input class="form-control" id="name" type="text" required="" autofocus="" autocomplete="" placeholder="Type your account no. here..."/>
			  <i class="fa fa-user"></i>
		  </div>
	  </div>
	  <div class="form-group">
	  	<label for="email">Bank Name:</label>
	  	<div class="relative">
		  	<input class="form-control" type="text" required="" placeholder="Type your bank name..."/>
        {/* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" */}
		  	<i class="fa fa-envelope"></i>
	  	</div>
	  </div>
	  <div class="form-group">
	  	<label for="email">Branch:</label>
	  	<div class="relative">
	  		<input class="form-control" type="text"  required="" placeholder="Type your Mobile Number..."/>
        {/* maxlength="10" oninput="this.value=this.value.replace(/[^0-9]/g,'');" */}
	  		<i class="fa fa-phone"></i>
	  	</div>
	  </div>
	  <div class="form-group">
	  	<label for="email">IFSC Code</label>
	  	<div class="relative">
	  		<input class="form-control" type="text"  required="" placeholder="Type your ifsc code..."/>
        {/* pattern="https?://.+" */}
	  		<i class="fa fa-building"></i>
	  	</div>
	  </div>
	  <div class="form-group">
	  	<label for="email">Account Type:</label>
	  	<div class="relative">
	  	<input class="form-control" type="text" id="designation" required="" placeholder="Type your account type..."/>
	  	<i class="fa fa-suitcase"></i>
	  </div>	
	  </div>
		{/* <div class="form-group">
			<label for="email">Specilization:</label>
	  	<div class="relative">
	  		<input class="form-control" type="text" id="tags" required="" placeholder="Type your specialization..."/>
	  		<i class="fa fa-css3"></i>
	  	</div>
	  </div> */}
		{/* <div class="form-group">
			<label for="email">Attachment:</label>
	  	<div class="relative">
	  		<div class="input-group">
          <label class="input-group-btn">
            <span class="btn btn-default">
                Browse&hellip; <input type="file" style={{display: "none"}} multiple/>
            </span>
          </label>
          <input type="text" class="form-control" required="" placeholder="Attachment..." readonly/>
          <i class="fa fa-link"></i>
      	</div>
	  	</div>
	  </div> */}
	              	
	  <div class="tright">
	  	{/* <a href=""><button class="movebtn movebtnre"><i class="fa fa-fw fa-refresh"></i> Back </button></a>
      &nbsp; */}
	  	<a href="/Addpersonald"><button class="movebtn movebtnsu" type="button">Next <i class="fa fa-fw fa-paper-plane"></i></button></a>
	  </div>
	</form>

	<div class="thanks" style={{display: "none"}}>
		<h4>Thank you!</h4>
		<p><small>Your message has been successfully sent.</small></p>
	</div>
    </div>
  );
}

export default App;
