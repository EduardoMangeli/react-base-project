
import PasseioCard from "../PasseioCard/PasseioCard";
import React, { useEffect } from 'react';


const PasseioRedirect = ({ key }) => {
  const handleClick = () => {
    window.location.href = `PasseioPage.jsx?=${key}`;
  };

  /*
  useEffect(() => {
    const buscaDados = async () => {
        localStorage.setItem('passeio', JSON.stringify(card.dataset));

      const resposta = await fetch('passeio');
      const data = await resposta.json();

      

      const key = card.dataset.key;
      const url = `PasseioPage.jsx?key=${key}`;
      window.location.href = url;

    };

    buscaDados(); 

  }, []); */


  return (

    <div onClick={handleClick}>
      Carregando...
    </div>
  );

};


export default PasseioRedirect;


/*




//PESQUISA
/*
let obj = {}

obj = JSON.parse(localStorage.getItem('passeio'));

const parametros = new URLSearchParams(window.location.search);
obj.localPelaUrl = parametros.get('local');

document.body.appendChild(montaCard(obj));



const handleClick = ( evento ) => {
    const card = evento.target.closest(PasseioCard); 
    /*for (const propriedade in card.dataset){
        
        //cookies
        //document.cookie = `${propriedade}=${card.dataset[propriedade]}`;

        //localStorage item por item
        //localStorage.setItem(propriedade, card.dataset[propriedade]);

        
    const urlParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
        urlParams.append(key, params[key]);
    });

    }
   

    localStorage.setItem(passeio, JSON.stringify(card.dataset))

    window.location.href = `PasseioPage.jsx?tourname=${card.dataset.nome}`;
}

//const url = `https://example.com/frmInstallmentPayment.aspx?${Object.keys(params).map((key) => `${key}=${params[key]}`).join("&")}`;
*/
