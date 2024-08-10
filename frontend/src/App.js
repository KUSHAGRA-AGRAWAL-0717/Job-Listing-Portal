import React from 'react';
import './App.css';
import { Toaster } from "react-hot-toast";
import { Route, Routes } from 'react-router-dom'; // Import Route and Routes
import { Applicants } from './pages/Applicants'; 
import JobApplicationForm from "./pages/JobApplicationForm";

function App() {
  return (
    <div className="App">
      <Toaster />
      <main>
        <Routes>
          <Route path="/apply" element={<JobApplicationForm />} />
          <Route path="/applicants" element={<Applicants />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
