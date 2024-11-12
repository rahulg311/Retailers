import {
  Form,
  Button,
  Navbar,
  nav,
  Container,
  Carousel,
  Table,
  card,
} from 'react-bootstrap';
import './App.css';
import { BsTvFill, BsTelephoneFill, BsWalletFill } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';
function WelcomePages() {
  const navigate = useNavigate();

  function GoHome() {
    navigate('/Home');
  }

  return (
    <>
      <div class="row ">
        <div className="col-md-12 tmls">
          {/* <div class="row">
                        
                          
                            
                               
                      
                                    <div class="col-md-12  h_1body">
                                    <h1 className='h_1'>
                                    <span></span>           
	<span>w</span>
	<span>e</span>
	<span>l</span>
	<span>c</span>
	<span>o</span>
	<span>m</span>
	<span>e</span>
    <br/>
    <span className='kyc_line'>your kyc is Done</span>
	

</h1>



                                    </div>
                                   
                          
                         
                        </div> */}
          <div className="d-flex justify-content-center align-items-center w-100 h-100 ">
            <div class="">
              <h1 className="h_1">WELCOME</h1>
              <p className="text-white fs_39 kyc_p">Your Kyc Is Completed</p>
              <div class="btns" onClick={GoHome}>
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePages;
