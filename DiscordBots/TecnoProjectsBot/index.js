// Constantes necesarias
const Discord = require("discord.js");
const config = require("./config.json");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

// Variables necesarias de inicio
let prefix = config.prefix;
let color = 0xFFFFFF;

// Presencia del bot
client.on('ready', () => {
    console.log('Sistema Funcionando');
    client.user.setPresence({
        status: "dnd",
        activity: {
            name: "TechX | TecnoProjects",
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

    if(message.content.startsWith(prefix + 'tp-on')) {
        if (message.author.id !== '829872566088237056') return;
        message.channel.send('Bot oficial de TecnoProjects Activado </>');
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

// ----------------------------[⬆ No tocar ⬆]-----------------------------------
// Comando de menu de comandos
if(message.content.startsWith(prefix + "cmds")) {
    message.channel.send({embed: {
        color: color,
        description: "mi lista de comandos es: ```say (Exclusivo CEO), cmds, status, bot_status, ping (Exclusivo CEO), server_status, servidor, invite (Exclusivo CEO)```"
    }
    });
}

// comandos respuesta simple
    if(message.content.startsWith(prefix + "ping")) {
        if (message.author.id !== '829872566088237056') return;
        message.channel.send("@everyone Saludos, me presento, Soy el Bot oficial de TecnoProjects, Este comando fue ejecutado por que el CEO tiene algo que comunicarles");
    }

// Respuesta de embed simple
if(message.content.startsWith(prefix + "status")) {
    message.channel.send({embed: {
        color: color,
        description: "Servidor funcionando correctamente y Estadisticas de la empresa en orden"
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
        title: "TecnoProjectsBot Status",
        url: "https://github.com/Mr-TechX/TecnoProjectsBot",
        description: "Estado del Bot",
        fields: [{
            name: "El estado actual del Bot oficial de TecnoProjects",
            value: "TecnoProjectsBot Funciona correctamente desde el 09/ago/2021",
        },
        {
            name: "Numero de comandos funcionando",
            value: "7 Comandos funcionan",
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
            value: "2 Comandos en creación",
        },
        {
            name: "Version de HackerBot",
            value: "1.0.2"
        },
        {
            name: "Programado con:",
            value: "JavaScript, Node.js, Discord.js"
        },
        {
            name: "Autor de TecnoProjectsBot",
            value: "Mr. TechX | CEO de TecnoProjects"
        },
    ],
    timestamp: new Date(),
    footer: {
        icon_url: client.user.avatarURL(),
        text: "TecnoProjects | 01101000 01101001"
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

if(message.content.startsWith(prefix + "servidor")){
    message.channel.send({embed: {
        color: color,
        description: "Recuerda que cualquier duda o sugerencia la puedes hacer en mi [servidor de soporte](https://bit.ly/3vcdM5j)"
    }
    })
}

if(message.content.startsWith(prefix + "invite")){
    message.channel.send({embed: {
        color: color,
        description: "Gracias por invitarme a un nuevo servidor, da [CLIK AQUI](https://discord.com/api/oauth2/authorize?client_id=873390196945735681&permissions=8&scope=bot) para confirmar tu invitación"
    }
    })
}
// ----------------------[Fin de la lista de comandos]---------------------------
});

// Llamado al bot con su TokenSecreto
client.login(config.token);
