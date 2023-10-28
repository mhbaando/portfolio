import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const Hero = () => {
  return (
    <div className="mt-20 md:mt-[170px] flex flex-col items-center justify-center">
      <h1 className={cn("text-5xl text-center text-zinc-400 leading-normal")}>
        I&apos;m <span className={cn("text-white")}>Mohamud</span>
        <br /> A <span className={cn("text-white")}>full stack</span> developer
      </h1>
      <p
        className={cn(
          "text-zinc-400 max-w-[500px] mx-auto text-center mt-4 mb-9 leading-loose"
        )}
      >
        A talented <span className="text-white">developer</span> &{" "}
        <span className="text-white">designer</span> from
        <span className="text-white">Somalia</span>, bridging the gap between{" "}
        <span className="text-white">JavaScript</span> &{" "}
        <span className="text-white">Python</span>, crafting innovative
        solutions for clients worldwide
      </p>
      <a
        href="#connect"
        className={cn(
          buttonVariants(),
          "rounded-full bg-secondary text-white hover:text-black transition-all duration-300 px-7"
        )}
      >
        Let&apos;s Build
      </a>
    </div>
  );
};

export default Hero;
