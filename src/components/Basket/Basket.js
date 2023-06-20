import Check from "../icon/Check";
import Dollar from "../icon/Dollar";
import RecycleBin from "../icon/RecycleBin";

export default function Basket({ selected }) {
  const { title, price, image, id, count, subtitle } = selected;
  const splited = title.split(" ");
  console.log(selected);

  return (
    <div className="flex justify-between border-b-2 border-ghaleb-blue">
      <div className="flex items-center">
        <img src={image} alt={title} />
        <div className="flex flex-col gap-10">
          <h1 className="flex gap-2">
            <span>نام کتاب:</span>
            <span className="text-ghaleb-blue">{title}</span>
          </h1>

          <span className="flex items-center gap-2">
            <span className="flex items-center">
              <Dollar />
              قیمت:
            </span>
            <span className="text-lime-500">{price}</span>
          </span>
          <span className="flex items-center gap-2">
            <span>وضعیت:</span> <Check /> موجود
          </span>
          <button className="text-center rounded-md bg-purple-600 text-white px-4 py-2">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <span className="rounded-md text-center leading-10  h-10 w-10 font-bold text-white bg-orange-500">
          {count}
        </span>
      </div>
      <div className="flex items-center">
        <div className="flex">
          <button className="rounded-r-md h-10 w-10 font-bold text-white bg-blue-500 hover:bg-blue-600">
            +
          </button>
          <button className="h-10 w-10 flex justify-center items-center text-white bg-red-500 hover:bg-red-600">
            <RecycleBin />
          </button>
          <button className="rounded-l-md h-10 w-10 font-bold text-white bg-blue-500 hover:bg-blue-600">
            -
          </button>
        </div>
      </div>
    </div>
  );
}
