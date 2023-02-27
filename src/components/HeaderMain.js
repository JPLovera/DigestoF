
import { Box } from '@mui/system'
import React, {useContext} from 'react'
import logo2 from '../assets/fotos/BARRA-01.jpg';
import { Link } from 'react-router-dom'
import UserContext from '../context/Usuarios/UserContext'
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const HeaderMain = () => {

  const userContext = useContext(UserContext);

  return (
   
       
        <Box
        sx={{
        backgroundImage: `url(${logo2})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:80,
        width:'100%'
        }}
        >
        
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'end'}}>
              <Box sx={{display:'flex',borderRadius:2,alignItems:'center',padding:2,backgroundColor:'rgb(255,255,255,0.9)', margin:1}}>
                  <Button  variant='outlined' size='small' startIcon={<PersonIcon/>}>
                    {userContext.stateUser.nombre} 
                  </Button>
               
                <Link to={'/'} style={{ textDecoration: 'none', color:'black' }}>
                        <Button variant='outlined' size='small' startIcon={<LogoutIcon/>} sx={{marginLeft:1}}>
                          cerrar sesión
                  
                        </Button>
                </Link>
              </Box>
            </Box>   
            
        </Box>
        
    
   
  )
}

export default HeaderMain