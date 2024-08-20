import { Plus, Search } from "react-feather";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full px-9 py-5 bg-zinc-800 rounded-t-[24px] shadow-lg shadow-zinc-900 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Search />
        <h3 className="font-bold">Home</h3>
        <Plus />
      </div>
    </div>
  );
}
