import EventEmitter from "events";

class Myemitter extends EventEmitter { }
const myemitter = new Myemitter()

//custom event
myemitter.on("waterfull", () => {
    console.log("Water is full , Please turn off Motor.");

    setTimeout(() => {
        console.log("Gentle reminder pPlease turn off Motor.");
    }, 2000)
})

myemitter.emit("waterFull")