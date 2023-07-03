import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <section id="projects" className="wrapper mt-[60px] sm:mt-[140px]">
      <div className=" flex w-[90%] max-w-[1200px] justify-start items-center flex-col gap-10">
        <div className="flex justify-start items-center flex-col text-center gap-6">
          <h4 className="text-tertiary leading-[1] font-semibold font-poppins text-xl sm:text-2xl -mb-2 uppercase">
            PORTFOLIO
          </h4>
          <h2 className="text-white leading-[1] text-[32px] sm:text-[36px] font-poppins font-semibold uppercase">
            Latest Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 max-w-[1180px]">
          <Fade cascade direction="up" damping={0.1}>
            <ProjectBox
              img="/project1.png"
              title="Four Alpha"
              sub="Sports Betting Arbitrage"
              para="Four Alpha is a startup I co-founded that leverages data-driven analytics to detect arbitrage betting opportunities. By aggregating historical, pre-game, and live betting odds across thousands of events, Four Alpha capitalizes on pricing inefficiencies, removing house-edge and netting a guaranteed return on investment. This project was built with a Python engine, a Firebase backend, and a React frontend. We are continuing to iterate on this product."
              code="https://github.com/anthonyjzhang/fouralpha"
              website="https://www.fouralpha.bet/"
            />
            <ProjectBox
              img="/project2.png"
              title="FaceSense"
              sub="Facial Recognition Machine Learning"
              para="FaceSense is a facial recognition system based on the famous “Eigenfaces” paper. The Python application uses the Principal Component Analysis (PCA) algorithm. PCA is an unsupervised machine learning technique used to reduce the dimensionality of images. This system reduces images from 10,000 to 150 principal components, then uses K-Nearest Neighbors to classify images as Unknown, Not a Face, or Subject X. A 92% accuracy was achieved."
              code="https://github.com/anthonyjzhang/FaceSense"
            />
            <ProjectBox
              img="/project3.png"
              title="Cloud Parameters"
              sub="Digital Infrastructure Storage Solution"
              para="Cloud Parameters was an initiative part of my internship at Cell Signaling Technologies. By leveraging the power of cloud computing through Amazon Web Services (AWS), I was able to extend storage capacity and scalability for internal production pipelines. Using the AWS SDK to connect to the cloud, I implemented several REST API functions to communicate with services like DynamoDB. I built this application with Java, SpringBoot, and Maven. "
              code="https://github.com/anthonyjzhang/CloudParameters"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectBox = ({ img, title, sub, para, code, website }) => {
  return (
    <div className="flex h-full bg-[#292c36] rounded-[12px] overflow-hidden justify-start items-start flex-col  w-full">
      <div className="overflow-hidden min-h-[300px] w-full">
        <img src={img} className="object-cover w-full h-[300px]" alt="" />
      </div>
      <div className="flex h-full justify-start items-start flex-col gap-5 w-full p-6">
        <h2 className="text-white font-semibold font-poppins text-xl leading-[1]">
          {title} <br />{" "}
          <span className="italic text-sm leading-[1]">{sub}</span>
        </h2>
        <p className="text-sm text-white">{para}</p>
        <div className="flex pt-2 justify-between items-center w-full mt-auto ">
          {website && (
            <a
              href={website}
              target="#"
              className="bg-tertiary px-[18px] py-[10px] rounded-md text-white text-sm font-semibold"
            >
              View Website
            </a>
          )}
          {code && (
            <a
              href={code}
              target="#"
              className="bg-tertiary px-[18px] py-[10px] rounded-md text-white text-sm font-semibold"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
