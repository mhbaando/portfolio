import Card from "../card";
import Technology from "../technology";
import TitleOrDescription from "../title";
import { agencies } from "./data";

const Experience = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-20 md:mt-[170px] flex-col md:flex-row">
        <TitleOrDescription
          text="I helped agencies across the globe"
          className="text-3xl text-center md:text-left max-w-[350px] mb-14 md:mb-0"
        />
        <div className="flex flex-col space-y-7">
          {agencies.map((agency) => (
            <Card key={agency.expID}>
              <div className="text-white md:max-w-[488px] md:w-full mt-7 mx-5">
                <TitleOrDescription text={agency.title} className="text-2xl" />
                <div className="flex items-center justify-start space-x-10 my-1">
                  <p className=" text-zinc-500 text-sm">{agency.date}</p>
                  <p className="text-sm text-zinc-500">{agency.company}</p>
                </div>
                <TitleOrDescription
                  className="leading-loose w-full my-5"
                  text={agency.description}
                  whiteWordsCount={5}
                />
                <div className="w-full flex items-center justify-between flex-wrap">
                  {agency.technology.map((tech, index) => (
                    <Technology key={index} techName={tech} />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-20 md:mt-[170px] flex-col md:flex-row-reverse">
        <TitleOrDescription
          text="I helped agencies across the globe"
          className="text-3xl text-center md:text-left max-w-[350px] mb-14 md:mb-0"
        />
        <div className="flex flex-col space-y-7">
          {agencies.map((agency) => (
            <Card key={agency.expID}>
              <div className="text-white md:max-w-[488px] md:w-full mt-7 mx-5">
                <TitleOrDescription text={agency.title} className="text-2xl" />
                <div className="flex items-center justify-start space-x-10 my-1">
                  <p className=" text-zinc-500 text-sm">{agency.date}</p>
                  <p className="text-sm text-zinc-500">{agency.company}</p>
                </div>
                <TitleOrDescription
                  className="leading-loose w-full my-5"
                  text={agency.description}
                  whiteWordsCount={5}
                />
                <div className="w-full flex items-center justify-between flex-wrap">
                  {agency.technology.map((tech, index) => (
                    <Technology key={index} techName={tech} />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default Experience;
