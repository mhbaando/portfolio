import Card from "../card";
import TitleOrDescription from "../title";

const Services = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-[150px]">
      <TitleOrDescription
        text="I've mastered these"
        className="text-3xl text-center max-w-[207px] mb-14 md:mb-0 leading-relaxed"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div className="">
          <Card className="w-full p-[50px] h-full">
            <div className="px-[30px] pt-[40px] pb-[25px] w-full space-y-5  flex flex-col justify-center h-full">
              <TitleOrDescription
                text="UI/UX Designing"
                className="max-w-[175px] text-3xl"
                whiteWordsCount={1}
              />
              <TitleOrDescription
                type="description"
                text="I design user-centric, beautiful, clean, simple, and modern designs from scratch."
              />
            </div>
          </Card>
        </div>

        <div className="w-full flex items-center justify-center flex-col space-y-5">
          <Card>
            <div className="px-[30px] pt-[40px] pb-[25px] w-full space-y-5">
              <TitleOrDescription
                text="Front-End Development"
                className="max-w-[175px] text-3xl"
                whiteWordsCount={1}
              />
              <TitleOrDescription
                type="description"
                text="I focus on user-centered design, crafting modern web interfaces that are both visually captivating and functionally efficient."
                whiteWordsCount={5}
              />
            </div>
          </Card>
          <Card className="w-full p-[50px]">
            <div className="px-[30px] pt-[40px] pb-[25px] w-full space-y-5">
              <TitleOrDescription
                text="Back-End Development"
                className="max-w-[175px] text-3xl"
                whiteWordsCount={1}
              />
              <TitleOrDescription
                type="description"
                text="I work behind the scenes to power your web applications with a robust, secure, & efficient back end."
                whiteWordsCount={5}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
