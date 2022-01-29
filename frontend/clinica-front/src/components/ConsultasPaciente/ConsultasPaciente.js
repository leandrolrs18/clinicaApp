import React, { useState, useEffect } from 'react'

import Consulta from '../Consulta/Consulta'

import './ConsultasPaciente.css'

function ConsultasPaciente() {

    const [ConsultasPaciente, setConsultasPaciente] = useState([])
    /* state = {
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
    } */

    useEffect(() => {
      fetch('http://127.0.0.1:8000/clinica/consultas/')
     .then(resposta => resposta.json())
     .then(dados => {
        console.log(typeof(dados))
        console.log("sucess "+ dados[0].data);
        //console.log("sucess1 "+ dados[1].data);
        //console.log("sucess "+ dados[1].especialidade);
        console.log(dados[0].especialidade)
        const ConsultasPaciente = dados.map(consulta => ({ 
        medico: consulta.medico,
        especialidade: consulta.especialidade,
        data: consulta.data
    //    email: Consulta.email
      }))
        setConsultasPaciente(ConsultasPaciente)
    })
    }, [])

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

    
        return (
            <div className="ConsultasPaciente">
                <h1>Minhas Consultas</h1>
                {ConsultasPaciente && ConsultasPaciente.map(consulta => (
                    <Consulta
                        key={consulta.id}
                        consulta={consulta}
/*                         medico={consulta.medico}
                        especialidade={consulta.especialidade}
                        data={consulta.data} */
                        >
                    </Consulta>
                ))}

            </div>
        )
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