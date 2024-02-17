import React, {useEffect, useState} from 'react'
import Container from '@mui/material/Container';
import { listempoyes } from '../Services/employedservices';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  



const Employelist = () => {

    const [employes, setEmployes] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        listempoyes().then((response) => {
            setEmployes(response.data);
        }).catch(error =>{
            console.log(error);
        })

    },[]
    )

    /*const dammydata =[
        {
            "id" : 1,
            "firstname" : "thankes",
            "lastname" : "Ano",
            "email" : "ano@gmail.com",
            "phone": "0774525468"

        }
        ,
        {
            "id" : 2,
            "firstname" : "Sivaranchan",
            "lastname" : "tharu",
            "email" : "tharuh@gmail.com",
            "phone": "0771536980"

        }
    ]*/

    const handleClick = () => {
        navigate('/add-employees'); 
      };
     
    const editClick = () =>{
        navigate('/Edit-employees');
    } 


    
  return (
<Container >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item><div>
  <h1 style={{ textAlign: "center" }}>Employee's Details List</h1>
    <div style={{ overflowX: "auto" }}>
            <div class="button-container">
                <button className='btn btn-primary mb-2' onClick={handleClick}>Add Employees</button>
            </div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th align="center">Id</th>
            <th align="center">First Name</th>
            <th align="center">Last Name</th>
            <th align="center">Email</th>
            <th align="center">T.P</th>
            <th align="center" >Action</th>
          </tr>
        </thead>
        <tbody>
          {employes.map(employelist =>
            <tr key={employelist.id}>
              <td>{employelist.id}</td>
              <td>{employelist.firstname}</td>
              <td>{employelist.lastname}</td>
              <td>{employelist.email}</td>
              <td>{employelist.phone}</td>
              <td><button className='btn btn-info' onClick={editClick}>Update</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  
</div>
</Item>
        </Grid>
      </Grid>
    </Box>    
    </Container>
    
  )
}

export default Employelist
