import React from "react";
import { Restaurant } from "@/types/restaurant";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Navbar } from "@/components/navbar";

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/restaurants');
  const restaurants: Restaurant[] = await res.json();

  return {
    props: {
      restaurants,
    },
    revalidate: 10,
  };
}

interface HomeProps {
  restaurants: Restaurant[];
}

export default function Home({ restaurants }: HomeProps) {
  return (
    <>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {restaurants.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            {/* <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            /> */}
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p>{item.type}</p>
            <p className="text-default-500">{item.description}</p>
          </CardFooter>
        </Card>
      ))}
      </div>
    </>
  );
};