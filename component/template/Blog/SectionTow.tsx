import React, { useState } from "react";
import Image from "next/image";
import vision from "/public/assets/vision.jpg";
import vision2 from "/public/assets/vision2.jpg";
import { Input, Pagination } from "@mantine/core";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const SectionTow = () => {
     const { t } = useTranslation();
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
          {
               id: 4,
               title: "تقنيات ذكية في البناء الحديث",
               description: "اكتشف كيف تؤثر التكنولوجيا على قطاع البناء.",
               date: "10 فبراير 2025",
               image: vision,
          },
          {
               id: 5,
               title: "تقنيات ذكية في البناء الحديث",
               description: "اكتشف كيف تؤثر التكنولوجيا على قطاع البناء.",
               date: "10 فبراير 2025",
               image: vision,
          },
          {
               id: 6,
               title: "تقنيات ذكية في البناء الحديث",
               description: "اكتشف كيف تؤثر التكنولوجيا على قطاع البناء.",
               date: "10 فبراير 2025",
               image: vision,
          },
          {
               id: 7,
               title: "تقنيات ذكية في البناء الحديث",
               description: "اكتشف كيف تؤثر التكنولوجيا على قطاع البناء.",
               date: "10 فبراير 2025",
               image: vision,
          },
          {
               id: 8,
               title: "تقنيات ذكية في البناء الحديث",
               description: "اكتشف كيف تؤثر التكنولوجيا على قطاع البناء.",
               date: "10 فبراير 2025",
               image: vision,
          },
     ];

     // State for search query
     const [query, setQuery] = useState("");

     // Filter articles based on search query
     const filteredArticles = articles.filter(
          (article) =>
               article.title.includes(query) || article.description.includes(query)
     );

     return (
          <section className="bg-gradient-to-r text-black dark:bg-black bg-white dark:text-white pb-10 pt-10">
               <div className="container mx-auto px-4">
                    {/* Search Input */}
                    <div className="mb-8">
                         <Input
                              placeholder={t("searchPlaceholder")}
                              value={query}
                              onChange={(event) => setQuery(event.currentTarget.value)}
                              radius={30}
                              size="lg"
                              icon={<IoSearch />}
                              className="md:w-1/4"
                              styles={{
                                   input: {
                                        '&:hover': {
                                             borderColor: '#F59E0B',
                                        },
                                        '&:focus': {
                                             borderColor: '#F59E0B',
                                             boxShadow: '0 0 0 2px rgba(245, 158, 11, 0.5)',
                                        },
                                   },
                              }}
                         />
                    </div>
                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                         {filteredArticles.map((article) => (
                              <div
                                   key={article.id}
                                   className="bg-white dark:bg-[#111010] shadow-lg overflow-hidden group cursor-pointer border-2 rounded-2xl"
                              >
                                   <div className="w-full h-60 overflow-hidden !rounded-t-2xl">
                                        <Image
                                             src={article.image}
                                             alt={article.title}
                                             className="w-full h-60 object-cover group-hover:scale-110 duration-500"
                                        />
                                   </div>
                                   <div className="p-4">
                                        <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                                        <p className="text-sm text-gray-500 mb-2">
                                             {article.description}
                                        </p>
                                        <span className="text-sm text-gray-400">{article.date}</span>
                                   </div>
                              </div>
                         ))}
                    </div>
                    {/* Pagination */}
                    <Pagination
                         total={10}
                         variant="dots"
                         className="mt-10"
                         dir="ltr"
                         styles={{
                              control: {
                                   "&:hover": {
                                        borderColor: '#eab308',
                                   },
                                   "&[data-active]": {
                                        backgroundColor: "#eab308",
                                        borderColor: "#eab308",
                                   },
                                   "&[data-active]:hover": {
                                        backgroundColor: "#eab308",
                                        borderColor: "#eab308",
                                        "&:hover": {
                                             backgroundColor: "#F59E0B",
                                             borderColor: "#F59E0B",
                                        },
                                   }
                              },
                         }}
                    />
               </div>
          </section>
     );
};

export default SectionTow;
