import { Accordion } from '@mantine/core';
import Aos from 'aos';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

interface FAQItem {
     question: string;
     answer: string;
}

const FAQAccordion = () => {
     const { t } = useTranslation();

     useEffect(() => {
          Aos.init({
               duration: 1000,
               easing: 'ease-in-out',
          });
     }, []);

     const faqData: FAQItem[] = t("faq", { returnObjects: true }) as FAQItem[];

     return (
          <div className="relative pb-20 overflow-x-hidden px-5 bg-white dark:bg-black text-black dark:text-white" style={{ direction: 'rtl' }}>
               <div className='container mx-auto'>
                    <div className="flex flex-col items-center mb-5 mt-10" data-aos="fade-up">
                         <h2 className="text-lg lg:text-2xl font-bold text-black dark:text-white">{t("faq_title")}</h2>
                         <h3 className="text-2xl md:text-5xl font-bold text-[#0f1a1c] dark:text-gray-200 mt-2 max-w-2xl">
                              {t("faq_subtitle")}
                         </h3>
                         <h4 className="lg:text-lg text-sm text-center text-[#5C6479] dark:text-gray-200 mt-2">
                              {t("faq_description")}
                         </h4>
                    </div>
                    <Accordion variant="separated">
                         {faqData?.map((item, index) => (
                              <Accordion.Item key={index} value={`question${index}`} className="py-2 dark:bg-[#111010] dark:text-white" data-aos="fade-up">
                                   <Accordion.Control className="text-right text-lg md:text-2xl dark:text-white">
                                        {item.question}
                                   </Accordion.Control>
                                   <Accordion.Panel>
                                        {item.answer}
                                   </Accordion.Panel>
                              </Accordion.Item>
                         ))}
                    </Accordion>
               </div>
          </div>
     );
};

export default FAQAccordion;
