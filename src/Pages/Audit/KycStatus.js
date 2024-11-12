import React, { useEffect, useState } from "react";
import RetailerNavbar from "../Retailer/RetailerNavbar";
import { ToastContainer } from "react-toastify";
import { ServicesApi } from "../Api";
import { baseUrl, ViewAllFileKyc } from "../../Constant/constant";
import { MethodNames } from "../../Constant/methodNames";
import { Image, Card, Typography } from "antd";
import { useLocation } from "react-router-dom";
import { Select } from "antd";


const KycStatus = () => {
  const userId =sessionStorage.getItem("token")
  const [ProgramList, setProgramList] = useState([]);
  const [ResionKycList, setResionKycList] = useState([]);
  const [NotApprove, setNotApprove] = useState(false);
  const Location = useLocation();
  const [Remark,setRemark]= useState("")
  const SingleKycdata = Location?.state?.SinglekysDetails?.ShopId;
  // console.log("SingleKycdata",SingleKycdata)

  const ViewKycFileUrl = ViewAllFileKyc;

  const [selectedItems, setSelectedItems] = useState([]);
  console.log("selectedItems",selectedItems)
  
  useEffect(() => {
    PenddingKycDataList(SingleKycdata);
    ResionPendingkyc()
  }, []);



    //  ResionPendingkyc datt call
    const ResionPendingkyc = async () => {
      let url = baseUrl + MethodNames.ViewKYBRejectionReason;
      const data = {
        OperationType: "ViewAll",
        UserId: userId || "",
      };
      try {
        let response = await ServicesApi(url, data);
        console.log("res ResionPendingkyc data ", response.ViewKYBRejectionReason);
        if (response?.ViewKYBRejectionReason) {
          setResionKycList(response?.ViewKYBRejectionReason);
        }
      } catch (error) {
        console.log(error);
      }
    };

  //  Kyc all list api call
  const PenddingKycDataList = async (SingleKycdataUser) => {
    let url = baseUrl + MethodNames.RetailerKYC;
    const data = {
      OperationType: "ViewSingle",
      ShopId: SingleKycdataUser || "",
    };
    try {
      let response = await ServicesApi(url, data);
      console.log("res single kyc data", response.RetailerKYC);
      if (response?.RetailerKYC) {
        setProgramList(response?.RetailerKYC);
      }
    } catch (error) {
      console.log(error);
    }
  };


  // reject kyx data call 
  const RejectKycApprove =(e)=>{
    e.preventDefault()
    const data ={
      ShopId:SingleKycdata||"",
      KYCStatus:"failed",
      ReasonId:selectedItems||0,
      Remark:Remark,
      UserId:userId||""
    }
    console.log("strinfyData----data",data)
    let strinfyData =JSON.stringify(data)

    console.log("strinfyData",strinfyData)
    const strData ={
      OperationType:"",
      JsonData:strinfyData
    }
  

  }
  return (
    <div className="w-full p-4 sm:p-8 bg-gray-100">
      <ToastContainer />
      <div className="min-h-20">
        <RetailerNavbar />
      </div>

      {/* Header */}
      <div className="container mx-auto px-2 card_box bg-white">
        <div className="flex justify-between items-center mb-1">
          <h6 className="text-xl sm:text-2xl font-bold ms-2">Kyc Details</h6>
        </div>

        {/* Details Sections */}
        {ProgramList.map((item, key) => {          return (
            <>
              <div className="  bg-gray-100 p-2 px-4 rounded-lg shadow-md mb-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <DetailItem label="Shop Id" value={item.ShopId} />
                  <DetailItem label="Retailer Id" value={item.RetailerId} />
                  <DetailItem label="Retailer Name" value={item.RetailerName} />
                  <DetailItem label="DOB" value={item.DOB} />
                </div>
              </div>

              <div className="bg-gray-100  p-2 px-4 rounded-lg shadow-md mb-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <DetailItem label="Mobile" value={item.Mobile} />
                  <DetailItem label="Email" value={item.Email} />
                  <DetailItem label="Shop Name" value={item.ShopName} />
                  <DetailItem label="Address" value={item.Address} />
                </div>
              </div>

              <div className="bg-gray-100  p-2 px-4 rounded-lg shadow-md mb-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <DetailItem label="Pincode" value={item.Pincode} />
                  <DetailItem label="City" value={item.City} />
                  <DetailItem label="State" value={item.State} />
                  <DetailItem label="GST No" value={item.GSTNo} />
                </div>
              </div>

              {/* Image Sections */}

              <ImageSection
                title="GST Image"
                src={ViewKycFileUrl + item.GSTImage}
              />

              <ImageSection
                title="PAN Image"
                value={item.PAN}
                src={ViewKycFileUrl + item.PanImage}
              />
              <div className="bg-gray-100  p-2 px-4 rounded-lg shadow-md mb-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <DetailItem
                    label="Contact Person"
                    value={item.ContactPerson}
                  />
                  <DetailItem
                    label="Contact Person Mobile"
                    value={item.ContactPersonMobile}
                  />
                </div>
              </div>
              <ImageSection
                title="Shop Images"
                src={ViewKycFileUrl + item.ShopImage}
              />
              <div className="bg-gray-100  p-2 px-4 rounded-lg shadow-md mb-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <DetailItem label="Bank Name" value={item.BankName} />
                </div>
              </div>

              <div className="bg-gray-100 p-2 px-4 rounded-lg shadow-md mb-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <DetailItem
                    label="Bank Account No"
                    value={item.BankAccountNo}
                  />
                  <DetailItem label="IFSC" value={item.IFSC} />
                  <DetailItem
                    label="Account Holder Name"
                    value={item.AccountHolderName}
                  />
                  <DetailItem label="Bank Address" value={item.BankAddress} />
                </div>
              </div>
              <ImageSection
                title="Bank Proof Image"
                src={ViewKycFileUrl + item.BankProofImage}
              />
              <div className="bg-gray-100  p-2 px-4 rounded-lg shadow-md mb-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <DetailItem label="Register Date" value={item.RegisterDate} />
                  <DetailItem label="KYC Status" value={item.KYCStatus} />
                  <DetailItem
                    label="KYC Checked By"
                    value={item.KYCCheckedBy}
                  />
                  <DetailItem
                    label="KYC Checked Remark"
                    value={item.KYCCheckedRemark}
                  />
                  <DetailItem
                    label="KYC Checked Remark"
                    value={item.KYCCheckedDate}
                  />
                </div>
              </div>
                 {/* Action Buttons */}
        <div className="mt-7 bg-gray-100 bg-gray-100  p-2 px-4 rounded-lg shadow-md mb-4">
          <h2 className="text-lg font-semibold mb-4">Action for KYC</h2>
          <div className="fle space-x-">
            {NotApprove == true ? (
              <>
                <Select
                  mode="multiple"
                  placeholder="Inserted are removed"
                  value={selectedItems}
                  onChange={setSelectedItems}
                  // style={{
                  //   width: '50%',
                  // }}
                  className=" w-full md:w-1/2"
                  options={ResionKycList.map((item) => ({
                    value: item.ReasonId,
                    label: item.Reason,
                  }))}
                />

                <div>

             
<label for="message" class="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Remark </label>
<textarea name="remark" value={Remark} onChange={(e)=>setRemark(e.target.value)} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
</div>
    <div className="flex justify-end mt-3">
    <button    onClick={RejectKycApprove} className="bg-blue-700 fs_13 text-white px-4 py-2 me-3 rounded-lg hover:bg-blue-700 ">
                  Reject
                </button>
                <button
                  onClick={() => setNotApprove(!NotApprove)}
                  className="bg-red-600 fs_13 text-white px-4 py-2 rounded-lg hover:bg-red-700 "
                >
                  Cancle
                </button>
                </div>
              </>
            ) : (
              <>
       
                <button className="bg-blue-700 fs_13 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ">
                  Approve
                </button>
                <button
                  onClick={() => setNotApprove(!NotApprove)}
                  className="bg-red-600 fs_13 text-white px-4 py-2 ms-3 rounded-lg hover:bg-red-500"
                >
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
            </>
          );
        })}

     
      </div>
    </div>
  );
};

// Reusable components for detail items and image sections
const DetailItem = ({ label, value }) => (
  <div className="text-gray-700">
    <strong className="fs_13">{label}</strong>
    <br />
    <span className="fs_12">{value}</span>
  </div>
);

const ImageSection = ({ title, value, src, multiple, srcList = [] }) => {
  const imageurl = src.split(".");
  const extCheck =imageurl.length > 0 ? imageurl[imageurl.length - 1].toLowerCase() : "";
  console.log("imageurl", extCheck);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <h2 className=" fs_13 font-semibold">{title}</h2>
      <h2 className="  fs_12 font-semibold mb-4">{value}</h2>
      <div
        className={`grid gap-4 ${multiple ? "sm:grid-cols-2" : "grid-cols-1"}`}
      >
        {multiple ? (
          srcList.map((src, index) => {
            const extCheck = src.split(".").pop().toLowerCase();
            return (
              <Card key={index} className="rounded-lg shadow-lg">
                {extCheck === "pdf" ? (
                  <iframe className="w-full h-80" src={src} />
                ) : (
                  <Image
                    className="w-full h-auto rounded-lg"
                    alt={title}
                    src={src}
                    width={300}
                    height={200}
                  />
                )}
              </Card>
            );
          })
        ) : (
          <Card className="rounded-lg shadow-lg">
            {extCheck === "pdf" ? (
              <iframe className="w-full h-80" src={src} />
            ) : (
              <Image
                className="w-full h-auto rounded-lg"
                alt={title}
                src={src}
                width={300}
                height={200}
              />
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

export default KycStatus;
