import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import Moment from 'react-moment';
import { Button, Divider, Typography } from '@mui/material'
import axios from 'axios'
import {useState, useEffect, useContext} from 'react';





export default function TablaNormasCompleta(props) {

    const tabla = props.envio.pasar
    const nombre = props.envio.nombre

   
             
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',  backgroundColor: 'whitesmoke', width:'80vw'}}>
       
        <Typography variant='h4' sx={{color:'#1976D2', margin:1}}>Análisis {nombre}</Typography>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Tema General</TableCell>
                <TableCell align="center">Clase</TableCell>
                <TableCell align="center">Caracter</TableCell>
                <TableCell align="center">Cláusula</TableCell>
                <TableCell align="center">Organismo emisor</TableCell>
                <TableCell align="center">Rama</TableCell>
                <TableCell align="center">Fecha de sanción</TableCell>
                <TableCell align="center">Año de ejercicio</TableCell>
                <TableCell align="center">Número de sanción</TableCell>
              
            </TableRow>
            </TableHead>
            <TableBody>
            {tabla.map((row) => (
                <TableRow  key={row.tema} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" align="center">
                        {row.tema}
                    </TableCell>
                    <TableCell align='center'>{row.clase_id}</TableCell>
                    <TableCell align='center'>{row.caracter_id}</TableCell>
                    <TableCell align='center'>{row.clausula_id}</TableCell>
                    <TableCell align='center'>{row.organismo_emisor}</TableCell>
                    <TableCell align='center'>{row.rama_id}</TableCell>
                    <TableCell align='center'>{<Moment format="YYYY/MM/DD" date={row.fecha_sancion}/>}</TableCell>
                    <TableCell align='center'>{row.año_ejercicio}</TableCell>
                    <TableCell align='center'>{row.numero_sancion}</TableCell>
                
             
                </TableRow>
            ))}
        
            </TableBody>
        </Table>
        </TableContainer>
    </Box>
  );
}