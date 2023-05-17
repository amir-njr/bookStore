import LeftH from "./LeftH";
import RightH from "./RightH";

export default function Hero() {
  return (
    <section className="flex items-center container mx-auto">
      <div className="basis-6/12">
        <RightH />
      </div>
      <div className="basis-6/12">
        <LeftH />
      </div>
    </section>
  );
}
