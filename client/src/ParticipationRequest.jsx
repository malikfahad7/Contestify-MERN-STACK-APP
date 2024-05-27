
import React, { useState } from 'react';
import './ParticipateRequest.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function ParticipationRequestForm() {
   const [file, setFile] = useState();
   const [name, setName] = useState();

     const handleSubmit= async (e)=>{
      const formdata = new FormData();
      formdata.append('file', file)
      formdata.append('name', name)
      
     
      try {
        const result = await axios.post('http://localhost:3001/upload', formdata);
        if (result.data === "Success") {
          toast.success("Request Submitted.")
        } else {
          toast.error("Failed to send Request.");
        }
      } catch (err) {
        console.error(err);
        toast.error("An error occurred. Please try again later.");
      }

            
     }
  return (
    <div className='main-body'>
      <div className="form-container">
        <h2 className="form-title">Participation Request Form</h2>
        <form onSubmit={handleSubmit} className="form-content">
          
  <div className="form-group">
<label className="form-label">Name:</label>
<input 
  type="text" 
  name="name"
  value={name}
  onChange={e => setName(e.target.value)} 
  className="form-input" 
/>
</div>
          <div className="form-group">
            <label className="form-label">Image:</label>
            <input 
              type="file" 
              name="image"
              onChange={e=> setFile(e.target.files[0])} 
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



{/* <div className="form-group">
<label className="form-label">Name:</label>
<input 
  type="text" 
  name="name"
  value={formData.name} 
  onChange={handleInputChange} 
  className="form-input" 
/>
</div> */}