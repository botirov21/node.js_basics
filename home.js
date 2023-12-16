
const EvenEmitter = require("events");

class Home extends EvenEmitter{
    log(method, route){
        this.emit("home", {method, route});
    }
}
module.exports = Home;
