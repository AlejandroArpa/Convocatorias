// incluir paquetes
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require("fs");

//declaracion de constantes
const url='https://agenciapublicadeempleo.sena.edu.co/spe-web/spe/cartelera';
const dep = [
  'Amazonas',
  'Antioquia',
  'Arauca',
  'Atlántico',
  'Bogotá D.C.',
  'Bolívar',
  'Boyacá',
  'Caldas',
  'Caquetá',
  'Casanare',
  'Cauca',
  'Cesar',
  'Chocó',
  'Cundinamarca',
  'Córdoba',
  'Guainía',
  'Guajira, La',
  'Guaviare',
  'Huila',
  'Magdalena ',
  'Meta',
  'Nariño',
  'Norte de Santander',
  'Putumayo ',
  'Quindío',
  'Risaralda ',
  'San Andrés y Providencia',
  'Santander',
  'Sucre ',
  'Tolima',
  'Valle del Cauca',
  'Vaupés',
  'Vichada',

]
const dirid = 'div.row > div.span4 > table.table > tbody > tr.regRow > td.hidden';
const dirlug = 'div.row > div.span4 > table.table > tbody > tr.regRow > td.regName';

//promesa
const getPostTitles = async () => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const postTitles = [];
    //busqueda por etiquetas y clases segun el paquete cheerio
    $(dirlug).each((_idx, el) => {
      const postTitle = $(el).text();
      const ids = [];
      $(dirid).each((__idx,e)=>{
        idx = $(e).text();
        ids.push(idx);
      })
      
      let f=false;  
      dep.forEach((depa)=>{
        if($(el).text()===depa){
          f=true;
        }
      })
      if(f===false){
          postTitles.push({
            lugar:postTitle,
            id:(ids[_idx])
          })
      }
    });
    const js = JSON.stringify(postTitles);
    return js
    } catch (error) {
		  throw error;
	  }
};

getPostTitles()
    .then((datos) =>{
      // const Jason = datos.map((e) => JSON.stringify(e));

      const filename = "bd.json";
      fs.writeFileSync(filename, '{ "convocatorias": '+datos+"}");
      // console.log(datos)
    });



   

    
    