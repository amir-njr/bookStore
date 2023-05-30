import Link from "next/link";
import { useAtom } from "jotai";
import { Setting } from "../../../lib/atom";
// Icon
import Dollar from "../icon/Dollar";

export default function Card({ bookData }) {
	const [setting, seSetting] = useAtom(Setting);
	console.log(bookData);
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
							onClick={() =>
								seSetting({ ...setting, counter: setting.counter + 1 })
							}
							className="bg-blue-600 p-2 rounded-md text-white"
						>
							سبد خرید
						</button>
					</div>

					<span className="bg-orange-400 p-2 rounded-md flex items-center">{price}<Dollar /></span>
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
