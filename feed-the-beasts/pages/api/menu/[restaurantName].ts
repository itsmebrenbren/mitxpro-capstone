import type { NextApiRequest, NextApiResponse } from 'next';
import { DatabaseConnect } from "@/lib/database";

export default async function Menu(req: NextApiRequest, res: NextApiResponse) {
  const { restaurantName } = req.query;

  if (!restaurantName) {
    res.status(400).json({ error: "Restaurant name is required" });
    return;
  }

  try {
    const { db } = await DatabaseConnect();
    const menuItems = await db
      .collection('Restaurants')
      .findOne({ name: restaurantName }, { projection: { menu: 1, _id: 0 } });

    if (!menuItems) {
      res.status(404).json({ error: "Restaurant not found" });
      return;
    }

    res.status(200).json(menuItems.menu);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Unable to fetch data" });
  }
};
