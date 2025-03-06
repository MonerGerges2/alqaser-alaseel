import SwiperComponent2 from "@/component/mucles/swiperComponent2";
import Link from "next/link";
import { FaTools, FaPaintRoller, FaHardHat, FaHammer } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
     const { t, i18n } = useTranslation();
     const { dir } = i18n;
     const services = [
          {
               id: 1,
               icon: <FaTools className="text-gold text-xl" />,
               title: t("services_list.renovation.title"),
               description: t("services_list.renovation.description")
          },
          {
               id: 2,
               icon: <FaPaintRoller className="text-gold text-xl" />,
               title: t("services_list.finishes.title"),
               description: t("services_list.finishes.description")
          },
          {
               id: 3,
               icon: <FaHardHat className="text-gold text-xl" />,
               title: t("services_list.ceilings.title"),
               description: t("services_list.ceilings.description")
          },
          {
               id: 4,
               icon: <FaHammer className="text-gold text-xl" />,
               title: t("services_list.foundation.title"),
               description: t("services_list.foundation.description")
          }
     ];

     return (
          <section className="bg-slate-200/50 dark:bg-[#111010] text-black dark:text-white py-16">
               <div className="container mx-auto">
                    <SwiperComponent2
                         phoneSlides={1}
                         Slides={3}
                         title={
                              <div>
                                   <h2 className="lg:text-4xl text-xl font-bold text-gold mb-5">{t("services")}</h2>
                                   <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:text-lg text-xs">
                                        {t("services_description")}
                                   </p>
                              </div>
                         }
                         space="pb-5 lg:pb-14 px-5 md:px-0 container mx-auto"
                         delay={3000}
                    >
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
                              {services.map((service) => (
                                   <SwiperSlide key={service.id} className="swiper-slide-custom">
                                        <Link href={`/service-details/${service.id}`} dir={dir()}>
                                             <div className="relative bg-white/80 dark:bg-black dark:hover:bg-yellow-500 backdrop-blur-lg border border-white/20 dark:border-black p-6 rounded-lg transform hover:bg-yellow-500 hover:text-white hover:border-yellow-600 hover:shadow-xl duration-300 h-[200px]">
                                                  <div className="flex justify-center items-center bg-black/90 dark:bg-white/90 text-yellow-500 w-10 h-10 rounded-full shadow-lg mb-4 transition-colors hover:bg-white hover:text-yellow-500">
                                                       {service.icon}
                                                  </div>
                                                  <h3 className="text-2xl font-semibold mb-3">
                                                       {service.title}
                                                  </h3>
                                                  <p className="">
                                                       {service.description}
                                                  </p>
                                             </div>
                                        </Link>
                                   </SwiperSlide>
                              ))}
                         </div>
                    </SwiperComponent2>
               </div>
          </section>
     );
};

export default ServicesSection;
