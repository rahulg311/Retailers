import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';  // Ensure you import the CSS for toast notifications
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';  // Import CheckboxTree CSS
import ReatlierNavbar from '../Retailer/RetailerNavbar';
import { ServicesApi } from "../Api";
import { baseUrl } from "../../Constant/constant";
import { MethodNames } from "../../Constant/methodNames";
import {
  FaCheckCircle,
  FaSquare,
  FaMinusSquare,
  FaPlusSquare,
  FaAngleDoubleRight,
  FaAngleDoubleDown,
  FaFolder,
  FaFolderOpen,
  FaFile,
} from 'react-icons/fa';

const RoleMapping = () => {
  const location = useLocation();
  const GetUserid = sessionStorage.getItem('token');
  const navigate = useNavigate();
  const [ViewRoleList, setViewRoleList] = useState([]);
  const [InsterRole, setInsterRole] = useState([]);
  const [selectedRole, setSelectedRole] = useState({
    RoleId: 0,
    Role: "",
  });
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    MenuList();
  }, [selectedRole]);

  useEffect(() => {
    ViewRoles();
  }, []);

  // View role API call
  const ViewRoles = async () => {
    const UserRole = {
      OperationType: "Viewall",
      UserId: "",
    };

    let apiUrl = baseUrl + MethodNames.ViewRole;
    let res = await ServicesApi(apiUrl, UserRole);
    if (res?.ViewRole) {
      setViewRoleList(res?.ViewRole);
    } else {
      console.log("ViewRole no data");
    }
  };

  // Transform menu data into tree nodes
  const menudataList = (ParentMenu) => {
    const data =
      ParentMenu &&
      ParentMenu.filter((i) => i.ParentId === 0)
        .sort((a, b) => a.Name.localeCompare(b.Name))
        .map((item) => ({
          value: item.PageId.toString(),
          label: item.Name,
          id: item.PageId,
          parentId: item.ParentId,
          children: ParentMenu?.filter((i) => i.ParentId === item.PageId)
            .sort((a, b) => a.Name.localeCompare(b.Name))
            .map((i) => ({
              id: i.PageId,
              parentId: i.ParentId,
              value: i.PageId.toString(),
              label: i.Name,
            })),
        }));
    setNodes(data);
  };

  // Get menu list for API call
  const MenuList = async () => {
    const menudata = {
      OperationType: "Viewall",
      RoleId: selectedRole?.RoleId,
    };
    let url = baseUrl + MethodNames.MasterMenu;
    let res = await ServicesApi(url, menudata);
    try {
      if (res?.MasterMenu) {
        let ParentMenu = res?.MasterMenu;

        // Set checked values based on the menu data
        const checkedMenu = ParentMenu.filter((i) => i.Checked === 1).map(i => i.PageId.toString());
        setChecked(checkedMenu);
        menudataList(ParentMenu);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle checked user roles
  const handleChecked = (checkedValues) => {
    const updatedChecked = [...checkedValues];

  nodes.forEach(node => {
    if (node.children && node.children.length > 0) {
      const childValues = node.children.map(child => child.value);
      const anyChildChecked = childValues.some(val => updatedChecked.includes(val));
      console.log("anyChildChecked",anyChildChecked)
      const allChildrenUnchecked = childValues.every(val => !updatedChecked.includes(val));
      
      if (anyChildChecked) {
        if (!updatedChecked.includes(node.value)) {
            updatedChecked.push(node.value); // Add the parent value if any child is checked
          }
      } 

      if (allChildrenUnchecked) {
        const parentIndex = updatedChecked.indexOf(node.value);
        if (parentIndex > -1) {
          updatedChecked.splice(parentIndex, 1); // Remove the parent value if all children are unchecked
        }
      }
    }
  });
  // console.log("checkedValue----------------0001",updatedChecked)

  // console.log("checkedValue----------------000",updatedChecked)
    setChecked(updatedChecked);

    const checkData = updatedChecked.map((value) => ({
      RoleId: selectedRole?.RoleId,
      PageId: value,
      Checked: 1,
      UserId: GetUserid
    }));
      setInsterRole(checkData);
};

  // Submit user role
  const inserRole = async (e) => {
    e.preventDefault();

    if (InsterRole.length <= 0) {
      toast.error("Please assign user roles");
      return;
    }

    const Jsondata = {
      OperationType: "Add",
      JsonData: JSON.stringify(InsterRole)
    };

    try {
      const response = await axios.post(baseUrl + MethodNames.UpsertRoleMapping, Jsondata);
      if (response.data.UpsertRoleMapping[0].RecordStatus === "Success") {
        toast.success("Successfully Added User Roles");
      }
    } catch (error) {
      console.error("Error in upserting mapping user roles", error);
      toast.error("Error in submitting roles");
    }
  };

  return (
    <div className="h-full">
      <ToastContainer />
      <div className="min-h-20">
        <ReatlierNavbar />
      </div>
      <div className="flex items-center justify-center p-2 mt-2 h-full">
        <div className="bg-white shadow-md rounded-lg py-3 mt-8 px-6 w-full max-w-4xl shadow_css">
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full lg:w-1/2 px-3 mb-6">
              <div className="w-full pr-8">
                <h2 className="text-lg font-bold mb-4">Select a user role</h2>
                <div className="flex flex-col">
                  {ViewRoleList && ViewRoleList.map((role) => (
                    <div key={role.RoleId} className="flex items-center mb-4">
                      <input
                        type="radio"
                        id={`role-${role.RoleId}`}
                        name="role"
                        value={role.RoleId}
                        checked={selectedRole.RoleId === role.RoleId}
                        onChange={() => setSelectedRole({ ...selectedRole, RoleId: role.RoleId, Role: role.Role })}
                        className="mr-2"
                      />
                      <label htmlFor={`role-${role.RoleId}`} className="text-sm font-semibold">
                        {role.Role}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 border-l menuScroll ">
              <h2 className="text-xl font-bold mb-6">{selectedRole.Role}</h2>
              <CheckboxTree
                nodes={nodes}
                disabled={selectedRole.Role === "" ? true : false}
                className="mb-6"
                checked={checked}
                expanded={expanded}
                onCheck={handleChecked}
                onExpand={setExpanded}
                icons={{
                  check: <FaCheckCircle className="text-green-600 mr-2" />,
                  uncheck: <FaSquare className="text-gray-600 mr-2" />,
                  halfCheck: <FaMinusSquare className="text-yellow-600 mr-2" />,
                  expandClose: <FaPlusSquare className="text-blue-600 text-size-20 mr-2" />,
                  expandOpen: <FaMinusSquare className="text-blue-600 mr-2" />,
                  expandAll: <FaAngleDoubleRight className="text-purple-600 mr-2" />,
                  collapseAll: <FaAngleDoubleDown className="text-purple-600 mr-2" />,
                  parentClose: <FaFolder className="text-brown-600 mr-2" />,
                  parentOpen: <FaFolderOpen className="text-brown-600 mr-2" />,
                  leaf: <FaFile className="text-gray-600 mr-2 rct-icon rct-icon-leaf-close" />,
                }}
              />
            </div>
          </div>
          <div className="flex justify-end w-full">
            <button className="bg-blue-700 text-white text-xs px-4 py-2 rounded-md" onClick={inserRole}>
              Insert Role
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleMapping;
