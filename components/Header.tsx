import { ArrowDown, ChevronDown, User } from "react-feather";

export default function Header() {
  return (
    <header
      className={`sticky top-0 left-0 w-full py-5 shadow-zinc-900 z-10 flex justify-between items-center shadow-sm bg-zinc-900`}
    >
      <h1 className="font-bold text-2xl flex gap-2 items-center">
        <ChevronDown className="text-zinc-400" />
        Storage
      </h1>
      <User />
    </header>
  );
}
