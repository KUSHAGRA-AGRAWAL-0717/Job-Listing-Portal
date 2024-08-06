import "./job.css";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
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
            <label>LinkedIn Profile:</label>
            <input
              type="url"
              name="linkedIn"
              value={formData.linkedIn}
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
