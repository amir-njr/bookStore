// Atom
import { useAtom } from "jotai";
import { Setting } from "../../../lib/atom";
// Link
import Link from "next/link";
// Icons
import Meter from "../icon/Meter";
import Users from "../icon/Users";
import Book from "../icon/Book";
import Profile from "../icon/Profile";
import Logout from "../icon/Logout";

export default function Aside() {
  const [aside] = useAtom(Setting);
  const { asideToggle } = aside;
  return (
    <section className="w-full">
      <div className="h-20 bg-blue-600 flex items-center justify-center">
        <h1 className={`${asideToggle ? "text-2xl" : "text-5xl"} text-white font-bold transition-all`}>شهر کتاب</h1>
      </div>

      <div className="flex flex-col gap-4 mx-1 mt-5">
        <Link
          className={`${
            asideToggle ? "justify-center" : "justify-start"
          } flex gap-2 hover:bg-blue-400 hover:text-white hover:fill-white p-2 rounded w-full transition-all`}
          href="/dashboard"
        >
          <span>
            <Meter />
          </span>
          {asideToggle ? " " : "داشبورد"}
        </Link>

        <Link
          className={`${
            asideToggle ? "justify-center" : "justify-start"
          } flex gap-2 hover:bg-blue-400 hover:text-white p-2 rounded w-full transition-all`}
          href="/dashboard/users"
        >
          <span>
            <Users />
          </span>
          {asideToggle ? " " : "کاربران"}
        </Link>
        <Link
          className={`${
            asideToggle ? "justify-center" : "justify-start"
          } flex gap-2 hover:bg-blue-400 hover:text-white p-2 rounded w-full transition-all`}
          href="/dashboard/posts"
        >
          <span>
            <Book />
          </span>
          {asideToggle ? " " : "ایجاد کتاب"}
        </Link>
        <Link
          className={`${
            asideToggle ? "justify-center" : "justify-start"
          } flex gap-2 hover:bg-blue-400 hover:text-white p-2 rounded w-full transition-all`}
          href="/dashboard/profile"
        >
          <span>
            <Profile />
          </span>
          {asideToggle ? " " : "پروفایل"}
        </Link>

        <Link
          className={`${
            asideToggle ? "justify-center" : "justify-start"
          } flex gap-2 hover:bg-blue-400 hover:text-white p-2 rounded w-full transition-all`}
          href=""
        >
          <span>
            <Logout />
          </span>
          {asideToggle ? " " : "خروج"}
        </Link>
      </div>
    </section>
  );
}
