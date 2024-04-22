import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Base from "./Base";
import AboutCard from "../components/AboutCard/AboutCard";

const About = () => {
    const membros = [
        { nome: 'Jose Fulano', imagem: 'url_da_imagem_1', descricao: 'descricao_1' },
        { nome: 'Jose Fulano', imagem: 'url_da_imagem_1', descricao: 'descricao_1' },
        { nome: 'Jose Fulano', imagem: 'url_da_imagem_1', descricao: 'descricao_1' },
        { nome: 'Jose Fulano', imagem: 'url_da_imagem_1', descricao: 'descricao_1' },
        { nome: 'Jose Fulano', imagem: 'url_da_imagem_1', descricao: 'descricao_1' },
      ];
    
      const desenvolvedores = [
        { nome: 'Caio', imagem: 'url_da_imagem_2', descricao: 'descricao_2' },
        { nome: 'Ewerton', imagem: 'url_da_imagem_2', descricao: 'descricao_2' },
        { nome: 'João Gabriel', imagem: 'url_da_imagem_2', descricao: 'descricao_2' },
        { nome: 'Miguel', imagem: 'url_da_imagem_2', descricao: 'descricao_2' },
        { nome: 'Paula', imagem: 'url_da_imagem_2', descricao: 'descricao_2' },
      ];

    return (
        <Base>
            <Banner></Banner>
            <div id="cabeçalho_about">
                <h1>Quem Somos</h1>
            </div>

            <div id="body_about">
                <h2>A Passeio Carioca</h2>
                <p>No Passeio Carioca, cada passo é uma nova descoberta e cada descoberta merece reconhecimento. À medida que você explora os encantos do Rio e completa os circuitos ao realizar checkins, você ganha medalhas exclusivas. Essas medalhas não são apenas símbolos de suas aventuras, mas também chaves que podem desbloquear recompensas únicas e ofertas especiais. Quanto mais você explora, mais você ganha. Pronto para começar sua coleção?</p>

                <h3>Objetivos</h3>
                <p>Objetivos da Passeio Carioca...</p>

                <h3>Ideais</h3>
                <p> Ideais da Passeio Carioca...</p>
                <Botao texto="Baixe o App"></Botao>

                <hr></hr>
            </div>

            <div id="membros">
                <h2>Membros</h2>
                <ul className="lista_membros">
                {membros.map((membro, index) => (
                    <AboutCard 
                    key={index} 
                    nome={membro.nome} 
                    imagem={membro.imagem} 
                    descricao={membro.descricao} 
                    />
                ))}
                </ul>
            </div>

            <div id="equipe">
                <h3>Patrocinadores</h3>
                <ul>
                    <li>Claudio Andre Castro</li>
                    <li>Sergio Castro Imoveis</li>
                </ul>
                <h3>Mentores</h3>
                <ul>
                    <li>Professor Rodrigo Rainha, UERJ</li>
                    <li>professora Lucimar Dantas, IBMEC</li>
                    <li>Professor Luiz Barbieri, IBMEC</li>
                    <li>Professor Eduardo Mangeli, IBMEC</li>
                </ul>

                <h3>Pesquisadores</h3>
                <ul>
                    <li>Ian Esteves Amaral Francisco, Ciencia de Dados, IBMEC</li>
                    <li>Matheus de Almeida Melo, Relacoes Internacionais, IBMEC</li>
                    <li>Pedro Carvalho Fontenele Castro, Historia, UERJ</li>
                </ul>

                <h3>Empresa deselvolvedora do Aplicativo</h3>
                <ul>
                    <li>Keener Innovations</li>
                </ul>
            </div>
            
            <div id="DesenvolvedoresSite">
                <h2>Desenvolvedores do Site</h2>
                <ul className="lista_membros">
                {desenvolvedores.map((dev, index) => (
                    <AboutCard 
                    key={index} 
                    nome={dev.nome} 
                    imagem={dev.imagem} 
                    descricao={dev.descricao} 
                    />
                ))}
                </ul>
            </div>


        </Base>
    )
  }
  
  export default About;
