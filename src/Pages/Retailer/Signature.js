import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import './App.css';
import { BsFillPersonLinesFill } from "react-icons/bs";
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
import { useNavigate,useLocation } from 'react-router-dom';
import SignaturePad from "react-signature-canvas";

function Signature() {
    const location = useLocation();
  const navigate = useNavigate();


  return (
    <> 
<Header/>
<p class="font-weight-normal mt-1 text-center col-md-3 col-12"  style={{backgroundColor:"skyblue"}}>Send Invoice.</p>
 <div>
<SignaturePad
canvasProps={{
    className:"SignaturePad" 
}}/>
   
 

    <label for="exampleInputPassword1" class="col-md-3 col-12" style={{backgroundColor:"skyblue"}}>Signature</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="siganture here"/>
    {location.state !=="0" ? <div> <label for="exampleInputPassword1" class="col-md-3 col-12 mt-2" style={{backgroundColor:"skyblue"}}>Edit Invoice No.</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Invoice Number"/></div> :<p></p>}
   
   

    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" >Back</button>
        <button type="button" class="btn btn-primary">Send Invoice</button>
        </div>
</div>
    </>
  );
}

export default Signature;
