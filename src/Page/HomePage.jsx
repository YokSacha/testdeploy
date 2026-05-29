
import HeroSection from "../componente/HeroSection.jsx";
import Section01 from "../componente/Section01.jsx";
import Section02 from "../componente/Section02.jsx";
import Section03 from "../componente/Section03.jsx";
import Section04 from "../componente/Section04.jsx";

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      
      <HeroSection />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
    </div>
  );
}
