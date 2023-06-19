import Link from "next/link";
// Icon
import Dollar from "../icon/Dollar";
<<<<<<< HEAD
// Common
import { isInArrayObject } from "../../../util/common";
// Atom
import { useAtom } from "jotai";
import { BasketAtom } from "../../../lib/atom";
=======
// Function
import { basketHandller, checkExistInArray } from "../../../common/common";
// Atom Basket Data
import { basketData } from "../../../common/common";
>>>>>>> 1255d3163a987d80ce80e47b557612007f6940d8

export default function Card({ bookData }) {
  const { title, price, image, id } = bookData;
  const name = title.split(" ");

  const [basket, setBasket] = useAtom(BasketAtom);
  console.log("d", basket);

<<<<<<< HEAD
  const Add = (card) => {
    setBasket((currentValue) => ({
      selectedItems: [...currentValue.selectedItems, { ...card, count: 1 }],
    }));
  };
=======
								// console.log("ITEM : ", bookData);
								if (basket.selectedItem.length > 0) {
									basket.selectedItem.map((item) => {
										if (+item.id == bookData.id) {
											let tempitem = item;
											tempitem.count
												? (tempitem.count += 1)
												: (tempitem.count = 2);
											let actualitems = basket.selectedItem.filter(
												(innerItem) => +innerItem.id !== +item.id
											);
											setBasket((prevState) => ({
												...prevState,
												selectedItem: [...actualitems, tempitem],
											}));
											console.log(
												"tempitem : ",
												tempitem,
												"actual items : ",
												actualitems
											);
										} else {
											setBasket((prevState) => ({
												...prevState,
												selectedItem: [...prevState.selectedItem, bookData],
											}));
										}
									});
								} else {
									setBasket((prevState) => ({
										...prevState,
										selectedItem: [...prevState.selectedItem, bookData],
									}));
								}
>>>>>>> 1255d3163a987d80ce80e47b557612007f6940d8

  const Increase = (id) => {
    const newState = basket.selectedItems.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      console.log("count: ", basket.selectedItems[0].count);
      return item;
    });
    setBasket((currentValue) => ({
      ...currentValue,
      selectedItems: [...newState],
    }));
  };

  const Decrease = (id) => {
    let newState = basket.selectedItems.map((item) => {
      if (item.id === id) {
        if (item.count === 1) {
          return null;
        } else {
          return { ...item, count: item.count - 1 };
        }
      }
      return item;
    });
    newState = newState.filter((item) => {
      return item !== null;
    });
    setBasket((currentValue) => ({
      ...currentValue,
      selectedItems: [...newState],
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
                  onClick={() => Increase(id)}
                  className="rounded-r-md h-10 w-10 font-bold text-white bg-blue-500 hover:bg-blue-600"
                >
                  +
                </button>
                <button
                  onClick={() => Decrease(id)}
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
