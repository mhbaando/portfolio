import { cn } from "@/lib/utils";

const Tag = ({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8ed] px-3.5 py-1.5 text-xs font-medium text-[#6e6e73] hover:border-blue-300 hover:text-blue-600 hover:shadow-sm transition-all duration-200 cursor-default",
        className
      )}
    >
      <span className="w-1 h-1 rounded-full bg-current opacity-40" />
      {children}
    </span>
  );
};
export default Tag;
