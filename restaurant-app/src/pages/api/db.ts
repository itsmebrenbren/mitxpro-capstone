// pages/api/db.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://itsmebrenbren:ScubaGuppy2024@restaurantapp.8xpe7rh.mongodb.net/?retryWrites=true&w=majority&appName=RestaurantApp";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await client.connect();
    const ping = await client.db("admin").command({ ping: 1 });
    res.status(200).json({ msg: "Successfully connected to MongoDB", ping });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to connect to MongoDB", error });
  } finally {
    await client.close();
  }
}
