import Tag from "../tag";
import TitleOrDescription from "../title";
import { AllTools } from "./tools";

const Tools = () => {
  return (
    <div className="flex items-center justify-center flex-col-reverse gap-10 md:flex-row mt-20 md:mt-[150px]">
      <div className="flex items-center justify-start gap-3 flex-wrap flex-1">
        {AllTools.map((tool) => (
          <Tag
            key={tool.name}
            className=" rounded-full text-center cursor-pointer"
          >
            <p className="text-sm text-center">{tool.name}</p>
          </Tag>
        ))}
      </div>
      <div className="flex items-center justify-center flex-1">
        <TitleOrDescription
          text="Tools I've used on all projects"
          className="text-3xl max-w-[300px] leading-relaxed text-center md:text-left "
          whiteWordsCount={3}
        />
      </div>
    </div>
  );
};

export default Tools;
