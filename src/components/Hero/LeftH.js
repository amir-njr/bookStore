// Image
import Image from "next/image";
import heroPhoto from "../../../public/assets/img/hero-3.jpg";
export default function LeftH() {
  return (
    <div>
        <Image src={heroPhoto} className="h-[600px]" />
    </div>
  );
}
