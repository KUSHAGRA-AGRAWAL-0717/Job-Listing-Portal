import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./job.css";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobTitle: "", 
    github: "",
    objective: "",
    summary: "",
    workExperience: "",
    education: "",
    skills: "",
    projects: "",
    certifications: "",
    references: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5500/applicant/apply", formData);
      if (response.data.success) {
        toast.success("Application submitted successfully!");
        navigate("/success"); 
      } else {
        toast.error("Failed to submit the application. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <header className="App-header">
        <h1>Job Application</h1>
      </header>
      <h2>Job Application Form</h2>
      <div className="main">
        <div className="first">
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Professional Summary:</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Work Experience:</label>
            <textarea
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Education:</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="second">
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Job Title:</label>
            <input
              type="text"
              name="jobTitle" 
              value={formData.jobTitle} 
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Skills:</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Projects:</label>
            <textarea
              name="projects"
              value={formData.projects}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Certifications and Awards:</label>
            <textarea
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button type="submit" style={{ marginBottom: "12px" }}>
        Submit Application
      </button>
    </form>
  );
};

export default Page;
