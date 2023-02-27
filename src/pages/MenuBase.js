import { Box } from '@mui/material'
import React from 'react'
import TablaNormas from '../tables/TablaNormas'

const MenuBase = () => {
  return (
    <Box sx={{ display:'flex', flexDirection:'column'}}>
        <TablaNormas/>
    </Box>
  )
}

export default MenuBase