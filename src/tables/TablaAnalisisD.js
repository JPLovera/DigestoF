import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react';

const TablaAnalisisD = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axiosTabla(); 
        
    
      }, []);

    async function axiosTabla() {
        const res= await axios.get('http://localhost:3001/normas')
        const normas = await res.data.Normas;
        setData(normas);
      }
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'end',  backgroundColor: 'whitesmoke', width:'80vw'}}>
       
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Tema General</TableCell>
                <TableCell align="center">Fecha de carga</TableCell>
                <TableCell align="center">Número de sanción</TableCell>
              
              
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row) => (
                <TableRow
                key={row.tema}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                 <TableCell component="th" scope="row" align="center">{row.tema}</TableCell>
                <TableCell align="center">
                    {row.fecha_carga}
                </TableCell>
                <TableCell align="center">
                    {row.numero_sancion}
                </TableCell>
            
               
             
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Box>
  );
}

export default TablaAnalisisD