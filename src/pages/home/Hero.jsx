import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="hero"
      className="wrapper bg-hero bg-cover bg-center bg-no-repeat min-h-[600px] h-screen"
    >
      <div className="flex justify-end pb-[9rem] text-center items-center flex-col h-full w-[90%]">
        <h2 className="bg-heroText animate-textClip bg-[200%_auto] bg-clip-text text-transparent font-semibold font-poppins text-[40px] sm:text-[68px]">
          Anthony Zhang
        </h2>
        <span className="text-base sm:text-xl md:text-2xl font-semibold  text-white font-poppins">
          <Typewriter
            words={[
              `Computer Science, Finance, Mechanical Engineering, & Mathematics at Duke University`,
              "lived in a tent for a month to watch the Duke vs. UNC game",
              "is interested in work opportunities",
              "Co-Founder and CEO of Four Alpha",
              "can't decide on a major",
            ]}
            loop={0}
            cursor
            typeSpeed={50}
            deleteSpeed={10}
            cursorColor="white"
            cursorBlinking
          />
        </span>

        <div className="flex mt-20 justify-center items-center gap-6">
          <a
            href="https://www.linkedin.com/in/anthonyjzhang1/"
            target="blank"
            className="animate-bounce grid place-items-center w-[42px] rounded-full h-[42px] bg-white hover:bg-tertiary transition-all duration-300 group"
          >
            <img
              src="/linkedin-ico.png"
              className="w-5 group-hover:invert transition-all duration-300 object-contain"
              alt=""
            />
          </a>
          <a
            href="https://github.com/anthonyjzhang"
            target="blank"
            className="animate-bounce grid place-items-center w-[42px] rounded-full h-[42px] bg-white hover:bg-tertiary transition-all duration-300 group"
          >
            <img
              src="/git-ico.png"
              className="w-6 group-hover:invert transition-all duration-300 object-contain"
              alt=""
            />
          </a>
          <a
            href="mailto:mailto:anthony.zhang@duke.edu"
            target="blank"
            className="animate-bounce grid place-items-center w-[42px] rounded-full h-[42px] bg-white hover:bg-tertiary transition-all duration-300 group"
          >
            <img
              src="/mail-ico.png"
              className="w-5 group-hover:invert transition-all duration-300 object-contain"
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/_anthonyzhang/"
            target="blank"
            className="animate-bounce grid place-items-center w-[42px] rounded-full h-[42px] bg-white hover:bg-tertiary transition-all duration-300 group"
          >
            <img
              src="/insta-ico.png"
              className="w-6 group-hover:invert transition-all duration-300 object-contain"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
