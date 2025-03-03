import { FaCheckCircle } from "react-icons/fa";
import vision1 from "/public/assets/vision.jpg";
import vision2 from "/public/assets/vision2.jpg";
import Image from "next/image";

const VisionSection = () => {
     return (
          <section className="text-black dark:text-white bg-white dark:bg-black py-16 min-h-[80vh] flex items-center">
               <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20">

                    <div className="relative w-full lg:w-1/2 flex justify-center my-10 md:my-0">
                         <div className="md:w-[40vh] w-[30vh] h-[40vh] md:h-[50vh] rounded-xl overflow-hidden shadow-lg transform transition duration-300">
                              <Image src={vision2} alt="رؤيتنا 1" className="w-full h-full object-cover" />
                         </div>
                         <div className="absolute top-32 left-5 md:w-[40vh] w-[25vh] h-[30vh] md:h-[40vh] rounded-xl overflow-hidden shadow-lg transform transition duration-300">
                              <Image src={vision1} alt="رؤيتنا 2" className="w-full h-full object-cover" />
                         </div>
                    </div>

                    <div className="w-full lg:w-2/3 flex flex-col items-start lg:pl-16 text-center lg:text-right mt-10 lg:mt-0">
                         <h2 className="md:text-4xl text-xl font-bold text-gold mb-6">رؤيتنا</h2>
                         <p className="text-gray-600 dark:text-gray-400 md:text-lg text-sm mb-6 text-start">
                              نطمح إلى أن نكون روادًا في مجال البناء والتطوير العقاري، من خلال تقديم حلول مبتكرة تجمع بين الجودة، التصميم العصري، والاستدامة البيئية. رؤيتنا تتمحور حول بناء مستقبل أكثر حداثة، باستخدام التكنولوجيا المتقدمة والمواد الصديقة للبيئة لضمان الاستدامة والكفاءة في جميع مشاريعنا.
                         </p>
                         <ul className="space-y-4 px-4">
                              {[
                                   "تقديم حلول بناء تعتمد على التكنولوجيا الحديثة.",
                                   "استخدام مواد صديقة للبيئة لتعزيز الاستدامة.",
                                   "ضمان الجودة والمتانة في جميع مشاريعنا.",
                                   "نوظف أحدث التقنيات والأساليب الهندسية لتحقيق تصاميم عصرية ومستدامة.",
                                   "نستخدم مواد صديقة للبيئة ونلتزم بالمعايير الدولية للحفاظ على موارد الطبيعة.",
                                   "نحرص على تنفيذ مشاريعنا وفق أعلى معايير الجودة لضمان المتانة والكفاءة.",
                              ].map((point, index) => (
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
