exports.commandCalled = function(client, config, message) {

    if(message.toString() === config.infos.prefix + "ping") {
        command(client, config, message);
    } else {
        message.channel.send("Usage correct de la commande : " + config.infos.prefix + "ping");
    }
}

let command = function (client, config, message) {
    message.channel.send("Je vérifie ça tout de suite :)").then((m) => {
        let ping = m.createdTimestamp - message.createdTimestamp;
        let response = config.responses.ping[Math.floor(Math.random() * (config.responses.ping).length)]
        console.log(client.ping)
        console.log(Math.floor(client.ping))
        m.edit(`${response} pour le bot, ${ping}ms, pour l'API, ${Math.floor(client.ping)}`);
    });
}

exports.verify = function (config, message) {
  
    if(message.toString().startsWith(config.infos.prefix + "ping")) {
        return true;
    } 

    return false;

}