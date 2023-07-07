// Hook
import { useState } from "react";
import { useRouter } from "next/router";

// Model
import User from "../icon/User";
// Atom
import { Setting } from "../../../lib/atom";
import { useAtom } from "jotai";
// Icon

export default function SignUp() {
  const router = useRouter();
  const [setting, setSetting] = useAtom(Setting);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    nationalCode: "",
    phone: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const postHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    console.log(json)
    if (json.status === "Success") {
      // router.reload();
    }
  };
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-md bg-white">
      <div className="flex flex-col justify-center items-center">
        <span className="rounded-full h-20 w-20 bg-blue-300">
          <User />
        </span>
        <h1 className="text-xl">ثبت نام</h1>
      </div>
      <form className="flex flex-col gap-5 w-full rounded-md">
        <input
          value={user.name}
          onChange={changeHandler}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
          placeholder="نام تان را وارد نمایید ..."
          type="text"
          name="name"
        />
        <input
          value={user.lastName}
          onChange={changeHandler}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
          placeholder="نام خانوادگی تان را وارد نمایید ..."
          type="text"
          name="lastName"
        />

        <input
          value={user.nationalCode}
          onChange={changeHandler}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
          placeholder="  کد ملی تان را وارد نمایید..."
          type="number"
          name="nationalCode"
        />
        <input
          value={user.phone}
          onChange={changeHandler}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
          placeholder=" شماره تلفن تان را وارد نمایید..."
          type="text"
          name="phone"
        />
        <input
          value={user.email}
          onChange={changeHandler}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
          placeholder="ایمیل تان را وارد نمایید..."
          type="email"
          name="email"
        />
        <input
          value={user.password}
          onChange={changeHandler}
          className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
          placeholder="رمز عبورتان را وارد نمایید..."
          type="password"
          name="password"
        />

        <div className="flex justify-between">
          <button
            onClick={postHandler}
            className="bg-lime-500 w-28 text-center rounded-md py-2 hover:bg-lime-600 transition-all"
            href="#"
          >
            ارسال
          </button>
          <span
            onClick={() =>
              setSetting({ ...setting, loginToggle: !setting.loginToggle })
            }
            className="bg-blue-600 w-28 text-center rounded-md py-2 hover:bg-blue-700 transition-all cursor-pointer"
          >
            ورود
          </span>
        </div>
      </form>
    </div>
  );
}
