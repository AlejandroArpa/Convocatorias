# Convocatorias
Este proyecto nace de la necesidad de querer integrar en una misma pagina web, distintas ofertas de empleo en el exterior para colombianos, especificamente vacantes en Canada. Este plantea varios aspectos interesantes a la hora de la construccion de una pagina web, ya que integra conocimientos de REACT JS para la construcción de la pagina, peticiones a un API, y como valor agregado, se me presentó el reto de consumir las convocatorias que día a día se actualizan en la pagina web de la agencia publica de empleo, la adquision de dichos datos se se realiza por medio de webscrapping utilizando el paquete `cheerio` y `axios`, posteriormente se crea un archivo JSON donde se almacenaran los datos capturados y luego por medio del paquete `JSON-server`creamos un servidor local para realizar el consumo de la "base de datos".

## Modo de uso

Primero debemos asegurarnos de tener instalados `node js`, `cheerio`, `axios` y `json-server`. A continución dejare los comandos para la instalación de los mismos en ubuntu:

```
sudo apt install nodejs
sudo npm install cheerio
sudo npm install axios
sudo npm install json-server
```
Una vez nos aseguramos de contar con los paquetes necesarios para correr nuestro proyecto, por medio de la consola, y con la certeza de encontrarnos dentro del directorio donde alojamos nuestro proyecto, ejecutamos el comando `node MyServer.js`, este se encarga de hacer el webscrapping a la url https://ape.sena.edu.co/spe-web/spe/cartelera y de crear el archivo, o en su defecto sobreescribir db.json.
