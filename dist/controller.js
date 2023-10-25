"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const service = new service_1.default();
class Controller {
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
