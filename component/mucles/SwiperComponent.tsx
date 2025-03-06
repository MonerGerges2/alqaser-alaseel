import { ReactNode, memo } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { useTranslation } from "react-i18next";
type ProjectsType = {
  children: ReactNode;
  title: any;
  Slides: number;
  phoneSlides: number;
  space?: string;
  className?: string;
  delay?: number;
  modules?: any[];
};

const SwiperComponent = ({ children, title, Slides, phoneSlides, space, className, delay, modules = [Autoplay, Navigation, EffectCoverflow] }: ProjectsType) => {
  const { i18n } = useTranslation();
  const dir = i18n.dir();
  
  return (
    <div className={`projects rounded-t-3xl flex flex-col items-center relative ${className}`} dir="rtl">
      <div className="flex items-center justify-between w-full px-4 md:px-10 mb-6" dir={dir}>
        <div>{title}</div>
        <div className="flex items-center" dir="rtl">
          <div className="swiper-button-next swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg ml-2"></div>
          <div className="swiper-button-prev swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg"></div>
        </div>
      </div>
      <div className={`w-[100vw] mx-auto ${space}`}>
        <Swiper
          modules={modules}
          effect="coverflow"
          centerInsufficientSlides
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          spaceBetween={30}
          slidesPerView={Slides}
          loop={true}
          speed={500}
          autoplay={{ delay: delay || 3000 }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: phoneSlides,
            },
            640: {
              slidesPerView: phoneSlides,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: Slides,
            },
          }}
          className="w-full h-full"
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(SwiperComponent);
