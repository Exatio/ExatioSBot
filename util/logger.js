var log = {

    logInfo: function (info) { 
        printMessage('INFO', info);
    },

    logWarning: function (warning) { 
        printMessage('WARN', warning);
    },

    logError: function (error) { 
        printMessage('ERR:', error);
    },

    logInfoWithLine: function (info, lineInfo) {
        this.space();
        this.logLineWithText(lineInfo);
        this.space();
        this.logInfo(info);
    },

    logLineWithText: function (message) {
        printMessage('INFO', "-------------------------------------- " + message + " --------------------------------------");
    },

    logLine: function () {
        printMessage('INFO', "--------------------------------------------------------------------------------------");
    },

    space: function () {
        printMessage('INFO', "");
    }

};

function printMessage(prefix, message) {

    date_obj = new Date();
        
    date = ("0" + date_obj.getDate()).slice(-2);
    month = ("0" + (date_obj.getMonth() + 1)).slice(-2);
    year = date_obj.getFullYear();
    hours = date_obj.getHours();
    minutes = date_obj.getMinutes();
    seconds = date_obj.getSeconds();
    milliseconds = date_obj.getMilliseconds();

    if(hours < 10) {
        hours = `0${hours}`;
    }

    if(minutes < 10) {
        minutes = `0${minutes}`;
    }

    if(seconds < 10) {
        seconds = `0${seconds}`;
    }

    if(milliseconds < 100) {

        if(milliseconds < 10) {
            milliseconds = `00${milliseconds}`;
        } else {
            milliseconds = `0${milliseconds}`;
        }

    }

    currentTime = `${date}/${month}/${year} : ${hours}h ${minutes}m ${seconds}s ${milliseconds}ms | `;

    console.log('[' + prefix + '] ' + currentTime + message);
}

module.exports = log;