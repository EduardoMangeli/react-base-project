import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Base from "./Base";
import AboutCard from "../components/AboutCard/AboutCard";
import { StyleAbout } from "../components/AboutCard/StyleAbout";
import { useTranslation } from "react-i18next";

const About = () => {
    const membros = [
        { nome: 'Renato Bellini', imagem: 'imagens/membros/ft_nome.png', descricao: 'descricao_1' },
        { nome: 'Rafael Bokor', imagem: 'imagens/membros/ft_nome.png', descricao: 'descricao_1' },
      ];
    
      const desenvolvedores = [
        { nome: 'Caio', imagem: 'imagens/desenvolvedores/ft_nome.png', descricao: 'descricao_2' },
        { nome: 'Ewerton', imagem: 'imagens/desenvolvedores/ft_nome.png', descricao: 'descricao_2' },
        { nome: 'João Gabriel', imagem: 'imagens/desenvolvedores/ft_nome.png', descricao: 'descricao_2' },
        { nome: 'Miguel', imagem: 'imagens/desenvolvedores/ft_nome.png', descricao: 'descricao_2' },
        { nome: 'Paula', imagem: 'imagens/desenvolvedores/ft_nome.png', descricao: 'descricao_2' },
      ];

      const { t } = useTranslation();

    return (
        <Base>
            <Banner titulo={t("Quem Somos")} imagem={""}/>
                <StyleAbout>
                    <main className="Conteudo">
                        <section className="Conteudo-Inicio" >
                            <div className="Conteudo-Inicio-Escrito">

                                <h1 className="Title">{t('A Passeio Carioca')}</h1>

                                <p>{t('No Passeio Carioca, cada passo é uma nova descoberta e cada descoberta merece reconhecimento. À medida que você explora os encantos do Rio e completa os circuitos ao realizar checkins, você ganha medalhas exclusivas. Essas medalhas não são apenas símbolos de suas aventuras, mas também chaves que podem desbloquear recompensas únicas e ofertas especiais. Quanto mais você explora, mais você ganha. Pronto para começar sua coleção?')}</p>

                                <Botao className="Botao" texto={t('Baixe o app')}></Botao>

                            </div>
                        </section>

                        <section className="Conteudo-Membros">
                            <div className="Conteudo-Membros-Escrito">

                                <h3 className="Title-Membros">{t('Membros')}</h3>

                                <ul className="Conteudo-Membros-Escrito-Lista">
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
                        </section>

                        <section className="Conteudo-Devs">

                            <div className="Conteudo-Devs-Escrito">

                                <h3 className="SubTitle">{t('Desenvolvedores do Site')}</h3>

                                    <ul className="Conteudo-Devs-Escrito-Lista">
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

                        </section>
                        
                        <section className="Conteudo-Equipe">

                            <div className="Conteudo-Equipe-Escrito">

                                <h3 className="SubTitle">{t('Mentores')}</h3>

                                <ul className="Conteudo-Equipe-Escrito-Professores">
                                    <li>Professor Eduardo Mangeli, IBMEC</li>
                                </ul>

                                <h3 className="SubTitle">{t('Empresa deselvolvedora do Aplicativo')}</h3>

                                <ul className="Conteudo-Equipe-Escrito-Empresa">
                                    <li>Keener Innovations</li>
                                </ul>

                            </div>

                        </section>
                        
                    </main>
                </StyleAbout>
        </Base>
    )
  }
  
  export default About;
