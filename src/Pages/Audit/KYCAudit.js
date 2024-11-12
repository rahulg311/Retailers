import React, { useEffect, useRef, useState } from "react";
import RetailerNavbar from "../Retailer/RetailerNavbar";
import { ServicesApi } from "../Api";
import { baseUrl } from "../../Constant/constant";
import { MethodNames } from "../../Constant/methodNames";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Pagination } from "antd";
import { MdEdit } from "react-icons/md";

const KYCAudit = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const [ProgramList,setProgramList]= useState([])
 useEffect(() => {
  PenddingKycDataList();
  }, []);
  

 //  Kys all list api call
  const PenddingKycDataList = async () => {
    let url = baseUrl + MethodNames.RetailerKYC;
    const data = {
      OperationType: "ViewAll",
      ShopId: 0,
    };
    try {
      let response = await ServicesApi(url, data);
      console.log("res kyc all data - ", response.RetailerKYC);
      if (response?.RetailerKYC) {
        setProgramList(response?.RetailerKYC);
      }
    } catch (error) {
      console.log(error);
    }
  };

//  kyc single user pendding details
  const penddingStatus = (item) => {
    if (!item || typeof item !== 'object' || !item?.ShopId) {
      console.error('Invalid item:', item);  
      return;  
    } // If validation passes, proceed with navigation
    navigate("/KycStatus", { state: { SinglekysDetails: item } });
  }; 
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * pageSize;
  const lastIndex = startIndex + pageSize;

  const currentPageData = ProgramList.slice(startIndex, lastIndex);
  console.log("currentPageData", currentPageData);

  return (
    <div className="container mx-auto px-4 my-5 w-100 h-100">
      <ToastContainer />
      <div className="min-h-20">
        <RetailerNavbar />
      </div>

      <div className="flex justify-between md:mx-5 mb-3">
        <div>
          <h4 className="font-bold">Kyc Status</h4>
        </div>
        {/* <div>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full md:min-w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white h-10"
              placeholder="Search Mockups, Logos..."
              required
            />

          </div>
        </div>
        <div>
          <button
            // data-modal-target="authentication-modal"
            // data-modal-toggle="authentication-modal"
            onClick={() => AddModel()}
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Add Program
          </button>
         
        </div> */}
      </div>

      <div>
        <div className="overflow-x-auto shadow-md sm:rounded-lg shadow_css">
          <div
            className="overflow-y-auto shadow_css scrollbar-thin"
            style={{ maxHeight: "510px" }}
          >
            {currentPageData.length > 0 ? (
              <>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Edit
                      </th>
                      {Object.keys(currentPageData[0]).map((key, index) => (
                        <>
                          <th scope="col" className="px-6 py-3" key={index}>
                            {key}
                          </th>
                        </>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentPageData &&
                      currentPageData.map((item, index) => (
                        <tr
                          key={index}
                          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                        >
                          <td className="px-6 py-4">
                            <button
                              onClick={() => penddingStatus(item)}
                              title="edit"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              <MdEdit className="text-lg" />
                            </button>
                          </td>
                          {Object.values(item).map((value, idx) => (
                            <td
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              key={idx}
                            >
                             <span className={value==="Pending"? " fs_12 inline-block px-2 py-1 text-sm text-yellow-600 bg-yellow-100 border border-yellow-400 rounded-full fs_12 " : value==="Complete" ? " fs_12 inline-block px-2 py-1 text-sm text-green-600 bg-green-100 border border-green-400 rounded-full " : value =="In Processing" ? " fs_12 inline-block px-2 py-1 text-sm text-yellow-600 bg-yellow-100 border border-yellow-400 rounded-full":"fs_12"} >
                             {value}
                              </span>
        
                             
                            </td>
                          ))}
                        </tr>
                      ))}
                    <tr className="bg-white">
                      <td colSpan={Object.keys(currentPageData[0]).length+2}>
                        <div className="w-full flex justify-end pr-3 mr-4 my-2">
                          {/* Pagination component */}
                          <Pagination
                            onShowSizeChange={(current, size) => {
                              setCurrentPage(1); // Reset to first page when changing page size
                              setPageSize(size);
                            }}
                            onChange={handlePaginationChange}
                            defaultCurrent={1}
                            total={ProgramList.length}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default KYCAudit;
