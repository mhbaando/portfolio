import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import Wrapper from "../wrapper";

const Navbar = () => {
  return (
    <nav className="mt-10">
      <Wrapper>
        <div className="w-full flex items-center justify-between">
          <div>
            <h2 className="text-white font-medium">MhBaando</h2>
          </div>
          <div>
            <a href="#connect" className={cn(buttonVariants(), "rounded-full")}>
              Let&apos; Connect
            </a>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};
export default Navbar;
