import { SwiperSlide } from "swiper/react";
import "swiper/css";
import ArticleCard from "../../../mucles/ArticleCard";
import vision from "/public/assets/vision.jpg";
import vision2 from "/public/assets/vision2.jpg";
import SwiperComponent from "@/component/mucles/SwiperComponent";
import { useTranslation } from "react-i18next";

const ArticlesSection = () => {
     const { t } = useTranslation();

     const articles = [
          {
               id: 1,
               title: t("articles.article1.title"),
               description: t("articles.article1.description"),
               date: t("articles.article1.date"),
               image: vision,
          },
          {
               id: 2,
               title: t("articles.article2.title"),
               description: t("articles.article2.description"),
               date: t("articles.article2.date"),
               image: vision2,
          },
          {
               id: 3,
               title: t("articles.article3.title"),
               description: t("articles.article3.description"),
               date: t("articles.article3.date"),
               image: vision,
          }
     ];

     return (
          <section className="py-16 bg-slate-200/50 dark:bg-[#111010] text-black dark:text-white">
               <div className="container mx-auto">
                    <SwiperComponent
                         phoneSlides={1}
                         Slides={3}
                         title={
                              <div>
                                   <h2 className="text-4xl font-bold text-gold mb-8">{t("latest_articles")}</h2>
                                   <p className="text-gray-500 max-w-2xl text-lg">
                                        {t("articles_description")}
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
