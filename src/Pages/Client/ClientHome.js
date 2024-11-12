import React, { useState, useEffect } from 'react';
import { Form, Button, Navbar, nav } from 'react-bootstrap';
import { MdSupervisorAccount } from "react-icons/md";
import './App.css';
import { BsTvFill, BsTelephoneFill, BsWalletFill, BsFillEnvelopeFill } from "react-icons/bs";
import { useNavigate, useLocation } from 'react-router-dom';
import { SearchOutlined,PoweroffOutlined,PlusOutlined } from '@ant-design/icons';
import {Flex,Tooltip, Modal, Upload,Table } from 'antd';
import ClientHeader from './ClientHeader';

function AuditDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const [product,setProducts] =useState([]);

  //for table
  const columns = [ 
    { 
      title: "id", 
      dataIndex: "id", 
      sorter: (a, b) => a.layoutID - b.layoutID, 
 
    }, 
    { 
      title: "Username", 
      dataIndex: "Username", 
      sorter: (a, b) => a.layout.length - b.layout.length, 
    }, 
    { 
      title: "Shop Name", 
      dataIndex: "Shop Name", 
      sorter: (a, b) => a.duration - b.duration, 
    }, 
    { 
      title: "Status", 
      dataIndex: "Status", 
      sorter: (a, b) => a.height - b.height, 
    } 
 
  ];

    return (
        <>
<ClientHeader/>
   <div class="container">
<div class="row mt-4">
<div class="col-sm-4 col-12">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="align-self-center">
                <MdSupervisorAccount size={"25px"}/>
                </div>
                <div class="media-body text-right">
                  <h3>10000</h3>
                  <span>    Total Users</span>
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
                <MdSupervisorAccount size={"25px"}/>
                </div>
                <div class="media-body text-right">
                  <h3>7700</h3>
                  <span>veryfied Users</span>
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
                <MdSupervisorAccount  size={"25px"}/>
                </div>
                <div class="media-body text-right">
                  <h3>2300</h3>
                  <span>Not Verified Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div className='mt-3 container'> 
<Table columns={columns} dataSource={product}  pagination={{ position: ['topRight'] ,pageSize: 6}} />

</div>
        </>
    );
}

export default AuditDetails;
