import { Collection } from "couchbase";

const { connectToCouchbase} = require('./db');




class Service {

    public async getUsersLeague(leagueId: string) {
        try {
            const collection: Collection = await connectToCouchbase();
            const result = await collection.get(leagueId);
            const users: { name: string }[] = [];
            for (const userTeam in result.content.usersTeams) {
                const res = await collection.get(userTeam);
                users.push({ name: res.content.name });
            }
            return users;
        } catch (error) {
            console.log('error', error);
            throw error;
        }
    }

    public async createLeague(id: string, name: string, description: string, adminId: string) {
        try {
            const collection = await connectToCouchbase();
            const ojbect= {
                adminId : adminId,
                description : description,
                name : name,
                usersTeams : {},
                type : 'league',
            };
            const result = await collection.insert(id, ojbect );
            return result;
        } catch (error) {
            console.log('error', error);
            throw error;
        }
    }

    public async updateTeam(id: string, name: string) {
        try {
            const collection = await connectToCouchbase();
            let result = await collection.get(id);
            const existingTeam = result.content;
            console.log('existingTeam', existingTeam);
            existingTeam['name'] = name;
            result = await collection.replace(id, existingTeam);
            return result;
        } catch (error) {
            console.log('error', error);
            throw error;
        }
    }

}

export default Service;