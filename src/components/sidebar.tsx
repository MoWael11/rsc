import Link from "next/link";

const Sidebar = () => (
  <aside>
    <ul className="h-full p-2 flex flex-col gap-4 bg-zinc-100 w-[200px]">
      <li>
        <Link
          className="inline-block border-b-[1px] p-2 w-full border-b-gray-300 pb-2"
          href={"/dashboard"}
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          className="inline-block border-b-[1px] p-2 w-full border-b-gray-300 pb-2"
          href={"/posts"}
        >
          Posts
        </Link>
      </li>
      <li>
        <Link
          className="inline-block border-b-[1px] p-2 w-full border-b-gray-300 pb-2"
          href={"/users"}
        >
          Users
        </Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
