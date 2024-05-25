import React from 'react'


const EditEmployee = () => {

    
    
  return (
    <>
               <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
        <div>
            <h1 style={{textAlign:"center"}}>Edit Employee Details</h1>
        </div>
          <div className='card-body'>
            <form className='form-group mb-2'>
              <label className='form-label'>First Name</label>
              <input type='text' placeholder='Enter the First Name' name='firstname' className='form-control' />
            </form>
            <form className='form-group mb-2'>
              <label className='form-label'>Last Name</label>
              <input type='text' placeholder='Enter the last Name' name='lastname'  className='form-control'  />
            </form>
            <form className='form-group mb-2'>
              <label className='form-label'>Email ID</label>
              <input type='email' placeholder='Enter the Email ID' name='emailID'  className='form-control'  />
            </form>
            <form className='form-group mb-2'>
              <label className='form-label'>Phone No</label>
              <input type='phone' placeholder='Enter the phone Nunmber' name='phone'  className='form-control'  />
            </form>
            <button type="button" id="updateButton" class="btn btn-warning">Update Employee</button>
            <button type="button" id="deleteButton" class="btn btn-danger">Delete Employee</button>
            <button type="button" id="cancelButton" class="btn btn btn-secondary">Cancel</button>


          </div>

        </div>
      </div>
                   
   
      </>  
  )
}

export default EditEmployee
