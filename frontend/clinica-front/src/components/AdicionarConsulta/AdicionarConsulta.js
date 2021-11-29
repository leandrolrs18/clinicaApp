import React, { useState } from 'react'

import './AdicionarConsulta.css'

function AdicionarConsulta() {
  
  const [especialidade, setEspecialidade] = useState('')
  const [medico, setMedico] = useState('')
  const [data, setData] = useState('')
  const [horario, setHorario] = useState('')

  const onSubmitHandler = event => {
    event.preventDefault()

    const usuario = { especialidade, medico, data,  horario}

    //fetch('https://reqres.in/api/users', {
    //  method: 'POST',
    //  headers: { 'Content-Type': 'application/json' },
    //  body: JSON.stringify(usuario)
    //})
    //  .then(resposta => {
     //   if (resposta.ok) {
     //     setNome('')
      //    setSobrenome('')
      //    setEmail('')
       //   alert('Usuário cadastrado com sucesso!')
       // }
      //})
  }

  return (
    <div className="AdicionarConsulta">
      <h2>Adicionar Consulta</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="Linha">
          <div className="Coluna">
            <label>Especialidade</label>
            <input
              type="text"
              name="especialidade"
              value={especialidade}
              onChange={event => setEspecialidade(event.target.value)}
              required>
            </input>
          </div>
        </div>  
        <div className="Linha">
          <div className="Coluna">
            <label>Medico</label>
            <input
              type="text"
              name="medico"
              value={medico}
              onChange={event => setMedico(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <label>Data</label>
            <input
              type="date"
              name="data"
              value={data}
              onChange={event => setData(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <label>Horário</label>
            <input
              type="time"
              name="horario"
              value={horario}
              onChange={event => setHorario(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
}

export default AdicionarConsulta