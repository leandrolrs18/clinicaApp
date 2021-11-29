import React, { useState, useEffect } from 'react'

import ConsultaM from '../ConsultaM/ConsultaM'

import './ConsultasMedico.css'

class ConsultasMedico extends React.Component {

    //const [ConsultasMedico, setConsultasMedico] = useState([])
    state = {
        teste: [
            {
                nome: 'Joao',
                especialidade: 'cardiologista',
                data: new Date(2020, 3, 19, 17, 30, 0)
            },
            {
                nome: 'Maria',
                especialidade: 'cardiologista',
                data: new Date(2021, 4, 19, 12, 15, 0)
            }

        ],
    }

    //useEffect(() => {
    //  fetch('https://reqres.in/api/users')
    // .then(resposta => resposta.json())
    // .then(dados => {
    //  const ConsultasMedico = dados.data.map(ConsultaM => ({
    //    id: ConsultaM.id,
    //    nome: ConsultaM.first_name,
    //    sobrenome: ConsultaM.last_name,
    //    email: ConsultaM.email
    //  }))

    //setConsultasMedico(ConsultasMedico)
    //})
    //}, [])

    //const removerConsultaM = ConsultaM => {
    //  if (window.confirm(`Tem certeza que deseja remover "${ConsultaM.nome} ${ConsultaM.sobrenome}"?`)) {
    // fetch(`https://reqres.in/api/users/${ConsultaM.id}`, {
    //   method: 'DELETE'
    //  })
    //    .then(resposta => {
    //      if (resposta.ok) {
    //       setConsultasMedico(ConsultasMedico.filter(x => x.id !== ConsultaM.id))
    //     }
    //   })
    // }
    //}

    render() {
        return (
            <div className="ConsultasMedico">
                <h1>Minhas Consultas</h1>
                {this.state.teste.map((consulta, indice) => (
                    <ConsultaM
                        key={indice}
                        nome={consulta.nome}
                        data={consulta.data}>
                    </ConsultaM>
                ))}

            </div>
        )
    }
}

export default ConsultasMedico

