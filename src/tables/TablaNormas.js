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
import {useEffect, useContext} from 'react';
import Moment from 'react-moment';
import UserContext from '../context/Usuarios/UserContext';





export default function TablaNormas() {



    const userContext = useContext(UserContext);

  
             

    useEffect(()=>{

        axiosTabla(); 
        
    
    }, []);

    function onClickNorma(e) {
        userContext.setNorma(e);
    }

    async function axiosTabla() {
        const res= await axios.get('http://localhost:3001/normas')
        const normas = await res.data.Normas;
        userContext.setStateNormas(normas);
      }
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'end',  backgroundColor: 'whitesmoke', width:'80vw'}}>
     
        <Box sx={{margin:2}}>
        
        <Link to={'norma/nueva'} style={{ textDecoration: 'none', color:'black' }}>
            <Button variant='contained' sx={{backgrondColor:'black'}} size='small'>Nueva norma +</Button>
        </Link>
        </Box>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Tema General</TableCell>
                <TableCell align="center">Número de sanción</TableCell>
                <TableCell align="center">Fecha de sanción</TableCell>
                <TableCell align="center">Análisis epistemológico</TableCell>
              
            </TableRow>
            </TableHead>
            <TableBody>
            {userContext.stateNormas.map((row) => (
                <TableRow  key={row.tema} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" align="center">
                        {row.tema}
                    </TableCell>
                    <TableCell align='center'>{row.numero_sancion}</TableCell>
                    <TableCell align='center'>{<Moment format="YYYY/MM/DD" date={row.fecha_sancion}/>}</TableCell>
                    <TableCell align='center'>
                        <Link to={'analisisE/nuevo'} style={{ textDecoration: 'none', color:'black' }}>
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