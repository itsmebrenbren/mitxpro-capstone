import type { NextApiRequest, NextApiResponse } from 'next';
import { DatabaseConnect } from "@/lib/database";

export default async function Restaurants(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await DatabaseConnect();
    const restaurants = await db
      .collection('Restaurants')
      .find({}, { projection: { name: 1, description: 1, _id: 0, type:1 } })
      .toArray();

    res.status(200).json(restaurants);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Unable to fetch data" });
  }
};
