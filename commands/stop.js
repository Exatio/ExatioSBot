exports.commandCalled = function(client, config, message) {

    if(message.toString() === config.infos.prefix + "stop") {
        command(client, config, message);
    } else {
        message.channel.send("Usage correct de la commande : " + config.infos.prefix + "stop");
    }
}

let command = function (client, config, message) {
    process.exit(0);
}

exports.verify = function (config, message) {
  
    if(message.toString().startsWith(config.infos.prefix + "stop")) {
        return true;
    } 

    return false;

}