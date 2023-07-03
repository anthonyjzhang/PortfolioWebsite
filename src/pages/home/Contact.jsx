const Contact = () => {
  return (
    <section id="contact" className="wrapper mt-[60px] sm:mt-[140px]">
      <div className=" flex w-[90%] max-w-[750px] justify-start items-center flex-col gap-10">
        <h4 className="text-tertiary leading-[1] font-semibold font-poppins text-xl sm:text-2xl -mb-2 uppercase">
          CONTACT
        </h4>

        <h2 className="text-white leading-[1.2] sm:leading-[1] text-[30px]  font-bold text-center">
          AVAILABLE FOR WORK OPPORTUNITIES <br />{" "}
          <span className="text-[#778DA9] text-lg sm:text-2xl leading-[1] italic">
            Seeking Internships for Summer 2024
          </span>
        </h2>
        <p className="text-white text-lg text-center font-medium">
          I am currently looking for roles in software engineering and strategy
          consulting. <br /> However, please feel free to reach out for any
          reason - I’d love to chat.
        </p>
        <a
          href="/AnthonyZhangResume.pdf"
          className="bg-tertiary rounded-md w-full max-w-[330px] grid place-items-center h-[48px] text-white text-sm font-poppins sm:mt-6 font-semibold uppercase"
          target="blank"
        >
          View my resume
        </a>
        <a
          href="/AnthonyZhangResume.pdf"
          download
          className="bg-tertiary rounded-md w-full max-w-[330px] grid place-items-center h-[48px] text-white text-sm font-poppins font-semibold uppercase"
        >
          DOWNLOAD MY RESUME
        </a>
        <div className="flex mt-6 justify-center items-center gap-5">
          <a
            href="https://www.linkedin.com/in/anthonyjzhang1/"
            target="blank"
            className="bg-white rounded-full hover:bg-tertiary group transition-all duration-300 w-[50px] sm:w-[63px] h-[50px] sm:h-[63px] grid place-items-center"
          >
            <img
              src="/linkedin-ico.png"
              className="w-5 object-contain group-hover:invert transition-all duration-300"
              alt=""
            />
          </a>
          <a
            href="https://github.com/anthonyjzhang"
            target="blank"
            className="bg-white rounded-full hover:bg-tertiary group transition-all duration-300 w-[50px] sm:w-[63px] h-[50px] sm:h-[63px] grid place-items-center"
          >
            <img
              src="/git-ico.png"
              className="w-6 sm:w-[36px] object-contain group-hover:invert transition-all duration-300"
              alt=""
            />
          </a>
          <a
            href="mailto:mailto:anthony.zhang@duke.edu"
            target="blank"
            className="bg-white rounded-full hover:bg-tertiary group transition-all duration-300 w-[50px] sm:w-[63px] h-[50px] sm:h-[63px] grid place-items-center"
          >
            <img
              src="/mail-ico.png"
              className="w-6 sm:w-[30px] object-contain group-hover:invert transition-all duration-300"
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/_anthonyzhang/"
            target="blank"
            className="bg-white rounded-full hover:bg-tertiary group transition-all duration-300 w-[50px] sm:w-[63px] h-[50px] sm:h-[63px] grid place-items-center"
          >
            <img
              src="/insta-ico.png"
              className="w-6 sm:w-[36px] object-contain group-hover:invert transition-all duration-300"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
