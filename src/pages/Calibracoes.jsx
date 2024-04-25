import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Secao from "../components/Secao/Secao";
import dadosCalibracoes from "../data/calibracoes.json";
import Tabela from "../components/Tabela/Tabela";
import Busca from "../components/Busca/Busca";

const Calibracoes = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */


  return (
    <Base titulo="Calibrações">

                            <Busca />
                      
                        <div>
                            <Tabela
                                nome="Calibrações"
                                tipo="calibracao"
                                linha={
                                    <>
                                        {dadosCalibracoes.map(
                                            (calibracao) => (
                                                <tr>
                                                    <td>{calibracao.id}</td>
                                                    <td>{calibracao.nome}</td>
                                                    <td>{calibracao.usuario}</td>
                                                    <td>{calibracao.isotopo}</td>
                                                    <td>{calibracao.imagem}</td>
                                                    <td>{calibracao.date}</td>
                                                </tr>
                                            ))}
                                    </>
                                }
                            />

                            <button>Voltar</button>
                            <button>Avançar</button>
                        </div>
                    
                  
    </Base>
  )
}

export default Calibracoes