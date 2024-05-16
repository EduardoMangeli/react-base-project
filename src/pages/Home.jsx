import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import MeuBotao from "../components/MeuBotao/MeuBotao";
import { Link } from 'react-router-dom'
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
      rota: '/clinica',
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
      rota: '/dosimetriapreclinica',
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
      rota: '/segmentacaoequantificacao',
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
    },
    {
      tipo: 'Radiosynoviorthesis',
      rota: '/radiosinoviortese',
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
      tipo: 'Modelagem computacional',
      rota: '/modelagem',
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
  ]

  return (
    <Base>
      <div>
        <h1>
        CLÍNICA DOSIMAGEM
        </h1>

      </div>
      {dados.map((tipo) => {
        return (
          <table>
            <thead>
              <tr>
                <th>
                  <Link to={tipo.rota} className="link-home">
                  <span>
                    {tipo.tipo}
                  </span>
                  </Link>
                  
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