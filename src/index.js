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
import TablaMultiplicar from './components/TablaMultiplicar';
import Router from './components/Router';
import MenuRutas from './components/MenuRutas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <FindCustomer></FindCustomer>
  // <PracticaCoches />
  // <PracticaEmpleadosDepartamentos />
  // <PracticaEmpleadosOficios />
  // <Departamento />
  <div>
    <MenuRutas></MenuRutas>
    <hr />
    <Router></Router>
    <hr />
    <footer>
      <h2>PIE DE PÁGINA</h2>
    </footer>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
