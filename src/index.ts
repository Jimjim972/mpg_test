import { Collection } from "couchbase";
import {Request, Response } from "express";

import Controller from './controller';
const couchbase = require('couchbase');
const { connectToCouchbase} = require('./db');
const express = require('express');
const { routes } = require('./route');
const bodyParser = require('body-parser');

const port = 3000;
const app = express({port: port});

const controller: Controller = new Controller();
app.use(bodyParser.json());

app.get('/', (req : Request, res : Response) => {
    console.log('Hello World!');
    res.send('Hello World!');
});

app.get('/usersLeague/:id', (req : Request, res : Response) => {
    return controller.getUsersLeague(req, res);
});

app.post('/createLeague', (req : Request, res : Response) => {
   
    return controller.createLeague(req, res);
});

app.patch('/updateTeam/:id', (req : Request, res : Response) => {
    return controller.updateTeam(req, res);
});










app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});







