import { FaBuilding, FaUsers, FaProjectDiagram, FaAward } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
     { id: 1, icon: <FaBuilding className="text-yellow-500 text-5xl" />, value: 150, label: "مشروع مكتمل" },
     { id: 2, icon: <FaUsers className="text-yellow-500 text-5xl" />, value: 300, label: "عميل سعيد" },
     { id: 3, icon: <FaProjectDiagram className="text-yellow-500 text-5xl" />, value: 50, label: "مشروع قيد التنفيذ" },
     { id: 4, icon: <FaAward className="text-yellow-500 text-5xl" />, value: 20, label: "جائزة وشهادة" },
];

const NumbersSection = () => {
     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

     return (
          <section ref={ref} className="bg-slate-200/50 dark:bg-[#111010] text-black dark:text-white py-16">
               <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gold mb-8">أرقامنا تتحدث</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                         نجاحنا يُقاس بمدى رضا عملائنا، وجودة مشاريعنا، وتأثيرنا الإيجابي في عالم البناء.
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
