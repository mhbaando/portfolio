import Card from "../card";
import Tag from "../tag";
import TitleOrDescription from "../title";
import { Companies, agencies } from "./data";

const Experience = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-20 md:mt-[150px] flex-col md:flex-row">
        <TitleOrDescription
          text="I helped agencies across the globe"
          className="text-3xl text-center md:text-left max-w-[350px] mb-14 md:mb-0 leading-relaxed"
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
                <div className="w-full grid grid-cols-2 md:flex md:items-center md:flex-wrap gap-5">
                  {agency.technology.map((tech, index) => (
                    <Tag className="rounded-full" key={index}>
                      <p className="text-sm text-center">{tech}</p>
                    </Tag>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-20 md:mt-[150px] flex-col md:flex-row-reverse">
        <TitleOrDescription
          text="Projects I've contributed to"
          className="text-3xl text-center md:text-left max-w-[350px] mb-14 md:mb-0 leading-relaxed"
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
                <div className="w-full grid grid-cols-2 md:flex md:items-center md:flex-wrap gap-5">
                  {agency.technology.map((tech, index) => (
                    <Tag className="rounded-full" key={index}>
                      <p className="text-sm text-center">{tech}</p>
                    </Tag>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center flex-col mt-20 md:mt-[150px]">
        <TitleOrDescription
          text="Even I've have built these startups"
          className="text-3xl text-center max-w-[350px] leading-relaxed"
        />
        <div className="flex items-start justify-between w-full gap-10 mt-10 flex-col md:flex-row">
          {Companies.map((company) => (
            <Card key={company.expID}>
              <div className="text-white md:max-w-[488px] md:w-full mx-5 mt-7">
                <TitleOrDescription text={company.title} className="text-2xl" />
                <div className="flex items-center justify-start space-x-10 my-1">
                  <p className=" text-zinc-500 text-sm">{company.date}</p>
                  <p className="text-sm text-zinc-500">{company.company}</p>
                </div>
                <TitleOrDescription
                  className="leading-loose w-full my-5"
                  text={company.description}
                  whiteWordsCount={5}
                />
                <div className="w-full grid grid-cols-2 md:flex md:items-center md:flex-wrap gap-5">
                  {company.technology.map((tech, index) => (
                    <Tag className="rounded-full" key={index}>
                      <p className="text-sm text-center">{tech}</p>
                    </Tag>
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
