import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.DB_URI!;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let dbConnection: MongoClient;

export async function DatabaseConnect() {
  if (!dbConnection) {
    dbConnection = await client.connect();
  }
  const db = client.db('FeedTheBeasts');
  return { db, client };
};
