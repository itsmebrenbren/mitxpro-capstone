import type { NextApiRequest, NextApiResponse } from 'next';
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

export const DatabaseConnect = async () => {
  if (!dbConnection) {
    dbConnection = await client.connect();
  }
  const db = client.db('yourDatabaseName');
  return { db, client };
};
