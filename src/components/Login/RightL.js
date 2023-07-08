// Atom
import { Setting } from "../../../lib/atom";
import { useAtom } from "jotai";
// Component
import SignIn from "./Signin";
import SignUp from "./Signup";

export default function RightL() {
  

  const [setting] = useAtom(Setting);

  return (
    <div className="bgLogin h-full flex justify-center items-center relative">
      <div
        className={`${
          setting.loginToggle ? "opacity-0" : "opacity-100 z-20"
        } transition-all w-[50%] absolute`}
      >
        <SignIn />
      </div>
      <div
        className={`${
          setting.loginToggle ? "opacity-100 z-20" : "opacity-0"
        } transition-all w-[50%] absolute`}
      >
        <SignUp />
      </div>
    </div>
  );
}
