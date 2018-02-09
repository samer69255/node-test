var socket = io();

socket.on('set',function (html) {
    document.body.innerHTML = html;
});