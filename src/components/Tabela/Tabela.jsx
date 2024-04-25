import { TabelaEstilo } from "./Style";

const Tabela = (props) => {
    return (
        <TabelaEstilo>
            <table>
                <tr>
                    {props.tipo === "calibracao" ? (
                        <>
                            <th>ID</th>
                            <th>Nome da calibração</th>
                            <th>Usuário</th>
                            <th>Isotopo</th>
                            <th>Imagem da calibração</th>
                            <th>Criado em</th>
                        </>
                    ) : (
                        <>
                            <th>ID</th>
                            <th>Código</th>
                            <th>Nome da Análise</th>
                            <th>Usuário</th>
                            <th>Atividade Injetada</th>
                            <th>Calibração </th>
                            <th>Status</th>
                            <th>Imagem do Paciente</th>
                            <th>Relatório </th>
                            <th>Criado em</th>
                            <th>Tipo</th>
                        </>
                    )}
                </tr>
                    {props.linha}
            </table>
        </TabelaEstilo>
    )
};

export default Tabela;
