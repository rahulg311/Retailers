import { Form, Button, Navbar, nav, Container, Carousel, Table, card } from 'react-bootstrap';
import './App.css';
import { BsFillPersonLinesFill } from "react-icons/bs";
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
import { useNavigate,useLocation } from 'react-router-dom';
import SignaturePad from "react-signature-canvas";

function InvoiceForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isLaptop = useMediaQuery({ minWidth: 780 });

  function signature(e){
    var data =(e.target.value)
    navigate("/signature",{state:data})

  }
  return (
    <>
  
<Header/>


<div class="col-12 head_ref mb-3">
<h5 class="text- pt-2">Pending Invoice. </h5>
</div>
{/* <p class="font-weight-normal mt-1 text-center col-md-3 col-12"  style={{backgroundColor:"skyblue"}}>Pending Invoice.</p> */}
<div className="container bg-white" style={{ border: "1px solid black" }}>
    <div class="row">
      <div class="col-sm-12 col-12">
        <center>
          <h3>
            <b>Tax Invoice</b>
          </h3>
        </center>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <center>
          <h6>
            Issue of Invoice under Section 31 of Central Goods and Services Tax
            Act, 2017
          </h6>
        </center>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <center>
          <h5>
            <b>Suresh General Store</b>
          </h5>
        </center>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <center>
          <h6>Shop No 138, Street No 12A, Sarojini Nagar, New Delhi 110023</h6>
        </center>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <center>
          <h6>GSTIN No: 324XXXXXXXNNXXXXXXX</h6>
        </center>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12"></div>
    </div>
    <div class="row" style={{ border: "1px solid black" }}>
      <div class="col-sm-2 custom-border">
        <span>Buyer Name</span>
      </div>
      <div class="col-sm-6 custom-border">
        CPM India Sales and Marketing Pvt Ltd
      </div>
      <div class="col-sm-2 custom-border">Invoice No: </div>
      <div class="col-sm-2 custom-border">Date of Invoice :</div>
    </div>
    <div class="row" style={{ border: "1px solid black" }}>
      <div class="col-sm-2 custom-border">
        <span>Buyer GSTIN</span>
      </div>
      <div class="col-sm-6 custom-border">278XXXXXXNNXXXXXXX</div>
      <div class="col-sm-2 custom-border">2023/890098/0023</div>
      <div class="col-sm-2 custom-border">30-11-2023</div>
    </div>

    <div class="row">
      <div
        class="col-sm-2 custom-border"
        style={{ borderBottom: "1px solid black" }}
      >
        <span>Buyer Address</span>
      </div>
      <div class="col-sm-6 custom-border ">B227, Okhla Indl Area Phase 1</div>
      <div class="col-sm-4 custom-border "></div>
    </div>

    <div class="row">
      <div
        class="col-sm-2 custom-border"
        style={{ borderBottom: "1px solid black" }}
      ></div>
      <div class="col-sm-6 custom-border ">New Delhi - 110 020</div>
      <div class="col-sm-4 custom-border "></div>
    </div>

    <div class="row">
      <div
        class="col-sm-2 custom-border"
        style={{ borderBottom: "1px solid black" }}
      ></div>
      <div class="col-sm-6 custom-border"></div>
      <div class="col-sm-4 custom-border"></div>
    </div>
    <div class="row">
      <div
        class="col-sm-2 custom-border"
        style={{ borderBottom: "1px solid black" }}
      >
        <span>Place of Supply</span>
      </div>
      <div
        class="col-sm-6 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        Delhi
      </div>
      <div class="col-sm-4 custom-border"></div>
    </div>

    <div class="row">
      <div class="col-sm-1 custom-border">S no</div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        <b>Desc of Goods</b>
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        <b>SAC Code</b>
      </div>
      <div
        class="col-sm-2 custom-border"
        style={{ borderTop: "1px solid black", width: "30%" }}
      >
        <b>Taxable Value Incl Other Expenses and Discounts</b>
      </div>
      <div
        class="col-sm-2 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        <center>
          <b>CGST</b>
        </center>
      </div>
      <div
        class="col-sm-2 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        <center>
          <b>SGST</b>
        </center>
      </div>
      <div
        class="col-sm-2 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        <center>
          <b>IGST</b>
        </center>
      </div>
      
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
      <center>
          <b>Total</b>
        </center>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-1 custom-border">1</div>
      <div
        class="col-sm-2 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        Service Towards Visibility Program Payout for Nov 2023
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        996311
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        1125
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        0.00
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        0.00
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        0.00
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        0.00
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        18.00
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        202.0
      </div>
      <div class="col-sm-1 custom-border     "  style={{ borderTop: "1px solid black" }}>1327.0</div>
    </div>

    <div class="row" style={{ borderBottom: "1px solid black" }}>
      <div
        class="col-sm-4 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        <b>Sub Total (Rs)</b>
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        <b>1125.00</b>
      </div>

      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      ></div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        <b>0.00</b>
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      ></div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        <b>0.00</b>
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      ></div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        <b>202.0</b>
      </div>
      <div
        class="col-sm-1 custom-border"
        style={{ borderTop: "1px solid black" }}
      >
        <b>1327.0</b>
      </div>
    </div>
    <div
      class="row"
      style={{ height: "70px", borderBottom: "1px solid black" }}
    >
      <div class="col-sm-5">
        <b>
          <h6>Grand Total (Rs)</h6>
        </b>
      </div>
      <div class="col-sm-5">
        <b>
          <h6>1327.00</h6>
        </b>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2">
        <span>Invoice Value</span>
      </div>
      <div class="col-sm-10">Rupees One thousand and Twenty Seven Only</div>
    </div>
    <div class="row">
      <div class="col-sm-2">
        <span>Payment Details</span>
      </div>
      <div class="col-sm-10">
        Payment should be in favour of 'Suresh General Store'
      </div>
    </div>
  </div>


                    {/* <div class="container">
                    <div class="card text-center">
  <div class="card-header">
    Tax invoice
    <p>Issue of Invoice under section 31 of central goods and services Tax Act, 2017</p>
    Suresh Gernal Store
    <p>Shop No.138, Street No. 12A, Sarojni Nagar, New Delhi 110023</p>
    <p>GSTIN NO. 324XXXXXXXXXXXXXX</p>
  </div>
 
  <div class="card-body">
  <div class="row text-left">
<div class="col-sm-3" style={{border: "1px solid black"}}>
<p >Buyer name</p>
<p>Buyer GSTIN</p>
<p>Buyer Address</p><hr/>
<p>Place of Supply</p>
</div>
<div class="col-sm-5"  style={{border: "1px solid black"}}><p >CPM India sales and marketing</p>
<p>67XXXXXXXXXXXXXXXX</p>
<p>Shop No.138, Street No. 12A, Sarojni Nagar, New Delhi 110023</p>
<p>Delhi</p></div>
<div class="col-sm-4"  style={{border: "1px solid black"}}><p>Invoice no:  676523</p><p>date of invoice : 02/12/2023</p></div>
</div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
</div>
</div> */}
<div class="row container mt-4">
    <div class="col-sm-2"></div>
    <div class="col-sm-2 col-4"><button className='btn btn-secondary' style={{backgroundColor:"skyblue"}} onClick={signature} value="0">Genreate and send</button></div>
    <div class="col-sm-2 col-2"></div>
    <div class="col-sm-2 col-4"><button className='btn btn-secondary' data-toggle="modal1" data-target="#exampleModal1" style={{backgroundColor:"skyblue"}}  onClick={signature} value="1">Change Invoice No.</button></div>
    <div class="col-sm-2 col-3"></div>
    {isLaptop &&   <div class="col-sm-2 col-9"><button className='btn btn-secondary' style={{backgroundColor:"skyblue"}}>Upload Own Inv.</button></div>} 
     {isMobile &&   <div class="col-sm-2 col-9 mt-2"><button className='btn btn-secondary' style={{backgroundColor:"skyblue"}}>Upload Own Inv.</button></div>} 
   
</div>
{/* model */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Signature and Send Invoice</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="form-group">
 
<SignaturePad
canvasProps={{
    className:"SignaturePad" 
}}/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Signature</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="siganture here"/>
  </div>


</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send Invoice</button>
      </div>
    </div>
  </div>
</div>


    </>
  );
}

export default InvoiceForm;
