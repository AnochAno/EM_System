import React, { useEffect, useState } from 'react';
import { createEmploye, updateEmploye } from '../Services/employedservices';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

const Employes = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      updateEmploye(id).then((response) => {
        const { firstname, lastname, email, phone } = response.data;
        setFirstname(firstname);
        setLastname(lastname);
        setEmail(email);
        setPhone(phone);
      }).catch((error) => {
        console.log(error);
      });
    }
  }, [id]);

  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleLastname = (e) => setLastname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);

  const saveEmployee = (e) => {
    e.preventDefault();
    const employeeData = { firstname, lastname, email, phone };
    if (id) {
      updateEmploye(id, employeeData).then((response) => {
        console.log(response.data);
        navigator('/home');
      }).catch((error) => {
        console.log(error);
      });
    } else {
      createEmploye(employeeData).then((response) => {
        console.log(response.data);
        navigator('/home');
      }).catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>{id ? 'Update' : 'Add'} Employee Details</h1>
      <div className='card col-md-6 offset-md-3 offset-md-3'>
        <div className='card-body'>
          <Form>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" value={firstname} onChange={handleFirstname} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" value={lastname} onChange={handleLastname} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" value={email} onChange={handleEmail} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter Phone Number" value={phone} onChange={handlePhone} />
            </Form.Group>
            <Button variant="success" onClick={saveEmployee}>{id ? 'Update' : 'Save'}</Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Employes;
