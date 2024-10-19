import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const AddCandidate = () => {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    jobDescription: '',
    experienceLevel: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Sending form data to backend
    try {
      const response = await fetch('http://localhost:5000/api/candidates', {  // Replace with your actual backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Form Data Submitted Successfully:', data);
        // You can show a success message or clear the form here
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
     <div className='w-full h-screen bg-zinc-200'>
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

    <div className="container w-[35vw] mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add Candidate</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-gray-700">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobDescription" className="block text-gray-700">Job Description:</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            rows="4"
            value={formData.jobDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="experienceLevel" className="block text-gray-700">Experience Level:</label>
          <select
            id="experienceLevel"
            name="experienceLevel"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={formData.experienceLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Experience Level</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-700">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add Candidate</button>
      </form>
    </div>
     </div>
  );
};

export default AddCandidate;
