import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

function Login() {
  
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  //const [, setSenha] = useState('')

  

  const onSubmitHandler = event => {
    event.preventDefault()

    const usuario = { cpf, senha}

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
    <div className="Login">
      <h2>Login</h2>
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
    
        <button type="submit" Link to='/ConsultasPaciente'>
          Logar
        </button>
        <button type="submit">
          Cadastre-se
        </button>
      </form>
    </div>
  )
}

export default Login