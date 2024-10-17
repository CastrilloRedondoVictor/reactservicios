import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './components/ServicioCustomers';
import FindCustomer from './components/findCustomer';
import PracticaCoches from './components/practicaCoches';
import PracticaEmpleadosDepartamentos from './components/PracticaEmpleadosDepartamentos';
import PracticaEmpleadosOficios from './components/PracticaEmpleadosOficios';
import Departamento from './components/MaestroDetalle/Departamento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <FindCustomer></FindCustomer>
  // <PracticaCoches />
  // <PracticaEmpleadosDepartamentos />
  // <PracticaEmpleadosOficios />
  <Departamento />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
