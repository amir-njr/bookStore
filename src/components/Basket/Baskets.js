// Atom
import { BasketAtom } from "../../../lib/atom";
import { useAtom } from "jotai";
// Component
import Basket from "./Basket";
import Link from "next/link";

export default function Baskets() {
  const [basket] = useAtom(BasketAtom);
  const { selectedItems } = basket;

  return (
    <section className="flex my-10 gap-10">
      <div className="basis-10/12">
        {selectedItems.map((item) => (
          <Basket key={item.key} selected={item} />
        ))}
      </div>
      <div className="basis-2/12 border-2 flex flex-col justify-center px-1.5 gap-4 border-purple-500 rounded h-60">
        <div className="flex justify-between">
          <span className="text-ghaleb-blue">کل محصولات:</span>
          <span>4</span>
        </div>
        <div className="flex justify-between">
          <span className="text-ghaleb-blue">قیمت کل:</span>
          <span>5000</span>
        </div>
        <div className="flex justify-between">
          <Link className="bg-lime-500 text-white px-3 rounded hover:bg-lime-600" href="">پرداخت</Link>

          <button className="text-red-500">خالی کردن سبد</button>
        </div>
      </div>
    </section>
  );
}
