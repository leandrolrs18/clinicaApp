import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

function Login() {

  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  //const [, setSenha] = useState('')



  const onSubmitHandler = event => {
    event.preventDefault()

    const usuario = { cpf, senha }

    //fetch('https://reqres.in/api/users', {
    // method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    //  body: JSON.stringify(usuario)
    // })
    //   .then(resposta => {
    //    if (resposta.ok) {
    //      setNome('')
    //      setSobrenome('')
    //     setEmail('')
    //     alert('Usuário cadastrado com sucesso!')
    //   }
    //  })
  }

  return (
    <div className="All">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReC_lR7dW7GPX14rvkkywYhuJ4NnO7-cHUkA&usqp=CAU" />
      <h3>Gerencie suas consultas com os melhores médicos</h3>
      <div className="Login">
        <h2>Entre no seu perfil</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <label>Cpf</label>
              <input
                type="text"
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
          <Link to={'/ConsultasPaciente'}>
            <button type="submit" >
              Logar
            </button>
          </Link>
          <Link to={'/Cadastro'}>
            <button type="submit">
              Cadastre-se
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login