const logger = require("../util/logger")

exports.eventCalled = async (client, config) => {

    logger.logInfoWithLine("Setting user activity...", "READY EVENT");
    client.user.setActivity(config.infos.prefix + "help | " + config.infos.botCreator);
    logger.logInfo("Activity successfully set !");
    logger.space();
    logger.logLine();
    logger.logInfo("Bot is ready to execute callbacks !");
    

}