import './App.css';
import Login from './layouts/Login';
import StartSesion from './pages/StartSesion';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './layouts/Main';
import FormularioNormativa from './components/FormularioNormativa';
import UserState from "./context/Usuarios/UserState";
import MenuBase from './pages/MenuBase';
import AnalisisD from './pages/AnalisisD';
import AnalisisE from './pages/AnalisisE';
import TablaMunicipios from './tables/TablaMunicipios';
import FormularioMunicipios from './components/FormularioMunicipios';
import FormularioDocumental from './components/FormularioDocumental';
import FormularioAnalisisE from './components/FormularioAnalisisE';
import TablaAnalisisE from './tables/TablaAnalisisE';
import TablaAnalisisD from './tables/TablaAnalisisD';

function App() {
  return (
 
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <UserState>
          <Routes>
            <Route path='/' element = {<Login/>}>
              <Route index element = {<StartSesion/>}
              />
            </Route>
            <Route path='/inicio' element={<Main/>}>
              <Route index element = {<MenuBase/>}/>
              <Route path='norma/nueva' element= {<FormularioNormativa/>}/>
              <Route path='analisisE' element={<TablaAnalisisE/>}/>
              <Route path='analisisD' element={<TablaAnalisisD/>}/>
              <Route path='analisisE/nuevo' element={<FormularioAnalisisE/>}/>
              <Route path='analisisE/nuevoAnalisisDocumental' element={<FormularioDocumental/>}/>
              <Route path='municipios' element={<TablaMunicipios/>}/>
              <Route path='municipios/nuevoMunicipio' element={<FormularioMunicipios/>}/>
            </Route>
          </Routes>
        </UserState>
      </BrowserRouter>
 
  );
}

export default App;
