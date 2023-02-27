import { Box,Divider } from '@mui/material'
import React, {useState} from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Link } from 'react-router-dom'


const SideBar = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const buttonSX = {
    textAlign:'center',
    '&:hover': {
      borderBottom: '2px solid #1976D2'
    }
  }
  

  return (
    <Box sx={{ }}>
      
      <List component='nav'>
        <ListItem disablePadding>
          <Link to={'/inicio'} style={{ textDecoration: 'none', color:'black', width:'100%' }}>
            <ListItemButton
           
            selected={selectedIndex === 0}
            onClick={(event ) => handleListItemClick(event,0)}>
              <ListItemText primary='Ficha Análisis Normativo' sx={buttonSX}/>
            </ListItemButton>
          </Link>
        </ListItem>
       <Divider/>
        <ListItem disablePadding>
          <Link to={'analisisE'} style={{ textDecoration: 'none', color:'black', width:'100%'  }}>
            <ListItemButton selected={selectedIndex === 1}
            onClick={(event ) => handleListItemClick(event,1)}>
              <ListItemText primary='Ficha Análisis Epistemologico' sx={buttonSX}/>
            </ListItemButton>
          </Link>
        </ListItem>
       <Divider/>
        <ListItem disablePadding>
          <Link to={'analisisD'} style={{ textDecoration: 'none', color:'black', width:'100%'  }}>
            <ListItemButton selected={selectedIndex === 2}
            onClick={(event ) => handleListItemClick(event,2)}>
              <ListItemText primary='Ficha Análisis Documental' sx={buttonSX}/>
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider/>
        <ListItem disablePadding>
          <Link to={'municipios'} style={{ textDecoration: 'none', color:'black', width:'100%'  }}>
            <ListItemButton selected={selectedIndex === 3}
            onClick={(event ) => handleListItemClick(event,3)}>
              <ListItemText primary='Normas' sx={buttonSX}/>
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider/>
        <ListItem disablePadding>
          <Link to={'municipios'} style={{ textDecoration: 'none', color:'black', width:'100%'  }}>
            <ListItemButton selected={selectedIndex === 4}
            onClick={(event ) => handleListItemClick(event,4)}>
              <ListItemText primary='Municipios' sx={buttonSX}/>
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider/>
        <ListItem disablePadding>
          <Link to={'municipios'} style={{ textDecoration: 'none', color:'black', width:'100%'  }}>
            <ListItemButton selected={selectedIndex === 5}
            onClick={(event ) => handleListItemClick(event,5)}>
              <ListItemText primary='Reportes' sx={buttonSX}/>
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider/>
        <ListItem disablePadding>
          <Link to={'municipios'} style={{ textDecoration: 'none', color:'black', width:'100%'  }}>
            <ListItemButton selected={selectedIndex === 6}
            onClick={(event ) => handleListItemClick(event,6)}>
              <ListItemText primary='Estadísticas' sx={buttonSX}/>
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider/>
        <ListItem disablePadding>
          <a href='http://digestomunicipal.com.ar/aulavirtual' style={{ textDecoration: 'none', color:'black', width:'100%'  }}>
            <ListItemButton selected={selectedIndex === 7}
            onClick={(event ) => handleListItemClick(event,7)}>
              <ListItemText primary='Aula de capacitación' sx={buttonSX}/>
            </ListItemButton>
          </a>
        </ListItem>
       </List>
      
     
    </Box>
  )
}

export default SideBar