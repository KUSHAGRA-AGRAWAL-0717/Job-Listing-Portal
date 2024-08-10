import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./applicants.css";

export const Applicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get("http://localhost:5500/applicant/applicants");
        if (response.data && Array.isArray(response.data.data)) {
          setApplicants(response.data.data);
        } else {
          console.error("Expected an array, but got:", response.data);
          setApplicants([]);
        }
      } catch (error) {
        console.error("Error fetching applicants data:", error);
        setError("Failed to fetch applicants");
        setApplicants([]);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const response = await axios.put(`http://localhost:5500/applicant/${id}/status`, { status });
      if (response.data.success) {
        setApplicants(prevApplicants =>
          prevApplicants.map(applicant =>
            applicant._id === id ? { ...applicant, status } : applicant
          )
        );
        toast.success(`Status updated to ${status}`);
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating applicant status:", error);
      toast.error("An error occurred while updating status");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h2>Applicants Requests</h2>
      <div className="head">
        <div>Sr No.</div>
        <div>Name</div>
        <div>Job Title</div>
        <div>Phone</div>
        <div>Email</div>
        <div>Status</div>
      </div>
      <div className="requests">
        {applicants.map((applicant, index) => (
          <div className={`item ${applicant.status}`} key={applicant._id}>
            <div className="sr" style={{ width: 'auto' }}>
              {index + 1}
            </div>
            <div className="name">
              {applicant.fullName}
            </div>
            <div className="jobTitle">
              {applicant.jobTitle}
            </div>
            <div className="phone">
              {applicant.phone}
            </div>
            <div className="email">
              {applicant.email}
            </div>
            <div className="status">
              <button
                className="ok"
                style={{ borderRadius: '50%' }}
                onClick={() => updateStatus(applicant._id, 'reviewed')}
              >
                ✅
              </button>
              <button
                className="no"
                style={{ borderRadius: '50%' }}
                onClick={() => updateStatus(applicant._id, 'rejected')}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
