/**
 * Created by twatson on 7/31/14.
 */
var winston = require("winston");

function log(){
    function logFunction(message){
        winston.info(message);
    }

    logFunction.error = function(message){
        winston.error(message);
    }

    return logFunction;
}

log.$type = "factory";

module.exports = log;