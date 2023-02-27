
import { Divider } from '@mui/material'
import { Box } from '@mui/system'
import React, {useContext} from 'react'
import { Outlet} from 'react-router-dom'
import HeaderMain from '../components/HeaderMain'
import SideBar from '../components/SideBar'
import UserContext from '../context/Usuarios/UserContext'



const Main = () => {

  const userContext = useContext(UserContext);
 
  return (
    
      <Box sx={{display:'flex', flexDirection:'column'}}>
     
        <HeaderMain/>
        
      
        <Divider/> 
        <Box sx={{display:'flex', backgroundColor:''}}>
          <SideBar/>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ width:'90vw', display:'flex', flexDirection:'column', margin:1, alignItems:'center'}}>
           
           
            <Outlet/>
          </Box>
        </Box>
      </Box>

  )
}

export default Main