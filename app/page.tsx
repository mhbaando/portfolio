import Hero from "@/components/hero";
import About from "@/components/about";
import Wrapper from "@/components/wrapper";

export default function Home() {
  return (
    <main>
      <Wrapper>
        <Hero />
        <About />
      </Wrapper>
    </main>
  );
}
