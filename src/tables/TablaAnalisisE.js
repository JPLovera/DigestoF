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
import {useState, useEffect, useContext} from 'react';
import UserContext from '../context/Usuarios/UserContext';
import Moment from 'react-moment';

const TablaAnalisisE = () => {
    const[data,setData]=useState([]);
    const userContext = useContext(UserContext);

    useEffect(()=>{
        axiosTabla(); 
        
    
      }, []);

      function onClickNorma(e) {
        userContext.setNorma(e);
    }

    async function axiosTabla() {
        const res= await axios.get('http://localhost:3001/analisisEpistemologico')
        const analisisE = await res.data.analisis;
        setData(analisisE);
        console.log(data.analisis)
      }
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'end',  backgroundColor: 'whitesmoke', width:'80vw'}}>
       
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">ID de norma</TableCell>
                <TableCell align="center">ID de usuario</TableCell>
                <TableCell align="center">Fecha de analisis</TableCell>
                <TableCell align="center">Análisis documental</TableCell>
              
              
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row) => (
                <TableRow key={row.id_norma} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" align="center">
                        {row.id_norma}
                    </TableCell>
                    <TableCell align='center'>{row.id_usuario}</TableCell>
                    <TableCell align='center'>{<Moment format="YYYY/MM/DD" date={row.fecha_analisis}/>}</TableCell>
                    <TableCell align='center'>
                        <Link to={'nuevoAnalisisDocumental'} style={{ textDecoration: 'none', color:'black' }}>
                            <Button onClick={() => onClickNorma(row)} variant='outlined' align='center'>REALIZAR</Button>
                        </Link>
                    </TableCell>
                
             
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Box>
  );
}

export default TablaAnalisisE