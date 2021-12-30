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
// PROJECT : Mr. Assistant
// VERSION : 1.2.5
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

//Codigo del bot

//variables necesarias
const Discord = require("discord.js");
const BombSweeper = require("bombsweeper.js");
const client = new Discord.Client();
const config = require("./config/config.json");

//variable del prefijo del bot
let prefix = config.prefix;
let color = 0xA000CC;

//Presencia del bot
client.on('ready', () => {
    console.log('Sistema iniciado');
    client.user.setPresence({
        status: "dnd",
        activity: {
            name: "TechX | Mr. Assistant",
            type: "WATCHING"
        }
    });
});

// Mensaje de consola al iniciar
client.on('ready', () => {
    console.log("MrAssistant Activando")
});

//inicio de bloque de comandos
client.on('message', (message) => {
//Codigo anti bules infinitos
    if (!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;

//Comandos de respuesta simple
    if(message.content.startsWith(prefix + 'hello')) {
        message.channel.send('World');
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let texto = args.join(" ");

    if(message.content.startsWith(prefix + "say")) {
        if (message.author.id !== '829872566088237056') return;
        if(!texto) return message.channel.send(`Error al ingresar texto`);
        message.delete()
        message.channel.send(texto);
    }

    if(message.content.startsWith(prefix + "esay")){
        if (message.author.id !== '829872566088237056') return;
        if(!texto) return message.channel.send(`Error al ingresar texto`);
        message.delete()
        message.channel.send({embed: {
            color: color,
            description: texto,
        }
        });
    }
// ------------------ [No tocar ⬆⬆⬆]-----------------------------
//Comando de menu de comandos
if(message.content.startsWith(prefix + "cmds")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "Comandos del Bot",
        url: "",
        description: "Estos son los comandos actuales del bot y su descripción",
        fields: [{
        name: "cmds",
        value: "Muestra el menu de comandos del bot (uso publico)",
    },
    {
        name: "hello",
        value: "Comando de pruebas del bot (uso publico)",
    },
    {
        name: "say",
        value: "Comando de argumentos (uso privado)",
    },
    {
        name: "esay",
        value: "Comando de argumentos en embed (uso privado)"
    },
    {
        name: "invite",
        value: "Comando de invitacion del bot (uso publico)",
    },
    {
        name: "desarrollo",
        value: "Comando de notificacion de mantenimiento (uso privado)",
    },
    {
        name: "estado",
        value: "Comando de verificacion de funcionamiento (uso publico)",
    },
    {
        name: "bot_telegram",
        value: "Comando que especifica usuario de telegram para que puedes usarlo tambien allá o agregarlo a tus grupos (uso publico)"
    },
    {
        name: "cryptos",
        value: "Muestra la ultima actualización programada de precios de las criptomonedas mas reconocidas (uso publico)",
    },
    {
        name: "ban",
        value: "Comando de alerta para baneo de usuarios (uso privado)",
    },
    {
        name: "bot_status",
        value: "Muestra el estado a detalle del bot (uso publico)",
    },
    {
        name: "server_status",
        value: "Muestra la informacion del servidor en el que se ejecute el comando (uso publico)",
    },
    {
        name: "bot_info",
        value: "Muestra información adicional de MrAssistent y su desarrollador (uso publico)",
    },
    {
        name: "planes_futuros",
        value: "Comano para ver las posibles modificaciones o las cosas que están en desarrollo (uso publico)"
    },
    {
        name: "version",
        value: "Muestra la version actaul del bot y la fecha de su ultima actualización (uso publico)",
    },
    {
        name: "telegram_version",
        value: "Muestra la version actual del bot de telegram (uso publico)",
    },
    {
        name: "telegram_channel",
        value: "Te muestra el link al canal de telegram de MrAssistant, para que puedas enterarte de sus novedades (uso publico)",
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
        value: "Juega al buscaminas (uso publico)",
    },
    {
        name: "pescar",
        value: "Pesca un pez random, no sirve de nada, pero hey, estas pescando online (uso publico)"
    }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "Comandos | Mr.Assistat"
        }
    }
    });
}

//Comandos de respuesta embed simple
    if(message.content.startsWith(prefix + "estado")) {
        message.channel.send({embed: {
            color: color,
            description: "todo en orden por acá"
        }
        });
    }

    if(message.content.startsWith(prefix + "ban")) {
        if (message.author.id !== '829872566088237056') return;
        message.channel.send({embed: {
            color: color,
            description: "Seguro que deseas banear este usuario?"
        }
        });
    }

    if(message.content.startsWith(prefix + "si")) {
        if (message.author.id !== '829872566088237056') return;
        message.channel.send({embed: {
            color: color,
            description: "El usuario será baneado pronto"
        }
        });
    }

    if(message.content.startsWith(prefix + "desarrollo")){
        if (message.author.id !== '829872566088237056') return;
        message.channel.send({embed: {
            color: color,
            description: "seré apagado por motivos de mantenimiento, volvere pronto"
        }
        });
    }

    if(message.content.startsWith(prefix + "invite")){
        message.channel.send({embed: {
			color: color,
            description: "Invitame a tu servidor dando [click aqui](https://bit.ly/Mr_Assistant) recuerda que cualquier duda o sugerencia la puedes hacer en mi [servidor de soporte](https://bit.ly/3vcdM5j)"
        }
        });
    }

    if(message.content.startsWith(prefix + "telegram_channel")){
        message.channel.send({embed: {
            color: color,
            description: "Puedes unirte a mi canal exclusivo en telegram, ahi se mostrarán mis novedades en cada actualización unete dando [click aquí](https://t.me/MrAssistantChannel)"
        }
        });
    }

    if(message.content.startsWith(prefix + "bot_telegram")){
        message.channel.send({embed: {
			color: color,
            description: "Ahora tambien funciono en telegram, puedes enviarme mensaje y/o agregarme a uno de tus grupos, mi nombre de usuario es **@sr_assistant_bot**"
        }
        })
    }

    if(message.content.startsWith(prefix + "version")){
        message.channel.send({embed: {
            color: color,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            Title: "Version de MrAssistant",
            description: "Mis version de codigo de bot",
            fields: [{
            name: "Version",
            value: "Actualmente estoy en mi version 1.2.5 que fue lanzada el 29/Dic/2021 por TecnoProjects | MrTechX",
        },
        {
            name: "Codigo Fuente",
            value: "Puedes ver todas las versiones de mi codigo que mi desarrollador amablemente dejo publico si das [CLICK AQUI](https://github.com/Mr-TechX/MrAssistant)",
        }
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "Mr.Assistant | Version"
            }
        }
        });
    }

    if(message.content.startsWith(prefix + "telegram_version")){
        message.channel.send({embed: {
            color: color,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            Title: "Version de MrAssistant",
            description: "Estos son los precios de las criptomonedas, esta informacion es actualizada con frecuencia por mi programador",
            fields: [{
            name: "Version",
            value: "Actualmente estoy en mi version 1.1.0 que fue lanzada el 29/Dic/2021 por TecnoProjects Security | MrTechX",
        },
        {
            name: "Codigo Fuente",
            value: "Puedes ver todas las versiones de mi codigo de mi version telegram que mi desarrollador amablemente dejo publico si das [CLICK AQUI](https://github.com/Mr-TechX/MrAssistantTelegram)",
        }
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "Mr.Assistant | Telegram Version"
            }
        }
        });
    }

//Comandos de respuesta avanzada embed
    if(message.content.startsWith(prefix + "bot_info")){
        message.channel.send({embed: {
            color: color,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: "Mi codigo fuente",
            url: "https://github.com/Mr-TechX/MrAssistant",
            description: "Mi programador dejo mi codigo fuente libre para que veas como estoy programado y puedas crear tambien tu propio bot, de hecho mi codigo es bastante simple, si quieres una explicacion mas a fondo de como estoy prorgramado, mandale mensaje privado, su usuario de discord es (MrTechX#6832) te dejo tambien unos cuantos datos mas aqui abajo, tiene otros codigos interesantes en Github",
            fields: [{
                name: "Github",
                value: "Mi programador tiene codigos que te pueden interesar en [Github](http://bit.ly/github_techX)"
            },
            {
                name: "Twitter",
                value: "En el [Twitter](http://bit.ly/twittechX) de mi programador puedes encontras cosas relacionadas a hardware, software informatica, programación, hacking, criptografia, criptomonedas, etc."
            },
            {
                name: "Instagram",
                value: "El [Instagram](https://bit.ly/ig_techx) de mi programador esta relacionado a lo mismo que a lo mismo que su Twitter pero con un toque mas relajado, puedes ir a seguirlo :)"
            },
			{
				name: "Discord",
                value: "Unete a el servidor de [Discord](https://bit.ly/3vcdM5j) de mi programador, ahi puedes dar sugerencias para mejorarme o comandos nuevos para un mejor funcionamiento, de paso puedes convivir con mas programadores y mas gente"
			},
            {
                name: "TecnoProjects",
                value: "[TecnoProjects](https://github.com/TecnoProjects) Es una micro empreza de informatica que surge en Github, y se movera al resto del internet, esta basada en la informatica, programación, hacking etico, edicion de video, imagen y audio."
            },
            {
                name: "Mi programador",
                value: "Mi programador tiene como nombre publico en la mayoria de los lados Mr. TechX, se dedica al backend, forntend, inteligencia artificial, desarrollo de bots de discord, desarrollo de escritorio, edicion de audio, video e imagen y hacking GREY HAT"
            }
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "Mr.Assistant"
        }
        }
        });
    }

    if(message.content.startsWith(prefix + "bot_status")) {
        message.channel.send({embed: {
            color: color,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: "MrAssistant Status",
            url: "https://github.com/TecnoProjects",
            description: "Estado del Bot",
            fields: [{
                name: "El estado actual de MrAssistant",
                value: "MrAssistant Funciona correctamente desde el 21/jul/2021",
            },
            {
                name: "Numero de comandos funcionando",
                value: "21 Comandos funcionan",
            },
            {
                name: "Comandos en mantenimiento",
                value: "2 Comandos en mantenimiento",
            },
            {
                name: "Comandos dañados",
                value: "0 Comandos dañados",
            },
            {
                name: "Comandos en creación",
                value: "5 Comandos en creación",
            },
            {
                name: "Version de MrAssistant",
                value: "1.2.5"
            },
            {
                name: "Programado con:",
                value: "JavaScript, Node.js, Discord.js"
            },
            {
                name: "Autor de MrAssistant",
                value: "Mr. TechX | TecnoProjects"
            },
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "Mr.Assistant | TecnoProjects"
        }
        }
        });
    }

    if(message.content.startsWith(prefix + "cryptos")){
        message.channel.send({embed: {
            color: color,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            Title: "Cryptos",
            url: "http://bit.ly/twittechX",
            description: "Estos son los precios de las criptomonedas, esta informacion es actualizada con frecuencia por mi programador **MrTechX** Personalmente",
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
            text: "Mr.Assistant | Actualizacion 29/Dic/2021"
            }
        }
        });
    }

    if(message.content.startsWith(prefix + "planes_futuros")){
        message.channel.send({embed: {
            color: color,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            Title: "Planes Futuros",
            description: "Estas pueden ser mis futuras modificaciónes, o son las modificaciónes que estan en desarrollo",
            fields: [{
                name: "Ya en desarrollo",
                value: "Implementación de imagenes y videos",
            },
            {
                name: "Posibles modificaciónes",
                value: "comandos de diversion, web dashboard.",
            }
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL(),
            text: "Mr.Assistant | Futuros cambios y posibles modificaciónes"
            }
        }
        });
    }

//Comandos extra
if(message.content.startsWith(prefix + "horario")) {
    if (message.author.id !== '829872566088237056') return;
    message.delete()
    const embedDatos = new Discord.MessageEmbed()
        .setTitle("Horario 5B INST del CECyTE")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(color)
        .setDescription("Estás apunto de cambiar de semestre, cuando tenga tu horario te lo actualizo")
        .setFooter("MrAssistant | Tu Horario", client.user.avatarURL())
        .setImage('https://cdn.discordapp.com/attachments/761331648452362320/894949696903184444/horario.jpg')
        .setTimestamp()
    
    message.channel.send({ embed: embedDatos })
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
                Title: "Nueva Acutualizacion | Comandos VIP",
                    description: "Hola soy MrAssistent y acabo de ser actualizado ```Ejecuta el comando m!cmds para ver el menú de comandos de la ultima actualización```",
                        fields: [{
                            name: "v1.2.5",
                            value: "Actualización de links, actualización de los precios de las criptomonedas, aumento de velocidad y funcionamiento, optimizacion de backend, mejora en la velocidad de respuesta, nuevos comandos VIP",
                        },
                        {
                            name: "Nuevos comandos",
                            value: "1",
                        },
                        {
                            name: "Comandos Actualizados",
                            value: "9",
                        },
                        {
                            name: "Especificación de actualización de comandos",
                            value: "Funcionamiento mejorado y comandos VIP Modificados a nivel de BackEnd"
                        }
                        ],
                        timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURL(),
                                text: "Mr.Assistant | v1.2.5"
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
        if (!txt) return message.channel.send("EROR 404 | Debes insertar un mensaje para tu comentario, ejemplo: ```m!phcomment Holaaa```")
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
        if (!texto) return message.channel.send("Hazme una pregunta que se pueda responder con **Si/No** ejemplo: ```m!8ball algun dia sere moderador?```")
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
              text: "Mr.Assistant | 8Ball"
            }
          }
    });
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
//-------------------[Music Commands]---------------------
//-------------------[Fin del codigo]---------------------
});
//Codigo para iniciar el bot
client.login(config.token);
