// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// AUTHOR : Mr TechX | TecnoProjects
// PROJECT : HackerGirl
// VERSION : 1.0.4
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++


//------- [Codigo para Host Replit] --------
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
let color = 0x44E0D2;

// Presencia del bot
client.on('ready', () => {
    console.log('Sistema Funcionando');
    client.user.setPresence({
        status: "dnd",
        activity: {
            name: "HackerGirl ❤",
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

    if(message.content.startsWith(prefix + 'HakerGirl_on')) {
        message.channel.send('HAckerGirl Activada </>');
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
if(message.content.startsWith(prefix + "cmds")) {
    message.channel.send({embed: {
        color: color,
        description: "mi lista de comandos es: ```say, cmds, status, bot_status, ping, server_status, _gif, banner, petya, esay, impostor, 8ball, buscaminas, pescar```"
    }
    });
}

// comandos respuesta simple
    if(message.content.startsWith(prefix + "ping")) {
        message.channel.send("@everyone Hola a Todos, Soy HackerGirl, Soy pareja de @HackerBot :hearts:");
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
        title: "HackerGirl Status",
        description: "Estado del Bot",
        fields: [{
            name: "El estado actual de HackerGirl",
            value: "HackerGirl Funciona correctamente desde el 19/Ago/2021",
        },
        {
            name: "Numero de comandos funcionando",
            value: "19 Comandos funcionan",
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
            name: "Version de HackerGirl",
            value: "1.0.4"
        },
        {
            name: "Programado con:",
            value: "JavaScript, Node.js, Discord.js"
        },
        {
            name: "Autor de HackerGirl",
            value: "Mr. TechX | TecnoProjects | Ulises Camacho"
        },
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "HackerGirl❤"
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

if(message.content.startsWith(prefix + "bannner")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setTitle("Mi foto de perfil")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setDescription("Quieres ver mi foto de perfil? :flushed:")
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://i.pinimg.com/originals/a5/29/29/a529292bec129e9b50f630904f6e76dc.png')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "_gif")) {
    message.channel.send({embed: {
        color: color,
        description: "```Puedes ejecutar los comandos gif1, gif2, etc. hasta el numero 10 para ver gifs relacionados a HackerGirl```"
    }
    });  
}

if(message.content.startsWith(prefix + "gif1")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/877383697119215706/original.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "gif2")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/877384780361125898/184491.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "gif3")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/877385401571110922/15-1.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "gif4")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/877386338654093432/tumblr_pcjd52FIo31uvw30io7_400.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "gif5")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/877386690891743232/original_1.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "gif6")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/877387130157019177/57243188702ba9dd913e599b5977f7d6.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "gif7")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/877389982925479996/tumblr_pcjd52FIo31uvw30io4_400.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "gif8")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/877390348001894420/184501.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "gif9")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/877390780015210556/184494.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "gif_10")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed() 
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/877391187508621332/tumblr_n3uyjpV1zP1qbmptuo1_500.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "petya")) {
    message.delete()
    const embedDatos = new Discord.MessageEmbed()
        .setTitle("Pestaña binaria de Petya.exe")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setDescription("La pestaña mas temida en el mundo de la informatica, petya ransomware, el ransomware mas peligroso de todos los tiempos")
        .setFooter("HackerGirl❤", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/877387622387949599/petya-ransomware.gif')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
}

if(message.content.startsWith(prefix + "invite")) {
    message.channel.send({embed: {
        color: color,
        description: "Invitame a tu servidor dando [click aqui](https://discord.com/api/oauth2/authorize?client_id=877195146435919902&permissions=8&scope=bot) recuerda que cualquier duda o sugerencia la puedes hacer en mi [servidor de soporte](https://bit.ly/3vcdM5j)"
    }
    });
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
            Title: "Nueva Acutualizacion | Automatización Mejorada, +2 comandos de diversion",
                description: "Hi soy HackerGirl y acabo de ser actualizada",
                    fields: [{
                        name: "v1.0.4",
                        value: "Mejora del funcionamiento automatico con la API de Discord y Discord.js, conoectividad con las HackerNews para notificar lo mas relevante del mundo de la informatica y Hacking",
                    },
                    {
                        name: "Nuevos comandos",
                        value: "2",
                    },
                    {
                        name: "Comandos Actualizados",
                        value: "5",
                    },
                    {
                        name: "Especificación de actualización de comandos",
                        value: "comandos diversion"
                    }
                    ],
                    timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: "HackerGirl❤ | v1.0.4"
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

if(message.content.startsWith(prefix + "8ball")) {
    if (!texto) return message.channel.send("Hazme una pregunta que se pueda responder con **Si/No** ejemplo: ```../8ball algun dia sere moderador?```")
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
          text: "HackerGirl❤ | 8Ball"
        }
      }
});
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
