import React from "react";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <section id="skills" className="wrapper mt-[60px] sm:mt-[140px]">
      <div className=" flex w-[90%] max-w-[1200px] justify-start items-center flex-col gap-10">
        <div className="flex justify-start items-center flex-col text-center gap-6">
          <h4 className="text-tertiary leading-[1] font-semibold font-poppins text-xl sm:text-2xl -mb-2 uppercase">
            SKILLS
          </h4>
          <h2 className="text-white leading-[1] text-[32px] sm:text-[36px] font-poppins font-semibold">
            SPECIALIZING IN
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-x-6 xl:gap-x-20 gap-y-6 sm:mt-4">
          <Fade damping={0.1} cascade direction="up">
            <img src="/software.png" className="object-contain w-full" alt="" />
            <img src="/cloud.png" className="object-contain w-full" alt="" />
            <img src="/frontend.png" className="object-contain w-full" alt="" />
            <img src="/backend.png" className="object-contain w-full" alt="" />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Skills;
