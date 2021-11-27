import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route, Routes  } from 'react-router-dom';

import Login from './components/Login/Login'
import Cadastro from './components/Cadastro/Cadastro'
import ConsultasPaciente from './components/ConsultasPaciente/ConsultasPaciente'
import ConsultasMedico from './components/ConsultasMedico/ConsultasMedico'
import AdicionarConsulta from './components/AdicionarConsulta/AdicionarConsulta'


function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" exact caseSensitive={false} element={<Login />} >
            </Route>
            <Route path="/Cadastro" exact caseSensitive={false} element={<Cadastro />}>
            </Route>
            <Route path="/ConsultasPaciente" exact caseSensitive={false} element={<ConsultasPaciente />}>
            </Route>
            <Route path="/ConsultasMedico" exact caseSensitive={false} element={<ConsultasMedico />}>
            </Route>
            <Route path="/AdicionarConsulta"exact caseSensitive={false} element={<AdicionarConsulta />}>
            </Route>
            <Route path="*">
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
