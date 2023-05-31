import Link from "next/link";
import { useAtom } from "jotai";
// Icon
import Dollar from "../icon/Dollar";
// Function
import { basketHandller } from "../shared/func/Function";
// Atom Basket Data
import { basketData } from "../shared/func/Function";

export default function Card({ bookData }) {
  const [basket, setBasket] = useAtom(basketData);
  console.log("BASKET : ", basket);
  const { title, price, image, id } = bookData;
  const name = title.split(" ");

  return (
    <div className="border p-2 text-left shadow-xl">
      <div>
        <img src={image} />
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl">{name[0]}</h1>
        <div className="flex justify-between items-center">
          <div>
            <button
              onClick={() => {
                // console.log("HELLO");
                // // basket.selectedItem.map((item) => {

                console.log("BASKET : ", basket);
                console.log("ITEM : ", bookData);
                setBasket((prevState) => ({
                  ...prevState,
                  selectedItem: [...prevState.selectedItem, bookData],
                }));

                // if (+item.id === id) {
                //   setBasket(...basket, { count: 1 });
                // } else {
                //   setBasket(...basket, selectedItem.push(item));
                // }
                // });
                // basketHandller({ action: { type: "ADD_ITEM", payload: id } })
              }}
              className="bg-blue-600 p-2 rounded-md text-white"
            >
              سبد خرید
            </button>

            {/* {basket.selectedItem.count > 1 ? (
              <button
                onClick={() =>
                  basketHandller({ action: { type: "", payload: id } })
                }
                className="bg-blue-600 p-2 rounded-md text-white"
              >
                +
              </button>
			  &&
			  <button
			  onClick={() =>
				basketHandller({ action: { type: "", payload: id } })
			  }
			  className="bg-blue-600 p-2 rounded-md text-white"
			>
			   -
			</button>

			  
            ) : null}

            {basket.selectedItem.count == 1 ? (
              <button
                onClick={() =>
                  basketHandller({ action: { type: "", payload: id } })
                }
                className="bg-blue-600 p-2 rounded-md text-white"
              >
                trash
              </button>
            ) : null} */}
          </div>

          <span className="bg-orange-400 p-2 rounded-md flex items-center">
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
