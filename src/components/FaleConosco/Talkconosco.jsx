import { Fale, Bloco } from "./style";

const TalkConosco = () => (
    <Fale>
        <Bloco>
            <div className="FC">
                <h1>Fale Conosco</h1>
            </div>
        </Bloco>
        <h3>Contatos:</h3>
        <div className="contact-list">
            <div className="contact-item">
                <h5>Guilherme Dias</h5>
                <p>Email: <a href="mailto:guilhermedias.batista@gmail.com">guilhermedias.batista@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com/gl-dias" target="_blank" rel="noopener noreferrer">gl-dias</a></p>
            </div>
            <div className="contact-item">
                <h5>Arthur Azeredo</h5>
                <p>Email: <a href="mailto:arthurazeredo8@gmail.com">arthurazeredo8@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com/Arthur-azeredo" target="_blank" rel="noopener noreferrer">Arthur-azeredo</a></p>
            </div>
            <div className="contact-item">
                <h5>Gabriel Brião</h5>
                <p>Email: <a href="mailto:202401667171@alunos.ibmec.edu.br">202401667171@alunos.ibmec.edu.br</a></p>
                <p>GitHub: <a href="https://github.com/brioncio" target="_blank" rel="noopener noreferrer">brioncio</a></p>
            </div>
            <div className="contact-item">
                <h5>Juliana de Oliveira</h5>
                <p>Email: <a href="mailto:202203947729@alunos.ibmec.edu.br">202203947729@alunos.ibmec.edu.br</a></p>
                <p>GitHub: <a href="https://github.com/julijolie" target="_blank" rel="noopener noreferrer">julijolie</a></p>
            </div>
        </div>
    </Fale>
);

export default TalkConosco;