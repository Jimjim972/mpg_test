"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const service = new service_1.default();
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
    async getUsersLeague(req, res) {
        try {
            console.log('req.params.id', req.params.id);
            const result = await service.getUsersLeague(req.params.id);
            res.status(200).send(result);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    /**
     * Creates a new league with the provided information.
     * @param req - The request object containing the league information in the request body.
     * @param res - The response object to send the result or error.
     * @returns A success message if the league was created successfully, or an error message if there was an issue.
     */
    async createLeague(req, res) {
        try {
            await JSON.stringify(req.body);
            const result = await service.createLeague(req.body.id, req.body.name, req.body.description, req.body.adminId);
            res.status(200).send('League created');
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    /**
     * Updates a team with the given ID and name.
     * @param req - The request object.
     * @param res - The response object.
     * @returns A Promise that resolves to void.
     */
    async updateTeam(req, res) {
        try {
            await JSON.stringify(req.body);
            const result = await service.updateTeam(req.params.id, req.body.name);
            res.status(200).send('Team updated');
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
}
exports.default = Controller;
