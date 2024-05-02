import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import MeuBotao from "../components/MeuBotao/MeuBotao";

const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */
  
  const dados = [
    {
      tipo: 'Dosimetria Clínica',
      itens: [
        {
          nome: 'Clínica Lorem',
          status: 'Pendente'
        },
        {
          nome: 'Clínica Ipsun',
          status: 'Pendente',
        },
      ]
    },
    {
      tipo: 'Dosimetria Pré-Clínica',
      itens: [
        {
          nome: 'Clínica Lorem',
          status: 'Pendente'
        },
        {
          nome: 'Clínica Ipsun',
          status: 'Pendente',
        },
      ]
    },
    {
      tipo: 'Segmentação e Quantificação',
      itens: [
        {
          nome: 'Clínica Lorem',
          status: 'Pendente'
        },
        {
          nome: 'Clínica Ipsun',
          status: 'Pendente',
        },
        {
          nome: 'Clínica Lorem Ipsun',
          status: 'Pendente'
        },
      ]
    }
  ]

  return (
    <Base>
      <div>
        <h1>
        CLÍNICA DOSIMAGEM
        </h1>
        <h2>Paciente: Zagallo</h2>
      </div>
      {dados.map((tipo) => {
        return (
          <table>
            <thead>
              <tr>
                <th>
                  <span>
                    {tipo.tipo}
                  </span>
                  <span className="item-status">
                    Status: {tipo.itens.length} pendentes
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tipo.itens.map((item) => {
                return (
                  <tr>
                    <td>{item.nome} - {item.status}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )
      })}
    </Base>
  )
}

export default Home