import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const images = [
     { src: "/assets/1.jpg", alt: "مشروع 1" },
     { src: "/assets/2.jpg", alt: "مشروع 2" },
     { src: "/assets/1.jpg", alt: "مشروع 3" },
     { src: "/assets/2.jpg", alt: "مشروع 4" },
];

const SectionTwo = () => {
     const { t } = useTranslation();

     return (
          <section className="py-16 bg-gray-100 dark:bg-[#111010] text-black dark:text-white">
               <div className="container mx-auto px-4 flex flex-col lg:flex-row">
                    {/* عمود سلايدر الصور */}
                    <div className="w-full lg:w-1/2" dir="rtl">
                         <Swiper
                              modules={[Navigation, Autoplay]}
                              spaceBetween={10}
                              slidesPerView={1}
                              navigation={{
                                   nextEl: ".swiper-button-next",
                                   prevEl: ".swiper-button-prev",
                              }}
                              autoplay={{ delay: 3000 }}
                              loop={true}
                         >
                              {images.map((image, index) => (
                                   <SwiperSlide key={index}>
                                        <div className="relative w-full h-80">
                                             <Image
                                                  src={image.src}
                                                  alt={image.alt}
                                                  layout="fill"
                                                  objectFit="cover"
                                                  className="rounded-lg"
                                             />
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                         <div className="flex items-center justify-center mt-5 mb-5 md:mb-0">
                              <div className="swiper-button-next swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg ml-2"></div>
                              <div className="swiper-button-prev swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg"></div>
                         </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-10">
                         <h2 className="text-3xl font-bold mb-4">{t("aboutCompany.title")}</h2>
                         <p className="text-lg mb-4 text-justify">{t("aboutCompany.description1")}</p>
                         <p className="text-lg mb-4 text-justify">{t("aboutCompany.description2")}</p>
                         <p className="text-lg text-justify">{t("aboutCompany.description3")}</p>
                    </div>
               </div>
          </section>
     );
};

export default SectionTwo;
