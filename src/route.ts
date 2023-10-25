import express from 'express';
import { Router } from 'express';
import Controller from './controller';

const router : Router = express.Router();
const controller: Controller = new Controller();

// Routes pour les utilisateurs
router.get('/usersLeague', ()=>{
    console.log('getUsersLeague');
    controller.getUsersLeague
});
router.post('/createLeague', controller.createLeague);
router.patch('/updateTeam', controller.updateTeam);


export default router;
