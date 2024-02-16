import React, {useEffect, useState} from 'react'
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import { listempoyes } from '../Services/employedservices';
import { useNavigate } from 'react-router-dom';



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
     
    function updateEmploye(id){
        navigate('/edit_employe/${id}')
    }  


    
  return (
    <Container maxWidth="sm">
        
     
    <div>
    <h1 style={{textAlign:"center"}}>Employe's Details List</h1>

    <button className= 'btn btn-primary mb-2' onClick={handleClick}>Add Employees</button>
      
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      
      <Table sx={{ width: 10 }} size="large" aria-label="a dense table">
      
                <TableHead>
                    <TableRow >
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">F-name</TableCell>
                        <TableCell align="center">L-name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">T.P</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                
                <TableBody>
                    {
                        employes.map(employelist =>
                            <TableRow key={employelist.id}>
                                <TableCell>{employelist.id}</TableCell>
                                <TableCell>{employelist.firstname}</TableCell>
                                <TableCell>{employelist.lastname}</TableCell>
                                <TableCell>{employelist.email}</TableCell>
                                <TableCell>{employelist.phone}</TableCell>
                                <TableCell><button className='btn btn-info' onClick={()=> updateEmploye(employelist.id)}>Update</button></TableCell>

                            </TableRow>)
                    }
                </TableBody>

            </Table>
            </TableContainer>
    </div>
    </Container>
  )
}

export default Employelist
