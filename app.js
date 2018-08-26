var express  = require('express');
var passport = require('passport');
var http     = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain');
    res.end('Hello Modal Connect\n');
});

server.listen(port, hostname, function() {
    console.log('Server running at https://' + hostname + ':' + port + '/');
});

function main() {

}

function autenticaUsuario() {

}

function iniciaSessao() {

}
