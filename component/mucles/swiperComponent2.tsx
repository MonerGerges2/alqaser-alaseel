import { ReactNode, memo } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

type ProjectsType = {
    children: ReactNode;
    title: any;
    Slides: number;
    phoneSlides: number;
    space?: string;
    className?: string;
    delay?: number;
    spaceBetween?: number;
};

const SwiperComponent = ({ children, title, Slides, phoneSlides, space, className, delay, spaceBetween = 20 }: ProjectsType) => {

    return (
        <div className={`projects rounded-t-3xl flex flex-col items-center relative ${className}`} dir="rtl">
            <div className="flex items-center justify-between w-full px-4 md:px-10 mb-6">
                <div>{title}</div>
                <div className="flex items-center">
                    <div className="swiper-button-next swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg ml-2"></div>
                    <div className="swiper-button-prev swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg"></div>
                </div>
            </div>
            <div className={`w-full mx-auto ${space}`}>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={spaceBetween}
                    slidesPerView={Slides}
                    loop={true}
                    speed={1300}
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
                    className="w-full h-full px-10"
                >
                    {children}
                </Swiper>
            </div>
        </div>
    );
};

export default memo(SwiperComponent);
