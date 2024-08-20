"use client";

import { Item } from "../types";
import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  const [data, setData] = useState<Item[] | null>(null);
  useEffect(() => {
    fetch("http://localhost:8080/storage")
      .then((res) => res.json())
      .then((data) => setData([...data]));
  }, []);

  return (
    <div className="flex flex-col gap-7 w-full">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data.map((item: Item) => <ItemCard item={item} key={item.id} />)}
      </div>
      <Navbar />
    </div>
  );
}
