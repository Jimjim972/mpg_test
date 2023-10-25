"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const couchbase = require('couchbase');
const { connectToCouchbase } = require('./db');
const express = require('express');
const { routes } = require('./route');
const bodyParser = require('body-parser');
const port = 3000;
const app = express({ port: port });
const controller = new controller_1.default();
app.use(bodyParser.json());
app.get('/', (req, res) => {
    console.log('Hello World!');
    res.send('Hello World!');
});
app.get('/usersLeague/:id', (req, res) => {
    return controller.getUsersLeague(req, res);
});
app.post('/createLeague', (req, res) => {
    return controller.createLeague(req, res);
});
app.patch('/updateTeam/:id', (req, res) => {
    return controller.updateTeam(req, res);
});
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
