import { ReactNode, memo } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";

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

const SwiperComponent = ({ children, title, Slides, phoneSlides, space, className, delay, modules = [Autoplay, EffectCoverflow] }: ProjectsType) => {
  return (
    <div className={`projects rounded-t-3xl flex flex-col items-center relative ${className}`}>
      <div className="flex items-center justify-between w-full px-4 md:px-10 mt-2 ">
        <div>{title}</div>
      </div>
      <div className={`w-full mx-auto ${space}`}>
        <Swiper
          modules={modules}
          effect="coverflow"
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1, // Use modifier 1 so the active slide is not enlarged
            slideShadows: false,
          }}
          spaceBetween={5}
          slidesPerView={Slides}
          loop={true}
          speed={1300}
          autoplay={{ delay: delay || 3000 }}
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
