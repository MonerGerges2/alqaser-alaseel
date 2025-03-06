import { useTranslation } from "react-i18next";

const SectionThree = () => {
     const { t } = useTranslation(); // استخدام الترجمة

     return (
          <section className="py-16 bg-gray-50 dark:bg-black">
               <div className="container mx-auto px-4 pb-4">
                    <h2 className="text-3xl font-bold text-center mb-12">{t("coreValues.title")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                         {/* البطاقة 1: الابتكار */}
                         <div className="bg-white dark:bg-[#111010] p-6 rounded-lg shadow hover:shadow-lg transition">
                              <div className="flex justify-center mb-4">
                                   <svg
                                        className="w-12 h-12 text-yellow-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                   >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                   </svg>
                              </div>
                              <h3 className="text-xl font-semibold text-center mb-2 text-yellow-500">{t("coreValues.innovation.title")}</h3>
                              <p className="text-gray-600 dark:text-gray-200 text-center">
                                   {t("coreValues.innovation.description")}
                              </p>
                         </div>

                         {/* البطاقة 2: الجودة */}
                         <div className="bg-white dark:bg-[#111010] p-6 rounded-lg shadow hover:shadow-lg transition">
                              <div className="flex justify-center mb-4">
                                   <svg
                                        className="w-12 h-12 text-yellow-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                   >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3 0 .55.45 1 1 1h4c.55 0 1-.45 1-1 0-1.657-1.343-3-3-3z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v6"></path>
                                   </svg>
                              </div>
                              <h3 className="text-xl font-semibold text-center mb-2 text-yellow-500">{t("coreValues.quality.title")}</h3>
                              <p className="text-gray-600 dark:text-gray-200 text-center">
                                   {t("coreValues.quality.description")}
                              </p>
                         </div>

                         {/* البطاقة 3: النزاهة */}
                         <div className="bg-white dark:bg-[#111010] p-6 rounded-lg shadow hover:shadow-lg transition">
                              <div className="flex justify-center mb-4">
                                   <svg
                                        className="w-12 h-12 text-yellow-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                   >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 01-8 0"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7"></path>
                                   </svg>
                              </div>
                              <h3 className="text-xl font-semibold text-center mb-2 text-yellow-500">{t("coreValues.integrity.title")}</h3>
                              <p className="text-gray-600 dark:text-gray-200 text-center">
                                   {t("coreValues.integrity.description")}
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default SectionThree;
