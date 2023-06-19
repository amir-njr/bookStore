export default function Basket({ selected }) {
  const { title, price, image, id, count , subtitle } = selected;
  const splited = title.split(" ");
  
  return (
    <div>
      <div>
        <img src={image} alt={title}/>

        </div>
      <div></div>
    </div>
  );
}
