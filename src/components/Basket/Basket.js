<<<<<<< HEAD
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
=======
export default function Basket () {
  return (
    <h1>
      Basket
    </h1>
  )
}
>>>>>>> 1255d3163a987d80ce80e47b557612007f6940d8
