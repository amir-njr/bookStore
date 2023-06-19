// Atom
import { BasketAtom } from "../../../lib/atom";
import { useAtom } from "jotai";
// Component
import Basket from "./Basket";
export default function Baskets() {
  const [basket] = useAtom(BasketAtom);
  const { selectedItems } = basket;

  console.log("b", selectedItems);

  return (
    <section>
      {
        selectedItems.map(item => <Basket key={item.key} selected={item} />)
      }
      
    </section>
  );
}
