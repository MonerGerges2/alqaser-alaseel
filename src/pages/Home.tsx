import HeroSlider from "@tamplate/Home/Hero/HeroSlider"
import NumbersSection from "@tamplate/Home/SectionFive/Main";
import VisionSection from "@tamplate/Home/SectionFor/Main";
import ArticlesSection from "@tamplate/Home/SectionSix/Main";
import ServicesSection from "@tamplate/Home/SectionThree/Main";
import AboutSection from "@tamplate/Home/SectionTow/Main";

import { useEffect } from "react"

const App = () => {
  useEffect(() => {
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [])
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <VisionSection />
      <NumbersSection />
      <ArticlesSection />
    </div>
  )
}

export default App