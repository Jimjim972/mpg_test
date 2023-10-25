"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { connectToCouchbase } = require('./db');
class Service {
    async getUsersLeague(leagueId) {
        try {
            const collection = await connectToCouchbase();
            const result = await collection.get(leagueId);
            const users = [];
            for (const userTeam in result.content.usersTeams) {
                const res = await collection.get(userTeam);
                users.push({ name: res.content.name });
            }
            return users;
        }
        catch (error) {
            console.log('error', error);
            throw error;
        }
    }
    async createLeague(id, name, description, adminId) {
        try {
            const collection = await connectToCouchbase();
            const ojbect = {
                adminId: adminId,
                description: description,
                name: name,
                usersTeams: {},
                type: 'league',
            };
            const result = await collection.insert(id, ojbect);
            return result;
        }
        catch (error) {
            console.log('error', error);
            throw error;
        }
    }
    async updateTeam(id, name) {
        try {
            const collection = await connectToCouchbase();
            let result = await collection.get(id);
            const existingTeam = result.content;
            console.log('existingTeam', existingTeam);
            existingTeam['name'] = name;
            result = await collection.replace(id, existingTeam);
            return result;
        }
        catch (error) {
            console.log('error', error);
            throw error;
        }
    }
}
exports.default = Service;
