import { cn } from "@/lib/utils";

const Card = ({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  variant?: "default" | "blue" | "indigo" | "violet";
}) => {
  const gradients = {
    default: "from-blue-500/15 via-indigo-400/12 to-violet-400/10",
    blue: "from-blue-500/20 via-sky-400/15 to-cyan-400/10",
    indigo: "from-indigo-500/20 via-violet-400/15 to-purple-400/10",
    violet: "from-violet-500/20 via-purple-400/15 to-fuchsia-400/10",
  };

  const borders = {
    default: "border-[#e8e8ed]",
    blue: "border-blue-200/50",
    indigo: "border-indigo-200/50",
    violet: "border-violet-200/50",
  };

  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-md",
        borders[variant],
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
          gradients[variant]
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
export default Card;
