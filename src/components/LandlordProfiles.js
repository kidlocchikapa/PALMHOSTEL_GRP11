import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tiwo from "./tiwo.jpg";

const LandlordProfiles = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUploadDoc = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  const handleRequestReview = async () => {
    try {
      const response = await fetch("https://your-api.com/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        }),
      });

      if (response.ok) {
        console.log("Review request sent successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
        });
        setAlertMessage("Review request sent successfully");
        navigate("/landlord-dashboard");
      } else {
        console.error("Failed to send review request");
        setAlertMessage("Failed to send review request");
      }
    } catch (error) {
      console.error("Error sending review request:", error);
      setAlertMessage("Error sending review request");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      handleRequestReview();
    } else {
      setIsFormFilled(true);
      setAlertMessage("Please fill in all fields.");
    }
  };

  const isUploadDisabled = () => {
    return !(formData.firstName && formData.lastName && formData.email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-2">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Landlord Profile
        </h2>
        {alertMessage && (
          <p className={`alert ${isFormFilled ? "error" : ""}`}>
            {alertMessage}
          </p>
        )}
        <p className="text-center text-gray-600 mb-4">
          Please sign in to use the full functionality of the application. Thank
          you!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleUploadDoc}
              disabled={isUploadDisabled()}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Upload Docs
            </button>
            <button
              type="submit"
              onClick={() => navigate('/dashboard')}
              className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            
            >
              
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandlordProfiles;
