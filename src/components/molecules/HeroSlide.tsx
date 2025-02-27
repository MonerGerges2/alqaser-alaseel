import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

interface HeroSlideProps {
     image: string;
     title: string;
     description: string;
     buttonText: string;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ image, title, description, buttonText }) => {
     const { i18n } = useTranslation();
     const dir = i18n.dir();

     return (
          <div className="relative w-full h-screen flex items-end justify-end overflow-hidden" dir={dir}>
               {/* خلفية الصورة مع تأثير الزووم */}
               <div
                    className="absolute inset-0 bg-cover bg-center md:bg-[center_-2rem] bg-no-repeat"
                    style={{ backgroundImage: `url(${image})`, animation: "zoomIn 9s ease-in-out infinite alternate" }}
               ></div>

               {/* طبقة شفافة فوق الخلفية */}
               <div className="absolute inset-0 bg-black/50"></div>

               {/* تأثير تدرج اللون في الأسفل */}
               <div className="absolute -bottom-1 left-0 w-full h-80 bg-gradient-to-t from-[#d3ab6084] to-transparent"></div>

               {/* المحتوى الرئيسي */}
               <div className={`relative z-10 container mx-auto flex flex-col items-start ${dir == "rtl" ? "text-right" : "text-left"} text-white px-6 mb-14`}>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 uppercase text-yellow-500" data-aos="fade-up">
                         {title}
                    </h1>

                    <p className="text-lg md:text-xl font-medium max-w-3xl mb-8 text-gray-200" data-aos="fade-up" data-aos-delay="200">
                         {description}
                    </p>

                    {buttonText && (
                         <a href="#projects">
                              <button className="bg-yellow-500 text-black hover:bg-yellow-600 px-10 py-3 text-xl font-bold rounded-lg group flex items-center gap-4 shadow-lg transition-all duration-300">
                                   {dir === "rtl" ? (
                                        <>
                                             {buttonText}
                                             <GoArrowUpRight className="inline-block ml-2 transition-transform duration-300 group-hover:-rotate-45" />
                                        </>
                                   ) : (
                                        <>
                                             <GoArrowUpRight className="inline-block mr-2 transition-transform duration-300 group-hover:-rotate-45" />
                                             {buttonText}
                                        </>
                                   )}
                              </button>
                         </a>
                    )}
               </div>

               <style>{`
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
          </div>
     );
};

export default HeroSlide;
