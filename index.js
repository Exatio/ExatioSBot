const Discord = require("discord.js")
const filesys = require("fs")
const logger = require("./util/logger");
const config = require("./config")
const client = new Discord.Client();

logger.logLine();
logger.logInfo("|                               WELCOME TO EXATIO'S BOT                               |")
logger.logLine();

logger.logInfoWithLine("Initializing the bot...", "BOT INIT");

let events = [];

filesys.readdir('./events', (error, files) => {

    logger.logInfoWithLine("Creating callbacks for events...", "EVENT INIT")
    if(error) {
        return logger.logError(error);
    }

    let loadedEvents;

    let currentFileName;
    let currentEventName;

    let currentFileEvent;

    for(let i = 0 ; i < files.length ; i++) {

        currentFileName = files[i].split(".")[0];
        currentEventName = currentFileName[0].toUpperCase() + currentFileName.substring(1);

        events.push(currentFileName);
    
        if(!loadedEvents) {
            loadedEvents = currentEventName;
        } else {
            loadedEvents += ` | ${currentEventName}`;
        }

        client.on(events[i], (...args) => {
            require("./events/" + events[i].split(".")[0]).eventCalled(client, config, ...args);
        });

    }

    if(!events) {
        logger.logWarning("THERE ISN'T ANY EVENT !");
    } else {
        logger.logInfo("Loaded events : " + loadedEvents);
        logger.logInfo("Total events loaded : " + events.length);
    }   

});


logger.logInfoWithLine("Logging in to the bot", "BOT LOGGING");
client.login(config.infos.token);
logger.logInfo("Successfully logged in as " + config.infos.botName + " for the server " + config.infos.serverName);