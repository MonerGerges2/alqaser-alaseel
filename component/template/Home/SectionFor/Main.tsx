import { FaCheckCircle } from "react-icons/fa";
import vision1 from "/public/assets/vision.jpg";
import vision2 from "/public/assets/vision2.jpg";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const VisionSection = () => {
     const { t, i18n } = useTranslation();
     const { dir } = i18n;
     const visionPoints = [
          t("vision_points.tech_based_solutions"),
          t("vision_points.eco_friendly_materials"),
          t("vision_points.quality_assurance"),
          t("vision_points.modern_designs"),
          t("vision_points.international_standards"),
          t("vision_points.high_quality_execution")
     ];

     return (
          <section className="text-black dark:text-white bg-white dark:bg-black py-16 min-h-[80vh] flex items-center">
               <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20">

                    {/* Vision Images */}
                    <div className="relative w-full lg:w-1/2 flex justify-center my-10 md:my-0">
                         <div className="md:w-[40vh] w-[30vh] h-[40vh] md:h-[50vh] rounded-xl overflow-hidden shadow-lg transform transition duration-300">
                              <Image src={vision2} alt={t("vision")} className="w-full h-full object-cover" />
                         </div>
                         <div className="absolute top-32 left-5 md:w-[40vh] w-[25vh] h-[30vh] md:h-[40vh] rounded-xl overflow-hidden shadow-lg transform transition duration-300">
                              <Image src={vision1} alt={t("vision")} className="w-full h-full object-cover" />
                         </div>
                    </div>

                    {/* Vision Content */}
                    <div className={`w-full lg:w-2/3 flex flex-col items-start text-center ${dir() === "rtl" ? "md:text-right" : "md:text-left"} lg:pl-16 mt-10 lg:mt-0`} dir={dir()}>
                         <h2 className="md:text-4xl text-xl font-bold text-gold mb-6">{t("vision")}</h2>
                         <p className="text-gray-600 dark:text-gray-400 md:text-lg text-sm mb-6 text-start">
                              {t("vision_description")}
                         </p>
                         <ul className="space-y-4 px-4">
                              {visionPoints.map((point, index) => (
                                   <li key={index} className="flex items-center text-lg gap-4 text-gray-700 dark:text-gray-500">
                                        <FaCheckCircle className="text-yellow-500 md:text-xl text-sm mr-3" />
                                        {point}
                                   </li>
                              ))}
                         </ul>
                    </div>

               </div>
          </section>
     );
};

export default VisionSection;
