import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-ghaleb-blue">
      <div className="container mx-auto py-2 flex">
        <ul className="flex gap-5 text-white text-lg basis-6/12">
          <li>
            <Link className="hover:text-orange-400" href="/">
              خانه
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-400" href="/aboutus">
              درباره ما
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-400" href="/contactus">
              ارتباط با ما
            </Link>
          </li>
        </ul>
        <div className="basis-6/12 flex gap-2 justify-end">
          <div className="flex items-center gap-2">
            <span>کتاب ها</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6  bg-gray-200  rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
            </label>
          </div>

          <div className="flex items-center gap-2">
            <span>جزوه ها</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6  bg-gray-200  rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
