import Hero from "@/components/hero";
import About from "@/components/about";
import Wrapper from "@/components/wrapper";
import Experience from "@/components/experience";
import CallToAction from "@/components/cta";
import Services from "@/components/services";
import Tools from "@/components/tools";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Wrapper>
        <Hero />
        <About />
        <Experience />
        <CallToAction />
        <Services />
        <Tools />
      </Wrapper>
      <Footer />
    </main>
  );
}
