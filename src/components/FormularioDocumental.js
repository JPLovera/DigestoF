import React from "react";
import axios from "axios";
import TablaNormasCompleta from "../tables/TablaNormasCompleta";
import UserContext from '../context/Usuarios/UserContext';

//import { useFormik } from "formik";
//import * as yup from "yup";
import { useEffect, useState, useContext} from "react";
import {
    Box,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
    FormHelperText,
    Input,
    inputClasses,
    InputLabel,
    TextField,
    Toolbar,
    Grid,
    Button,
    Typography,
    getFilledInputUtilityClass,
    RadioGroup,
    Radio,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FormularioDocumental = () => {
    const [listaNormativa, setlistaNormativa] = useState([]);
    const [listaAnalisisDocumental, setListaAnalisisDocumental] = useState([]);
    const userContext = useContext(UserContext);
    const pasar = [userContext.norma];
    const nombre = 'Documental';

    //Inputs:Tabla analisis_documental
    const [inputs, setInputs] = useState({
        normativa_id: "",
        indizadores_id: "",
        fecha: "",
        usuario_id: 1,
    });

    //Tabla analisis documental:
    const getNormativa = async () => {
        try {
            //const response = await axios.get("http://localhost:3001/normas");

            //setlistaNormativa(response.data.Normas);
        } catch (error) {
            alert("No se pudo recibir normativas");
        }
    };
    const getAnalisisDocumental = async () => {
        try {
            //const response = await axios.get(
              //  "http://localhost:3001/documental"
            //);
           // setListaAnalisisDocumental(response.data.documental);
        } catch (error) {
            alert("No se pudo recibir el analisis documental");
        }
    };

    useEffect(() => {
        getNormativa();
        getAnalisisDocumental();
    }, []);

    const handleSubmit = async (e) => {
        console.log(inputs);

        try {
            const response = await axios.post(
                "http://localhost:3001/documental/alta",
                inputs
            );

            alert("Cargado exitosamente");
        } catch (error) {
            alert("Fallo al cargar");
        }
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value],
        }));
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    padding: "1%",
                    width: '95%',
                    borderRadius: "2%",
                }}
            >
                <TablaNormasCompleta envio={{pasar,nombre}}/>
                <Typography variant="h6" fontWeight="bold">
                    Normativa
                </Typography>
                <FormControl>
                    <InputLabel>Seleccione el numero de sanción</InputLabel>
                    <Select
                        value={inputs.normativa_id}
                        onChange={handleChange}
                        name="normativa_id"
                    >
                        {listaNormativa.map((element) => (
                            <MenuItem key={element.id} value={element.id}>
                                {element.numero_sancion}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Typography variant="h6" fontWeight="bold">
                    Indizadores
                </Typography>
                <FormControl>
                    <InputLabel>Seleccione una opcion</InputLabel>
                    <Select
                        value={inputs.indizadores_id}
                        onChange={handleChange}
                        name="indizadores_id"
                    >
                        {listaAnalisisDocumental.map((element) => (
                            <MenuItem key={element.id} value={element.id}>
                                {element.indizadores_id}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Box>
                    <Typography variant="h6" fontWeight="bold">
                        Fecha
                    </Typography>
                    <TextField
                        id="fecha"
                        name="fecha"
                        type="date"
                        value={inputs.fecha}
                        onChange={handleChange}
                        variant="filled"
                        sx={{ width: 375 }}
                    />
                </Box>
                <Button variant="contained" type="submit">
                    Nueva Ficha
                </Button>
            </Box>
        </Box>
    );
};

export default FormularioDocumental;
