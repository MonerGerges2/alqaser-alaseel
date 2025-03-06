import { FaBuilding, FaUsers, FaProjectDiagram, FaAward } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const NumbersSection = () => {
     const { t } = useTranslation();
     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

     const stats = [
          { id: 1, icon: <FaBuilding className="text-yellow-500 text-5xl" />, value: 150, label: t("stats.completed_projects") },
          { id: 2, icon: <FaUsers className="text-yellow-500 text-5xl" />, value: 300, label: t("stats.happy_clients") },
          { id: 3, icon: <FaProjectDiagram className="text-yellow-500 text-5xl" />, value: 50, label: t("stats.ongoing_projects") },
          { id: 4, icon: <FaAward className="text-yellow-500 text-5xl" />, value: 20, label: t("stats.awards_certifications") },
     ];

     return (
          <section ref={ref} className="bg-slate-200/50 dark:bg-[#111010] text-black dark:text-white py-16">
               <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gold mb-8">{t("our_numbers")}</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                         {t("numbers_description")}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                         {stats.map((stat) => (
                              <div key={stat.id} className="flex flex-col items-center transition duration-500">
                                   {stat.icon}
                                   <h3 className="text-4xl font-bold mt-4">
                                        {inView ? <CountUp end={stat.value} duration={3} /> : 0}+
                                   </h3>
                                   <p className="text-gray-500 text-lg mt-2">{stat.label}</p>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default NumbersSection;
