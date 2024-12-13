import Hero from "../components/Hero";
import LogoCarousel from "../components/LogoCarousel";
import Contact from "./contact";
import Work from "./Work";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <LogoCarousel /> */}
      <Work />
      <Contact />
    </>
  );
}
