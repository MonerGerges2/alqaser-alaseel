import { SwiperSlide } from "swiper/react";
import "swiper/css";
import ArticleCard from "../../../mucles/ArticleCard";
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

const ArticlesSection = () => {
     return (
          <section className="py-16 bg-slate-200/50 dark:bg-[#111010] text-black dark:text-white">
               <div className="container mx-auto">
                    <SwiperComponent
                         phoneSlides={1}
                         Slides={3}
                         title={
                              <div>
                                   <h2 className="text-4xl font-bold text-gold mb-8">أحدث المقالات</h2>
                                   <p className="text-gray-500 max-w-2xl text-lg">
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
     );
};

export default ArticlesSection;
