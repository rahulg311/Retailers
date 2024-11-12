import React, { useEffect, useRef, useState } from "react";
import RetailerNavbar from "../Retailer/RetailerNavbar";
import { ServicesApi } from "../Api";
import { baseUrl } from "../../Constant/constant";
import { MethodNames } from "../../Constant/methodNames";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Pagination } from "antd";
import { MdEdit } from "react-icons/md";

const Company = () => {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const GetUserid =sessionStorage.getItem('token');
  useEffect(() => {
    CompanyData();
  }, []);

  const [companyList, setCompanyList] = useState([]);
  const [companyData, setCompanyData] = useState({
    CompanyId: "0",
    CompanyName: "",
    ContactPerson: "",
    Mobile: "",
    UserId: GetUserid,
  });
  const [ShowEditBtn, setShowEditBtn] = useState(false);

  // changeable data
  const changeData = (e) => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  // ----------------view company master list ------------------------
  const CompanyData = async () => {
    let url = baseUrl + MethodNames.ViewMasterCompany;
    const data = {
      OperationType: "ViewAll",
      CompanyId: 1,
    };
    try {
      let response = await ServicesApi(url, data);
      // console.log("response ViewMasterCompany ", response.ViewMasterCompany);
      if (response?.ViewMasterCompany) {
        setCompanyList(response.ViewMasterCompany);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ---------- close model--------------
  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.setAttribute("data-modal-hide", "true");
      modalRef.current.classList.add("hidden"); // Hide modal using Tailwind CSS class
    }
  };

  // ---------- open model edit data--------------
  const EditModel = (item) => {
    // console.log("item.CompanyId", item);
    if (modalRef.current) {
      modalRef.current.setAttribute("data-modal-hide", "true");
      modalRef.current.classList.remove("hidden");
    }
    setShowEditBtn(true);
    setCompanyData(item);
  };
  // ---------- open model Add data--------------
  const AddModel = () => {
    setCompanyData({
      CompanyId: "0",
      CompanyName: "",
      ContactPerson: "",
      Mobile: "",
      UserId: "",
    });
    if (modalRef.current) {
      modalRef.current.setAttribute("data-modal-hide", "true");
      modalRef.current.classList.remove("hidden");
    }
    setShowEditBtn(false);
  };

  // ------------------ add to data -----------------

  const handelData = async (e) => {
    e.preventDefault();
    console.log("companyData", companyData);
    let url = baseUrl + MethodNames.UpsertMasterCompany;
    const UserMasterCompany = JSON.stringify(companyData);
    const MasterCompany = {
      OperationType: "Add",
      JsonData: UserMasterCompany,
    };
    try {
      let response = await ServicesApi(url, MasterCompany);
      console.log("response com ", response);
      if (response.UpsertMasterCompany[0].RecordStatus == "Success") {
        toast.success("Company has been successfully added.");
        navigate("/Company");
        handleCloseModal();
        CompanyData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // ------------------ update to data -----------------

  const handelDataUpdate = async (e) => {
    e.preventDefault();
    console.log("companyData", companyData);
    let url = baseUrl + MethodNames.UpsertMasterCompany;
    const UserMasterCompany = JSON.stringify(companyData);
    const MasterCompany = {
      OperationType: "Update",
      JsonData: UserMasterCompany,
    };
    try {
      let response = await ServicesApi(url, MasterCompany);
      console.log("response com---------- ", response);
      if (response.UpsertMasterCompany[0].RecordStatus == "Success") {
        toast.success("Company has been successfully update.");
        // navigate("/Company");
        handleCloseModal();
        CompanyData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * pageSize;
  const lastIndex = startIndex + pageSize;

  const currentPageData = companyList.slice(startIndex, lastIndex);

  return (
    <div className="container mx-auto px-4 my-5 w-100 h-100">
      <ToastContainer />
      <div className="min-h-20">
        <RetailerNavbar />
      </div>

      <div className="flex justify-between md:mx-5 h-20">
        <div>
          <h4 className="font-bold">Company</h4>
        </div>
        <div>
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
            {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
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
            Add Company
          </button>
          {/* <button className="bg-blue-800 text-white px-4 py-2 rounded"> + Company </button> */}
        </div>
      </div>

      <div>
        <div className="overflow-x-auto shadow-md sm:rounded-lg shadow_css">
          <div
            className="overflow-y-auto shadow_css"
            style={{ maxHeight: "430px" }}
          >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 ">
                    Company Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Company Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact Person
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mobile
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPageData &&
                  currentPageData.map((item, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.CompanyId}
                      </th>
                      <td className="px-6 py-4">{item.CompanyName}</td>
                      <td className="px-6 py-4">{item.ContactPerson}</td>
                      <td className="px-6 py-4">{item.Mobile}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => EditModel(item)}
                          //  href="#"

                          title="edit"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <MdEdit className="text-lg" />
                        </button>
                      </td>
                    </tr>
                  ))}
                <tr className="bg-white ">
                  <td colSpan={3}></td>
                  <td colSpan={2}>
                    <div className="w-full flex justify-end pr-3  mr-4 my-2">
                      {/* Pagination component */}
                      <Pagination
                        // showSizeChanger
                        onShowSizeChange={(current, size) => {
                          setCurrentPage(1); // Reset to first page when changing page size
                          setPageSize(size);
                        }}
                        onChange={handlePaginationChange}
                        defaultCurrent={1}
                        total={companyList.length}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Model open add company */}

      {/* Main modal */}
      <div
        ref={modalRef}
        id="authentication-modal"
        className="hidden fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50"
        // className="hidden  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-800 bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {ShowEditBtn == true ? `Update Company ` : `Create Company `}
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                // data-modal-hide="authentication-modal"
                onClick={handleCloseModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5">
              <form
                className="space-y-4"
                onSubmit={ShowEditBtn ? handelDataUpdate : handelData}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    disabled={ShowEditBtn == true ? true : false}
                    onChange={(e) => changeData(e)}
                    name="CompanyName"
                    value={companyData.CompanyName}
                    className={
                      ShowEditBtn == true
                        ? " no-drop bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    }
                    placeholder="Company name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor=" Contact person"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contact person
                  </label>
                  <input
                    type="text"
                    onChange={(e) => changeData(e)}
                    name="ContactPerson"
                    value={companyData.ContactPerson}
                    placeholder="Contact person"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="CompanyName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contact Mobile No
                  </label>
                  <input
                    type="text"
                    value={companyData.Mobile}
                    name="Mobile"
                    onChange={(e) => changeData(e)}
                    placeholder="Contact Mobile No"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                {ShowEditBtn == true ? (
                  <button
                    // onSubmit={handelDataUpdate}
                    type="submit"
                    className="w-full  bg_color h-10 mt_20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Updated
                  </button>
                ) : (
                  <button
                    // onSubmit={handelData}
                    type="submit"
                    className="w-full  bg_color h-10 mt_20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sumbit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
