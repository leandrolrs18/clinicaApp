import React from 'react'
import { Link } from 'react-router-dom'

import './ConsultaM.css'

function ConsultaM(props) {
  return (
    <div className="ConsultaM">
      <ul>
        <li><strong>Paciente :</strong> {props.nome}</li>
        <li><strong>Data:</strong> {props.data.toString()}</li>
      </ul>
      <button type="submit">&times;</button>
    </div>
  )
}


export default ConsultaM

//<li><strong>Especialidade:</strong> {props.especialidade}</li>