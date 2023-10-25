import { Collection } from "couchbase";

const { connectToCouchbase} = require('./db');




/**
 * A class representing a service that interacts with a database to manage leagues and teams.
 */
class Service {

    /**
     * Retrieves the users belonging to a given league.
     * @param leagueId The ID of the league to retrieve users for.
     * @returns An array of objects containing the name of each user.
     * @throws An error if there was a problem retrieving the users.
     */
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

    /**
     * Creates a new league with the given parameters.
     * @param id - The ID of the league to be created.
     * @param name - The name of the league to be created.
     * @param description - The description of the league to be created.
     * @param adminId - The ID of the admin user for the league to be created.
     * @returns A Promise that resolves with the result of the insert operation.
     * @throws An error if there was a problem connecting to the database or inserting the league.
     */
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

    /**
     * Updates the name of a team with the given ID.
     * @param id - The ID of the team to update.
     * @param name - The new name for the team.
     * @returns A Promise that resolves with the updated team object.
     * @throws If there was an error updating the team.
     */
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