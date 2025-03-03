import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "/public/assets/abaot.jpg";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
const AboutSection = () => {
     const { t, i18n } = useTranslation();
     const dir = i18n.dir();

     useEffect(() => {
          AOS.init({ duration: 1000 });
     }, []);

     return (
          <section className="relative bg-white dark:bg-black text-black dark:text-white py-24">
               <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         {/* الصورة */}
                         <div className="relative" data-aos="fade-left">
                              <Image
                                   src={aboutImage}
                                   alt="Construction site"
                                   className="w-full rounded-3xl shadow-xl border-4 border-gold"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 dark:text-white/50 to-transparent rounded-3xl"></div>
                         </div>
                         {/* النصوص */}
                         <div data-aos="fade-right">
                              <h2 className="text-4xl md:text-5xl font-extrabold text-gold leading-tight">
                                   {t("about.title")}
                              </h2>
                              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                                   {t("about.description")}
                              </p>
                              <a href="#projects">
                                   <button className="bg-yellow-500 text-black hover:bg-yellow-600 px-10 py-3 text-xl font-bold rounded-lg mt-5 group flex items-center gap-4 shadow-lg transition-all duration-300">
                                        {dir === "rtl" ? (
                                             <>
                                                  {t("about.button")}
                                                  <GoArrowUpRight className="inline-block ml-2 transition-transform duration-300 group-hover:-rotate-45" />
                                             </>
                                        ) : (
                                             <>
                                                  <GoArrowUpRight className="inline-block mr-2 transition-transform duration-300 group-hover:-rotate-45" />
                                                  {t("about.button")}
                                             </>
                                        )}
                                   </button>
                              </a>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default AboutSection;
