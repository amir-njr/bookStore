import Link from "next/link";

export default function RightH () {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="titr border-b-4 border-b-purple-600 py-2">شهر کتاب</h1>
            <p className="text-xl">خرید امن و تحویل سریع!</p>
            <p>دانشجویان عزیز ، برای تهیه و مطالعه انواع کتاب ها و جزوه های استاد صادق محمد زاده می توانید از این سایت استفاده نمایید.</p>
            <Link className=" bg-ghaleb-blue w-fit py-2 px-5 text-lg text-white rounded-md hover:bg-blue-700 hover:text-white" href="#">بیشتر</Link>
        </div>
    )
}