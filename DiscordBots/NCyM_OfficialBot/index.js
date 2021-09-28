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

// require('dotenv').config()

//-------------------[Codigo del bot]---------------------------

// Constantes necesarias
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// Variables necesarias de inicio
let prefix = config.prefix;
let color = 0xff0000;

// Presencia del bot
client.on('ready', () => {
    console.log('Sistema iniciado');
    client.user.setPresence({
        status: "dnd",
        activity: {
            name: "NCyM en YouTube",
            type: "LISTENING"
        }
    });
});

// Mensaje de consola al iniciar
client.on('ready', () => {
    console.log("NCyM Activado")
});

// Inicio de cadena de mensajes
client.on('message', (message) => {

// Anti bucles infinitos
    if (!message.content.startsWith(prefix)) return; 
    if (message.author.bot) return;
// Comando de pruebas

    if(message.content.startsWith(prefix + 'NCyM')) {
        message.channel.send('Activado');
    }

// Comando de repeticion de mensaje

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let texto = args.join(" ");

    if(message.content.startsWith(prefix + "say")) {
        if(!texto) return message.channel.send(`No has dicho nada`);
        message.delete()
        message.channel.send(texto);
    }

// ----------------------------[⬆ No tocar ⬆]-----------------------------------
// comandos respuesta simple
    if(message.content.startsWith(prefix + "")) {
        message.channel.send("");
    }

// Respuesta de embed simple
if(message.content.startsWith(prefix + "status")) {
    message.channel.send({embed: {
        color: color,
        description: "todo en orden"
    }
    });
}

if(message.content.startsWith(prefix + "comandos")) {
    message.channel.send({embed: {
        color: color,
        description: "mi lista de comandos es: ```say, edm, rock, lofi, all_playlist, minecraft, collabs, channel, networks, new_collab, status, my_developer.``` (por ahora son todos mis comandos :3)"
    }
    });
}

if(message.content.startsWith(prefix + "lofi")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "NCyM Lo-Fi Playlist",
        url: "https://bit.ly/NCyM_LoFi",
        description: "Ahora veo que te gusta la música Lo-Fi, toma la playlist NCyM de Lo-Fi, ojala la disfrutes :)",
        fields: [{
            name: "My NCyM Lo-Fi Playlist",
            value: "Toma mi [Playlist](https://bit.ly/NCyM_LoFi) de lofi, ojala la disfrutes y te suscribas",
        }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "NCyM Bot"
    }
    }
    });
}

if(message.content.startsWith(prefix + "edm")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "NCyM EDM Playlist",
        url:"https://bit.ly/NCyM_edm",
        description: "Hey te gusta la musica EDM, toma la EDM Playlist, ojala la disfrutes y te suscribas",
        fields: [{
            name: "My NCyM EDM Playlist",
            value: "Toma mi [Playlist](https://bit.ly/NCyM_edm) de EDM, ojala la disfutes y la compartas con tus amigos",
        }            
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "NCyM Bot"
    }
    }
    });
}

if (message.content.startsWith(prefix + "rock")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "NCyM Rock Playlist",
        url: "https://bit.ly/NCyM_rock",
        description: "Asi que te gustan los generos pesados eh? toma la Rock Playlist, disfrutala y no olvides suscribirte",
        fields: [{
            name: "My NCyM Rock Playlist",
            value: "Toma mi [Playlist](https://bit.ly/NCyM_rock) de Rock, ojala la disfrutes y la compartas con todos tus amigos :)",
        }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "NCyM Bot"
    }
    } 
    });
}

if (message.content.startsWith(prefix + "minecraft")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "NCyM Minecraft LoFi Playlist",
        url: "https://bit.ly/NCyM_Minecraft",
        description: "woow ¿la Minecraft playlist? disfrutala, tiene algunas canciones con efecto 8D, Suscribete",
        fields: [{
            name: "My NCyM Minecraft LoFi Playlist",
            value: "Toma mi [Playlist](https://bit.ly/NCyM_Minecraft) de Minecraft LoFi, ojala la disfrutes y la compartas con todos tus amigos :)",
        }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "NCyM Bot"
    }
    } 
    });
}

if (message.content.startsWith(prefix + "collabs")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "NCyM Collab playlist",
        url: "https://bit.ly/NCyM_Collabs",
        description: "Asi que quieres escuchar mis colaboraciones ehh? pues te dejo mi playlist, ojala te guste y te suscribas",
        fields: [{
            name: "My NCyM Collabas playlist",
            value: "Toma mi [Playlist](https://bit.ly/NCyM_Collabs) de colaboraciones, ojala la disfrutes y la compartas con todos tus amigos :)",
        }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "NCyM Bot"
    }
    } 
    });
}

if (message.content.startsWith(prefix + "channel")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "NCyM Youtube Channel",
        url: "https://bit.ly/ncym_yt",
        description: "Hey gracias por solicitar el canal, el fundador de NCyM te lo agradece",
        fields: [{
            name: "My Channel NCyM",
            value: "Toma mi [Canal de Youtube](https://bit.ly/ncym_yt), ojala disfrutes la musica, te suscribas y compartas con todos tus amigos :)",
        }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "NCyM Bot"
    }
    } 
    });
}

if(message.content.startsWith(prefix + "all_playlist")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "Todas las NCyM Playlist",
        url: "https://bit.ly/all_ncym_playlist",
        description: "Las mejores NCyM Playlist del canal, disfrutalas :)",
        fields: [{
            name: "NCyM EDM Playlist",
            value: "[NCyM EDM](https://bit.ly/NCyM_edm) Playlist, musica electronica mayormente libre de copyright"
        },
        {
            name: "NCyM Lo-Fi Playlist",
            value: "[NCyM Lo-Fi](https://bit.ly/NCyM_LoFi) Playlist, musica tranquila en genero lofi, mayormente libre de copyright"
        },
        {
            name: "NCyM Rock Playlist",
            value: "[NCyM Rock](https://bit.ly/NCyM_rock) Playlist, musica rock de varios estilos mayotmente libre de copyright"
        },
        {
            name: "NCyM Collab Playlist",
            value: "[NCyM Collab](https://bit.ly/NCyM_Collabs) Playlist, Todas las colaboraciones de NCyM con otros canales"
        },
        {
            name: "NCyM Minecraft Lofi Playlist",
            value: "[NCyM Minecraft Lofi](https://bit.ly/NCyM_Minecraft) Playlist, algunos de los soundtracks de minecraft remix a lofi y modificados, algunos modificados para tener el efecto 8D"
        },
        ],
        timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "NCyM Bot"
    }
    }
    });
}

if(message.content.startsWith(prefix + "networks")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        Title: "NCyM Networks",
        url: "https://bit.ly/all_ncym_playlist",
        description: "Las Redes sociales de NCyM por si gustas apoyar con tu follow :)",
        fields: [{
            name: "Spotify",
            value: "Sigue a NCyM en [Spotify](https://spoti.fi/3nEB6q0) y escucha sus playlist fuera de youtube"
        },
        {
            name: "Instagram",
            value: "Apoya a NCyM con tu follow en [Instagram](https://bit.ly/3gWDKq0), es gratis y ayudarias mucho a darnos a conocer :)"
        },
        {
            name: "SondCloud",
            value: "sigue a NCyM en [SondCloud](https://bit.ly/3ebBlG9) Escucha canciones que no estan en el canal pero a NCyM le parecieron buenas, tal vez te guste y nos ayudarias a crecer"
        },
        {
            name: "Twitter",
            value: "En el [Twitter](https://bit.ly/3eRqiki) de NCyM  puedes tener un contacto mas directo con el y seria de ayuda tu follow"
        },
        {
            name: "Discord Server",
            value: "Puedes unirte a nuestro [Servidor de Discord](http://bit.ly/discord_edm) donde puedes hablar con mas gente que le guste el canal, puedes hacer amigos y pasarla muy bien, aunque haya poca gente, quedate, puede que en el futuro seas uno de los veteranos de un servidor grande :)"
        },
        {
            name: "Facebook Page",
            value: "Sigue nuestra pagina en [Facebook](https://bit.ly/3gWRPU8) y comparte nuestro contenido con tus amigos, nos seria util que nos ayudes con eso"
        },
        {
            name: "Facebook Group",
            value: "Unete a nuesto [Grupo de Facebook]() comparte mas musica para que la gente la escuche, tambien puedes tomar la musica que haya ahi"
        },
        ],
        timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "NCyM Bot"
    }
    }
    });
}

if (message.content.startsWith(prefix + "new_collab")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "Solicitud de Colaboracion con NCyM",
        description: "Hola, quieres colaborar con No Copyright y mas en Youtube?",
        fields: [{
            name: "Colaboración con NCyM en Youtube",
            value: "Si quieres hacer una colaboracion con NCyM envia un correo electronico a nocopyrightymas@gmail.com con el asunto NEW COLLAB, o enviale mensaje directo por twitter, instagram o discord con el mismo texto NEW COLLAB, sus Mensajes directos estan abiertos, recuerda que este comando es serio sera sancionado su mal uso.",
        }
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "NCyM Bot"
    }
    } 
    });
}

if(message.content.startsWith(prefix + "my_developer")){
    message.channel.send({embed: {
        color: color,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "Mi programador",
        url: "https://bit.ly/github_techX",
        description: "Mi programador tiene como nombre publico en la mayoria de las redes Mr. TechX, se dedica al backend, base de datos, administracion, forntend, inteligencia artificial, desarrollo de bots de discord, desarrollo de escritorio, desarrollo web, edicion de audio, video e imagen y hacking GREY HAT... su usuario en discord es 01101000 01101001#6832",
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
            value: "El [Instagram](https://www.instagram.com/mr_tech_x/) de mi programador esta relacionado a lo mismo que a lo mismo que su Twitter pero con un toque mas relajado, puedes ir a seguirlo :)"
        },
        {
            name: "Discord",
            value: "Unete a el servidor de [Discord](https://bit.ly/3vcdM5j) de mi programador, ahi puedes dar sugerencias para mejorarme o comandos nuevos para un mejor funcionamiento, de paso puedes convivir con mas programadores y mas gente"
        },
        {
            name: "TecnoProjects",
            value: "[TecnoProjects](https://github.com/TecnoProjects) Es una micro empreza de informatica que surge en Github, y se movera al resto del internet, esta basada en la informatica, programación, hacking etico, edicion de video, imagen y audio."
        },
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "NCyM Bot"
    }
    }
    });

    
}
// ----------------------[Fin de la lista de comandos]---------------------------
});

// Llamado al bot con su TokenSecreto
client.login(config.token);
