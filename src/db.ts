import { Collection, Cluster, connect } from "couchbase";

// Connect to Couchbase
module.exports= { 
connectToCouchbase :  async() : Promise<Collection> => {
  let cluster: Cluster;
  try {
    cluster = await connect('couchbase://localhost/8091', {
      username: 'admin',
      password: 'monpetitgazon',
    }); 
    const bucket = cluster.bucket('mpg');
    const collection = bucket.defaultCollection();
    return collection;
  } catch (error) {
    console.log('error', error);
    throw error;
  }}
}

    
