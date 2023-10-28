import Image from "next/image";
import Tag from "../tag";
import Card from "../card";
import { Socials } from "../cta/socails";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full relative mt-20 md:mt-[150px] py-[50px]">
      <div className="h-[0.5px] w-full absolute top-0 bg-gradient-to-r from-zinc-400 to-transparent"></div>
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-medium leading-normal max-w-[340px] text-center text-zinc-400">
          Ready To Get <span className="text-white">your</span> next{" "}
          <span className="text-white">app ready ?</span>
        </h2>
      </div>
      <div className="w-full grid grid-cols-2  md:flex md:items-center md:justify-center gap-5 mt-10 md:space-x-3 md:gap-0 px-5 md:px-0">
        {Socials.map((social) => (
          <a href={social.url} key={social.id} target="_blank">
            <Tag className="flex items-center justify-center space-x-3 rounded-full flex-grow">
              <Image
                src={social.iconURL}
                width={15}
                height={15}
                alt="url icons"
              />
              <p>{social.name}</p>
            </Tag>
          </a>
        ))}
      </div>

      <p className="text-center mt-[30px] text-sm text-zinc-400">
        © {year} Copyright Alright Reserved
      </p>
    </div>
  );
};

export default Footer;
