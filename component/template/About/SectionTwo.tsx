import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

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
     return (
          <section className="py-16 bg-gray-100 dark:bg-[#111010] text-black dark:text-white">
               <div className="container mx-auto px-4 flex flex-col lg:flex-row">
                    {/* عمود معلومات الشركة */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-10">
                         <h2 className="text-3xl font-bold mb-4">عن شركتنا</h2>
                         <p className="text-lg mb-4 text-justify">
                              شركة شكرة للمقاولات كانت رائدة في صناعة البناء منذ تأسيسها. رحلتنا تتسم بالابتكار والالتزام والتميز.
                         </p>
                         <p className="text-lg mb-4 text-justify">
                              تأسست في [السنة]، وبدأنا كمقاول صغير وتطورنا لنصبح شركة ذات سمعة طيبة معروفة بتسليم مشاريع عالية الجودة في الوقت المحدد وضمن الميزانية.
                         </p>
                         <p className="text-lg text-justify">
                              تاريخنا العريق وخبرتنا الواسعة جعلتنا روادًا في الصناعة، مما يجعلنا شريكًا موثوقًا لجميع احتياجاتكم في البناء والصيانة.
                         </p>
                    </div>

                    {/* عمود سلايدر الصور */}
                    <div className="w-full lg:w-1/2">
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
                         <div className="flex items-center justify-center mt-5">
                              <div className="swiper-button-next swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg ml-2"></div>
                              <div className="swiper-button-prev swiper-btn-tow bg-gray-800 text-white p-2 rounded-full shadow-lg"></div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default SectionTwo;
