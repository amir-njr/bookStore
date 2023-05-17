// Icon
import User from "../icon/User";
// Atom
import { Setting } from "../../../lib/atom";
import { useAtom } from "jotai";
// Component
import SignIn from "./Signin";
import SignUp from "./Signup";

export default function RightL() {
  const [setting, setSetting] = useAtom(Setting);
  return (
    <div className="bgLogin h-full flex justify-center items-center">
      <div className="border w-[50%] bg-white flex flex-col gap-5 items-center p-4 relative">
        <div className="flex flex-col gap-2 items-center">
          <span className=" rounded-full h-20 w-20 bg-blue-300 flex justify-center items-center">
            <User />
          </span>
          <h1>ورود به پنل</h1>
        </div>
        <div className={`${setting.loginToggle ? "opacity-0" : "opacity-100"} absolute transition-all`}>
            <SignUp />
        </div>
        <div className={`${setting.loginToggle ? "opacity-100" : "opacity-0"} absolute transition-all`}>
            <SignIn />
        </div>

      </div>
    </div>
  );
}
