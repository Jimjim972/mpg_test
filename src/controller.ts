import { Request, Response } from 'express';
import Service from './service';
import { Console } from 'console';

const service = new Service();

class Controller {

    public async getUsersLeague(req: Request, res: Response) {
        try {
            console.log('req.params.id', req.params.id);
            const result = await service.getUsersLeague(req.params.id);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async createLeague(req: Request, res: Response) {
        try {
            await JSON.stringify(req.body);
            const result = await service.createLeague(req.body.id, req.body.name, req.body.description, req.body.adminId);
            res.status(200).send('League created');
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async updateTeam(req: Request, res: Response) {
        try {
            await JSON.stringify(req.body);
            const result = await service.updateTeam(req.params.id, req.body.name);
            res.status(200).send('Team updated');
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default Controller;