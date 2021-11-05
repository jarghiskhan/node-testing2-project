const express = require('express');
//Doggo urls:
const DoggoRouter = require('./doggos/doggo-router.js');
 
 
const server = express();
 
server.use(express.json());
//Set server to use routers:
server.use('/api/doggos', DoggoRouter);
 
 
module.exports = server;