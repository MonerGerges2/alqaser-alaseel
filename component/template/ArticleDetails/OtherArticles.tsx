import { SwiperSlide } from "swiper/react";
import "swiper/css";
import ArticleCard from "../../mucles/ArticleCard";
import vision from "/public/assets/vision.jpg";
import vision2 from "/public/assets/vision2.jpg";
import SwiperComponent from "@/component/mucles/SwiperComponent";

const articles = [
     {
          id: 1,
          title: "أحدث اتجاهات البناء في 2024",
          description: "تعرف على أحدث الابتكارات في مجال البناء والتشييد.",
          date: "25 فبراير 2025",
          image: vision,
     },
     {
          id: 2,
          title: "أهمية الاستدامة في التصميم المعماري",
          description: "كيف تساهم تقنيات البناء الحديثة في تعزيز الاستدامة؟",
          date: "18 فبراير 2025",
          image: vision2,
     },
     {
          id: 3,
          title: "تقنيات ذكية في البناء الحديث",
          description: "اكتشف كيف تؤثر التكنولوجيا على قطاع البناء.",
          date: "10 فبراير 2025",
          image: vision,
     },
];

const OtherArticles = () => {
     return (
          <div>
               <section className="pt-16">
                    <div className="container mx-auto">
                         <SwiperComponent
                              phoneSlides={1}
                              Slides={3}
                              title={
                                   <div>
                                        <h2 className="text-lg sm:text-xl md:text-4xl text-black dark:text-white font-bold text-gold mb-4 sm:mb-8">
                                             مقالات مشابهة
                                        </h2>
                                        <p className="text-gray-500 max-w-full sm:max-w-2xl text-sm sm:text-lg sm:mx-0">
                                             تابع آخر الأخبار والمستجدات في عالم البناء والتطوير العقاري.
                                        </p>
                                   </div>

                              }
                              space="container mx-auto"
                              delay={3000}
                         >
                              {articles.map((article) => (
                                   <SwiperSlide key={article?.id} className="swiper-slide-custom">
                                        <ArticleCard article={article} />
                                   </SwiperSlide>
                              ))}
                         </SwiperComponent>
                    </div>
               </section>
          </div>
     )
}

export default OtherArticles