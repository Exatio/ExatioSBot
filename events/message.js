const logger = require("../util/logger");
const filesys = require("fs")
exports.eventCalled = async (client, config, message)  => {

    filesys.readdir("./commands", (error, files) => {

        if(error) {
            return logger.logError(error);
        }


        for(let i = 0 ; i < files.length ; i++) {

            let currentFileName = files[i].split(".")[0];
            let currentFileCommand = require(`../commands/${currentFileName}`);

            if(currentFileCommand.verify(config, message)) {
                currentFileCommand.commandCalled(client, config, message);
            }

        }

    })

        
}

exports.checkCommands = function () {

    filesys.readdir('./commands', (error, files) => {

        if(error) {
            return logger.logError(error);
        }
    
        let commands = [];
        let loadedCommands;
        let numberOfCommands = 0;
    
        let currentFileName;
        let currentCommandName;
    
        let currentFileCommand;
    
        files.forEach((file) => {
    
            currentFileName = file.split(".")[0];
            currentCommandName = currentFileName[0].toUpperCase() + currentFileName.substring(1);
            
            currentFileCommand = require(`../commands/${currentFileName}`);
    
          //  client.on(currentFileName, (...args) =>  currentFileEvent.eventCalled(client, config, ...args));
    
            if(!loadedCommands) {
                loadedCommands = currentCommandName;
            } else {
                loadedCommands += ` | ${currentCommandName}`;
            }
    
            numberOfCommands++;
            commands.push(currentFileName);
        })
    
        logger.logLineWithText("COMMAND INIT");

        if(!commands) { 
            logger.logWarning("[COMMANDS INIT] THERE ISN'T ANY COMMAND !");
        } else {
            logger.logInfo("[COMMANDS INIT] Loaded commands : " + loadedCommands, "COMMAND INIT");
            logger.logInfo("[COMMANDS INIT] Total commands loaded : " + numberOfCommands);
        } 
    
        
    
    });


}