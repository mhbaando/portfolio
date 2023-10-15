import { Button } from "../ui/button";
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
            <Button variant="default">Let&apos; Connect</Button>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};
export default Navbar;