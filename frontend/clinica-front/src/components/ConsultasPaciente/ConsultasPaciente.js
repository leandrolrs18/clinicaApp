import React, { useState, useEffect } from 'react'

import Consulta from '../Consulta/Consulta'

import './ConsultasPaciente.css'

class ConsultasPaciente extends React.Component {

    //const [ConsultasPaciente, setConsultasPaciente] = useState([])
    state = {
        teste: [
            {
                medico: 'Joao',
                especialidade: 'cardiologista',
                data: new Date(2020, 3, 19, 17, 30, 0)
            },
            {
                medico: 'Maria',
                especialidade: 'cardiologista',
                data: new Date(2021, 4, 19, 12, 15, 0)
            }

        ],
    }

    //useEffect(() => {
    //  fetch('https://reqres.in/api/users')
    // .then(resposta => resposta.json())
    // .then(dados => {
    //  const ConsultasPaciente = dados.data.map(Consulta => ({
    //    id: Consulta.id,
    //    nome: Consulta.first_name,
    //    sobrenome: Consulta.last_name,
    //    email: Consulta.email
    //  }))

    //setConsultasPaciente(ConsultasPaciente)
    //})
    //}, [])

    //const removerConsulta = Consulta => {
    //  if (window.confirm(`Tem certeza que deseja remover "${Consulta.nome} ${Consulta.sobrenome}"?`)) {
    // fetch(`https://reqres.in/api/users/${Consulta.id}`, {
    //   method: 'DELETE'
    //  })
    //    .then(resposta => {
    //      if (resposta.ok) {
    //       setConsultasPaciente(ConsultasPaciente.filter(x => x.id !== Consulta.id))
    //     }
    //   })
    // }
    //}

    render() {
        return (
            <div className="ConsultasPaciente">
                <h1>Minhas Consultas</h1>
                {this.state.teste.map((consulta, indice) => (
                    <Consulta
                        key={indice}
                        medico={consulta.medico}
                        especialidade={consulta.especialidade}
                        data={consulta.data}>
                    </Consulta>
                ))}

            </div>
        )
    }
}

export default ConsultasPaciente

//{this.state.teste.map((Consulta, indice) => (
 //   <Consulta
 //   key={indice}
 //   medico={Consulta.medico}
 //   especialidade={Consulta.especialidade}
 //   data={Consulta.data}>
//</Consulta>
//))}