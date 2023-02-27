import * as React from 'react';
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

const TablaMunicipios = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axiosTabla(); 
        
    
      }, []);

    async function axiosTabla() {
        const res= await axios.get('http://localhost:3001/municipios')
        const municipios = await res.data.municipios;
        setData(municipios);
      }
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'end',  backgroundColor: 'whitesmoke', width:'80vw'}}>
        <Box sx={{margin:2}}>
        <Link to={'nuevoMunicipio'} style={{ textDecoration: 'none', color:'black' }}>
            <Button variant='contained' sx={{backgrondColor:'black'}} size='small'>Nuevo Municipio +</Button>
        </Link>
        </Box>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Nombre Municipios</TableCell>
              
              
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row) => (
                <TableRow
                key={row.tema}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row" align="center">
                    {row.id}
                </TableCell>
                <TableCell align='center'>{row.detalle_municipio}</TableCell>
               
             
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Box>
  );
}

export default TablaMunicipios