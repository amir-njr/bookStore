import LeftL from "./LeftL";
import RightL from "./RightL";

export default function Login () {
    return (
        <section className="flex h-[100vh]">
            <div className="basis-6/12 ">
                <RightL />
            </div>
            <div className="basis-6/12">
                <LeftL />
            </div>

        </section>
    )
}