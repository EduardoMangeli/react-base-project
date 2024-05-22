import Base from "./Base";

const SegmentacaoeQuantificacao =() => {
    const dados = [
        {
            clinica: 'Clínica Lorem Ipsun',
            status: 'Pendente',
            itens: [
                'Imagem do Cliente :20240-04-19-19:39:54.jpeg',
                'Imagem para Calibrar: 20240-04-19-19:39:54.jpeg',
            ],
            botoes: [
                'Enviar'
            ]
        },
        {
            clinica: 'Clínica Lorem Ipsun',
            status: 'Concluído',
            itens: [
                'Imagem do Cliente :20240-04-19-19:39:54.jpeg',
                'Imagem para Calibrar: 20240-04-19-19:39:54.jpeg',
            ],
            botoes: [
                'Enviar',
                'Arquivar'
            ]
        },
        {
            clinica: 'Clínica Lorem Ipsun',
            status: 'Concluído',
            itens: [
                'Imagem do Cliente :20240-04-19-19:39:54.jpeg',
                'Imagem para Calibrar: 20240-04-19-19:39:54.jpeg',
            ],
            botoes: [
                'Enviar',
                'Arquivar'
            ]
        },
    ]
    return (
        <Base>
            <h1>Segmentação e Quantificação</h1>
            <div className="dosimetria-sub">
                <h3>Clientes</h3>
                <h3 id="pendencia">1 Pendente</h3>
            </div>
            {dados.map((tipo) => {
                return (
                    <div className="dosimetria-area">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <span>
                                            {tipo.clinica}
                                        </span>
                                        <span className="item-status">
                                            Status: {tipo.status}
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tipo.itens.map((item) => {
                                    return (
                                        <tr>
                                            <td className="item-img"><span>{item}</span><a href="">Download</a> </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="btn-area">
                            {tipo.botoes.map((item) => {
                                return (
                                    <button>{item}</button>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </Base>
    );
}

export default SegmentacaoeQuantificacao;
