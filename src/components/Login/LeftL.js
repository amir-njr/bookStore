// Image
import Image from "next/image";
import loginPhoto from "../../../public/assets/img/login-photo.jpg"
export default function LeftL () {

    return (
        <div className="flex justify-center">
            <Image src={loginPhoto} alt="Login Photo" className="w-[90%] h-full" />
        </div>
    )
}