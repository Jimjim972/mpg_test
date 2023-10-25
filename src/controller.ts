import { Request, Response } from 'express';
import Service from './service';
import { Console } from 'console';

const service = new Service();

/**
 * Controller class for handling HTTP requests related to leagues and teams.
 */
class Controller {

    /**
     * Retrieves the league of users with the given ID.
     * @param req - The request object.
     * @param res - The response object.
     * @returns A Promise that resolves to the league of users name .
     */
    public async getUsersLeague(req: Request, res: Response) {
        try {
            console.log('req.params.id', req.params.id);
            const result = await service.getUsersLeague(req.params.id);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    /**
     * Creates a new league with the provided information.
     * @param req - The request object containing the league information in the request body.
     * @param res - The response object to send the result or error.
     * @returns A success message if the league was created successfully, or an error message if there was an issue.
     */
    public async createLeague(req: Request, res: Response) {
        try {
            await JSON.stringify(req.body);
            const result = await service.createLeague(req.body.id, req.body.name, req.body.description, req.body.adminId);
            res.status(200).send('League created');
        } catch (error) {
            res.status(500).send(error);
        }
    }

    /**
     * Updates a team with the given ID and name.
     * @param req - The request object.
     * @param res - The response object.
     * @returns A Promise that resolves to void.
     */
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