// Link
import Link from "next/link";
// Atom
import { Setting } from "../../../lib/atom";
import { useAtom } from "jotai";

export default function SignIn() {
  const [setting, setSetting] = useAtom(Setting);

  return (
    <form className="flex flex-col gap-10 shadow-xl w-full p-2 rounded-md">
      <input
        className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
        placeholder="نام کاربری را وارد نمایید..."
        type="text"
        name="text"
      />
      <input
        className="border-r-4 border-r-blue-600 focus:outline-none focus:bg-slate-200 bg-slate-100 p-2"
        placeholder="رمز عبورتان را وارد نمایید..."
        type="password"
        name="password"
      />
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="check"
            id="check"
            className="h-4 w-4 bg-ghaleb-orange"
          />
          <label for="check" className="text-sm">
            مرا بخاطر بسپار!
          </label>
        </div>
        <div>
          <Link href="#" className="text-sm text-blue-600">
            رمزتان را فراموش کرده اید؟
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <Link
          className="bg-lime-500 w-28 text-center rounded-md py-2 hover:bg-lime-600 transition-all"
          href="#"
        >
          ورود
        </Link>
        <button
          onClick={() =>
            setSetting({ ...setting, loginToggle: !setting.loginToggle })
          }
          className="bg-blue-600 w-28 text-center rounded-md py-2 hover:bg-blue-700 transition-all"
        >
          ثبت نام
        </button>
      </div>
    </form>
  );
}