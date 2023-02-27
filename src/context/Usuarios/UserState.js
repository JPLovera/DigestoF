import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import UserContext from "./UserContext";


const UserState = (props) => {

const navigate=useNavigate();

const [stateUser, setStateUser] = useState([]);
const [stateNormas,setStateNormas] = useState([]);
const [norma,setNorma] = useState([]);


const getUser = async (e) => {

    try {
      const res= await axios.post('http://localhost:3001/login', e)
     
      const data = res.data.usuario[0];
      
      
      setStateUser(data)
      
      
      if (data.tipo_usuario_id){
        navigate('/inicio');
       }
      
      
    
              
    } catch (error) {
        alert('CORREO O CONTRASEÑA INCORRECTOS');
    }
    
   
  };


  return (
    <UserContext.Provider
      value={{getUser,stateUser, setStateUser, stateNormas,setStateNormas,norma,setNorma}}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;