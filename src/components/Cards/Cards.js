import bookData from "../shared/bookData/bookData";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 mt-6">
      {bookData.map((book) => (
        <Card key={book.id} {...book} />
      ))}
    </div>
  );
}
