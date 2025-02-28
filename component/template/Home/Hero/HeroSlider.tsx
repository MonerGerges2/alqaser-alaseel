import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import HeroSlide from "@/component/mucles/HeroSlide";

interface SlideData {
     image: any;
     title: string;
     description: string;
     buttonText: string;
}

const HeroSlider: React.FC = () => {
     useEffect(() => {
          AOS.init({
               duration: 1000,
               easing: "ease-in-out",
               once: true,
          });
     }, []);

     const { t, i18n } = useTranslation();
     const dir = i18n.dir();

     const slides: SlideData[] = [
          {
               image: "/assets/2.jpg",
               title: t("heroSlider.title"),
               description: t("heroSlider.description"),
               buttonText: t("heroSlider.button"),
          },
          {
               image: "/assets/3.jpg",
               title: t("heroSlider.title"),
               description: t("heroSlider.description"),
               buttonText: t("heroSlider.button"),
          },
     ];

     return (
          <div className="relative w-full" dir="rtl">
               <div className={`flex items-center mb-10 absolute bottom-0 ${dir === "rtl" ? "left-0" : "right-0"}`}>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
               </div>

               <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                         nextEl: ".swiper-button-next",
                         prevEl: ".swiper-button-prev",
                    }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="w-full h-screen"
               >
                    {slides.map((slide, index) => (
                         <SwiperSlide key={index}>
                              <HeroSlide {...slide} />
                         </SwiperSlide>
                    ))}
               </Swiper>
          </div>
     );
};

export default HeroSlider;
