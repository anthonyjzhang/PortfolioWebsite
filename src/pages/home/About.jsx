import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about" className="wrapper mt-[60px] sm:mt-[100px]">
      <div className=" flex w-[90%] max-w-[1430px] justify-start items-center flex-col gap-10">
        <div className="xl:flex-row flex-col w-full flex justify-evenly items-center xl:text-left text-center xl:items-end gap-7 sm:gap-10">
          <div className="flex justify-start max-w-[570px] items-center xl:items-start flex-col gap-6">
            <h4 className="text-tertiary leading-[1] font-semibold font-poppins text-xl sm:text-2xl -mb-2 uppercase">
              About me
            </h4>
            <h2 className="text-white -mb-2 leading-[1] text-[32px] sm:text-[36px] font-poppins font-semibold">
              Hi, I’m Anthony <br />
              <span className="text-[#778DA9] leading-[1] inline-block relative -top-3 italic text-sm">
                Software Developer, Founder, Engineer
              </span>
            </h2>
            <p className="text-white text-base sm:text-[22px]">
              I’m a rising junior at{" "}
              <span className="text-secondary font-bold">Duke University</span>{" "}
              studying Computer Science, Mechanical Engineering, and
              Mathematics. Above all, I hope to make a{" "}
              <span className="text-secondary font-bold">tangible impact</span>{" "}
              through my work.{" "}
            </p>
            <p className="text-white text-base sm:text-[22px]">
              I am a{" "}
              <span className="text-secondary font-bold">
                creative problem solver
              </span>
              ,
              <span className="text-secondary font-bold">
                {" "}
                ambitious entrepreneur
              </span>
              , and a{" "}
              <span className="text-secondary font-bold">lifelong learner</span>
              . In my free time, you’ll find me thrifting streetwear, editing
              film, backpacking, or at the poker table.
            </p>
            <p className="text-white text-base sm:text-[22px]">
              I’m always looking for opportunities to collaborate with
              companies, researchers, or like-minded peers.{" "}
              <span className="text-secondary font-bold">Let’s innovate. </span>
            </p>
          </div>
          <div className="relative isolate sm:pr-5 sm:min-w-[480px]">
            <img
              src="/anthony.png"
              className="w-full object-contain max-w-[480px] rounded-tl-[24px] rounded-br-[12px]"
              alt=""
            />
            <div className="border-2 border-solid border-white w-full h-full rounded-tl-[24px] rounded-br-[12px] absolute -z-10 top-5  sm:block hidden left-5"></div>
          </div>
        </div>
        <div className="flex justify-start items-center flex-col w-full gap-8 sm:gap-7 mt-2 sm:mt-20">
          <h4 className="text-[#778DA9] text-center text-xl sm:text-2xl font-semibold font-poppins">
            Organizations I’ve worked with:
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 w-full max-w-[1000px] place-items-center">
            <Fade damping={0.1} cascade direction="up">
              <img
                className="object-contain h-[40px]"
                src="/work1.png"
                alt=""
              />
              <img
                src="/work2.png"
                alt=""
                className="object-contain h-[40px]"
              />
              <img
                src="/work3.png"
                alt=""
                className="object-contain sm:mt-0 mt-6 h-[100px]"
              />
              <img
                src="/work4.png"
                alt=""
                className="object-contain h-[110px] sm:mt-0 mt-6"
              />
              <img
                src="/work5.png"
                alt=""
                className="object-contain sm:-mt-2 h-[110px]"
              />
              <img
                src="/work6.png"
                alt=""
                className="object-contain sm:mt-5 h-[90px]"
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
