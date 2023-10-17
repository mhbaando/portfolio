import Hero from "@/components/hero";
import About from "@/components/about";
import Wrapper from "@/components/wrapper";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main>
      <Wrapper>
        <Hero />
        <About />
        <Experience />
      </Wrapper>
    </main>
  );
}
