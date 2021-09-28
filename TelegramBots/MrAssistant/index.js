// /$$      /$$            /$$$$$$                     /$$             /$$                           /$$    
// | $$$    /$$$           /$$__  $$                   |__/            | $$                          | $$    
// | $$$$  /$$$$  /$$$$$$ | $$  \ $$  /$$$$$$$ /$$$$$$$ /$$  /$$$$$$$ /$$$$$$    /$$$$$$  /$$$$$$$  /$$$$$$  
// | $$ $$/$$ $$ /$$__  $$| $$$$$$$$ /$$_____//$$_____/| $$ /$$_____/|_  $$_/   |____  $$| $$__  $$|_  $$_/  
// | $$  $$$| $$| $$  \__/| $$__  $$|  $$$$$$|  $$$$$$ | $$|  $$$$$$   | $$      /$$$$$$$| $$  \ $$  | $$    
// | $$\  $ | $$| $$      | $$  | $$ \____  $$\____  $$| $$ \____  $$  | $$ /$$ /$$__  $$| $$  | $$  | $$ /$$
// | $$ \/  | $$| $$      | $$  | $$ /$$$$$$$//$$$$$$$/| $$ /$$$$$$$/  |  $$$$/|  $$$$$$$| $$  | $$  |  $$$$/
// |__/     |__/|__/      |__/  |__/|_______/|_______/ |__/|_______/    \___/   \_______/|__/  |__/   \___/  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// AUTHOR : Mr TechX | TecnoProjects
// PROJECT : Mr. Assistant (Telegram Version)
// VERSION : 1.0.6
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// HOLAA EXTRAÑO QUE ESTÁ LEYENDO MI CODIGO :)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

//----------------[REPLIT]----------------
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.get('/', function(request, response) {
// 	response.sendFile(__dirname + '/views/index.html');
// });
// app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));

//----------------[Codigo fuente]----------------
//----------------[Constantes]----------------
const { Telegraf } = require('telegraf');
const config = require("./config/config.json");
const bot = new Telegraf(config.token);

//----------------[Variables]----------------
let btcvar = "41704.70 USD - 848522.99 MXN";
let ethvar = "2848.04 USD - 57946.16 MXN";
let xmrvar = "231.5 USD - 4710.09 MXN";
let ltcnvar = "143.89 USD - 2927.58 MXN";
let dogevar = "0.21 USD - 4.27 MXN";
let fecha = "(actualización 28/Sep/2021)";

let prefix = "m_"
let version = "v1.0.6"
//--------------[Mensaje de Consola]--------------
console.log("MrAssistant Activado");

//----------------[Listas]----------------

bot.command('m_all_cmds', (ctx) => {
    ctx.reply("Mis comandos son: \n\n/m_menu - Para ver el menu simple de comandos \n\n/start - Para presentarme contigo \n/m_all_cmds - Para ver mi lista de comandos \n/m_status - Para ver como me encuentro en el lado del sistema \n/m_hola - Saludo (Fue mi primer comando y mi comando de prueba) \n/m_cryptos - Para ver la lista de comandos de criptomonedas \n/m_version - Para ver en que version me encuentro y su fecha de lanzamiento \n/m_version_logs - Para ver que se modifico en mi ultima actualización \n/m_my_code - Para ver mi codigo fuente ya que mi programador @Mr_TechX lo dejo publico para que puedas ver como es que existo \n/m_my_developer - Para ver los proyectos y redes de Mi programador :) \n/m_dev_networks - Para ver las redes de mi programador \n/m_pregunta - Para responderte preguntas con *Si, No, Tal Vez*, un ejemplo seria */m_pregunta Pasaré mi examen?* \n/m_pregunta_h - Por si no sabes usar el comando anterior \n/m_pescar - Pesca un pes virtual que no sirve para nada xd")
});

bot.command('m_menu', (ctx) => {
    ctx.reply("MI MENU ORDENADO ES: \n\n/m_juegos - Menu de los juegos actuales \n\n/m_info - Para ver los comandos de informacion de Wall-E \n\n/m_versiones - Para ver la informacion de la version y sus modificaciones \n\n/m_pruebas - Para ver el/los comandos de pruebas de dsarrollo \n\n/m_util - Para ver los comandos extra que te pueden gustar \n\n/m_crypto - Para ver los comandos relacionados con cryptomonedas")
});

bot.command('m_juegos', (ctx) => {
    ctx.reply("MIS COMANDOS DE JUEGOS SON: \n\n/m_pregunta - Para preguntarme algo que pueda responder con (si, no, tal vez) \n\n/m_pregunta_h - Para aprender a usar el comando anterior \n\n/m_pescar - Pesca un pes virtual que no sirve para nada xd")
});

bot.command('m_info', (ctx) => {
    ctx.reply("MIS COMANDOS DE INFORMACION SON: \n\n/m_all_cmds - Para ver mi lista completa de comandos \n\n/m_status - Para ver como me encuentro en el lado del sistema \n\n/m_my_code - Para ver mi codigo fuente ya que mi programador @Mr_TechX lo dejo publico para que puedas ver como es que existo \n\n/m_my_developer - Para ver los proyectos y redes de Mi programador :) \n\n/m_dev_networks - Para ver las redes de mi programador")
});

bot.command('m_versiones', (ctx) => {
    ctx.reply("MIS COMANDOS SOBRE VERSIONES SON: \n\n/m_version - Para ver en que version me encuentro y su fecha de lanzamiento \n\n/m_version_logs - Para ver que se modifico en mi ultima actualización")
});

bot.command('m_pruebas', (ctx) => {
    ctx.reply("MIS COMANDOS DE PRUEBAS SON: \n\n/m_hola - Saludo (Fue mi primer comando y mi comando de prueba)")
});

bot.command('m_crypto', (ctx) => {
    ctx.reply("MIS COMANDOS DE CRIPTOMONEDAS SON: \n\n/m_precio_bitcoin - Precio de Bitcoin \n\n/m_precio_ethereum - Precio de Ethereum \n\n/m_precio_litecoin - Precio de Litecoin \n\n/m_precio_monero - Precio de Monero \n\n/m_precio_dogecoin - Precio de Dogecoin \n\n/m_cryptos - Precio de las cryptomonedas guardadas en mi lista")
});

bot.command('m_util', (ctx) => {
    ctx.reply("MIS COMANDOS EXTRAS / UTILES SON: \n\n/m_chat_muerto - para enviar una imagen de chat muerto xd")
});

//-------------------[JUEOS]-------------------
bot.command('m_pregunta', (ctx) => {
    let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    ctx.reply(`Mi respuesta es ${random} \n\n(Si no preguntaste nada, /m_pregunta_h)`)
});

bot.command('m_pregunta_h', (ctx) => {
    ctx.reply("Agrega una pregunta que se pueda responder con *Si, No, Tal Vez*, si no es así usa \n/m_pregunta [Tu pregunta] \nEjemplo: \n/m_pregunta aprobaré el examen?")
});

bot.command('m_pescar', (ctx) => {
    let respuesta = ['Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐟', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐠', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐡', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🦀', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🦐', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🦑', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐙']
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    ctx.reply(`${random}`)
});

//-------------------[INFO]-------------------
bot.command('m_status', (ctx) => {
    ctx.reply("Todo bien por ahora, mi sistema funciona correctamente, quieres ver como funcionoo? ejecuta el comando /my_code y veras todas mis lineas de codigo :)")
});

bot.command('m_my_code', (ctx) => {
    ctx.reply("Puedes ver mi codigo fuente en el Github de mi programador, ahi puedes ver mis versiones pasadas y mi version actual en el lado del codigo https://github.com/Mr-TechX/MrAssistantTelegram")
});

bot.command('m_my_developer', (ctx) => {
    ctx.reply("My programador tiene como Nombre MrTechX en casi todos lados, puedes ver sus redes si ejecutas el comando /dev_networks")
});

bot.command('m_dev_networks', (ctx) => {
    ctx.reply("Redes Sociales de mi programador: \n\nTwitter - http://bit.ly/twittechX \n\nInstagram - https://bit.ly/ig_techx \n\nDiscord Server - https://bit.ly/3vcdM5j \n\nTelegram - @Mr_TechX \n\nGrupo de Telegram - https://t.me/TechX_Army \n\nGithub - bit.ly/github_techX \n\nTecnoProjects - https://github.com/TecnoProjects \n\nPortafolio - https://bit.ly/UlisesCamacho_portafolio \n\nContacto - beacons.ai/ulisescamacho")
});

//-------------------[VERSIONES]-------------------
bot.command('m_version', (ctx) => {
    ctx.reply("Actualmente estoy en mi verison 1.0.6 que fue lanzada el 22/Sep/2021 por TecnoProjects | @Mr_TechX")
});

bot.command('m_version_logs', (ctx) => {
    ctx.reply("Actualiazación de comandos, mejora de funcionamiento y modificaciones internas")
});

//-------------------[PRUEBAS]-------------------
bot.command('m_hola', (ctx) => {
    ctx.reply("Holaaa!! " + ctx.from.first_name + " Soy MrAssistant")
});

bot.start((ctx) => {
    console.log(ctx.form)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)

    ctx.reply('Hola Bienvenid@ ' + ctx.from.first_name + ',' + ' soy MrAssistant, soy un Bot :), puedes ejecutar el comando /m_menu para ver mi menu simple de comandos')
});

//-------------------[CRYPTO]-------------------
bot.command('m_precio_bitcoin', (ctx) => {
    ctx.reply("Bitcoin | " + btcvar + " " + fecha)
});

bot.command('m_precio_ethereum', (ctx) => {
    ctx.reply("Ethereum | " + ethvar + " " + fecha)
});

bot.command('m_precio_monero', (ctx) => {
    ctx.reply("Monero | " + xmrvar + " " + fecha)
});

bot.command('m_precio_litecoin', (ctx) => {
    ctx.reply("Litecoin | " + ltcnvar + " " + fecha)
});

bot.command('m_precio_dogecoin', (ctx) => {
    ctx.reply("Dogecoin | " + dogevar + " " + fecha)
});

bot.command('m_cryptos', (ctx) => {
    ctx.reply("ACTUALIZACIÓN 22/sep/2021 \n\n" + "Bitcoin | " + btcvar + "\n" + "Ethereum | " + ethvar + "\n" + "Monero | " + xmrvar + "\n" + "Litecoin | " + ltcnvar + "\n" + "Dogecoin | " + dogevar)
});

//-------------------[UTIL & EXTRA]-------------------
bot.command('m_chat_muerto', (ctx) => {
    let img1 = "https://raw.githubusercontent.com/Mr-TechX/MrAssistantTelegram/v1.0.0/img/img1.jpg"
    let img2 = "https://raw.githubusercontent.com/Mr-TechX/MrAssistantTelegram/v1.0.0/img/img2.jpg"
    let respuesta = [img1, img2]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    ctx.deleteMessage
    ctx.reply("EFECTIVAMENTE CHAT MUERTO")
    ctx.replyWithPhoto(`${random}`)
});

//-------------------[SCHOOL CLASS]-------------------
bot.command('m_horario', (ctx) => {
    let horarioimg = "https://raw.githubusercontent.com/Mr-TechX/MrAssistantTelegram/v1.0.0/img/Horario.jpg"
            ctx.replyWithPhoto(horarioimg)
});

//-------------------[SUPPORT]-------------------
bot.on('text', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('._. Creo que ese no es un comando o esta mal escrito, puedes ejecutar /cmds para ver los comandos que tengo :) disculpa las molestias')
}});

bot.on('sticker', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('ohh ya veo que te gustan tanto los stickers como a mi :)')
}});

bot.on('photo', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('Aun no estoy programado para poder ver fotos o imagenes :( ...Soy ciego xd')
}});

bot.on('audio', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('Aun no estoy programado para escuchar audios, soy tremendo sordo xd')
}});

bot.on('voice', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('Aun no estoy programado para escuchar audios, soy tremendo sordo xd, pero apuesto que tienes bonita voz :)')
}});

bot.on('video', ctx => {
    if(ctx.chat.type){
    ctx.reply('Aun no estoy programado para poder ver videos :( ...Soy ciego xd')
}});
//----------------[Lanzamiento]----------------
bot.launch();
