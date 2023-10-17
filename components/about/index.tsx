import Image from "next/image";
import Card from "../card";

const About = () => {
  return (
    <div className="mt-40">
      <Card>
        <div className="flex items-center justify-between flex-col md:flex-row px-5 md:px-20 min-h-[450px] pt-10">
          <div>
            <h2 className="text-3xl text-zinc-500 font-medium">
              Who <span className="text-white">am</span> I ?
            </h2>
            <p className="text-zinc-500 mt-3 sm:w-full md:max-w-[384px] leading-loose">
              A <span className="text-white">full stack developer</span>{" "}
              proficient in JavaScript and Python, a meticulous{" "}
              <span className="text-white">UI/UX designer</span>, &{" "}
              <span className="text-white">a&nbsp;co-founder</span> with a
              wealth of expertise in crafting cutting-edge{" "}
              <span className="text-white">web applications</span>
            </p>
          </div>

          <div className="md:max-w-[677px] md:absolute md:bottom-0 md:right-0 mt-5">
            <Image
              src="/me.png"
              alt="Mohamud Abshir Image"
              priority
              objectFit="cover"
              width={1354}
              height={1250}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default About;
