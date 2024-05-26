import React, { useState } from 'react';
import './ParticipateRequest.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ParticipationRequestForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      toast.error('Please provide both name and image.');
      return;
    }
    toast.success('Request Submitted.');
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    // try {
    //   const response = await axios.post('/api/participation-request', formData);
    //   console.log('Response:', response.data);
    //   toast.success('Request submitted successfully!');
    //   // Add success message or redirect after successful submission
    // } catch (error) {
    //   console.error('Error:', error);
    //   toast.error('Error submitting the request.');
    // }
  };

  return (
    <div className='main-body'>
      <div className="form-container">
        <h2 className="form-title">Participation Request Form</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-group">
            <label className="form-label">Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={handleNameChange} 
              className="form-input" 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Image:</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="form-input" 
            />
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ParticipationRequestForm;
