import HeroComponent from "../components/HeroComponent";
import AboutSection from "../sections/AboutSection";
import CTASection from "../sections/CTASection";
import StatsSection from "../sections/StatsSection";

const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <StatsSection />
      <AboutSection />
      <CTASection />
    </>
  );
};

export default HomePage;
