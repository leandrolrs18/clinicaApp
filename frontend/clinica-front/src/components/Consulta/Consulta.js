import React from 'react'
import { Link } from 'react-router-dom'

import './Consulta.css'

function Consulta(props) {
  return (
    <div className="Consulta">
      <ul>
        <li><strong>Dr. :</strong> {props.medico}</li>
        <li><strong>Especialidade:</strong> {props.especialidade}</li>
        <li><strong>Data:</strong> {props.data.toString()}</li>
      </ul>
      <button type="submit">Reagendar</button>
      <button type="submit">Cancelar</button>
    </div>
  )
}
//<button onClick={props.removerConsulta}>&times;</button>
//<li><strong>Horário:</strong> {props.usuario.horario}</li>
//<li><Link to={`/adicionarconsulta/${props.usuario.id}`}>Reagendar</Link></li>

export default Consulta