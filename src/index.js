const express = require("express");
const app = express();
const server = require("http").Server(app);
/*const path = require("path");
const cors = require("cors");

const WebSocketServer = require("websocket").server;*/

app.set("puerto", 3000);
//app.use(cors());
app.use(express.json());
//app.use(express.static(path.join(__dirname+"./public")));
app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
console.log(__dirname)

/*const wsServer = new WebSocketServer({
    httpServer:server,
    autoAcceptConnections:false
});

wsServer.on("request", (request) =>{
    const connection = request.accept(null, request.origin);
    connection.on("message", (message) =>{
        console.log("Mensaje recibido" + message.utf8Data);
        connection.sendUTF("recibido: " + message.utf8Data)
    });
    connection.on("close", (reasonCode, description) => {
        console.log("Todo Ok");
    })
});*/

server.listen(app.get("Puerto"), () =>{
    console.log("Servidor iniciando"+ app.get("puerto"));
});