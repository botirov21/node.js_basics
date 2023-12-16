// const EvenEmitter = require("events")

// class Contact extends EvenEmitter{
//     log(method, route){
//         this.emit("contact", {method, route})
//     }
// }
// module.exports=Contact;

const EvenEmitter = require("events");

class Home extends EvenEmitter{
    log(method, route){
        this.emit("contact, ",{method, route})
    }
}
module.exports=Contact;
