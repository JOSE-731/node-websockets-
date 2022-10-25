/**
 * The function enviarTexto() is called when the form is submitted. The event object is passed to the
 * function. The event object is used to prevent the default action of the form submission (which is to
 * reload the page) and to stop the event from propagating to other elements. The event object is also
 * used to get the value of the textarea element
 * @param event - The event object.
 */
function enviarTexto(event) {
    event.preventDefault();
    event.stopPropagation();
    let campo = event.target.texto;

    /* Sending the value of the textarea to the function doSend() */
    doSend(campo.value);

    /* Clearing the textarea. */
    campo.value = "";
}

function init() {
    wsConnect();
}

function wsConnect() {
    /* Creating a new WebSocket object. */
    websocket = new WebSocket("ws://localhost:3000");

    websocket.onopen = function (evt) {
        onOpen(evt);
    }

    websocket.onClose = function (evt) {
        onClose(evt);
    }

    websocket.onmessage = function (evt) {
        onMessage(evt);
    }

    websocket.onerror = function (evt) {
        onerror(evt);
    }

}

function onOpen(evt) {
    document.getElementById("enviar").disabled = false;
    doSend("Saludos del cliente websocket");
}

function onClose(evt){
    document.getElementById("enviar").disabled = true;
    document.getElementById("enviar").innerHTML = "";

    setTimeout(()=>{
        wsConnect();
    }, 2000)
}

function onMessage(env){
    var area = document.getElementById("mensaje");
    area.innerHTML += MediaEncryptedEvent.data + "\n";
}

function onError(evt){
    console.log("Error: " + evt);
}

function doSend(mensaje){
    websocket.send(mensaje);
}

window.addEventListener("load", init, false);