
//Logger
const Logger = require("./logger")

const logger = new Logger();

logger.on("msg", (data)=>{
    console.log("loogger: ", data);
});
 
logger.log("POST", ".admin/signIn")

//Home
const Home = require("./home");

const home = Home();

home.on("home",(data)=>{
    console.log("home: ", data)
});

home.log("Home content", "./home")

//About
const About = require("./about");

const about = new About();

about.on("about", (data)=>{
    console.log("about: ", data)
})
about.log("About page", "./about")

//Contact
const Contact = require("./contact");

const contact = new Contact();

contact.on("contact", (data)=>{
    console.log("contact: ", data)
})
contact.log("Contact page", "./contact");