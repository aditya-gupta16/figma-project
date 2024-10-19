import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    emailOtp: "",
    mobile: "",
    mobileOtp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailOtpVerification = () => {
    console.log("Verifying Email OTP:", formData.emailOtp);
    // Add your verification logic here
  };

  const handleMobileOtpVerification = () => {
    console.log("Verifying Mobile OTP:", formData.mobileOtp);
    // Add your verification logic here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white p-4 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Cuvette</h1>
          <Link to="/contact">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Contact
              </button>
            </Link>
        </div>
      </nav>

      {/* Signup Form */}
      <div className="flex items-center justify-center h-full mt-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Email OTP */}
          <div className="mb-4">
            <label
              htmlFor="emailOtp"
              className="block text-sm font-medium text-gray-700"
            >
              Email OTP
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="emailOtp"
                name="emailOtp"
                value={formData.emailOtp}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Enter OTP sent to email"
                required
              />
              <button
                type="button"
                onClick={handleEmailOtpVerification}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Verify
              </button>
            </div>
          </div>

          {/* Mobile Field */}
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Mobile OTP */}
          <div className="mb-6">
            <label
              htmlFor="mobileOtp"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile OTP
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="mobileOtp"
                name="mobileOtp"
                value={formData.mobileOtp}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Enter OTP sent to mobile"
                required
              />
              <button
                type="button"
                onClick={handleMobileOtpVerification}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Verify
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
