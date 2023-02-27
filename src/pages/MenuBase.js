import { Box } from '@mui/material'
import React from 'react'
import TablaNormas from '../tables/TablaNormas'

const MenuBase = () => {
  return (
    <Box sx={{backgroundColor:'white', display:'flex', flexDirection:'column', width:'100%', alignItems:'center'}}>
        <TablaNormas/>
    </Box>
  )
}

export default MenuBase