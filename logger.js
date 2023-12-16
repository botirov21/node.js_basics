

const EvenEmitter = require("events");

class logger extends EvenEmitter{
    log(method, route){
        this.emit("msg", {method, route});
    }
}
module.exports = logger;