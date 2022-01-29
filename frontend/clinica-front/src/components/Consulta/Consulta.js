import React from 'react'
import { Link } from 'react-router-dom'

import './Consulta.css'

function Consulta(props) {
  return (
    <div className="Consulta">
      <ul>
        <li><strong>Dr. :</strong> {props.consulta.medico}</li>
        <li><strong>Especialidade:</strong> {props.consulta.especialidade}</li>
        <li><strong>Data:</strong> {props.consulta.data.toString()}</li>
      </ul>
      <div className="but">
        <Link to={'/AdicionarConsulta'}>
          <button type="submit">Reagendar</button>
        </Link>
        <button type="submit" onClick={props.consulta.removerUsuario}>&times;</button>
      </div>
    </div >
  )
}
//<button onClick={props.removerConsulta}>&times;</button>
//<li><strong>Horário:</strong> {props.usuario.horario}</li>
//<li><Link to={`/adicionarconsulta/${props.usuario.id}`}>Reagendar</Link></li>

export default Consulta