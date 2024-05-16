import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Base from "./Base"

const Termos = () => {

    return (
        <Base>
            <div id="body_termos">
                <h2>Termos de Uso e Privacidade</h2>

                <h3>1. Quem somos</h3>
                <p>O Passeio Carioca é um projeto de integração turística e divulgação de conteúdo relacionado ao patrimônio imaterial da cidade. Contamos as histórias de casas e prédios, buscando fomentar o turismo cultural e preservar a memória urbana do Rio de Janeiro.</p>

                <h3>2. Objetivo</h3>
                <p>Pelos presentes Termos e Condições Gerais de Uso, ficam estabelecidos direitos e obrigações dos Usuários e Prestadores de Serviços do aplicativo.</p>

                <h3>3. Definições relevantes</h3>
                <ul>
                <li>Usuário: pessoa física ou jurídica, que contrata os serviços intermediados pelo Passeio Carioca;</li>
                <li>Passeio Carioca: Passeio Serviços Turísticos LTDA., inscrito no CNPJ sob o nº 47.340.470/0001-68, com sede à Avenida Marechal Rondon, 320, Ap. 1007, bloco 1, São Francisco Xavier, Rio de Janeiro - RJ, CEP: 20950-004;</li>
                <li>Prestador de Serviço: pessoa física ou jurídica, que disponibiliza serviços por meio da aplicação tecnológica.</li>
                </ul>

                <h3>4. Funcionamento do aplicativo</h3>
                <p>Os serviços prestados pelo Passeio Carioca consistem na disponibilização de uma aplicação tecnológica que possibilita ao Usuário localizar e contatar Prestadores de Serviços de diferentes modalidades, como, por exemplo, guias de turismo e estabelecimentos comerciais. O Passeio Carioca possibilita que os estabelecimentos comerciais realizem anúncios diversos e prestem serviços aos Usuários do Aplicativo. Ademais, o Passeio Carioca permite que guias de turismo cadastrem passeios guiados e que os Usuários realizem a compra dos passeios disponibilizados por meio do aplicativo.</p>

                <h3>5. Legislação aplicável</h3>
                <p>Ao utilizar o aplicativo, o Usuário e o Prestador de Serviços deverão ler e concordar com os presentes Termos e Condições Gerais de Uso, assim como com a Política de Privacidade e Proteção de Dados Pessoais do Passeio Carioca. As relações jurídicas derivadas dos presentes Termos e Condições Gerais de Uso são regidas pela legislação brasileira, incluindo, mas sem limitar ao Código de Defesa do Consumidor (Lei nº 8.078/1990), Código Civil (Lei nº 10.406/2002), Marco Civil da Internet (Lei nº 12.965/2014) e seu Decreto Regulamentador (Decreto nº 8.771/2016) e pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>

                <h3>6. Alterações contratuais</h3>
                <p>O Passeio Carioca poderá, a seu critério e a qualquer tempo, alterar o conteúdo contratual dos presentes Termos e Condições Gerais de Uso e da Política de Privacidade e Proteção de Dados Pessoais, de modo a aperfeiçoar a entrega de seus serviços ou ainda para atender aspectos legais, regulatórios ou demandas e ordens judiciais, administrativas ou arbitrais. O Passeio Carioca informará ao Usuário e ao Prestador de Serviços as eventuais alterações consideradas significativas, por meio de mensagens via e-mail, avisos no próprio aplicativo ou por meio de banners.</p>

                <h3>7. Alterações no Aplicativo</h3>
                <p>O Passeio Carioca também poderá incluir modificações, adaptações e ajustes em meio às funcionalidades e sistemas adotados no aplicativo, com o intuito de entregar melhorias ao desenvolvimento de seus serviços.</p>

                <h3>8. Direitos, deveres, obrigações e responsabilidades</h3>
                <p>O Passeio Carioca se reserva o direito de, a qualquer tempo, modificar ou descontinuar, temporariamente ou permanentemente, o serviço ou parte dele, com ou sem notificação. O Usuário e o Prestador de Serviços concordam que o Passeio Carioca não será responsabilizado, nem terá qualquer obrigação adicional, implícita ou explícita, em razão de qualquer modificação, suspensão ou desativação do Serviço.</p>

                <h3>9. Propriedade Intelectual</h3>
                <p>O Passeio Carioca é o único titular de todos os direitos reservados a si relacionados à sua Propriedade Intelectual disponibilizados no aplicativo. A aceitação dos presentes Termos e Condições Gerais de Uso não transferem ou cedem ao Usuário e ao Prestador de Serviço direitos relativos à Propriedade Intelectual, tampouco direitos exclusivos, incluindo, mas sem limitar às marcas, patentes de invenção, modelos de utilidade, desenhos industriais, programas de computador, softwares, direitos autorais ou quaisquer informações relacionadas ao sigilo comercial ou industrial sobre qualquer parte do aplicativo.</p>

                <h3>10. Foro de Eleição</h3>
                <p>Quaisquer controvérsias, resultantes da interpretação ou aplicação da presente contratação, serão resolvidas conforme os princípios contratuais aplicáveis, notadamente a boa-fé objetiva, elegendo-se desde já a Comarca da Capital do Estado do Rio de Janeiro como foro competente para processar e julgar eventuais demandas oriundas desta relação.</p>

                <h3>11. Canais de Atendimento</h3>
                <p>O Passeio Carioca disponibiliza, por fim, canais de atendimento para tratar de quaisquer questões relativas a ajustes nos serviços, por meio do aplicativo.</p>

                <Botao texto="Entre em contato" rota= "https://wa.me/+5521999929790"></Botao>
            </div>
        </Base>
      
    )
  }
  
  export default Termos;