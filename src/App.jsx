import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import necessary components from react-router-dom
import Signup from "./components/Signup";
import Job from "./components/Job";
import Contact from "./components/Contact";

function App() {
  const [data, setData] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    companyName: "",
    companyEmail: "",
    employeeSize: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add form validation or API call here if needed
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/data") // Replace with your API URL
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-700">
        {/* Navbar */}
        <nav className="w-full bg-white p-4 shadow-md">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Cuvette</h1>
            {/* Use Link for routing to the Contact page */}
            <Link to="/contact">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Contact
              </button>
            </Link>
            
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                {/* First Signup Form */}
                <div className="mt-8 bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-8">
                  <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Sign Up
                  </h1>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone No
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your company name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="companyEmail"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Email
                      </label>
                      <input
                        type="email"
                        id="companyEmail"
                        name="companyEmail"
                        value={formData.companyEmail}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your company email"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="employeeSize"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Employee Size
                      </label>
                      <input
                        type="number"
                        id="employeeSize"
                        name="employeeSize"
                        value={formData.employeeSize}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter the number of employees"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
                    >
                      Proceed
                    </button>
                  </form>
                  {/* Data display after form */}
                  {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : ""}
                </div>

                {/* Second Signup Form */}
                <div className="bg-white p-8 rounded-lg w-full">
                  <Signup />
                </div>

                <div className="bg-white p-8 rounded-lg w-full">
                  <Job />
                </div>
              </>
            }
          />

          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
