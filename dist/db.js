"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const couchbase_1 = require("couchbase");
// Connect to Couchbase
module.exports = {
    /**
   * Connects to Couchbase and returns a Promise of Collection.
   * @returns {Promise<Collection>} A Promise of Collection.
   */
    connectToCouchbase: async () => {
        let cluster;
        try {
            cluster = await (0, couchbase_1.connect)('couchbase://localhost/8091', {
                username: 'admin',
                password: 'monpetitgazon',
            });
            const bucket = cluster.bucket('mpg');
            const collection = bucket.defaultCollection();
            return collection;
        }
        catch (error) {
            console.log('error', error);
            throw error;
        }
    }
};
