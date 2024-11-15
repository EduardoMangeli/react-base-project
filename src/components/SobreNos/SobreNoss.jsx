import { Sobre, Card, Container, Bloco } from "./Style";

const SobreAGente = () => (
    <Sobre>
        <Bloco>
            <h1>Sobre Nós</h1>
        </Bloco>
        <Container>
            <Card className="Guilherme">
                <h3>Guilherme Dias Batista</h3>
                <img src="/imagens/gui.jpeg" alt="Foto de Guilherme Dias"/>
                <p>Matrícula: 202402972091</p>
                <p>Idade: 19 anos</p>
                <p>Período: 2º</p>
                <p>Curso: Ciência de Dados</p>
            </Card>

            <Card className="Arthur">
                <h3>Arthur Azeredo</h3>
                <img src="/imagens/art.jpeg" alt="Foto de Arthur Azeredo"/>
                <p>Matrícula: 202402969331</p>
                <p>Idade: 19 anos</p>
                <p>Período: 2º</p>
                <p>Curso: Ciência de Dados</p>
            </Card>

            <Card className="Gabriel">
                <h3>Gabriel Brião</h3>
                <img src="/imagens/gab.jpeg" alt="Foto de Gabriel Brião"/>
                <p>Matrícula: 202401667171</p>
                <p>Idade: 19 anos</p>
                <p>Período: 2º</p>
                <p>Curso: Ciência de Dados</p>
            </Card>

            <Card className="Juliana">
                <h3>Juliana de Oliveira</h3>
                <img src="/imagens/Juli.jpeg" alt="Foto de Juliana"/>
                <p>Matrícula: 202203947729</p>
                <p>Idade: 22 anos</p>
                <p>Período: 4º</p>
                <p>Curso: ADS</p>
            </Card>
        </Container>
    </Sobre>
);

export default SobreAGente;
