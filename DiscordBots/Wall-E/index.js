// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// AUTHOR : Mr TechX | TecnoProjects
// PROJECT : Wall-E
// VERSION : 1.0.4
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Codigo para Host Replit
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

//-------------------[Codigo del bot]---------------------------

// Constantes necesarias
const Discord = require("discord.js");
const BombSweeper = require("bombsweeper.js");
const client = new Discord.Client();
const config = require("./config/config.json");

// Variables necesarias de inicio
let prefix = config.prefix;
var color = 0xfdcf00;

// Presencia del bot
client.on('ready', () => {
    console.log('Sistema Funcionando');
    client.user.setPresence({
        status: "dnd",
        activity: {
            name: "TechX | Wall-E",
            type: "WATCHING"
        }
    });
});

// Mensaje de consola al iniciar
client.on('ready', () => {
    console.log("Holii :)")
});

// Inicio de cadena de mensajes
client.on('message', (message) => {

// Anti bucles infinitos
    if (!message.content.startsWith(prefix)) return; 
    if (message.author.bot) return;
// Comando de pruebas

    if(message.content.startsWith(prefix + 'hi')) {
        message.channel.send('Wall-E Activado :)');
    }

// Comando de repeticion de mensaje

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let texto = args.join(" ");

    if(message.content.startsWith(prefix + "say")) {
        if (message.author.id !== '829872566088237056') return;
        if(!texto) return message.channel.send(`ERROR 404`);
        message.delete()
        message.channel.send(texto);
    }

    if(message.content.startsWith(prefix + "esay")){
        if (message.author.id !== '829872566088237056') return;
        if(!texto) return message.channel.send(`Error 404`);
        message.delete()
        message.channel.send({embed: {
            color: color,
            description: texto,
        }
        });
    }

// ----------------------------[⬆ No tocar ⬆]-----------------------------------
// Comando de menu de comandos
if(message.content.startsWith(prefix + "cmds")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "Comandos del Bot",
        description: "Estos son los comandos actuales del Wall-E y su descripción",
        fields: [{
        name: "cmds",
        value: "Muestra el menu de comandos del bot (uso publico)",
    },
    {
        name: "ping",
        value: "Mencionar a todos los miembros del server (uso VIP)"
    },
    {
        name: "satus",
        value: "Estado acutal del servidor de Wall-E (uso publico)",
    },
    {
        name: "bot_status",
        value: "Estado del bot (uso publico)",
    },
    {
        name: "server_status",
        value: "Estado del servidor en el que se ejecuta el comando (uso publico)",
    },
    {
        name: "banner",
        value: "La foto de perfil de Wall-E (uso publico)",
    },
    {
        nmae: "invite",
        value: "Link de invitacion de Wall-E (uso publico)",
    },
    {
        name: "new_version",
        value: "Notificacion de nueva version del bot en el servidor de soporte (uso VIP)",
    },
    {
        name: "wall-e",
        value: "Presentación de Wall-E (uso publico)",
    },
    {
        name: "8ball",
        value: "Responder tu pregunta con un **Si/No** (uso publico)",
    },
    {
        name: "phcomment",
        value: "Haz que parezca que acabas de hacer un comentario en PornHub (uso publico)",
    },
    {
        name: "buscaminas",
        value: "Juega al buscaminas con Wall-E (uso publico)",
    },
    {
        name: "impostor",
        value: "Averigua si eres el impostor o si alguien mas lo es etiquetandolo en el comando (uso publico)"
    },
    {
        name: "telegram_v",
        value: "Informate sobre que version del bot corre en telegram (uso publico)",
    },
    {
        name: "pescar",
        value: "Pesca un pez random, no sirve de nada, pero hey, estas pescando online (uso publico)"
    }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "Comandos | Wall-E"
        }
    }
    });
}

// comandos respuesta simple
    if(message.content.startsWith(prefix + "ping")) {
        if (message.author.id !== '829872566088237056') return;
        message.channel.send("@everyone");
        message.channel.send({embed: {
            color: color,
            description: "Hola a Todos, Soy Wall-E",
        }
    });
}

// Respuesta de embed simple
if(message.content.startsWith(prefix + "status")) {
    message.channel.send({embed: {
        color: color,
        description: "Todo funcionando correctamente por acá",
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
        title: "Wall-E Status",
        description: "Estado del Bot",
        fields: [{
            name: "El estado actual de Wall-E",
            value: "Wall-E Funciona correctamente desde el 1/Sep/2021",
        },
        {
            name: "Numero de comandos funcionando",
            value: "15 Comandos funcionan",
        },
        {
            name: "Comandos en mantenimiento",
            value: "1 Comandos en mantenimiento",
        },
        {
            name: "Comandos dañados",
            value: "0 Comandos dañados",
        },
        {
            name: "Comandos en creación",
            value: "4 Comandos en creación",
        },
        {
            name: "Version de Wall-E",
            value: "1.0.4"
        },
        {
            name: "Programado con:",
            value: "JavaScript, Node.js, Discord.js"
        },
        {
            name: "Autor de Wall-E",
            value: "Mr. TechX | TecnoProjects | Ulises Camacho"
        },
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "Wall-E"
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
    .setFooter("Wall-E", client.user.avatarURL(), true)
    .setColor(color)
    message.channel.send(embed);

}

if(message.content.startsWith(prefix + "bannner")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setTitle("Mi foto de perfil")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setDescription("Mira, este soy yo :pleading_face:")
        .setFooter("Wall-E", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/882764972743098378/wallep.png')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "wall-e")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed()
        .setTitle("Wall-E")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setDescription("Helloo!! como estas, soy Wall-E")
        .setFooter("Wall-E", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/882764003712061511/1.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "invite")) {
    message.channel.send({embed: {
        color: color,
        description: "Hola!! soy Wall-E, quieres que esté en tu servidor? [click aqui](https://discord.com/api/oauth2/authorize?client_id=882676367320285214&permissions=8&scope=bot) recuerda que cualquier duda o sugerencia la puedes hacer en mi [servidor de soporte](https://bit.ly/3vcdM5j)"
    }
    });
}

if(message.content.startsWith(prefix + "new_version")) {
    const channel = client.channels.cache.get('851282514214387712')
    if (message.author.id !== '829872566088237056') return;
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
            Title: "Nueva Acutualizacion | Comandos de diversion",
                description: "Hi soy Wall-E y me acaban de actualizar",
                    fields: [{
                        name: "v1.0.4",
                        value: "Todos los comandos son nuevos",
                    },
                    {
                        name: "Nuevos comandos",
                        value: "4",
                    },
                    {
                        name: "Comandos Actualizados",
                        value: "5",
                    },
                    {
                        name: "Especificación de actualización de comandos",
                        value: "Nuevo comando de diversion experimento"
                    }
                    ],
                    timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: "Wall-E | v1.0.4"
                        }
        }
        });

}

if(message.content.startsWith(prefix + "impostor")) {
    const mencionado = message.mentions.members.first()    
    let random = [
    "No era el impostor",
    "Era el impostor"
    ]

    if(!mencionado)    
     return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`) 
    message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`)
}

if (message.content.startsWith(prefix + "phcomment")) {
    message.delete()
    let txt = args.join('%20');
    if (!txt) return message.channel.send("EROR 404")
    let autor = message.author;    
    let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png')    
    message.channel.send(attachment)
}

if (message.content.startsWith(prefix + "buscaminas")) {
    const emojis = {
        0: "||:zero:||",
        1: "||:one:||",
        2: "||:two:||",
        3: "||:three:||",
        4: "||:four:||",
        5: "||:five:||",
        6: "||:six:||",
        7: "||:seven:||",
        8: "||:eight:||",
        '*': "||:bomb:||"
    };
    let filas = 10;
    let cols = 10;
    const bombsweeper = new BombSweeper(filas, cols);
    let bombas = 20;
    bombsweeper.PlaceBombs(bombas);
    let tablero = bombsweeper.board;
    for (let j = 0; j<10; j++){
        for (let i = 0; i<10; i++){
         tablero[i][j] = emojis[tablero[i][j]];
        }
       }
    message.channel.send(tablero);
}

if(message.content.startsWith(prefix + "8ball")) {
    if (!texto) return message.channel.send("Hazme una pregunta que se pueda responder con **Si/No** ejemplo: ```w!8ball pasaré mi examen?```")
    let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "8-Ball",
        fields: [{
            name: "Tu Pregunta",
            value: `${args.join(" ")}`,
          },
          {
            name: "Mi respuesta",
            value: `${random}`,
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: "Wall-E"
        }
      }
});
}

if(message.content.startsWith(prefix + "telegram_v")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed()
        .setTitle("Wall-E | Telegram Version")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setDescription("Actualmente Wall-E en telegram funciona con la version 1.0.7 lanzada el 5/Nov/2021")
        .setFooter("Wall-E", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/883014770725376010/v.png')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "pescar")) {
    let respuesta = ['Felicitaciones, **' + message.author.username + '** pescaste un: :tropical_fish:', 'Felicitaciones, **' + message.author.username + '** pescaste un: :fish:', 'Felicitaciones, **' + message.author.username + '** pescaste un: :blowfish:']
        var random = respuesta[Math.floor(Math.random() * respuesta.length)]
        message.channel.send({embed: {
            color: color,
            description: `${random}`,
        }
        });
}
// ----------------------[Fin de la lista de comandos]---------------------------
});

// Llamado al bot con su TokenSecreto
client.login(config.token);
