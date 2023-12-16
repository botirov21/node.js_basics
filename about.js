const EvenEmitter = require("events")

class about extends EvenEmitter{
    log(method, route){
        this.emit("about", {method, route})
    }
}
module.exports = about;