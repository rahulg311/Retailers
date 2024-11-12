import React, { useEffect, useState } from "react";
import logo from "../../Images/Group 26.png";
import { ServicesApi } from "../Api";
import { baseUrl } from "../../Constant/constant";
import { MethodNames } from "../../Constant/methodNames";
import { Link, NavLink, useNavigate } from "react-router-dom";

const ReatlierNavbar = () => {
  const navigate = useNavigate();
  const [ParentmenuList, setParentmenuList] = useState([]);
  const GetUserid =sessionStorage.getItem('token');
  const GetUserDetails =sessionStorage.getItem('UserDetails');
  const UserDetails = JSON.parse(GetUserDetails)[0]
  console.log("res",UserDetails)
 
  

  useEffect(() => {
    MenuList();
  }, []);



  const [isOpen, setIsOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('#dropdown') && !event.target.closest('#dropdownDefaultButton')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const MenuList = async () => {
    const menudata = {
      OperationType: "Viewall",
      UserId: GetUserid,
    };

    let url = baseUrl + MethodNames.ViewUserMenu;
    let res = await ServicesApi(url, menudata);
    try {
      if (res?.ViewUserMenu) {
        let ParentMenu = res?.ViewUserMenu;
        // .filter((i)=>i.ParentId == 0)
        setParentmenuList(ParentMenu);
      }
    } catch (error) {
      console.log(error);
    }

    // let ChildMenu =res?.ViewUserMenu.filter((i)=>i.PageId == 0)
   // console.log("menulist",ParentMneu)
  };

  const logout = () => {
    sessionStorage.clear("");
    navigate("/");
  };

  return (
    <div>
      <nav class="bg_color dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            /> */}
            <img alt="Cpm logo" src={logo} className="h-8 mr-2" />

            <p className="text-white ml-2 mt_10">RETAILER</p>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              My account
            </button> */}

            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
            <div className="relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
      {/* <span class="sr-only">Open user menu</span> */}
      My account
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              {UserDetails.UserName}
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              {UserDetails.Email}
              </a>
            </li>
            {/* <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Earnings
              </a>
            </li> */}
            <li>
              <h2 onClick={logout} className="block text-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Sign out
              </h2>
            </li>
          </ul>
        </div>
      )}
    </div>
            
      
            </div>

            <button
             onClick={toggleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
         className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul class="flex  flex-wrap   p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-5 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-whit dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {ParentmenuList?.filter((i) => i.ParentId == 0).map(
                (item, index) => {
                  console.log("ParentmenuList", ParentmenuList);
                  let ChildMenuList = ParentmenuList?.filter((i) => i.ParentId === item.PageId);
                  console.log("ChildMenuList", ChildMenuList);
                  return (
                    <li class="relative group">
                      <NavLink   className={({isActive})=> isActive?"text-white font-bold  rounded" : "block py-2 hover:underline px-3 text-white bg-green rounded hover:bg-slate-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
                        to={`/${item.URL}`}
                        class=""
                      >
                        {item.Name}
                      </NavLink>
                      <ul class="absolute z-50 hidden text-gray-700 pt-1 group-hover:block">
                        {ChildMenuList &&
                          ChildMenuList.sort((a, b) =>
                            a.Name.localeCompare(b.Name)
                          ).map((ChildList, index) => {
                            return (
                              <li
                                class="w-44 -ms-12 hover:underline hover:underline-offset-8 hover:text-blue-500 hover:duration-300 cursor-pointe"
                                key={index}
                              >
                                <Link
                                  // onClick={() => navigate(`/${ChildList.URL}`)}
                                  to={`/${ChildList.URL}`}
                                  class="rounded-t bg-gray-100 hover:bg-gray-200 py-1 px-4 block whitespace-no-wrap"
                                >
                                  {ChildList.Name}
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ReatlierNavbar;
