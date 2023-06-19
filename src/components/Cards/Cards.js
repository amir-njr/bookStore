import { useEffect, useState } from "react";
import Card from "./Card";

export default function Cards() {
	const [data, setData] = useState([]);

	const loadData = async () => {
		const res = await fetch("http://localhost:3000/api/books");
		const data = await res.json();
		return data;
	};

	useEffect(() => {
		loadData().then((res) => {
			setData(res);
		});
	}, []);
	return (
		<div className="container mx-auto grid grid-cols-4 gap-4 my-20">
			{data.map((book) => (
				<Card key={book.id} bookData={book} />
			))}
		</div>
	);
}
