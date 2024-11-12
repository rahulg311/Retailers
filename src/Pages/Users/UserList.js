import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import RetailerNavbar from "../Retailer/RetailerNavbar";
import { Button, Pagination, Popconfirm } from "antd";
import { MdEdit } from "react-icons/md";
import { MethodNames } from "../../Constant/methodNames";
import { baseUrl } from "../../Constant/constant";
import { ServicesApi } from "../Api";
import { FaLock, FaLockOpen } from "react-icons/fa";
import axios from "axios";
import { GoCheckCircleFill } from "react-icons/go";
import { GiCrossMark } from "react-icons/gi";

const UserList = () => {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  useEffect(() => {
    ViewUserList();
  }, []);

  const [UserList, setUserList] = useState([]);

  //------------ Pagination state ----------------
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const lastIndex = startIndex + pageSize;
  const currentPageData = UserList.slice(startIndex, lastIndex);

  // ----------------view company master list ------------------------

  const ViewUserList = async () => {
    let url = baseUrl + MethodNames.ViewUsers;
    const data = {
      OperationType: "ViewAll",
      UserId: 1,
    };
    try {
      let response = await ServicesApi(url, data);
      console.log("response ViewMasterProgram----- ", response);
      if (response?.ViewUsers) {
        setUserList(response.ViewUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ---------- open model edit data--------------
  const EditModel = (item) => {
    navigate("/CreateUser", { state: { EditUserList: item } });
  };
  // ---------- open model Add data--------------
  const AddModel = () => {
    navigate("/CreateUser");
  };
  

  //  SINGLE USER UNLOCK
  const LockUser = async (userId) => {
    const LockUserId = {
      UserId: userId,
    };
    await axios
      .post(baseUrl + MethodNames.UpsertUnlockUser, LockUserId)
      .then((res) => {
        console.log("response unlock uuser",res.data.UpsertUnlockUser[0].RecordStatus );
        if (res.data.UpsertUnlockUser[0].RecordStatus === "Success") {
          toast.success("Successful Unlock this User ");
          ViewUserList();
        }
      })
      .catch((error) => console.log("error user list ", error));
  };

  return (
    <div className="container mx-auto px-4 my-5 w-100 h-100">
      <ToastContainer />
      <div className="min-h-20">
        <RetailerNavbar />
      </div>

      <div className="flex justify-between md:mx-5 h-20">
        <div>
          <h4 className="font-bold">Create User</h4>
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
          Create User
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
                    User Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    User Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mobile
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Designation
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Locked Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    User Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPageData &&
                  currentPageData.map((item, index) => {
                    const isActive = item.UserStatus === "Active";
                    const isLocked = item.LockedStatus === "Locked";
                    return (
                      <tr
                        key={index}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.UserId}
                        </th>
                        <td className="px-6 py-4">{item.UserName}</td>
                        <td className="px-6 py-4">{item.Email}</td>
                        <td className="px-6 py-4">{item.Mobile}</td>
                        <td className="px-6 py-4">{item.Designation}</td>
                        <td className="px-6 py-4">{item.Gender}</td>
                        <td className="px-6 py-4">{item.UserRole}</td>
                        <td>
                         
                          {isLocked ? (
                            <Popconfirm
                              title="Are you sure UnLock this User?"
                              okText="Yes"
                              cancelText="No"
                              onConfirm={() => LockUser(item.UserId)}
                              // onClick={() => openModel(i)}
                            >
                              <a
                                style={{ textAlign: "-webkit-center" }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                data-bs-whatever="@mdo"
                                href="#"
                                className=" p-1"
                                title="Lock"
                              >
                                <FaLock
                                  style={{ fontSize: "17px" }}
                                  className={`material-icons ${
                                    isLocked ? "link-error" : ""
                                  }`}
                                />
                              </a>
                            </Popconfirm>
                          ) : (
                            <a
                              style={{ textAlign: "-webkit-center" }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              data-bs-whatever="@mdo"
                              href="#"
                              className=" p-1"
                              title="Unlock"
                            >
                              <FaLockOpen
                                className="material-icons link-success "
                                style={{ fontSize: "17px" }}
                              />
                            </a>
                          )}
                        </td>

                        <td className="px-6 py-4">
                          {" "}
                          {isActive ? (
                            <GoCheckCircleFill
                              style={{
                                color: "green",
                                textAlign: "-webkit-center",
                              }}
                            />
                          ) : (
                            <GiCrossMark
                              style={{
                                color: "red",
                                textAlign: "-webkit-center",
                              }}
                            />
                          )}
                        </td>

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
                    );
                  })}
                <tr className="bg-white ">
                  <td colSpan={7}></td>
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
                        total={UserList.length}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
