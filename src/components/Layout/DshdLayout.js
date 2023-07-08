import { Setting } from "../../../lib/atom";
import { useAtom } from "jotai";
// Components
import Aside from "../Dashboard/Aside";
import DashboardHeader from "../Dashboard/DashboardHeader";

export default function DshdLayout({ children }) {
  const [setting] = useAtom(Setting);
  const { asideToggle } = setting;
  return (
      <section className="flex gap-3">
        <div
          className={`${
            asideToggle ? "basis-1/12" : "basis-2/12"
          } transition-all h-[100vh] bg-blue-50 rounded-l-md overflow-hidden`}
        >
          <Aside />
        </div>

        <div
          className={`${
            asideToggle ? "basis-11/12" : "basis-10/12"
          } mx-4 transition-all`}
        >
          <DashboardHeader />
          {children}
        </div>
      </section>

  );
}
