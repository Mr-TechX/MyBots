// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// AUTHOR : Mr TechX | TecnoProjects
// PROJECT : HackerBot
// VERSION : 1.0.7
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ----------------------- [Replit] ---------------------------
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
// console.log("v1.0.7");


//-------------------[Codigo del bot]---------------------------
// Constantes necesarias
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config/config.json");

// Variables necesarias de inicio
let prefix = config.prefix;
let color = 0x00FE00;

// Presencia del bot
client.on('ready', () => {
    console.log('Sistema Funcionando');
    client.user.setPresence({
        status: "dnd",
        activity: {
            name: "TechX | HackerBot",
            type: "WATCHING"
        }
    });
});

// Mensaje de consola al iniciar
client.on('ready', () => {
    console.log("Sistema iniciado")
});

// Inicio de cadena de mensajes
client.on('message', (message) => {

// Anti bucles infinitos
    if (!message.content.startsWith(prefix)) return; 
    if (message.author.bot) return;
// Comando de pruebas

    if(message.content.startsWith(prefix + 'Hakerbot')) {
        message.channel.send('HAckerBot Activado </>');
    }

// Comando de repeticion de mensaje

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let texto = args.join(" ");

    if(message.content.startsWith(prefix + "say")) {
        if(!texto) return message.channel.send(`ERROR 101101`);
        message.delete()
        message.channel.send(texto);
    }
    
    if(message.content.startsWith(prefix + "esay")){
        if (message.author.id !== '829872566088237056') return;
        if(!texto) return message.channel.send(`ERROR 101101`);
        message.delete()
        message.channel.send({embed: {
            color: color,
            description: texto,
        }
        });
    }

// ----------------------------[⬆ No tocar ⬆]-----------------------------------
// Comando de menu de comandos
if(message.content.startsWith(prefix + "cmds")) {
    message.channel.send({embed: {
        color: color,
        description: "mi lista de comandos es: ```say, cmds, status, bot_status, ping, server_status, cryptos, invite, esay, version```"
    }
    });
}

// comandos respuesta simple
    if(message.content.startsWith(prefix + "ping")) {
        message.channel.send("@everyone Hola a Todos, Soy HackerBot :sunglasses:");
    }

// Respuesta de embed simple
if(message.content.startsWith(prefix + "status")) {
    message.channel.send({embed: {
        color: color,
        description: "Todo funcionando correctamente"
    }
    });
    
}

// Respuesta de embed avanzado
if(message.content.startsWith(prefix + "bot_status")) {
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "HackerBot Status",
        url: "#",
        description: "Estado del Bot",
        fields: [{
            name: "El estado actual de HackerBot",
            value: "HackerBot Funciona correctamente desde el 21/jul/2021",
        },
        {
            name: "Numero de comandos funcionando",
            value: "8 Comandos funcionan",
        },
        {
            name: "Comandos en mantenimiento",
            value: "0 Comandos en mantenimiento",
        },
        {
            name: "Comandos dañados",
            value: "0 Comandos dañados",
        },
        {
            name: "Comandos en creación",
            value: "0 Comandos en creación",
        },
        {
            name: "Version de HackerBot",
            value: "1.0.7"
        },
        {
            name: "Programado con:",
            value: "JavaScript, Node.js, Discord.js"
        },
        {
            name: "Autor de HakerBot",
            value: "Mr. TechX | TecnoProjects"
        },
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "HackerBot | 01101000 01101001"
    }
    }
    });
}

if(message.content.startsWith(prefix + "server_status")) {
    var server = message.guild;
    const embed = new Discord.MessageEmbed()
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL())
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.tag, true)
    .addField('Miembros', server.memberCount, true)
    .setColor(color)
    message.channel.send(embed);

}

if(message.content.startsWith(prefix + "cryptos")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "Precios de las Ciptomonedas",
        url: "http://bit.ly/twittechX",
        description: "Estos son los precios de las criptomonedas mas conocidas, esta informacion es actualizada con frecuencia por **Mr. TechX** personalmente",
        fields: [{
            name: "Bitcoin",
                value: "61109.80 USD - 1243046.66 MXN",
            },
            {
                name: "Ethereum",
                value: "4474.45 USD - 91015.68 MXN",
            },
            {
                name: "Monero",
                value: "258.5 USD - 5258.20 MXN",
            },
            {
                name: "Litecoin",
                value: "198.32 USD - 4034.07 MXN",
            },
            {
                name: "Dogecoin",
                value: "0.26 USD - 5.29 MXN",
        }
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "HackerBot | Actualizacion 05/Nov/2021"
        }
    }
    });
}

if(message.content.startsWith(prefix + "invite")){
    message.channel.send({embed: {
        color: color,
        description: "Invitame a tu servidor dando [click aqui](https://bit.ly/HackerBot_TechX) recuerda que cualquier duda o sugerencia la puedes hacer en mi [servidor de soporte](https://bit.ly/3vcdM5j)"
    }
    })
}

if(message.content.startsWith(prefix + "new_version")) {
    if (message.author.id !== '829872566088237056') return;
    message.channel.send({embed: {
        color: color,
        description: "Notificacion de actualizacion enviada al servidor **TechX Army | Oficial**",
    }
    });
    const channel = client.channels.cache.get('851282514214387712')
    if(!channel) return;
    if(channel.type !== 'text') return;
    if(!channel.permissionsFor(client.user.id).has('SEND_MESSSAGES')) return;
        channel.send('@everyone');
        channel.send({embed: {
            color: color,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            Title: "Nueva Acutualizacion | Cryptos",
                description: "Saludos soy el HackerBot acabo de ser actualizado ```Ejecuta el comando ./cmds para ver el menú de comandos de la ultima actualización```",
                    fields: [{
                        name: "v1.0.7",
                        value: "Actualización de los precios de las criptomonedas y mejor funcionalidad",
                    },
                    {
                        name: "Nuevos comandos",
                        value: "comandos VIP",
                    },
                    {
                        name: "Comandos Actualizados",
                        value: "5",
                    },
                    {
                        name: "Especificación de actualización de comandos",
                        value: "Comandos agragados para uso de administracion de sistemas de los programadores de HackerBot"
                    }
                    ],
                    timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: "HackerBot | v1.0.7"
                        }
        }
        });

}

if(message.content.startsWith(prefix + "version")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "Version de HackerBot",
        description: "Mis version de codigo de bot",
        fields: [{
        name: "Version",
        value: "Actualmente estoy en mi version 1.0.7 que fue lanzada el 05/Oct/2021 por TecnoProjects | MrTechX",
    }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "HackerBot | Version"
        }
    }
    });
}

// ----------------------[Fin de la lista de comandos]---------------------------
});

// Llamado al bot con su TokenSecreto
client.login(config.token);
