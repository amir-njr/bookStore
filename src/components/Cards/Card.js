import Link from "next/link";
import { useAtom } from "jotai";
// Icon
import Dollar from "../icon/Dollar";
// Function
import { basketHandller, checkExistInArray } from "../shared/func/Function";
// Atom Basket Data
import { basketData } from "../../../common/common";

export default function Card({ bookData }) {
	const [basket, setBasket] = useAtom(basketData);
	// console.log("BASKET : ", basket);
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
							id={bookData.id}
							onClick={(ev) => {
								console.log("ev.target", ev.target.id);
								// // basket.selectedItem.map((item) => {

								console.log("ITEM : ", bookData);
								if (basket.selectedItem.length > 0) {
									basket.selectedItem.map((item) => {
										if (+item.id === bookData.id) {
											return;
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

								console.log("BASKET : ", basket);
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
						{/* {console.log(
							"EXIST ARRAY : ",
							checkExistInArray(basket.selectedItem, bookData.id)
						)} */}
						{checkExistInArray(basket.selectedItem, bookData.id) ? (
							<button>salam</button>
						) : (
							""
						)}
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
