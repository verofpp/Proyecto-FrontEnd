import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from './pages/Landing/Landing';
import SearchMateriaPage from './pages/SearchMateriaPage/SearchMateriaPage';
import MateriaPage from './pages/MateriaPage/MateriaPage';
import ActividadesPage from './pages/ActividadesPage/ActividadesPage';
import AgregarActividadPage from './pages/AgregarActividadPage/AgregarActividadPage';
import AgregarMateriaPage from './pages/AgregarMateriaPage/AgregarMateriaPage';
import AgregarSeccionPage from './pages/AgregarSeccionPage/AgregarSeccionPage';
import ActividadPage from './pages/ActividadPage/ActividadPage';
import EditarActividadPage from './pages/EditarActividadPage/EditarActividadPage';
import AsignarClasePage from './pages/AgregarClasePage/AgregarClasePage';
import AsignarEventoPage from './pages/AsignarEventoPage/AsignarEventoPage';
import CrearTrimestrePage from './pages/CrearTrimestrePage/CrearTrimestrePage';
import PerfilPage from './pages/PerfilPage/PerfilPage';
import SesionPage from './pages/SesionPage/SesionPage';

import './index.css';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing></Landing>,
  },
  {
    path: "/search/materia",
    element: <SearchMateriaPage></SearchMateriaPage>,
  },
  {
    path: "/nuevaMateria",
    element: <AgregarMateriaPage></AgregarMateriaPage>
  },
  {
    path: "/nuevoEvento",
    element: <AsignarEventoPage></AsignarEventoPage>
  },
  {
    path: "/nuevoTrimestre",
    element: <CrearTrimestrePage></CrearTrimestrePage>
  },
  {
    path: "/signup",
    element: <PerfilPage></PerfilPage>
  },
  {
    path: "/login",
    element: <SesionPage></SesionPage>
  },
  {
    path: "/materia/:materia/:materiaID",
    element: <MateriaPage></MateriaPage>,
  },
  {
    path: "/materia/:materia/:materiaID/nuevaSeccion",
    element: <AgregarSeccionPage></AgregarSeccionPage>
  },
  {
    path: "/materia/:materia/:materiaID/seccion/:seccion/:seccionID",
    element: <ActividadesPage></ActividadesPage>,
  },
  {
    path: "/materia/:materia/:materiaID/seccion/:seccion/:seccionID/nuevaActividad",
    element: <AgregarActividadPage></AgregarActividadPage>,
  },
  {
    path: "/materia/:materia/:materiaID/seccion/:seccion/:seccionID/nuevaClase",
    element: <AsignarClasePage></AsignarClasePage>
  },
  {
    path: "/actividad/:actividadID",
    element: <ActividadPage></ActividadPage>,
  },
  {
    path: "/editarActividad/:actividadID/:claseID",
    element: <EditarActividadPage></EditarActividadPage>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router }></RouterProvider>
  </React.StrictMode>
);


reportWebVitals();
