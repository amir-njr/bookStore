// Link
import Link from "next/link";
// Compenent
import Navbar from "../Navbar/Navbar";
// Atom
import { useAtom } from "jotai";
import { basketData } from "../../../common/common";
// Icon
import Basket from "../icon/Basket";
import Signin from "../icon/Signin";

export default function Header() {
  const [basket] = useAtom(basketData);

  return (
    <div>
      <header className="">
        <div className="container mx-auto flex items-center py-4">
          <div className="basis-4/12">
            <h1 className="text-6xl">شهر کتاب</h1>
          </div>
          <div className="basis-4/12 text-center">
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  className="w-full py-4 px-10 border-2 dir-rtl border-ghaleb-blue rounded-full focus:outline-none focus:bg-slate-200 focus:border-blue-700"
                  placeholder="برای جست و جو اینجا تایپ نمایید ..."
                />
                <button
                  type="submit"
                  className="text-white absolute left-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:outline-none  rounded-full px-5 py-3"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="basis-4/12 justify-end flex gap-5 text-white">
            <div className="relative">
              <span className="h-4 w-4  bg-ghaleb-blue absolute top-3 right-2 flex justify-center items-center rounded-full">
                {basket.counter}
              </span>
              <Link href="/basket" className="flex flex-col items-center gap-2">
                <Basket />

                <span className="text-black">سبد خرید</span>
              </Link>
            </div>

            <div className="">
              <Link href="/login" className="flex flex-col items-center gap-2">
                <Signin />
                <span className="text-black">ورود | ثبت نام</span>
                
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </div>
  );
}
