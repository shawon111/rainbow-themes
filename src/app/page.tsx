import About from "@/components/pages/home/About";
import HeroSection from "@/components/pages/home/HeroSection";
import ScrollingText from "@/components/pages/home/ScrollingText";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <HeroSection />
      {/* scroll section */}
      <section className="h-[100px] flex items-center justify-center bg-[linear-gradient(90deg,#708BFD_0%,#FE71B9_100%)]">
        <ScrollingText />
      </section>
      {/* about section */}
      <About />
    </div>
  );
}
