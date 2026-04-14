import Link from "next/link";
import MotionTransition from "./transition-component";

import LanguageToggle from "@/components/language-toggle";

const header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10 px-20"
    >
      <header>
        <LanguageToggle />
        <div className="container justify-between max-w-6xl max-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Nicolás
              <span className="ml-2 text-[#F5741c]">
                Santone
              </span>
            </h1>
          </Link>
        </div>
      </header>
    </MotionTransition>
  );
};

export default header;