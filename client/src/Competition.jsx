import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Competition.css';
import { Link, useNavigate } from 'react-router-dom';

function CompetitionForm({ student1, student2 }) {
  const [selectedStudent, setSelectedStudent] = useState('');
  const navigate = useNavigate();
  const handleVote = (student) => {
    console.log('Selected student:', student);
    setSelectedStudent(student);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedStudent) {
      toast.error('Please select an option before submitting.');
      return;
    }

    // Send vote to backend
    console.log('Selected Student:', selectedStudent);
    
    // Display a success toast notification
    toast.success('Response submitted successfully!');
  };

  const RequestParticipate = () =>{
    navigate('/request')
  }

  return (
    <div className="competition-form">
        <img src="/Logo.jpg" height="100" alt="Logo"/>   
      <h2 className="homeTitle">Welcome to Contestify</h2>
      <div className="student-box student-box1">
        <div className="vote-option">
          <input 
            type="radio" 
            name="vote" 
            className="large-radio"
            value={student1} 
            checked={selectedStudent === 'A'} 
            onChange={() => handleVote('A')} 
          /> 
        </div>
      </div>
      <div className="student-box student-box2">
        <h3>{student2}</h3>
        <div className="vote-option">
          <input 
            type="radio" 
            name="vote" 
            className="large-radio"
            value={student2} 
            checked={selectedStudent === 'B'} 
            onChange={() => handleVote('B')} 
          /> 
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="submit-button">Submit Response</button>
      </form>
      <h6 onClick={RequestParticipate}>Request for participation</h6>
      <ToastContainer />
    </div>
  );
}

export default CompetitionForm;
