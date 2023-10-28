import Card from "../card";
import Tag from "../tag";
import { Socials } from "./socails";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="w-full mt-20 md:mt-[150px]" id="connect">
      <Card>
        <div className="flex items-center justify-center w-full min-h-[300px] flex-col">
          <h2 className="text-4xl font-medium leading-normal max-w-[340px] text-center text-zinc-400">
            Ready To Get <span className="text-white">your</span> next{" "}
            <span className="text-white">app ready ?</span>
          </h2>
          <div className="w-full grid grid-cols-2  md:flex md:items-center md:justify-center gap-5 mt-10 md:space-x-3 md:gap-0">
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
        </div>
      </Card>
    </div>
  );
};

export default CallToAction;
