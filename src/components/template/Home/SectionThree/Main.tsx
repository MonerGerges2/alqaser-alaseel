import SwiperComponent2 from "@molecules/swiperComponent2";
import { FaTools, FaPaintRoller, FaHardHat, FaHammer } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

const ServicesSection = () => {
     const services = [
          {
               id: 1,
               icon: <FaTools className="text-gold text-xl" />,
               title: "تجديد المباني",
               description: "تحويل المساحات القديمة إلى بيئات حديثة، وظيفية، وجذابة.",
          },
          {
               id: 2,
               icon: <FaPaintRoller className="text-gold text-xl" />,
               title: "التشطيبات الداخلية",
               description: "تنفيذ تشطيبات عالية الجودة لتعزيز الجمال والراحة.",
          },
          {
               id: 3,
               icon: <FaHardHat className="text-gold text-xl" />,
               title: "حلول الأسقف",
               description: "توفير أنظمة أسقف متينة ومبتكرة للحماية والجودة.",
          },
          {
               id: 4,
               icon: <FaHammer className="text-gold text-xl" />,
               title: "إصلاح الأساسات",
               description: "تحسين قوة واستقرار الهياكل عبر حلول احترافية.",
          },
          {
               id: 5,
               icon: <FaHammer className="text-gold text-xl" />,
               title: "إصلاح الأساسات",
               description: "تحسين قوة واستقرار الهياكل عبر حلول احترافية.",
          },
     ];

     return (
          <section className="bg-slate-200/50 text-black py-16">
               <div className="container mx-auto">
                    <SwiperComponent2
                         phoneSlides={1}
                         Slides={3}
                         title={
                              <div>
                                   <h2 className="text-4xl font-bold text-gold mb-5">خدماتنا</h2>
                                   <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                        نقدم حلول بناء متكاملة تتناسب مع احتياجاتك، مع ضمان الجودة والابتكار في كل مشروع.
                                   </p>
                              </div>
                         }
                         space="pb-5 lg:pb-14 px-5 md:px-0 container mx-auto"
                         delay={3000}
                    >
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
                              {services.map((service, index) => (
                                   <SwiperSlide key={service?.id} className="swiper-slide-custom">
                                        <Link to={`/service-details/${service?.id}`}>
                                             <div
                                                  key={index}
                                                  className="relative bg-white/80 backdrop-blur-lg border border-white/20 p-6 rounded-2xl transition-all duration-300 transform hover:border-yellow-500 hover:shadow-xl"
                                             >
                                                  <div className="flex justify-center items-center bg-black/90 text-yellow-500 w-10 h-10 rounded-full shadow-lg mb-4">
                                                       {service.icon}
                                                  </div>
                                                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-yellow-500">
                                                       {service.title}
                                                  </h3>
                                                  <p className="text-gray-700 transition-colors duration-300 hover:text-yellow-500">
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
