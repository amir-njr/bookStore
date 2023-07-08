// Atom
import { useAtom } from "jotai";
import { Setting } from "../../../lib/atom";

// Icon
import Close from "../icon/Close";
import Bars from "../icon/Bars";

export default function DashboardHeader() {
  const [aside, setAside] = useAtom(Setting);
  const { asideToggle } = aside;
  return (
    <div className="flex h-20 bg-blue-50 rounded-b-md">
      <div className="basis-4/12 ">
        <div className="w-10 h-10 px-2">
          <span
            onClick={() => setAside({ ...aside, asideToggle: !asideToggle })}
            className={`${
              asideToggle ? "opacity-0" : "opacity-100"
            } transition-all absolute cursor-pointer`}
          >
            <Close />
          </span>

          <span
            onClick={() => setAside({ ...aside, asideToggle: !asideToggle })}
            className={`${
              asideToggle ? "opacity-100" : "opacity-0"
            } transition-all absolute cursor-pointer`}
          >
            <Bars />
          </span>
        </div>
      </div>
      <div className="basis-4/12">پنل کاربری</div>
      <div className="basis-4/12"></div>
    </div>
  );
}
