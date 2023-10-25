import { Collection } from "couchbase";
import {Request, Response } from "express";

import Controller from './controller';
const couchbase = require('couchbase');
const { connectToCouchbase} = require('./db');
const express = require('express');
const { routes } = require('./route');
const bodyParser = require('body-parser');

/**
 * The port number on which the server will listen for incoming requests.
 */
const port = 3000;

/**
 * The Express application instance.
 */
const app = express({port: port});

/**
 * The controller instance used to handle incoming requests.
 */
const controller: Controller = new Controller();

// Middleware
app.use(bodyParser.json());



/**
 * The route to get all users in a league.
 * 
 * @param req - The incoming request object.
 * @param res - The outgoing response object.
 */
app.get('/usersLeague/:id', (req : Request, res : Response) => {
    return controller.getUsersLeague(req, res);
});

/**
 * The route to create a new league.
 * 
 * @param req - The incoming request object.
 * @param res - The outgoing response object.
 */
app.post('/createLeague', (req : Request, res : Response) => {
    return controller.createLeague(req, res);
});

/**
 * The route to update a team in a league.
 * 
 * @param req - The incoming request object.
 * @param res - The outgoing response object.
 */
app.patch('/updateTeam/:id', (req : Request, res : Response) => {
    return controller.updateTeam(req, res);
});

// Start the server
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});







