import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './AdicionarConsulta.css'

function AdicionarConsulta() {

  const [especialidade, setEspecialidade] = useState('')
  const [medico, setMedico] = useState('')
  const [data, setData] = useState('')
  const [horario, setHorario] = useState('')

  const onSubmitHandler = event => {
    event.preventDefault()

    const usuario = { especialidade, medico, data, horario }

    fetch('http://127.0.0.1:8000/clinica/consultas/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    })
      .then(resposta => {
       if (resposta.ok) {
       console.log('Usuário cadastrado com sucesso!')
     }
    })
  }

  return (
    <div className="AdicionarConsulta">
      <h2>Adicionar Consulta</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="Linha">
          <div className="Coluna">
            <input
              type="text"
              name="especialidade"
              placeholder="Especialidade"
              value={especialidade}
              onChange={event => setEspecialidade(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <input
              type="text"
              name="medico"
              placeholder="Médico"
              value={medico}
              onChange={event => setMedico(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <input
              type="date"
              name="data"
              placeholder="Data da consulta"
              value={data}
              onChange={event => setData(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <input
              type="time"
              placeholder="Horário"
              name="horario"
              value={horario}
              onChange={event => setHorario(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <Link to={'/ConsultasPaciente'}>
          <button type="submit">
            Adicionar
          </button>
        </Link>
      </form>
    </div>
  )
}

export default AdicionarConsulta