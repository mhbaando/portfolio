import { cn } from "@/lib/utils";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) => {
  return (
    <div className="rounded-md bg-gradient-to-br from-white/70 via-black/95 to-transparent p-[0.5px] relative h-full">
      <div className="rounded-md bg-zinc-500 backdrop-blur-2xl drop-shadow-lg h-full">
        <div className="bg-gradient-to-r from-black via-black to-black/95 p-4 rounded-md h-full">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Card;
