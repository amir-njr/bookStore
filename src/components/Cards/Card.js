import Link from "next/link";
// Icon
import Dollar from "../icon/Dollar";
// Common
import { Decrease, Increase, isInArrayObject, sumItems } from "../../../util/common";
// Atom
import { useAtom } from "jotai";
import { BasketAtom } from "../../../lib/atom";

export default function Card({ bookData }) {
  const { title, price, image, id } = bookData;
  const name = title.split(" ");

  const [basket, setBasket] = useAtom(BasketAtom);

  const Add = (card) => {
    setBasket((currentValue) => ({
      selectedItems: [...currentValue.selectedItems, { ...card, count: 1 }],
      totalCount: sumItems(basket.selectedItems)
    }));
  };

  return (
    <div className="border p-2 text-left shadow-xl">
      <div>
        <img src={image} />
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl">{name[0]}</h1>

        <div className="flex justify-between items-center">
          <div>
            {isInArrayObject(basket.selectedItems, id).length === 0 ? (
              <button
                onClick={() => Add(bookData, id)}
                className="rounded-md px-8 py-2  text-white bg-blue-500 hover:bg-blue-600"
              >
                افزودن
              </button>
            ) : (
              <div className="flex">
                <button
                  onClick={() => {
                    setBasket((currentValue) => ({
                      ...currentValue,
                      selectedItems: [...Increase(basket, id)],
                      totalCount: sumItems(basket.selectedItems)
                    }));
                  }}
                  className="rounded-r-md h-10 w-10 font-bold text-white bg-blue-500 hover:bg-blue-600"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    setBasket((currentValue) => ({
                      ...currentValue,
                      selectedItems: [...Decrease(basket, id)],
                      totalCount: sumItems(basket.selectedItems)
                    }));
                  }}
                  className="rounded-l-md border-r h-10 w-10 font-bold text-white bg-blue-500 hover:bg-blue-600"
                >
                  -
                </button>
              </div>
            )}
          </div>

          <span className="border-2 border-lime-300 h-10 px-2 rounded-md flex items-center">
            {price}
            <Dollar />
          </span>
        </div>
        <Link
          className="w-full text-center bg-purple-600 text-white py-2 rounded-md"
          href={`/detail/${id}`}
        >
          دیدن جزئیات
        </Link>
      </div>
    </div>
  );
}
