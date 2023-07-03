import { useEffect, useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  // const [headerBg, setHeaderBg] = useState(false);

  // useEffect(() => {
  //   const bgFunc = () => {
  //     if (window.scrollY > 0) {
  //       setHeaderBg(true);
  //     } else {
  //       setHeaderBg(false);
  //     }
  //   };
  //   window.addEventListener("scroll", bgFunc);
  //   return () => {
  //     window.removeEventListener("scroll", bgFunc);
  //   };
  // }, []);

  return (
    <header className={`absolute w-full py-6 top-0 left-0 z-50 wrapper px-7 `}>
      <div className="flex justify-between items-center w-full">
        <img
          src="/logo.png"
          className="w-14 sm:w-[80px] object-contain"
          alt=""
        />
        <nav
          className={`flex justify-start px-[3rem] pt-[6rem] pb-[3rem] w-full h-full overflow-y-auto sm:p-0 sm:w-auto sm:h-auto sm:overflow-visible transition-all duration-700 bg-body sm:bg-transparent sm:static fixed sm:justify-center z-[101] items-center gap-7 top-0 sm:flex-row flex-col  ${
            headerToggle ? "right-0" : "-right-full"
          }`}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            href="#about"
            className="text-white font-bold text-lg hover:text-secondary transition-all duration-200 md:text-xl uppercase"
          >
            About
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#skills"
            className="text-white font-bold text-lg hover:text-secondary transition-all duration-200 md:text-xl uppercase"
          >
            Skills
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#projects"
            className="text-white font-bold text-lg hover:text-secondary transition-all duration-200 md:text-xl uppercase"
          >
            Portfolio
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#footer"
            className="text-white sm:block hidden font-bold text-lg hover:text-secondary transition-all duration-200 md:text-xl uppercase"
          >
            Contact
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#contact"
            className="text-white sm:hidden block font-bold text-lg hover:text-secondary transition-all duration-200 md:text-xl uppercase"
          >
            Contact
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="/AnthonyZhangResume.pdf"
            target="blank"
            className="text-white font-bold text-lg hover:text-secondary transition-all duration-200 md:text-xl uppercase"
          >
            Resume
          </a>
        </nav>
        <button
          onClick={() => setHeaderToggle((prev) => !prev)}
          className="sm:hidden block text-white relative z-[102]"
        >
          {headerToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
