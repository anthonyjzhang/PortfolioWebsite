const Footer = () => {
  return (
    <footer id="footer" className="wrapper bg-[#292C36] py-5 mt-20">
      <div className="w-full sm:flex-row flex-col px-7 flex justify-start items-center gap-7 sm:gap-10">
        <a href="#hero">
          <img
            src="/logo.png"
            className="w-[80px]  sm:w-[120px] object-contain"
            alt=""
          />
        </a>
        <div className="flex justify-start items-center text-center sm:text-left sm:items-start flex-col gap-3">
          <p className="flex justify-start items-center gap-2 text-white text-[15px] font-light">
            <img src="/location.png" className="w-4 object-contain" alt="" />{" "}
            United States
          </p>
          <p className="flex justify-start items-center gap-2 text-white text-[15px] font-light">
            <img src="/language.png" className="w-4 object-contain" alt="" />{" "}
            English (United States)
          </p>
          <p className=" text-white text-[15px] font-light">
            {" "}
            © &#160; 2023 Anthony Zhang. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
