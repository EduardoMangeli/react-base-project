import Base from "./Base"
import TestCard from "../components/TestCard/TestCard";
import dadosSolicitacoes from "../data/solicitacoes.json";

const Calibracoes = () => {
  return (
    <Base>
      <h1>
     Aplicação React Base
      </h1>
        {dadosSolicitacoes.map(
            (solicitacao) => (
                <TestCard
                    id={solicitacao.id}
                    cliente={solicitacao.client}
                    tipo_exame={solicitacao.description}
                    data={solicitacao.date}
                    status={solicitacao.status}
                />
            )
        )}

        <TestCard
            id="1"
            cliente="Clinica dosimetria"
            tipo_exame="Clinic Dosimetries"
            data="01/01/2021"
            status="A"
        />

        <TestCard
            id="2"
            cliente="Clinica dosimetria"
            tipo_exame="Preclinic Dosimetris"
            data="01/01/2021"
            status="A"
        />
    </Base>
  )
}

export default Calibracoes