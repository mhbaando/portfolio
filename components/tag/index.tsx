import { cn } from "@/lib/utils";

const Tag = ({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-[#19191B] hover:bg-zinc-700 text-white px-5 py-1 transition-all duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Tag;
