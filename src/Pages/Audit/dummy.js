import React from 'react';
import RetailerNavbar from "../Retailer/RetailerNavbar";
import { ToastContainer } from 'react-toastify';

const KycStatus = () => {
  return (
    <div className="w-full p-8 bg-gray-100">
      <ToastContainer />
      <div className="min-h-20">
        <RetailerNavbar />
      </div>

      {/* Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Kyc Details</h1>
          <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-lg">
            1263
          </div>
        </div>

        {/* Details Sections */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="grid grid-cols-4 gap-4">
            <DetailItem label="Shop Id" value="#0586" />
            <DetailItem label="Retailer Id" value="CPRT-000001" />
            <DetailItem label="Retailer Name" value="Amit Gupta" />
            <DetailItem label="DOB" value="12/05/1989" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="grid grid-cols-4 gap-4">
            <DetailItem label="Mobile" value="+91 9988776655" />
            <DetailItem label="Email" value="email@example.com" />
            <DetailItem label="Shop Name" value="New Shop" />
            <DetailItem label="Address" value="New Paper Gali, Block S-2, Shakarpur, New Delhi" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="grid grid-cols-4 gap-4">
            <DetailItem label="Pincode" value="110092" />
            <DetailItem label="City" value="Delhi" />
            <DetailItem label="GST No" value="GST1234567890" />
          </div>
        </div>

        {/* Image Sections */}
        <ImageSection title="GST Image" src="https://placehold.co/300x200?text=GST+Image" />
        <ImageSection title="PAN Image" src="https://placehold.co/300x200?text=PAN+Image" />
        <ImageSection title="Shop Images" multiple srcList={[
          "https://placehold.co/300x200?text=Shop+1",
          "https://placehold.co/300x200?text=Shop+2",
          "https://placehold.co/300x200?text=Shop+3",
        ]} />
        <ImageSection title="Bank Image" src="https://placehold.co/300x200?text=Bank+Image" />

        {/* Action Buttons */}
        <div className="mt-7">
          <h2 className="text-lg font-semibold mb-4">Action for KYC</h2>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500">Approve</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500">Not Approve</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable components for detail items and image sections
const DetailItem = ({ label, value }) => (
  <div className="text-gray-700">
    <strong>{label}</strong><br />
    <span>{value}</span>
  </div>
);

const ImageSection = ({ title, src, multiple, srcList = [] }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className={`flex ${multiple ? "space-x-4" : ""}`}>
      {multiple ? (
        srcList.map((src, index) => (
          <img key={index} className="w-1/3 rounded-lg shadow-lg" alt={title} src={src} />
        ))
      ) : (
        <img className="w-1/3 rounded-lg shadow-lg" alt={title} src={src} />
      )}
    </div>
  </div>
);

export default KycStatus;
