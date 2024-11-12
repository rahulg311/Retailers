import React, { useState } from "react";
import logo from "../../../Images/Group 26.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { baseUrl, uploadFileBaeUrl } from "../../../Constant/constant";
import { MethodNames } from "../../../Constant/methodNames";
import { ServicesApi } from "../../Api";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import axios from "axios";

const KycDetiles = () => {
  const navigate = useNavigate();
  const UserPanCard = useSelector((state) => state);
//  get sessionStorage pancard token
  const UserPancardData =sessionStorage.getItem("Pancard")

  const [KycStep, setKycSetep] = useState("kyc1");

  const [kycData, setkycData] = useState({
    ShopId: "",
    RetailerId: "",
    RetailerName: "",
    DateOfBirth: "",
    Mobile: "",
    Email: "",
    // ResidentialAddress: "",
    // ResidentialPincode: "",
    // ResidentialCity: "",
    // ResidentialState: "",
    ShopName: "",
    ShopAddress: "",
    ShopPincode: "",
    ShopCity: "",
    ShopState: "",
    GSTNo: "",
    GSTImage: "",
    GSTImageFile: "",
    PanNumber: UserPancardData ||"",
    PanImage: "",
    PanImageFile: "",
    ContactPerson: "",
    ContactPersonMobile: "",
    ShopImage: "",
    ShopImageFile: "",
    BankName: "",
    BankAccountNo: "",
    IFSC: "",
    AccountHolderName: "",
    BankAddress: "",
    BankProofImage: "",
    BankProofImageFile: "",
    UserId: "",
  });

  console.log("kycData data", kycData);

  const changedata = (e) => {
    const { name, value } = e.target;
    setkycData({ ...kycData, [name]: value });
  };

  // handle kyc step
  const handleSubmit = (e, key) => {
    e.preventDefault();
    setKycSetep(key);
  };

  const generateUniqueFilename = (fileName, PanCards, keyName) => {
    if (!fileName || PanCards === "" || PanCards === null) {
      toast.error("pancard & filename is empty");
      return;
    }
    let currentDate = moment().format("DDMMYYYY");
    let fileParts = fileName.split(".");
    let ext = fileParts.length > 0 ? fileParts[fileParts.length - 1] : "";
    const uniqFilename = `${keyName}_${PanCards}_${currentDate}.${ext}`;
    return uniqFilename;
  };

  //  upload file
  async function uploadFile(file, filename, folderName) {
    console.log("id proof file name------ ", file, filename, folderName);
    try {
      console.log("uploadFile filename:", filename);

      const formData = new FormData();
      formData.append("filename", filename);
      formData.append("folderName", folderName);

      // Ensure file is not null or undefined
      if (!file) {
        console.error("File is required but not supplied.");
        return false;
      }

      formData.append("file", file);
      console.log("formData:", formData);

      return await axios({
        method: "post",
        // url: uploadFileBaeUrl + 'uploadFile',
        url: uploadFileBaeUrl,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          return res.status == 200;
        })
        .catch((err) => {
          console.log("err:", err);
          return false;
        });
    } catch (error) {
      // Handle errors
      console.error("Error uploading file:", error);
      return false;
    }
  }

  //  all data submit  by api services
  const handleSubmitData = async (e) => {
    e.preventDefault();

    let uniq_GSTImageFile;
    let uniq_PanImageFile;
    let uniq_ShopImageFile;
    let uniq_BankProofImageFile;

    if (kycData.GSTImageFile) {
      console.log("KYC----------", kycData?.GSTImage, kycData.GSTImageFile);
      const uniq_filenameGSTImage = generateUniqueFilename(kycData?.GSTImage, UserPancardData, "GST" );
      let isFileUploadedGSTImage = await uploadFile(kycData?.GSTImageFile, uniq_filenameGSTImage,"RetailerKyc");
      uniq_GSTImageFile = uniq_filenameGSTImage;
      if (!isFileUploadedGSTImage) {
        toast.error("Cannot upload GST Image File !");
        return;
      }
    } else {
      toast.error("please upload GST Image File");

      console.log("please upload GST Image File");
      return;
    }
    if (kycData.PanImageFile) {
      const uniq_filenamePANImage = generateUniqueFilename(kycData?.PanImage,UserPancardData, "PC");
      let isFileUploadedGSTImage = await uploadFile(kycData?.PanImageFile,uniq_filenamePANImage,"RetailerKyc");
      uniq_PanImageFile = uniq_filenamePANImage;
      if (!isFileUploadedGSTImage) {
        toast.error("Cannot upload Aadhar Photo!");
        return;
      }
    } else {
      toast.error("please upload Pan card  Image");
      console.log("please upload Pan card Image");
      return;
    }
    if (kycData.ShopImageFile) {
      const uniq_filenameShopmage = generateUniqueFilename( kycData?.ShopImage, UserPancardData,"SP");
      let isFileUploadedShopImage = await uploadFile(kycData?.ShopImageFile,uniq_filenameShopmage,"RetailerKyc");
      uniq_ShopImageFile = uniq_filenameShopmage;
      if (!isFileUploadedShopImage) {
        toast.error("Cannot upload Shop Photo!");
        return;
      }
    } else {
      toast.error("please upload Shop Image");
      console.log("please upload Shop Image");
      return;
    }
    if (kycData.BankProofImageFile) {
      const uniq_BankProofImage = generateUniqueFilename(kycData?.BankProofImage,UserPancardData,"BA");
      let isFileUploadedBankProofImage = await uploadFile( kycData?.BankProofImageFile,uniq_BankProofImage, "RetailerKyc");
      uniq_BankProofImageFile = uniq_BankProofImage;
      if (!isFileUploadedBankProofImage) {
        toast.error("Cannot upload Shop Photo!");
        return;
      }
    } else {
      toast.error("please upload Shop Image");
      console.log("please upload Shop Image");
      return;
    }

    let dataChange = kycData;
    dataChange["GSTImage"] = uniq_GSTImageFile;
    dataChange["PanImage"] = uniq_PanImageFile;
    dataChange["ShopImage"] = uniq_ShopImageFile;
    dataChange["BankProofImage"] = uniq_BankProofImageFile;
    setkycData(dataChange);
    console.log("kycData", kycData);

    // toast.success("succefully all uplode file");
    console.log( "all uploaded file",uniq_BankProofImageFile, uniq_PanImageFile, uniq_ShopImageFile);

    const UserMasterDesignation = JSON.stringify(kycData);
    const MasterDesignation = {
      OperationType: "Add",
      JsonData: UserMasterDesignation,
    };

    let url = baseUrl + MethodNames.UpsertShopKYC;

    try {
      let response = await ServicesApi(url, MasterDesignation);
      if (response.UpsertShopKYC[0].RecordStatus == "Success") {
        toast.success("Success has been registered.");
         navigate("/Thanks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  navigation to back
  function back() {
    navigate("/");
  }
  return (
    <div className="h-full">
      <ToastContainer />
      <div className="headerLogin row  ">
        <div className="col-md-12 flex p-3 px-5">
          <img src={logo} className=" mr-2" />
          <p className="text-white ml-2 mt_10">RETAILER</p>
        </div>
      </div>

      {KycStep === "kyc1" ? (
        <div class=" bg-zinc-10  flex items-center justify-center  p-4 mt-5 h-full ">
          <div class="bg-white shadow-m shadow_css rounded-lg p-6 w-full max-w-3xl ">
            <div class="flex  flex-wrap  fitems-center mb-4">
              <button
                class="flex items-center text-zinc-500 hover:text-blue-700"
                onClick={back}
              >
                <FaArrowLeft className="mr-3" />
                <span>Back</span>
              </button>
              <h2 class="ml-4 text-xl font-semibold ">
                Done your KYC with required details
              </h2>
            </div>
            <div class="flex items-center mb-4">
              <span class="text-zinc-500">1 of 3</span>
              <div class="flex-grow ml-4">
                <div
                  class="h-1 bg-blue-500 rounded-full"
                  style={{ width: "33%;" }}
                ></div>
              </div>
              <div class="flex-grow ml-4">
                <div
                  class="h-1 bg-gray-500 bg-slate-200 text- rounded-full"
                  style={{ width: "33%;" }}
                ></div>
              </div>
              <div class="flex-grow ml-4">
                <div
                  class="h-1 bg-slate-200 rounded-full"
                  style={{ width: "33%;" }}
                ></div>
              </div>
            </div>
            <div class="bg-zinc- p-6 rounded-lg shadow-outer">
              <h3 class="text-lg font-semibold mb-4">Basic details</h3>
              <Form onSubmit={(i) => handleSubmit(i, "kyc2")}>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    name="RetailerName"
                    value={kycData.RetailerName}
                    onChange={changedata}
                    placeholder="Retailer Name"
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                  />
                  <div class="relative">
                    <input
                      required
                      type="date"
                      name="DateOfBirth"
                      value={kycData.DateOfBirth}
                      onChange={changedata}
                      // onChange={(e)=>setkycData({...kycData, RetailerName:e.target.value})}
                      placeholder="Date of birth"
                      class="border border-zinc-300 rounded-lg p-2 w-full pr-10 text-gray-500"
                    />
                  </div>
                  <input
                    required
                    pattern="\d{10}"
                    name="Mobile"
                    minlength="10"
                    maxlength="10"
                    title="Either 10 chars minimum Mobile no)"
                    value={kycData.Mobile}
                    onChange={(e) => {
                      const TextInput = e.target.value
                        .replace(/[^0-9\s]/g, "")
                        .slice(0, 10);
                      setkycData({ ...kycData, Mobile: TextInput });
                    }}
                    type="text"
                    placeholder="91+ Phone number"
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                  />
                  <input
                    type="email"
                    pattern=".+@.+\.com"
                    size="30"
                    name="Email"
                    value={kycData.Email}
                    onChange={changedata}
                    // default@example.com
                    placeholder="Email address"
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                    required
                  />
                </div>
                <div class="flex justify-end mt-4">
                  <button
                    class="bg-blue-800 text-white px-4 py-2 rounded"
                    type="submit"
                  >
                    Continue
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      ) : KycStep === "kyc2" ? (
        <div class="bg-zinc-10  flex items-center justify-center  p-2 mt-2 h-full ">
          <div class="bg-white shadow-m shadow_css rounded-lg p-6 w-full max-w-3xl ">
            <div class="flex  flex-wrap  fitems-center mb-4">
              <button
                class="flex items-center text-zinc-500 hover:text-blue-700"
                onClick={() => setKycSetep("kyc1")}
              >
                <FaArrowLeft className="mr-3" />
                <span>Back</span>
              </button>
              <h2 class="ml-4 text-xl font-semibold">
                Done your KYC with required details
              </h2>
            </div>
            <div class="flex items-center mb-4">
              <span class="text-zinc-500">2 of 3</span>
              <div class="flex-grow ml-4">
                <div
                  class="h-1 bg-blue-500 rounded-full"
                  style={{ width: "33%;" }}
                ></div>
              </div>
              <div class="flex-grow ml-4">
                <div
                  class="h-1 bg-blue-500 text- rounded-full"
                  style={{ width: "33%;" }}
                ></div>
              </div>
              <div class="flex-grow ml-4">
                <div
                  class="h-1 bg-slate-200 rounded-full"
                  style={{ width: "33%;" }}
                ></div>
              </div>
            </div>
            <div class="bg-zinc- p-2 rounded-lg shadow-outer">
              <h3 class="text-lg font-semibold mb-2">Shop details</h3>
              <Form onSubmit={(i) => handleSubmit(i, "kyc3")}>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="ShopName"
                    value={kycData.ShopName}
                    onChange={changedata}
                         required
                    placeholder="Shop name"
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                  />

                  <div class="relative">
                    <input
                      type="text"
                      name="ShopAddress"
                      value={kycData.ShopAddress}
                      onChange={changedata}
                           required
                      placeholder="Shop Address"
                      class="border border-zinc-300 rounded-lg p-2 w-full pr-10"
                    />
                    {/* <img aria-hidden="true" alt="calendar" src="https://placehold.co/16x16" class="absolute right-2 top-2" /> */}
                  </div>
                  <input
                    type="text"
                    name="ShopPincode"
                    value={kycData.ShopPincode}
                    onChange={changedata}
                         required
                    placeholder=" Shop Pincode"
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    name="ShopState"
                    value={kycData.ShopState}
                    onChange={changedata}
                         required
                    placeholder="Shop State"
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    name="ShopCity"
                    value={kycData.ShopCity}
                    onChange={changedata}
                         required
                    placeholder="Shop City"
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    name="ContactPerson"
                    value={kycData.ContactPerson}
                    onChange={changedata}
                         required
                    placeholder="Contact person name"
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    name="GSTNo"
                    minlength="8"
                    maxlength="15"
                    title="Either 0 OR (15 chars minimum GSTNo)"
                    pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$"
                    value={kycData.GSTNo}
                    onChange={changedata}
                         required
                    placeholder="Enter GST Number "
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    name="PanNumber"
                    value={kycData.PanNumber}
                    minlength="8"
                    maxlength="10"
                    title="Either 0 OR (10 chars minimum PanNumber)"
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    onChange={changedata}
                         required
                    placeholder="Enter Pan Number "
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                  />
                  <div class="font-[sans-serif] max-w-md mx-aut">
                    <label class="text-base  text-sm text-gray-500 font-semibol mb-2 block">
                      Upload GST certificate
                    </label>
                    <input
                      name="GSTImage"
                      //  value={kycData.GSTImage}
                      accept=".jpg, .jpeg, .png, .pdf"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const allowedExtensions = [
                          ".jpg",
                          ".jpeg",
                          ".png",
                          ".pdf",
                        ];
                        const fileExtension = file.name
                          .split(".")
                          .pop()
                          .toLowerCase();
                        console.log("fileExtension", fileExtension);
                        if (!allowedExtensions.includes("." + fileExtension)) {
                          toast.error(
                            "Only JPG, JPEG, PNG, and PDF files are allowed.",
                          );
                          e.target.value = null;
                          return;
                        }
                        setkycData({
                          ...kycData,
                          GSTImageFile: file,
                          GSTImage: file.name,
                        });
                      }}
                      type="file"
                      required
                      class="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-blue-800 file:hover:bg-gray-700 file:text-white rounded"
                    />
                    {/* <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p> */}
                  </div>
                  <div class="font-[sans-serif] max-w-md mx-aut">
                    <label class="text-base text-sm text-gray-500 font-semibol mb-2 block">
                      Upload pan Images
                    </label>
                    <input
                      name="PanImage"
                      // value={kycData.PanImage}
                      accept=".jpg, .jpeg, .png, .pdf"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const allowedExtensions = [
                          ".jpg",
                          ".jpeg",
                          ".png",
                          ".pdf",
                        ];
                        const fileExtension = file.name
                          .split(".")
                          .pop()
                          .toLowerCase();
                        console.log("fileExtension", fileExtension);
                        if (!allowedExtensions.includes("." + fileExtension)) {
                          toast.error(
                            "Only JPG, JPEG, PNG, and PDF files are allowed.",
                          );
                          e.target.value = null;
                          return;
                        }
                        setkycData({
                          ...kycData,
                          PanImageFile: file,
                          PanImage: file.name,
                        });
                      }}
                      type="file"
                      required
                      class="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-blue-800 file:hover:bg-gray-700 file:text-white rounded"
                    />
                    {/* <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p> */}
                  </div>

                  <div class="font-[sans-serif] max-w-md mx-aut">
                    <label class="text-base  text-sm text-gray-500 font-semibol mb-1 block ">
                      Upload pictures of shop
                    </label>
                    <input
                      name="ShopImage"
                      // value={kycData.ShopImage}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const allowedExtensions = [
                          ".jpg",
                          ".jpeg",
                          ".png",
                          ".pdf",
                        ];
                        const fileExtension = file.name
                          .split(".")
                          .pop()
                          .toLowerCase();
                        console.log("fileExtension", fileExtension);
                        if (!allowedExtensions.includes("." + fileExtension)) {
                          toast.error(
                            "Only JPG, JPEG, PNG, and PDF files are allowed.",
                          );
                          e.target.value = null;
                          return;
                        }
                        setkycData({
                          ...kycData,
                          ShopImageFile: file,
                          ShopImage: file.name,
                        });
                      }}
                      required
                      type="file"
                      class="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-blue-800 file:hover:bg-gray-700 file:text-white rounded"
                    />
                    {/* <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p> */}
                  </div>
                  <input
                    type="text"
                    name="ContactPersonMobile"
                    value={kycData.ContactPersonMobile}
                    minlength="8"
                    maxlength="10"
                    title="Either 0 OR (10 chars minimum ContactPersonMobile)"
                    onChange={changedata}
                        
                    required
                    placeholder="Contact person phone number"
                    class="border border-zinc-300 rounded-lg p-2 w-full input_h mt-4"
                  />
                </div>
                <div class="flex justify-end mt-2">
                  <button class="bg-blue-800 text-white px-4 py-2 -">
                    Continue
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <div class=" bg-zinc-10  flex items-center justify-center  p-4 mt-5 h-full ">
          <div class="bg-white shadow-m shadow_css rounded-lg p-6 w-full max-w-3xl ">
            <div class="flex  flex-wrap  fitems-center mb-4">
              <button
                class="flex items-center text-zinc-500 hover:text-blue-700"
                onClick={() => setKycSetep("kyc2")}
              >
                <FaArrowLeft className="mr-3" />
                <span>Back</span>
              </button>
              <h2 class="ml-4 text-xl font-semibold">
                Done your KYC with required details
              </h2>
            </div>
            <div class="flex items-center mb-4">
              <span class="text-zinc-500">3 of 3</span>
              <div class="flex-grow ml-4">
                <div
                  class="h-1 bg-blue-500 rounded-full"
                  style={{ width: "33%;" }}
                ></div>
              </div>
              <div class="flex-grow ml-4">
                <div
                  class="h-1 bg-blue-500 text- rounded-full"
                  style={{ width: "33%;" }}
                ></div>
              </div>
              <div class="flex-grow ml-4">
                <div
                  class="h-1 bg-blue-500 rounded-full"
                  style={{ width: "33%;" }}
                ></div>
              </div>
            </div>
            <div class="bg-zinc- p-6 rounded-lg shadow-outer">
              <h3 class="text-lg font-semibold mb-4">Bank details</h3>
              <Form onSubmit={handleSubmitData}>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    id="countries"
                    required
                    name="BankName"
                    onChange={changedata}
                    value={kycData.BankName}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select bank</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <div class="relative">
                    <input
                      type="text"
                      name="BankAccountNo"
                      value={kycData.BankAccountNo}
                      minlength="12"
                      maxlength="14"
                      title="Either 12 OR (14 chars minimum BankAccountNo)"
                      onChange={changedata}
                      placeholder="Account number"
                      class="border border-zinc-300 rounded-lg p-2 w-full pr-10"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="IFSC"
                    maxlength="11"
                    value={kycData.IFSC}
                    pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
                    onChange={changedata}
                    placeholder="IFSC"
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    name="AccountHolderName"
                    value={kycData.AccountHolderName}
                    onChange={changedata}
                    placeholder="Account holder name"
                    class="border border-zinc-300 rounded-lg p-2 w-full"
                    required
                  />
                  <div class="font-[sans-serif] max-w-md mx-aut">
                    <label class="text-base  text-sm text-gray-500 font-semibol mb-1 block ">
                      Upload pictures of Bank
                    </label>
                    <input
                      name="BankProofImage"
                      // value={kycData.BankProofImage}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const allowedExtensions = [
                          ".jpg",
                          ".jpeg",
                          ".png",
                          ".pdf",
                        ];
                        const fileExtension = file.name
                          .split(".")
                          .pop()
                          .toLowerCase();
                        console.log("fileExtension", fileExtension);
                        if (!allowedExtensions.includes("." + fileExtension)) {
                          toast.error(
                            "Only JPG, JPEG, PNG, and PDF files are allowed.",
                          );
                          e.target.value = null;
                          return;
                        }
                        setkycData({
                          ...kycData,
                          BankProofImageFile: file,
                          BankProofImage: file.name,
                        });
                      }}
                      type="file"
                      required
                      class="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-blue-800 file:hover:bg-gray-700 file:text-white rounded"
                    />
                    {/* <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p> */}
                  </div>
                  <input
                    type="text"
                    name="BankAddress"
                    value={kycData.BankAddress}
                    onChange={changedata}
                    required
                    placeholder="Bank address"
                    class="border border-zinc-300 rounded-lg p-2 w-full input_h mt-4"
                  />
                </div>
                <div class="flex justify-end mt-4">
                  <button class="bg-blue-800 text-white px-4 py-2 rounded">
                    Continue
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KycDetiles;
