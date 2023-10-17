import { cn } from "@/lib/utils";

const Wrapper = ({
  className,
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[996px] mx-auto px-5 md:px-0", className)}>
      {children}
    </div>
  );
};
export default Wrapper;
