import Link from "next/link";
import Image from "next/image";
// Image
import loginPhoto from "../../../public/assets/img/login-photo.jpg";
// Icon
import Arrow from "../icon/Arrow";
export default function LeftL() {
  return (
    <div className="flex justify-center">
      <Link href="/">
        <div className="fixed left-20 top-20">
          <Arrow />
        </div>
      </Link>
      <Image src={loginPhoto} alt="Login Photo" className="w-[90%] h-full" />
    </div>
  );
}
