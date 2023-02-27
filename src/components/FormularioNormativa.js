import React, {useContext} from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, TextField, Button, Typography, Divider} from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import UserContext from '../context/Usuarios/UserContext';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const FormularioNormativa = () => {

    const userContext = useContext(UserContext);

    

    const [listaClase, setClase] = useState([]);
    const [listaAlcance, setAlcance] = useState([]);
    const [listaCaracter, setCaracter] = useState([]);
    const [listaClausula, setClausula] = useState([]);
    const [listaRama, setRama] = useState([]);
    const [listaBis, setBis] = useState([]);
    const [guardarNormaEsc, setGuardarNormaEsc] = useState([]);
    const [guardarNormaTip, setGuardarNormaTip] = useState([]);

    const [inputs,setInputs] = useState({
        tema: '',
        cantidad_articulos: '',
        clase_id:'',
        alcance_id: '',
        caracter_id: '',
        clausula_id: '',
        clausula_descripcion: '',
        organismo_emisor: '',
        rama_id: '',
        norma_escaneada: '',
        norma_tipeada: '',
        bis_id: '',
        fecha_sancion: '',
        año_ejercicio: '',
        observacion: '',
        numero_sancion: '',
        usuario_id: userContext.stateUser.id
    });
    


   

    const getClase = async() =>{
        try {
            const clase = await axios.get('http://localhost:3001/clase')
            setClase(clase.data.clase);
          
          
        } catch (error) {
            alert('error')
        }
    };
    const getAlcance = async() =>{
        try {
            const alcance = await axios.get('http://localhost:3001/alcance')
            setAlcance(alcance.data.Alcance);
            
        } catch (error) {
            
        }
    };
    const getCaracter = async() =>{
        try {
            const caracter = await axios.get('http://localhost:3001/caracter')
            setCaracter(caracter.data.caracteres);
        } catch (error) {
            
        }
    };
    const getClausula = async() =>{
        try {
            const clausula = await axios.get('http://localhost:3001/clausula')
            setClausula(clausula.data.clausula);
        } catch (error) {
            
        }
    };
    const getRama = async() =>{
        try {
            const rama = await axios.get('http://localhost:3001/rama')
            setRama(rama.data.rama);
        } catch (error) {
            
        }
    };
    const getBis = async() =>{
        try {
            const bis = await axios.get('http://localhost:3001/bis')
            setBis(bis.data.bis);
        } catch (error) {
            
        }
    };

    useEffect(()=>{
        getClase();
        getAlcance();
        getCaracter();
        getClausula();
        getRama();
        getBis();
    },[])

    const handleSubmit = async(e) =>{

        e.preventDefault();

        const data = new FormData();
        data.append('inputs',JSON.stringify(inputs));
        data.append('norma_escaneada', guardarNormaEsc);
        data.append('norma_tipeada', guardarNormaTip);

        
        console.log(inputs)
        console.log(data)

        try{
            const response = await axios.post('http://localhost:3001/normas/alta', data)
            console.log(response)
            alert('Norma cargada exitosamente');
        }
        catch(error){
            alert('Fallo al cargar norma');
        } 
    }

    
    const handleChange = (e) =>{
        setInputs((prevState) =>({
          ...prevState,
          [e.target.name]:[e.target.value],
        }))
        
      }

    const handleImage1 = (e) =>{
   
        setGuardarNormaEsc(e.target.files[0]);
        console.log(e.target.files[0].name);
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name]:[e.target.value],
          }))
        const nombreArchivo1 = e.target.files[0].name;
        inputs.norma_escaneada = nombreArchivo1;   
 

    }

    const handleImage2 = (e) =>{
   
        setGuardarNormaTip(e.target.files[0]);
        console.log(e.target.files[0].name);
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name]:[e.target.value],
          }))

        const nombreArchivo2 = e.target.files[0].name;
        inputs.norma_tipeada = nombreArchivo2;   

    } 


    
  return (
      
      <Box component='form' encType='multipart/form-data' onSubmit={handleSubmit} sx={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',width:'90%'}}>
        <Box  sx={{display:'flex', flexDirection:'column', margin:1, bgcolor:'white', width:'95%'}}>

            
            
                <Box sx={{display:'flex', flexDirection:'column', margin:1, borderStyle:'groove', padding:'1%', borderRadius:1, borderColor:'#1976D2'}}>

                    <Typography sx={{textAlign:'center',margin:0.5, color:'#1976D2'}}>DATOS DE LA NORMA</Typography>
                    <Divider variant='middle'/>
                
                    <FormLabel id='1' variant='p' fontWeight='bold' sx={{textJustify:'center'}}>Tema general</FormLabel>
                    <TextField
                    id='tema'
                    name='tema'
                    label='Escriba un tema general'
                    value={inputs.tema}
                    onChange={handleChange}
                    variant="outlined"
                    size='small'
                    required
                    inputProps={{maxLength: 300}}
                    helperText='El tema no puede exceder los 300 caracteres'
                
                    />

                    <Box sx={{margin:1, display:'flex', justifyContent:'space-around', borderStyle:'groove', padding:'1%', borderRadius:1}}>
                    
                            <Box>
                                <FormLabel id='2' variant='p' fontWeight='bold' sx={{margin:5}}>Número de sanción</FormLabel>
                                <TextField
                                id='numero_sancion'
                                name='numero_sancion'
                                label='Número de sanción'
                                type='number'
                                value={inputs.numero_sancion}
                                onChange={handleChange}
                                 variant="outlined"
                                size='small'
                                required
                                inputProps={{maxLength: 3}}
                                />
                            </Box>
                            
                            <Box sx={{display:'flex', flexDirection:'row'}}>
                            <FormLabel id='3' variant='p' fontWeight='bold' sx={{margin:1}}>Bis</FormLabel>
                            <FormControl fullWidth size='small'>
                                
                                <RadioGroup
                                value={inputs.bis_id}
                                onChange={handleChange}
                                name='bis_id'
                                required
                                >
                                {listaBis.map((element) =>(
                                (
                                    <FormControlLabel control={<Radio/>} label={element.detalle_bis} value={element.id} key={element.id}/>
                                
                                )
                            ))}

                                </RadioGroup>
                            </FormControl>
                            </Box>
                     
                    </Box>
                     <FormLabel id='4' variant='p' fontWeight='bold'>Cantidad de articulos</FormLabel>
                    <TextField
                    id='cantidad_articulos'
                    name='cantidad_articulos'
                    label='Cantidad de articulos de la norma'
                    type='number'
                    value={inputs.cantidad_articulos}
                    onChange={handleChange}
                     variant="outlined"
                    size='small'
                    required
            
                    />
                    <FormLabel id='5' variant='p' fontWeight='bold'>Organismo emisor</FormLabel>
                    <TextField
                    id='organismo_emisor'
                    name='organismo_emisor'
                    label='Escriba el organismo emisor'
                    value={inputs.organismo_emisor}
                    onChange={handleChange}
                     variant="outlined"
                    size='small'
                    required
                
                    />

                    <Box sx={{display:'flex', margin:1, justifyContent:'center'}}>
                        <Button variant='contained' component='label' endIcon={<AttachFileIcon />} sx={{margin:1}}>

                            Norma escaneada
                            <input hidden accept="" type="file" name='norma_escaneada' id='norma_escaneada' onChange={handleImage1}/>
                                
                        </Button>

                        <Button variant='contained' component='label' endIcon={<AttachFileIcon />} sx={{margin:1}}>
                            <input hidden accept="" type="file" name='norma_tipeada' id='norma_tipeada' onChange={handleImage2}/>
                                Norma tipeada
                        </Button>
                    </Box>
                 

                  { /* <FormLabel id='6' variant='p' fontWeight='bold'>Norma escaneada</FormLabel>
                    <TextField
                    id='norma_escaneada'
                    name='norma_escaneada'
                    label='Adjunte norma escaneada'
                    value={inputs.norma_escaneada}
                    onChange={handleChange}
                     variant="outlined"
                    size='small'
                    required
            
            
                    />
                               

                   
                    <FormLabel id='7' variant='p' fontWeight='bold'>Norma tipeada</FormLabel>
                    <TextField
                    id='norma_tipeada'
                    name='norma_tipeada'
                    label='Adjunte norma tipeada'
                    value={inputs.norma_tipeada}
                    onChange={handleChange}
                     variant="outlined"
                    size='small'
                    required
                */ }

                    <FormLabel id='8' variant='p' fontWeight='bold'>Clase</FormLabel>
                    <FormControl fullWidth size='small'>
                        <InputLabel>Clase</InputLabel>
                        <Select
                        value={inputs.clase_id}
                        onChange={handleChange}
                        name='clase_id'
                        required
                        >
                        {listaClase.map((element) =>(
                        (
                        <MenuItem key={element.id} value={element.id}>{element.detalle_clase}</MenuItem>
                        
                        )
                    ))}

                        </Select>
                    </FormControl>
            
                
                    <FormLabel id='9' variant='p' fontWeight='bold'>Alcance</FormLabel>
                    <FormControl fullWidth size='small'>
                        
                        <RadioGroup
                        value={inputs.alcance_id}
                        onChange={handleChange}
                        name='alcance_id'
                        required
                        >
                        {listaAlcance.map((element) =>(
                        (
                        <FormControlLabel control={<Radio/>} label={element.detalle_alcance} value={element.id} key={element.id}/>
                        
                        )
                    ))}

                        </RadioGroup>
                    </FormControl>
            
            
                    <FormLabel id='10' variant='p' fontWeight='bold'>Caracter</FormLabel>
                    <FormControl fullWidth size='small'>
                        <InputLabel>Caracter</InputLabel>
                        <Select
                        value={inputs.caracter_id}
                        onChange={handleChange}
                        name='caracter_id'
                        required
                        >
                        {listaCaracter.map((element) =>(
                        (
                        <MenuItem key={element.id} value={element.id}>{element.detalle_caracter}</MenuItem>
                        
                        )
                    ))}

                        </Select>
                    </FormControl>

                    <FormLabel id='11' variant='p' fontWeight='bold'>Rama</FormLabel>
                    <FormControl fullWidth size='small'>
                        <InputLabel>Rama</InputLabel>
                        <Select
                        value={inputs.rama_id}
                        onChange={handleChange}
                        name='rama_id'
                        required
                        >
                        {listaRama.map((element) =>(
                        (
                        <MenuItem key={element.id} value={element.id}>{element.detalle_rama}</MenuItem>
                        
                        )
                    ))}

                    </Select>
                    </FormControl>       
                   
               
               </Box>
               <Divider variant='middle'/>
               
               <Box sx={{display:'flex', flexDirection:'column', margin:1, borderStyle:'groove', padding:'1%',borderColor:'#1976D2',borderRadius:1}}>

                            
                 
                            <Typography sx={{textAlign:'center',margin:0.5, color:'#1976D2'}}>DATOS DE CLÁUSULA</Typography>
                            <Divider variant='middle'/>
                            <FormLabel id='12' variant='p' fontWeight='bold'>Cláusula</FormLabel>
                            <FormControl fullWidth size='small'>
                        
                                <RadioGroup
                                value={inputs.clausula_id}
                                onChange={handleChange}
                                name='clausula_id'
                                required
                                >
                                {listaClausula.map((element) =>(
                                (
                                <FormControlLabel control={<Radio/>} label={element.detalle_clausula} value={element.id} key={element.id}/>
                                
                                )
                            ))}

                                </RadioGroup>
                            </FormControl>
                            {inputs.clausula_id == 1 && <TextField
                            id='clausula_descripcion'
                            name='clausula_descripcion'
                            label='Escriba la descripción de cláusula'
                            value={inputs.clausula_descripcion}
                            onChange={handleChange}
                             variant="outlined"
                            size='small'
                            required
                            />}
                            
                            
                  
                </Box>
                <Divider variant='middle'/>
                <Box sx={{display:'flex', flexDirection:'column', margin:1, borderStyle:'groove', padding:'1%',borderColor:'#1976D2',borderRadius:1}}>

                        <Typography sx={{textAlign:'center',margin:0.5, color:'#1976D2'}}>FECHAS</Typography>
                        <Divider variant='middle'/>

                        <Box sx={{margin:1, display:'flex', justifyContent:'space-around'}}>        
                            <FormLabel id='14' variant='p' fontWeight='bold'>Año de ejercicio</FormLabel>
                            <TextField
                                id='año_ejercicio'
                                name='año_ejercicio'
                                label='Año de ejercicio'
                                type='number'
                                value={inputs.año_ejercicio}
                                onChange={handleChange}
                                 variant="outlined"
                                size='small'
                                required
                                />
                            
                
                            
                            <FormLabel id='15' variant='p' fontWeight='bold'>Fecha de sanción</FormLabel>
                                <TextField
                                id='fecha_sancion'
                                name='fecha_sancion'
                                type='date'
                                value={inputs.fecha_sancion}
                                onChange={handleChange}
                                 variant="outlined"
                                size='small'
                                required
                        
                                />
                        </Box>  
                   

                </Box> 
                <Divider variant='middle'/>                   
                <Box sx={{display:'flex', flexDirection:'column', margin:1, borderStyle:'groove', padding:'1%',borderColor:'#1976D2',borderRadius:1}}>

                    <FormLabel id='16' variant='p' fontWeight='bold'>Observación</FormLabel>
                        <TextField
                        id='observacion'
                        name='observacion'
                        label='Escriba una observación'
                        value={inputs.observacion}
                        onChange={handleChange}
                         variant="outlined"
                        size='small'
                        required
                
                
                        />
                </Box>

        
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <Button
                    variant='contained'
                    type='submit'
                    sx={{margin:3}}>Cargar nueva norma
                    </Button>
            </Box>
            
   
    </Box>   
  
  )
}

export default FormularioNormativa