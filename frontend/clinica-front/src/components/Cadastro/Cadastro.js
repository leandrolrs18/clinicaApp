import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Cadastro.css'

function Cadastro() {

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const [medico, setMedico] = useState('')
  const [especialidade, setEspecialidade] = useState('')


  const onSubmitHandler = event => {
    event.preventDefault()

    const usuario = { nome, telefone, cpf, senha, medico, especialidade }

    //fetch('https://reqres.in/api/users', {
    // method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    //  body: JSON.stringify(usuario)
    // })
    //   .then(resposta => {

    //  })
  }

  return (
    <div className="Cadastro">
      <h2>Adicionar Usuário</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="Linha">
          <div className="Coluna">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={event => setNome(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <label>Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={telefone}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={event => setTelefone(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <label>Cpf</label>
            <input
              type="cpf"
              name="cpf"
              value={cpf}
              onChange={event => setCpf(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              value={senha}
              onChange={event => setSenha(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <label>Medico</label>
            <input
              type="checkbox"
              name="medico"
              value={medico}
              onChange={event => setMedico(event.target.value)}
              required>
            </input>
          </div>
        </div>
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
        <Link to={'/ConsultasPaciente'}>
          <button type="submit">
            Adicionar
          </button>
        </Link>
      </form>
    </div>
  )
}

export default Cadastro