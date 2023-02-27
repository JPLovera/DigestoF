import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { FormControl, InputLabel, TextField} from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import UserContext from '../context/Usuarios/UserContext';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { display } from '@mui/system';
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
import TablaNormasCompleta from '../tables/TablaNormasCompleta';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const FormularioAnalisisE = () => {
    
    const userContext = useContext(UserContext);
    const pasar = [userContext.norma];
    const nombre = 'Epistemológico';

    const [listaCaducidades, setListaCaducidades] = useState([]);
    const [listaConflictos, setListaConflictos] = useState([]);
    const [guardarNormaTip, setGuardarNormaTip] = useState([]);
    const [nuevaImagen, setNuevaImagen] = useState({
      id:pasar[0].id,
      norma_tipeada: ''
    });

    const [inputs, setInputs] = useState({
      id_usuario: userContext.stateUser.id,
      id_norma: pasar[0].id,
      id_caducidades: '',
      formulario_caducidades: '',
      observacion_caducidades: '',
      id_conflicto: '',
      formulario_conflicto: '',
      observacion_conflicto: '',
      formulario_refundicion: '',
      observacion_refundicion: '',
    });


 
    const getCaducidades = async() =>{
      try {
          const pedirCaducidades = await axios.get('http://localhost:3001/caducidades')
          setListaCaducidades(pedirCaducidades.data.caducidades);
        
        
      } catch (error) {
          alert('error')
      }
  };
  const getConflictos = async() =>{
      try {
          const pedirConflictos = await axios.get('http://localhost:3001/conflictos')
          setListaConflictos(pedirConflictos.data.conflicto);
          
      } catch (error) {
          
      }
  };

  useEffect(()=>{
    getCaducidades();
    getConflictos();
},[])

    const handleSubmit = async(e) =>{
  
      e.preventDefault();

      const data = new FormData();
        data.append('nuevaImagen',JSON.stringify(nuevaImagen));
        data.append('norma_tipeada', guardarNormaTip);

        console.log(data);
  
      try{
          const response = await axios.post('http://localhost:3001/analisisEpistemologico/alta', inputs)
        
          const response2 = await axios.put('http://localhost:3001/normas/actualizar/textoDefinitivo', data)
          alert('Análisis completado');
      }
      catch(error){
          alert('Fallo al cargar análisis');
      }
  }
     
    const handleChange = (e) =>{
      setInputs((prevState) =>({
        ...prevState,
        [e.target.name]:[e.target.value],
      }))
      
    }

    const handleImage2 = (e) =>{
   
      setGuardarNormaTip(e.target.files[0]);
      console.log(e.target.files[0].name);
      setNuevaImagen((prevState) =>({
          ...prevState,
          [e.target.name]:[e.target.value],
        }))

      const nombreArchivo2 = e.target.files[0].name;
      nuevaImagen.norma_tipeada = nombreArchivo2;   

  } 
  
    return (
      <Box component='form' onSubmit={handleSubmit} sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:1}}>
      
        <TablaNormasCompleta envio={{pasar,nombre}}/>
       
        <Box sx={{display:'flex', flexDirection:'column',width:'95%'}}>
          <Box sx={{display:'flex', flexDirection:'column',margin:1,borderStyle:'groove', padding:'1%', borderRadius:1, borderColor:'#1976D2'}}>
          <FormLabel id='12' variant='p' fontWeight='bold' sx={{textAlign:'center'}}>Caducidades</FormLabel>
                            <FormControl fullWidth size='small'>
                        
                                <RadioGroup
                                value={inputs.id_caducidades}
                                onChange={handleChange}
                                name='id_caducidades'
                                required
                                >
                                {listaCaducidades.map((element) =>(
                                (
                                <FormControlLabel control={<Radio/>} label={element.detalle_caducidades} value={element.id} key={element.id}/>
                                
                                )
                            ))}

                                </RadioGroup>
                            </FormControl>
                            {inputs.id_caducidades && <TextField
                            id='formulario_caducidades'
                            name='formulario_caducidades'
                            label='Ingrese descripción de caducidad (Máx. 1500 carácteres)'
                            value={inputs.formulario_caducidades}
                            onChange={handleChange}
                             variant="outlined"
                            size='small'
                            required
                            sx={{margin:1}}
                            />}
         
         
        
            <TextField label='Ingrese una observación (Máx. 1000 carácteres)' size='small' sx={{margin:1}}
             id='observacion_caduciades'
             name='observacion_caducidades'
             value={inputs.observacion_caducidades}
             onChange={handleChange}
             variant="outlined"
             required/>
          </Box>
          <Box sx={{display:'flex', flexDirection:'column',margin:1,borderStyle:'groove', padding:'1%', borderRadius:1, borderColor:'#1976D2'}}>
          <FormLabel id='12' variant='p' fontWeight='bold' sx={{textAlign:'center'}}>Conflicto Normativo</FormLabel>
                            <FormControl fullWidth size='small'>
                        
                                <RadioGroup
                                value={inputs.id_conflicto}
                                onChange={handleChange}
                                name='id_conflicto'
                                required
                                >
                                {listaConflictos.map((element) =>(
                                (
                                <FormControlLabel control={<Radio/>} label={element.detalle_conflicto} value={element.id} key={element.id}/>
                                
                                )
                            ))}

                                </RadioGroup>
                            </FormControl>
                            {inputs.id_conflicto && <TextField
                            id='formulario_conflicto'
                            name='formulario_conflicto'
                            label='Ingrese descripción de conflicto normativo (Máx. 1500 carácteres)'
                            value={inputs.formulario_conflicto}
                            onChange={handleChange}
                             variant="outlined"
                            size='small'
                            required
                            sx={{margin:1}}
                            />}
     
      
    
            <TextField label='Ingrese una observación (Máx. 1000 carácteres)' size='small' sx={{margin:1}}
               id='observacion_conflicto'
               name='observacion_conflicto'
               value={inputs.observacion_conflicto}
               onChange={handleChange}
               variant="outlined"
               required/>
          </Box>
          <Box sx={{display:'flex', flexDirection:'column',margin:1,borderStyle:'groove', padding:'1%', borderRadius:1, borderColor:'#1976D2'}}>
            <FormLabel id='12' variant='p' fontWeight='bold' sx={{textAlign:'center'}}>Refundición</FormLabel>             
            <TextField label='Ingrese descripción de refundición (Máx. 1500 carácteres)' size='small' sx={{margin:1}}
               id='formulario_refundicion'
               name='formulario_refundicion'
               value={inputs.formulario_refundicion}
               onChange={handleChange}
               variant="outlined"
               required/>

            <TextField label='Ingrese observación (Máx. 1000 carácteres)' size='small' sx={{margin:1}}
               id='observacion_refundicion'
               name='observacion_refundicion'
               value={inputs.observacion_refundicion}
               onChange={handleChange}
               variant="outlined"
               required/>
          </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column',margin:1,borderStyle:'groove', padding:'1%', borderRadius:1, borderColor:'#1976D2'}}>
          <FormLabel>Cargar nuevo archivo de norma</FormLabel>
          <Button variant='outlined' component='label' endIcon={<AttachFileIcon />} sx={{margin:1}}>
                            <input hidden accept="" type="file" name='norma_tipeada' id='norma_tipeada' onChange={handleImage2}/>
                                Texto Definitivo
                        </Button>
        </Box>
          <Button type='submit' variant='outlined' sx={{margin:1}}>
            Completar análisis
  
          </Button>
      
  
      </Box>
    )
}

export default FormularioAnalisisE