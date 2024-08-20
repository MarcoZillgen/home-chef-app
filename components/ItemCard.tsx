import { BarChart2, Plus, ShoppingCart } from "react-feather";
import { Item } from "../types";
import { getDaysLeft } from "../utils";

export default function ItemCard({ item }: { item: Item }) {
  return (
    <div className="bg-zinc-800 p-3 pl-4 flex justify-between items-center rounded-lg w-full">
      <div>
        <h2 className="font-bold">{item.name}</h2>
        <div className="flex gap-4 text-zinc-400">
          <div>
            {item.quantity} {item.unit}
          </div>
          <div>{getDaysLeft(item.expirationDate)}</div>
        </div>
      </div>
      <div className="p-1 gap-4 flex">
        <BarChart2 className="text-blue-400" />
        <ShoppingCart className="text-emerald-400" />
        <Plus className="text-purple-400" />
      </div>
    </div>
  );
}
