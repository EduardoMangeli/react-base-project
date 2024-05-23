import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Base from "./Base";
import AboutCard from "../components/AboutCard/AboutCard";
import { StyleAbout } from "../components/AboutCard/StyleAbout";
import { useTranslation } from "react-i18next";

import Popup from "../components/Popup/Popup";
import { useState } from 'react';

const About = () => {
    const membros = [
        { nome: 'Renato Bellini', imagem: 'imagens/perfil/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg', descricao: 'Sócio Fundador' },
        { nome: 'Rafael Bokor', imagem: 'imagens/perfil/willian-souza-p5BoBF0XJUA-unsplash.jpg', descricao: 'Sócio Fundador' },
      ];
    
      const desenvolvedores = [
        { nome: 'Caio', imagem: 'imagens/perfil/caio.jpg', descricao: 'ADS' },
        { nome: 'Ewerton', imagem: 'imagens/perfil/ewerton.jpg', descricao: 'Ciência de Dados' },
        { nome: 'João Gabriel', imagem: 'imagens/perfil/joao.jpg', descricao: 'Ciência de Dados' },
        { nome: 'Miguel', imagem: 'imagens/perfil/miguel.jpg', descricao: 'Ciência de Dados' },
        { nome: 'Paula', imagem: 'imagens/perfil/paula.jpg', descricao: 'Eng. de Software' },
      ];

      const { t } = useTranslation();

      const[buttonPopup, setButtonPopup] = useState(false);

    return (
        <Base>
            <Banner titulo={t("Quem Somos")} imagem={"imagens/heroHome.png"}/>
                <StyleAbout>
                    <main className="Conteudo">
                        <section className="Conteudo-Inicio" >
                            <div className="Conteudo-Inicio-Escrito">

                                <h1 className="Title">{t('A Passeio Carioca')}</h1>

                                <p>{t('No Passeio Carioca, cada passo é uma nova descoberta e cada descoberta merece reconhecimento. À medida que você explora os encantos do Rio e completa os circuitos ao realizar checkins, você ganha medalhas exclusivas. Essas medalhas não são apenas símbolos de suas aventuras, mas também chaves que podem desbloquear recompensas únicas e ofertas especiais. Quanto mais você explora, mais você ganha. Pronto para começar sua coleção?')}</p>

                                <div  className="botoes" onClick={()=> setButtonPopup(true)}><Botao texto={t("Baixe o app")}/></div>
                                    <Popup trigger={buttonPopup} position="center" modal setTrigger={setButtonPopup}>
                                    </Popup>

                            </div>
                        </section>

                        <section className="Conteudo-Membros">
                            <div className="Conteudo-Membros-Escrito">

                                <h3 className="SubTitle">{t('Membros')}</h3>

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
