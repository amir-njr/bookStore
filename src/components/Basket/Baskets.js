// Atom
import { BasketAtom } from "../../../lib/atom";
import { useAtom } from "jotai";
// Component
import Basket from "./Basket";
// Link
import Link from "next/link";

export default function Baskets() {
  const [basket] = useAtom(BasketAtom);
  const { selectedItems } = basket;

  return (
    <section className="flex my-10 gap-10">
      <div className="basis-2/12 border-2 fixed left-9 flex flex-col justify-center px-2.5 gap-8 border-purple-500 rounded h-[350px] w-[200px]">
        <div className="flex justify-between">
          <span className="text-ghaleb-blue">کل محصولات:</span>
          <span>
            {basket.totalCount}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-ghaleb-blue">قیمت کل:</span>
          <span>5000</span>
        </div>
        <div className="flex justify-between">
          <Link
            className="bg-lime-500 text-white px-3 py-2 rounded w-full text-center hover:bg-lime-600"
            href=""
          >
            پرداخت
          </Link>
        </div>
        <button className="text-red-500 border px-3 py-2 rounded border-red-500 hover:bg-red-500 hover:text-white">
          خالی کردن سبد
        </button>
      </div>
      <div className="basis-10/12">
        {selectedItems.map((item) => (
          <Basket key={item.key} selected={item} />
        ))}
      </div>
    </section>
  );
}
