import React, { useState } from 'react';
import { createEmploy } from '../Services/employedservices';
import { useNavigate } from 'react-router-dom';

const Employes = () => {
  const [firstname, setFirtname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigator = useNavigate();

  const handleFirstname = (e) =>  setFirtname(e.target.value);
  
  const handlelastname = (e) => setLastname(e.target.value);
  
  const handleemail = (e) => setEmail(e.target.value);
  
  const handlephone = (e) => setPhone(e.target.value);
  

  function saveEmplye  (e) {
    e.preventDefault();
    const employeAr = {firstname,lastname,email,phone}
    console.log(employeAr);
    createEmploy(employeAr).then((reponse) =>{
        console.log(reponse.data);
        navigator('/')
    })
}

  return (
    <div className='container'>
      <br /><br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 style={{ textAlign: 'center' }}>Add Employee</h2>
          <div className='card-body'>
            <form className='form-group mb-2'>
              <label className='form-label'>First Name</label>
              <input type='text' placeholder='Enter the First Name' name='firstname' value={firstname} className='form-control' onChange={handleFirstname} />
            </form>
            <form className='form-group mb-2'>
              <label className='form-label'>Last Name</label>
              <input type='text' placeholder='Enter the last Name' name='lastname' value={lastname} className='form-control' onChange={handlelastname} />
            </form>
            <form className='form-group mb-2'>
              <label className='form-label'>Email ID</label>
              <input type='email' placeholder='Enter the Email ID' name='emailID' value={email} className='form-control' onChange={handleemail} />
            </form>
            <form className='form-group mb-2'>
              <label className='form-label'>Phone No</label>
              <input type='phone' placeholder='Enter the phone Nunmber' name='phone' value={phone} className='form-control' onChange={handlephone} />
            </form>
            <button type="button" className="btn btn-success" onClick={saveEmplye}>Success</button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Employes;
