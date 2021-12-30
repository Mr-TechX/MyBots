//  /$$      /$$           /$$ /$$         /$$$$$$$$
// | $$  /$ | $$          | $$| $$        | $$_____/
// | $$ /$$$| $$  /$$$$$$ | $$| $$        | $$      
// | $$/$$ $$ $$ |____  $$| $$| $$ /$$$$$$| $$$$$   
// | $$$$_  $$$$  /$$$$$$$| $$| $$|______/| $$__/   
// | $$$/ \  $$$ /$$__  $$| $$| $$        | $$      
// | $$/   \  $$|  $$$$$$$| $$| $$        | $$$$$$$$
// |__/     \__/ \_______/|__/|__/        |________/
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// AUTHOR : Mr TechX | TecnoProjects
// PROJECT : Wall-E (Telegram Version)
// VERSION : 1.0.8
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

//----------------[ For Replit ]----------------
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.get('/', function(request, response) {
// 	response.sendFile(__dirname + '/views/index.html');
// });
// app.listen(3000, () => console.log(`v1.0.8`));

//----------------[Codigo fuente]----------------

//----------------[Constantes]----------------
const { Telegraf } = require('telegraf');
const config = require("./config/config.json");
const bot = new Telegraf(config.token);

//----------------[Variables]----------------
var prefix = "w_";
var version = "v1.0.8";

//----------------[Variables Crypto]----------------
let btcvar = "47238.10 USD - 971720.78 MXN";
let ethvar = "3725.56 USD - 76637.38 MXN";
let xmrvar = "213.04 USD - 4382.38 MXN";
let ltcnvar = "148.69 USD - 3058.66 MXN";
let dogevar = "0.17 USD - 3.50 MXN";
let fecha = "(Actualización 29/Dic/2021)";

//--------------[Mensaje de Consola]--------------
console.log("Wall-E Activado");

//----------------[Listas]----------------

bot.command('w_all_cmds', (ctx) => {
    ctx.reply("*MIS COMANDOS SON:* \n\n/menu - Praa ver el menu basico de comandos \n\n/start Para presentarme contigo \n\n/w_all_cmds Para ver mi lista completa de comandos \n\n/w_status Para ver como me encuentro en el lado del sistema \n\n/w_hola Saludo (Fue mi primer comando y mi comando de prueba) \n\n/w_version Para ver en que version me encuentro y su fecha de lanzamiento \n\n/w_version_logs Para ver que se modifico en mi ultima actualización \n\n/w_my_code Para ver mi codigo fuente ya que mi programador @Mr_TechX lo dejo publico para que puedas ver como es que existo \n\n/w_my_developer Para ver los proyectos y redes de Mi programador :) \n\n/w_dev_networks Para ver las redes de mi programador \n\n/w_pregunta Para responderte preguntas con *Si, No, Tal Vez*, un ejemplo seria #/w_pregunta Pasaré mi examen? \n\n/w_pregunta_h Por si no sabes usar el comando anterior \n\n/w_volado Para lanzar una moneda al aire y recibir un resultado \n\n/w_volado_h Para ver que significan los resultados del comando anterior \n\n/w_chat_muerto - para enviar una imagen de chat muerto xd \n\n/w_dev_networks - Para ver las redes de mi programador \n\n/w_pescar - Pesca un pes virtual que no sirve para nada :) \n\n/w_precio_bitcoin - Precio de Bitcoin \n\n/w_precio_ethereum - Precio de Ethereum \n\n/w_precio_litecoin - Precio de Litecoin \n\n/w_precio_monero - Precio de Monero \n\n/w_precio_dogecoin - Precio de Dogecoin \n\n/w_cryptos - Precio de las cryptomonedas guardadas en mi lista")
});

bot.command('w_menu', (ctx) => {
    ctx.reply("MI MENU ORDENADO ES: \n\n/w_juegos - Menu de los juegos actuales \n\n/w_info - Para ver los comandos de informacion de Wall-E \n\n/w_versiones - Para ver la informacion de la version y sus modificaciones \n\n/w_pruebas - Para ver el/los comandos de pruebas de dsarrollo \n\n/w_util - Para ver los comandos extra que te pueden gustar \n\n/w_crypto - Para ver los comandos relacionados con cryptomonedas")
});

bot.command('w_juegos', (ctx) => {
    ctx.reply("MIS COMANDOS DE JUEGOS SON: \n\n/w_pregunta - Para preguntarme algo que pueda responder con (si, no, tal vez) \n\n/w_pregunta_h - Para aprender a usar el comando anterior \n\n/w_volado - Para lanzar una moneda al aire y recibir un resultado \n\n/w_volado_h Para ver que significan los resultados del comando anterior \n\n/w_pescar - Pesca un pes virtual que no sirve para nada :)")
});

bot.command('w_info', (ctx) => {
    ctx.reply("MIS COMANDOS DE INFORMACION SON: \n\n/all_cmds - Para ver mi lista completa de comandos \n\n/w_status - Para ver como me encuentro en el lado del sistema \n\n/w_my_code - Para ver mi codigo fuente ya que mi programador @Mr_TechX lo dejo publico para que puedas ver como es que existo \n\n/w_my_developer - Para ver los proyectos y redes de Mi programador :) \n\n/w_dev_networks - Para ver las redes de mi programador")
});

bot.command('w_versiones', (ctx) => {
    ctx.reply("MIS COMANDOS SOBRE VERSIONES SON: \n\n/w_version - Para ver en que version me encuentro y su fecha de lanzamiento \n\n/w_version_logs - Para ver que se modifico en mi ultima actualización")
});

bot.command('w_pruebas', (ctx) => {
    ctx.reply("MIS COMANDOS DE PRUEBAS SON: \n\n/w_hola - Saludo (Fue mi primer comando y mi comando de prueba)")
});

bot.command('w_crypto', (ctx) => {
    ctx.reply("MIS COMANDOS DE CRIPTOMONEDAS SON: \n\n/w_precio_bitcoin - Precio de Bitcoin \n\n/w_precio_ethereum - Precio de Ethereum \n\n/w_precio_litecoin - Precio de Litecoin \n\n/w_precio_monero - Precio de Monero \n\n/w_precio_dogecoin - Precio de Dogecoin \n\n/w_cryptos - Precio de las cryptomonedas guardadas en mi lista")
});

bot.command('w_util', (ctx) => {
    ctx.reply("MIS COMANDOS EXTRAS / UTILES SON: \n\n/w_chat_muerto - para enviar una imagen de chat muerto xd")
});

//----------------[Comandos Centrales]----------------
bot.start((ctx) => {
    console.log(ctx.form)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)

    ctx.reply('Holii!! Bienvenid@ ' + ctx.from.first_name + ',' + ' yo soy Wall-E, soy un Bot :), puedes ejecutar el comando /w_all_cmds para ver todos mis comandos o usa /w_menu para ver el menu de comandos simple :) tkm \n\nO si eres un usuario VIP escribe /w_SoyVip')
});

bot.command('w_status', (ctx) => {
    ctx.reply("Todo bien por ahora, mi sistema funciona correctamente, quieres ver como funcionoo? ejecuta el comando /w_my_code y verás todas mis lineas de codigo :)")
});

bot.command('w_hola', (ctx) => {
    ctx.reply("Holaaa!! " + ctx.from.first_name + " soy Wall-E")
});

bot.command('w_version', (ctx) => {
    ctx.reply("Actualmente estoy en mi verison 1.0.8 que fue lanzada el 29/Dic/2021 por TecnoProjects Security | @Mr_TechX")
});

bot.command('w_version_logs', (ctx) => {
    ctx.reply("REGISTRO DE MODIFICACIONES: \n\n• Nuevos comandos VIP /w_SoyVip \n• Modificacion de funcionamiento rapido \n• Actualización de las /w_cryptos \n• Mejoras internas a nivel de codigo \n• Nuevo comando /w_edh para ver el grupo privado EDH \n\n• v1.0.8 - 29/Dic/2021")
});

bot.command('w_my_code', (ctx) => {
    ctx.reply("Puedes ver mi codigo fuente en el Github de mi programador, ahi puedes ver mis versiones pasadas y mi version actual en el lado del codigo https://github.com/Mr-TechX/Wall-E_Telegram")
});

bot.command('w_my_developer', (ctx) => {
    ctx.reply("My programador tiene como Nombre MrTechX en casi todos lados, puedes ver sus redes si ejecutas el comando /w_dev_networks")
});

//-----------------[Developer]-----------------
bot.command('w_dev_networks', (ctx) => {
    ctx.reply("Redes Sociales de mi programador: \n\nTwitter - http://bit.ly/twittechX \n\nInstagram - https://bit.ly/ig_techx \n\nDiscord Server - https://bit.ly/3vcdM5j \n\nTelegram - @Mr_TechX \n\nGrupo de Telegram - https://t.me/TechX_Army \n\nGithub - bit.ly/github_techX \n\nTecnoProjects - https://github.com/TecnoProjects \n\nPortafolio - https://bit.ly/UlisesCamacho_portafolio \n\nContacto - beacons.ai/ulisescamacho \n\nWeb de TecnoProjects - ")
});

//-----------------[Diversion]-----------------
bot.command('w_pregunta', (ctx) => {
    let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    ctx.reply(`Mi respuesta es ${random} \n\n(Si no preguntaste nada, /w_pregunta_h)`)
});

bot.command('w_pregunta_h', (ctx) => {
    ctx.reply("Agrega una pregunta que se pueda responder con *Si, No, Tal Vez*, si no es así usa \n/w_pregunta [Tu pregunta] \nEjemplo: \n/w_pregunta aprobaré el examen?")
});

bot.command('w_volado_h', (ctx) => {
    let imgmain = "https://raw.githubusercontent.com/Mr-TechX/Wall-E_Telegram/v1.0.0/img/menu.jpg"
    ctx.replyWithPhoto(imgmain)
});

bot.command('w_volado', (ctx) => {
    let img1 = "https://raw.githubusercontent.com/Mr-TechX/Wall-E_Telegram/v1.0.0/img/cara.png"
    let img2 = "https://raw.githubusercontent.com/Mr-TechX/Wall-E_Telegram/v1.0.0/img/cruz.png"
    let respuesta = [img1, img2]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    ctx.replyWithPhoto(`${random}`)
});

bot.command('w_pescar', (ctx) => {
    let respuesta = ['Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐟', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐠', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐡', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🦀', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🦐', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🦑', 'Felicitaciones, ' + ctx.from.first_name + ' pescaste un: 🐙']
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    ctx.reply(`${random}`)
});

//-----------------[Dross]-----------------
//-----------------[Dross VIPS]-----------------
//tania = "TaniaYepezestrellafugaz"
//aitor = "AitorLinkinPark"
//techX = "Mr_TechX"
//naye = "UnaTalNaye"

//-----------------[Dross cmds]-----------------
// bot.command('dross_cmds', (ctx) => {
//     ctx.reply("*MIS COMANDOS DEL GRUPO SON:* \n\n• /grupos - para obtener los links a nuestros grupos de facebook \n\n• /reglas - Para ver el reglamento del grupo \n\n• /w_hello - Para saludar a todo el grupo")
// });

// bot.command('grupos', (ctx) => {
//     ctx.reply("Si te gusta lo paranormal puedes unirte a nuestros grupos, se que te van a gustar💀 \n\nGrupo Principal de Facebook - https://bit.ly/DrossGrupoPrincipal \n\nGrupo Secundario deFacebook - https://bit.ly/DrossGrupoSecundario")
// });

// bot.command('reglas', (ctx) => {
//         ctx.reply("Este grupo es creado para divertirse, con el fin de salir de la rutina y entretenerse un rato😁 \nREGLAS DEL GRUPO \n\n● Presentarse con foto, nombre, país y edad \n\n● No subir porno \n\n● No faltar al respeto a nadie \n\n● No discriminación \n\n● Prohibido el spam \n\n● En caso de una pelea entre los integrantes del grupo, si no entienden se eliminarán \n\n● Si no se presentan dentro de los 10 min serán eliminados \n\n● Prohibido subir imágenes de cualquier religión. \n\n● Prohibido el gore")

// });

// bot.command('w_hello', (ctx) => {
//     console.log(ctx.form)
//     console.log(ctx.chat)
//     console.log(ctx.message)
//     console.log(ctx.updateSubTypes)
//     ctx.reply("Hola a todos :) Wall-E les manda un saludo a todos ustedes😊")
// });

//-----------------[Util / Extra]-----------------
bot.command('w_chat_muerto', (ctx) => {
    let img1 = "https://raw.githubusercontent.com/Mr-TechX/Wall-E_Telegram/v1.0.0/img/chatm1.jpg"
    let img2 = "https://raw.githubusercontent.com/Mr-TechX/Wall-E_Telegram/v1.0.0/img/chatm2.png"
    let respuesta = [img1, img2]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    ctx.reply("EFECTIVAMENTE CHAT MUERTO")
    ctx.replyWithPhoto(`${random}`)
});

//------------------[Crypto CMDS]-----------------
bot.command('w_precio_bitcoin', (ctx) => {
    ctx.reply("Bitcoin | " + btcvar + " " + fecha)
});

bot.command('w_precio_ethereum', (ctx) => {
    ctx.reply("Ethereum | " + ethvar + " " + fecha)
});

bot.command('w_precio_monero', (ctx) => {
    ctx.reply("Monero | " + xmrvar + " " + fecha)
});

bot.command('w_precio_litecoin', (ctx) => {
    ctx.reply("Litecoin | " + ltcnvar + " " + fecha)
});

bot.command('w_precio_dogecoin', (ctx) => {
    ctx.reply("Dogecoin | " + dogevar + " " + fecha)
});

bot.command('w_cryptos', (ctx) => {
    ctx.reply(fecha + "\n\n" + "Bitcoin | " + btcvar + "\n" + "Ethereum | " + ethvar + "\n" + "Monero | " + xmrvar + "\n" + "Litecoin | " + ltcnvar + "\n" + "Dogecoin | " + dogevar)
});

//-----------------[ VIP ]-----------------
//----------------[VIP USERS]----------------
// var Dani = "1379122676";
// var TechX = "1559770723";
// var Bryan = "1335787282";
// var Julio = "1217556422";
// var Piter = "1594638516";

// var DaniUser = "daniela_ortiz_UwU";
// var TechXUser = "Mr_TechX";
// var BryanUser = "Bryan_ILC";
// var JulioUser = "ElpeinadoJR16";

//----------------[VIP MENU]----------------
bot.command('w_vip', (ctx) => {
    let noVIP = "Mentiroso, tu no eres VIP, no puedes engañar un Bot😎, Bye putito🖕🏻";
    let noVIPconsole = "El usuario " + ctx.from.username + " intento hacerse pasar por un VIP " + "(" + ctx.from.first_name + ")";
        if(ctx.from.username === "daniela_ortiz_UwU" || ctx.from.username === "Bryan_ILC" || ctx.from.username === "ElpeinadoJR16" || ctx.from.username === "Mr_TechX" || ctx.from.id == "1594638516") {
            ctx.reply("LOS COMANDOS VIP SON: \n\n• /w_horario - para ver tu horario de clases :) \n• /w_SoyVip - Inicio de un VIP \n• /w_edh - para recibir el enlace de invitacion al grupo privado de EL DIARIO DE UN HACKER \n• PROXIMAMENTE \n\n• Puedes enviar sugerencias para comandos VIP a @Mr_TechX")
        } 
        else {
            ctx.reply(noVIP)
            console.log(noVIPconsole)
        }
});

//----------------[VIP CMDS]----------------
bot.command('w_horario', (ctx) => {
    let noVIP = "Mentiroso, tu no eres VIP, no puedes engañar un Bot😎, Bye putito🖕🏻";
    let noVIPconsole = "El usuario " + ctx.from.username + " intento hacerse pasar por un VIP " + "(" + ctx.from.first_name + ")";
    let horarioTechX = "https://github.com/Mr-TechX/MrAssistantTelegram/blob/v1.0.0/img/horario5b.png?raw=true";
    let horarioBryan = "https://github.com/Mr-TechX/MrAssistantTelegram/blob/v1.0.0/img/Br_Horario.jpg?raw=true";
    let horarioJulio = "https://github.com/Mr-TechX/MrAssistantTelegram/blob/v1.0.0/img/Julio-horario.jpg?raw=true";
    let msg = "Te doy solo la tabla, por que tus maestros cambian los links a cada rato :)";

        if(ctx.from.username == "Bryan_ILC"){
            ctx.replyWithPhoto(horarioBryan)
            ctx.reply(msg)
            console.log("El horario de Bryan fue entregado a " + ctx.from.username)
        }
        else if(ctx.from.username == "ElpeinadoJR16") {
            ctx.replyWithPhoto(horarioJulio)
            ctx.reply("Toma tu horario " + ctx.from.first_name + " :)")
            console.log("El horario de Julio fue entregado a " + ctx.from.username)
        }
        else if(ctx.from.username == "daniela_ortiz_UwU", "Mr_TechX" || ctx.from.id == "1594638516") {
            ctx.replyWithPhoto(horarioTechX)
            ctx.reply("Aparentemente ya regresaste a presenciales")
            console.log("El horario de TechX fue entregado a " + ctx.from.username)
        }
        else {
            ctx.reply(noVIP)
            console.log(noVIPconsole)
        }
});

bot.command('w_edh', (ctx) => {
    if(ctx.from.username === "daniela_ortiz_UwU" || ctx.from.username === "ElpeinadoJR16" || ctx.from.username === "Mr_TechX" || ctx.from.id == "1594638516") {
        ctx.reply("Holaaa!! " + ctx.from.first_name + " Toma este es el enlace de invitacion de acceso privado a el grupo EL DIARIO DEL HACKER en el que tendrás acceso anticipado a cosas random que salen de la mente de @Mr_TechX \n\n•Recuerda no enviar este link a otra persona ya que los links estan siendo vigilados 24/7 y te podemos sancionar \n\n " + config['edh-link']);
        console.log(`El usuario ${ctx.from.username} recibio el enlace de El Diario de un Hacker (${ctx.from.first_name})`);
    }
    else if(ctx.from.username === "Bryan_ILC"){
            ctx.reply("Te dije que tu no puedes usar esto")
            console.log("Bryan esta de fastidioso pidiendo el link")
        }
        else {
            ctx.reply(noVIP)
            console.log(noVIPconsole)
        }
})

bot.command('w_SoyVip', (ctx) => {
    if(ctx.from.username === "daniela_ortiz_UwU" || ctx.from.username === "Bryan_ILC" || ctx.from.username === "ElpeinadoJR16" || ctx.from.username === "Mr_TechX" || ctx.from.id == "1594638516") {
            ctx.reply("Holii " + ctx.from.first_name + " Eres un usuario VIP, eres mas importante para mi que todos los demás usuarios, tienes comandos que solo los VIP pueden usar, felicidades, me agradas y al parecer a mi programador también, tkm💛, Toma awita :) \n\nUsa /w_vip para ver los comandos VIP");
            console.log("Ahora " + ctx.from.first_name + " Es un usuario VIP");
        }
        else{
            ctx.reply("Mentiroso, tu no eres VIP, no puedes engañar un Bot😎, Bye putito🖕🏻");
            console.log(`El usuario ${ctx.from.username} intento hacerse pasar por un VIP (${ctx.from.first_name})`);
        }
});

//-----------------[Soporte]-----------------
bot.on('text', ctx => {
        if(ctx.chat.type == 'private'){
            ctx.reply('Podrias ejecutar un comando es que aun no se que responder asi🥺 estoy chiquito xd')
}});
    
bot.on('sticker', ctx => {
        if(ctx.chat.type == 'private'){
            ctx.reply('Me encantan los stickers, ya veo que a ti tambien😎')
}});

bot.on('photo', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('Aun no estoy programado para poder ver fotos o imagenes :(')
}});

bot.on('audio', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('Aun no estoy programado para escuchar tus audios, pero en el futuro tal vez si')
}});

bot.on('voice', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('Aun no estoy programado para escuchar audios, pero apuesto que tienes bonita voz :)')
}});

bot.on('video', ctx => {
    if(ctx.chat.type == 'private'){
        ctx.reply('Aun no estoy programado para poder ver videos :( estoy chiquito')
}});


//----------------[Lanzamiento]----------------
bot.launch();
