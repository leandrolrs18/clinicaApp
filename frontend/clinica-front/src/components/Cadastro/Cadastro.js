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
    <div className="All">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReC_lR7dW7GPX14rvkkywYhuJ4NnO7-cHUkA&usqp=CAU" />
      <h3>Gerencie suas consultas com os melhores médicos</h3>
      <div className="Cadastro">
        <h2>Cadastre-se</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <input
                type="text"
                name="nome"
                value={nome}
                placeholder="Nome"
                onChange={event => setNome(event.target.value)}
                required>
              </input>
            </div>
          </div>
          <div className="Linha">
            <div className="Coluna">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Telefone"
                value={telefone}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={event => setTelefone(event.target.value)}
                required>
              </input>
            </div>
          </div>
          <div className="Linha">
            <div className="Coluna">
              <input
                type="cpf"
                name="cpf"
                placeholder="Cpf"
                value={cpf}
                onChange={event => setCpf(event.target.value)}
                required>
              </input>
            </div>
          </div>
          <div className="Linha">
            <div className="Coluna">
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={senha}
                onChange={event => setSenha(event.target.value)}
                required>
              </input>
            </div>
          </div>
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
              <label>Médico?</label>
              <input
                type="checkbox"
                name="medico"
                value={medico}
                onChange={event => setMedico(event.target.value)}
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
    </div>
  )
}

export default Cadastro