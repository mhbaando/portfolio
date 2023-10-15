import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Wrapper from "../wrapper";

const Navbar = () => {
  return (
    <nav className="mt-10">
      <Wrapper className="px-5 md:px-0">
        <div className="w-full flex items-center justify-between">
          <div>
            <h2 className="text-white font-medium">MhBaando</h2>
          </div>
          <div>
            <Button variant="default" className={cn("rounded-full")}>
              Let&apos; Connect
            </Button>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};
export default Navbar;
