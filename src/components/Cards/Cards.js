import Card from "./Card";

export default function Cards({books}) {
  console.log(books)

  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 my-10">
      {/* {data.map((book) => (
        <Card key={book.id} {...book} />
      ))} */}
    </div>
  );
}
