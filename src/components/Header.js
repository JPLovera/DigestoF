import { Box } from '@mui/system'
import React from 'react'
import logo2 from '../assets/logos/BARRA 01.png';


const Header = () => {



  return (
   
       
        <Box
        sx={{
        backgroundImage:`url(${logo2})`,
        height:98,
        width:'100%'
        }}
        >  
            <img src={logo2} alt='' height='98px' width='100%'/>
          <Box sx={{display:'flex', flexDirection: 'column',aligItems:'center'}}>
           
          </Box>
           
        </Box>
        
    
   
  )
}

export default Header