import HeroSlider from "@/component/template/Home/Hero/HeroSlider"
import FAQAccordion from "@/component/template/Home/Q&A/QandA"
import NumbersSection from "@/component/template/Home/SectionFive/Main"
import VisionSection from "@/component/template/Home/SectionFor/Main"
import SectionSevien from "@/component/template/Home/SectionSevien/SectionSevien"
import ArticlesSection from "@/component/template/Home/SectionSix/Main"
import ServicesSection from "@/component/template/Home/SectionThree/Main"
import AboutSection from "@/component/template/Home/SectionTow/Main"

const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <VisionSection />
      <ArticlesSection />
      <SectionSevien />
      <NumbersSection />
      <FAQAccordion />
    </>
  )
}

export default Home
