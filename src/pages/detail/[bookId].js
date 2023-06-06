import Image from "next/image";
import { useState } from "react";
// Layout
import HadrLayout from "@/components/Layout/HadrLayout";
import Dollar from "@/components/icon/Dollar";
import Check from "@/components/icon/Check";
import Arrow from "@/components/icon/Arrow";
import Link from "next/link";

export default function detail({ findItem }) {
	const [toggle, setToggle] = useState(false);
	const { image, title, price, subtitle } = findItem;
	const splited = title.split(" ");

	return (
		<HadrLayout>
			<div className="my-10">
				<div className="flex justify-between items-center">
					<h1 className="titr border-b-4 border-b-purple-600 py-2 my-4">
						صفحه جزئیات
					</h1>
					<Link href={"/"}>
						<Arrow />
					</Link>
				</div>
				<div className="flex gap-4">
					<div>
						<Image
							className="border rounded-md"
							width={350}
							height={350}
							src={image}
							alt={splited[0]}
						/>
					</div>
					<div className="flex flex-col gap-10 justify-center">
						<h1 className="flex gap-2">
							<span>نام کتاب:</span> {title}
						</h1>

						<span className="flex items-center gap-2">
							<span className="flex items-center">
								<Dollar />
								قیمت:
							</span>
							{price}
						</span>
						<span className="flex items-center gap-2">
							<span>وضعیت:</span> <Check /> موجود
						</span>
						<button className="text-center rounded-md bg-purple-600 text-white px-4 py-2">
							افزودن به سبد خرید
						</button>
					</div>
				</div>
				<div className="w-full bg-ghaleb-blue rounded-md my-10 flex justify-center gap-4">
					<button
						onClick={() => setToggle(false)}
						className={`${
							toggle
								? "py-4 px-6 text-white"
								: "py-4 px-6 text-black bg-gray-100"
						} `}
					>
						درباره محصول
					</button>
					<button
						onClick={() => setToggle(true)}
						className={`${
							toggle
								? "py-4 px-6 text-black bg-gray-100"
								: "py-4 px-6 text-white"
						} `}
					>
						مشخصات فنی
					</button>
				</div>
				<div>{toggle ? <div>مشخصات</div> : <div>{subtitle}</div>}</div>
			</div>
		</HadrLayout>
	);
}

export async function getServerSideProps(context) {
	const {
		params: { bookId },
	} = context;
	const res = await fetch(`http://localhost:3000/api/books`);
	const data = await res.json();
	const findItem = data.find((item) => +item.id === +bookId);

	return {
		props: { findItem },
	};
}
