import React from 'react'
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

const employelist = () => {
    const dammydata =[
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
            "lastname" : "Ajeesh",
            "email" : "ajeesh@gmail.com",
            "phone": "0771536980"

        }
    ]
  return (
    <Container maxWidth="sm">
        
     
    <div>
    <h1 style={{textAlign:"center"}}>Employe's Details List</h1>
      
      <TableContainer component={Paper}>
      
      <Table sx={{ width: 10 }} size="large" aria-label="a dense table">
      
                <TableHead>
                    <TableRow>
                        <TableCell>Employe Id</TableCell>
                        <TableCell>Employ First-Name</TableCell>
                        <TableCell>Employe Last-Name</TableCell>
                        <TableCell>Employe Email</TableCell>
                        <TableCell>Employe Phone-no</TableCell>
                    </TableRow>
                </TableHead>
                
                <TableBody>
                    {
                        dammydata.map(employelist =>
                            <TableRow key={employelist.id}>
                                <TableCell>{employelist.id}</TableCell>
                                <TableCell>{employelist.firstname}</TableCell>
                                <TableCell>{employelist.lastname}</TableCell>
                                <TableCell>{employelist.email}</TableCell>
                                <TableCell>{employelist.phone}</TableCell>

                            </TableRow>)
                    }
                </TableBody>

            </Table>
            </TableContainer>
    </div>
    </Container>
  )
}

export default employelist
