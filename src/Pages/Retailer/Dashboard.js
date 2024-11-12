import React from 'react';
import ReatlierNavbar from './RetailerNavbar';
import { useLocation } from 'react-router-dom';


const Dashboard = () => {
  const Location = useLocation();
  console.log("loction",Location?.state?.SinglekysDetails?.ShopId)
  return (
    <div className='w-100 h-100'>
     <ReatlierNavbar/>
     <p>djncvhsdu</p>
      </div>
  );
}

export default Dashboard;
