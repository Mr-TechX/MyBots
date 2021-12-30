// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// AUTHOR : Mr TechX | TecnoProjects
// PROJECT : HackerBot
// VERSION : 1.0.8
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
// console.log("v1.0.8");


//-------------------[Codigo del bot]---------------------------
// Constantes necesarias
const Discord = require("discord.js");
const db = require('megadb');
const client = new Discord.Client();
const config = require("./config/config.json");

// Variables necesarias de inicio
let prefix = config.prefix;
let color = 0x00FE00;
let vip = new db.crearDB('vip');

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
        if (message.author.id !== '829872566088237056') return;
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
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "HackerBot Comandos [prefijo ./]",
        description: "Listado de comandos de HackerBot",
        fields: [{
            name: "say",
            value: "Hacker bot repite lo que escribas despues del comando (Comando vip)",
        },
        {
            name: "cmds",
            value: "Muestra el lsitado de comandos vip y publicos",
        },
        {
            name: "status",
            value: "El estado del servidor del bot",
        },
        {
            name: "ping",
            value: "Menciona a todos los usuarios del servidor (Comando vip)",
        },
        {
            name: "server_status",
            value: "Muestra el estado del servidor discord en el que se ejecute el comando",
        },
        {
            name: "cryptos",
            value: "Muestra la ultima actualizacion de los precios de las cryptomonedas mas conocidas hecha por MrTechX"
        },
        {
            name: "invite",
            value: "HackerBot te da su enlace de invitacion para agregarlo a tu servidor"
        },
        {
            name: "esay",
            value: "HackerBot repite todo lo escrito despues del comando y lo envia en un mensaje embed"
        },
        {
            name: "version",
            value: "HackerBot te muesta la version de codigo que tiene"
        },
        {
            name: "AddVip",
            value: "Agrega usuarios vip para usar los comandos vip de HaackerBot (Comando para CEO)"
        },
        {
            name: "RmVip",
            value: "Elimina un usuario de la lista VIP (Comando para CEO)"
        }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "HackerBot | Comandos"
    }
    }
    });
}

// comandos respuesta simple
if(message.content.startsWith(prefix + "ping")) {
    if (message.author.id !== '829872566088237056') return;
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
        description: "Estado del Bot",
        fields: [{
            name: "El estado actual de HackerBot",
            value: "HackerBot Funciona correctamente desde el 21/jul/2021",
        },
        {
            name: "Numero de comandos funcionando",
            value: "9 Comandos funcionan",
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
            value: "7 Comandos en creación",
        },
        {
            name: "Version de HackerBot",
            value: "1.0.8"
        },
        {
            name: "Programado con:",
            value: "JavaScript, Node.js, Discord.js"
        },
        {
            name: "Autor de HakerBot",
            value: "Mr. TechX | TecnoProjects Security"
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
                value: "47238.10 USD - 971720.78 MXN",
            },
            {
                name: "Ethereum",
                value: "3725.56 USD - 76637.38 MXN",
            },
            {
                name: "Monero",
                value: "213.04 USD - 4382.38 MXN",
            },
            {
                name: "Litecoin",
                value: "148.69 USD - 3058.66 MXN",
            },
            {
                name: "Dogecoin",
                value: "0.17 USD - 3.50 MXN",
        }
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "HackerBot | Actualizacion 29/Dic/2021"
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
            Title: "Nueva Acutualizacion | Cryptos && New commands",
                description: "Saludos soy HackerBot acabo de ser actualizado ```Ejecuta el comando ./cmds para ver el menú de comandos de la ultima actualización```",
                    fields: [{
                        name: "v1.0.8",
                        value: "Actualización de los precios de las criptomonedas, nuevos comandos y mejor funcionalidad",
                    },
                    {
                        name: "Nuevos comandos",
                        value: "comandos VIP, AddVip, RmVip",
                    },
                    {
                        name: "Comandos Actualizados",
                        value: "3",
                    },
                    {
                        name: "Especificación de actualización de comandos",
                        value: "Comandos agragados para uso de administracion de sistemas de los programadores de HackerBot"
                    }
                    ],
                    timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: "HackerBot | v1.0.8"
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
        value: "Actualmente estoy en mi version 1.0.8 que fue lanzada el 29/Dic/2021 por TecnoProjects Security | MrTechX",
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

if(message.content.startsWith(prefix + "AddVip")) {
    var id = ["829872566088237056"]
    if(!id.some(id => message.author.id == id)) return message.channel.send("No tienes acceso a este comando.")
        let user = message.mentions.members.first();
        if(!user) return message.channel.send ("__¡Debes mencionar a un usuario!__")
        if(vip.has(user.id))return message.channel.send("__**Este usuario ya esta registrado.**__")
        vip.establecer(user.id, user.user.tag);
        message.channel.send(
            new discord.MessageEmbed()
            .setDescription("__"+user.user.tag+"__ **ha sido añadido a los usuarios VIP.**")
            .setColor(color)
        )
}

if(message.content.startsWith(prefix + "RmVip")) {
    var id = ["829872566088237056"]
    if(!id.some(id => message.author.id == id)) return message.channel.send("No tienes acceso a este comando.")
    let user = message.mentions.members.first();
    if(message.mentions.users.size < 1 || !user) return message.channel.send("**__Menciona a una persona primero!__**");
    if(!vip.tiene(`${user.id}`)) return message.reply("Ese usuario no esta en la lista.")
    vip.eliminar(`${user.id}`)
        return message.channel.send("<@"+user + ">"+" ha sido eliminado de la lista vip!.");
}

//-------------------------[Plantilla para cmds VIP]-----------------------------
// if(!vip.tiene(message.author.id) return message.channel.send("¡No tienes VIP, no puedes utilizar esta función!") 
// Si el la ID del usuario no está en la DB devuelve un mensaje.

//message.channel.send("¡Funciona!") 
 // Si las condiciones se cumplen devuelve un mensaje.

// ----------------------[Fin de la lista de comandos]---------------------------
});

// Llamado al bot con su TokenSecreto
client.login(config.token);
