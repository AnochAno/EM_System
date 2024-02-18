import React, { useEffect, useState } from 'react';
import { listempoyes } from '../Services/employedservices';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';

const Employelist = () => {
  const [employes, setEmployes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listempoyes().then((response) => {
      setEmployes(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const handleClick = () => {
    navigate('/add-employees');
  };

  const updateEmploye = (id) => {
    navigate(`/edit-employees/${id}`);
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Employee's Details List</h1>
      <div style={{ overflowX: "auto" }}>
        <div className="button-container">
          <Button className='btn btn-primary mb-2' onClick={handleClick}>Add Employees</Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employes.map(employe =>
              <tr key={employe.id}>
                <td>{employe.id}</td>
                <td>{employe.firstname}</td>
                <td>{employe.lastname}</td>
                <td>{employe.email}</td>
                <td>{employe.phone}</td>
                <td><Button variant='info' onClick={() => updateEmploye(employe.id)}>Update</Button></td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Employelist;
