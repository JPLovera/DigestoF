import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo1 from '../assets/logos/ESCUDO GO. MISIONES.png';
import { useFormik } from 'formik';
import * as yup from 'yup'
import Header from '../components/Header';
import UserContext from '../context/Usuarios/UserContext';





const theme = createTheme();

export default function StartSesion() {




  const userContext = useContext(UserContext);
   
   
  const handleSubmit= async(values) =>{
      
    
      userContext.getUser(values);

    
    
              
  };

      const formik = useFormik({
            initialValues: {
              correo: "",
              dni: '',
            },
            validationSchema: yup.object({
              correo: yup.string('Ingrese su correo').required('El correo es obligatorio'),
              dni: yup.string('Ingrese su contraseña').min(1,'Debe contener como mínimo 1 caracter').required('La contraseña es obligatoria')
            }
            ),
            onSubmit:async (values) =>  {
             
        
            await handleSubmit(values);           
            
       
              
            },
      });
  

  return (

    <ThemeProvider theme={theme}>
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      
        <CssBaseline />
        <Header/>
    
        <Box
          sx={{
            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'rgb(255,255,255,0.5)',
            borderRadius:'2%',
            padding:'50px',
            width:'50vw',
            marginTop: '30px'
          }}
        >
          <Box>
            <img src = {logo1} alt='' height='70px'/>
          </Box>
          
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="correo"
                  label="Email"
                  name="correo"
                  value={formik.values.correo}
                  onChange={formik.handleChange}
                  error={formik.touched.correo && Boolean(formik.errors.correo)}
                  helperText={formik.touched.correo && formik.errors.correo}
                 sx={{backgroundColor:'rgb(255,250,250,0.5)'}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="dni"
                  label="Contraseña"
                  type="password"
                  id="dni"
                  value={formik.values.dni}
                  onChange={formik.handleChange}
                  error={formik.touched.dni && Boolean(formik.errors.dni)}
                  helperText={formik.touched.dni && formik.errors.dni}
                  sx={{backgroundColor:'rgb(255,250,250,0.5)'}}
                  
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:'#C12928' }}
            >
              Ingresar
            </Button>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                    Olvidó su contraseña?
                </Link>
              </Grid>
            </Grid>
          </Box>
          
          
        </Box>
       
      </Box>
      </form> 
    
    </ThemeProvider>
  );
}