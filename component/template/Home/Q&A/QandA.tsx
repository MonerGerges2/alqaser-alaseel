// components/FAQAccordion.tsx
import { Accordion } from '@mantine/core';
import Aos from 'aos';
import { useEffect } from 'react';

const faqData = [
     {
          question: "ما هي المقاولات العامة؟",
          answer: "المقاولات العامة هي عملية إدارة وتنفيذ مشاريع البناء من التخطيط وحتى التسليم، وتشمل تنسيق أعمال المتعهدين والإشراف على جودة التنفيذ والالتزام بالمعايير والمواصفات",
     },
     {
          question: "ما هي الخدمات التي يقدمها المقاول العام؟",
          answer: "يقدم المقاول العام خدمات شاملة تتضمن إدارة المشروع، تنسيق أعمال المقاولين الفرعيين، الإشراف على التنفيذ، وضمان الجودة والسلامة في موقع البناء.",
     },
     {
          question: "كيف يتم تقدير تكلفة المشروع في المقاولات العامة؟",
          answer: "يتم تقدير تكلفة المشروع من خلال تحليل عدة عوامل مثل تكلفة المواد، العمالة، المعدات، وتعقيد التصميم. عادةً ما يُعتمد على دراسة جدوى مفصلة لضمان تحديد الميزانية بدقة قبل البدء في التنفيذ.",
     },
     {
          question: "ما هي الإجراءات اللازمة لبدء مشروع مقاولات؟",
          answer: "تشمل الإجراءات اللازمة وضع دراسة جدوى، الحصول على التراخيص والتصاريح، إعداد خطة عمل مفصلة، واختيار فريق عمل متخصص لضمان تنفيذ المشروع بكفاءة وفعالية.",
     },
     {
          question: "كيف يتم ضمان جودة العمل في المشاريع؟",
          answer: "يتم ضمان جودة العمل من خلال الالتزام بمعايير البناء الدولية، إجراء فحوصات دورية، استخدام مواد عالية الجودة، وتوظيف خبراء متخصصين للإشراف على مراحل التنفيذ المختلفة.",
     },
];

const FAQAccordion = () => {
     useEffect(() => {
          Aos.init({
               duration: 1000,
               easing: 'ease-in-out',
          });
     }, []);

     return (
          <div className="relative pb-20 overflow-x-hidden px-5 bg-white dark:bg-black text-black dark:text-white" style={{ direction: 'rtl' }}>
               <div className='container mx-auto'>
                    <div className="flex flex-col items-center mb-5 mt-10" data-aos="fade-up">
                         <h2 className="text-lg lg:text-2xl font-bold text-black dark:text-white">أسئلة عنا</h2>
                         <h3 className="text-2xl md:text-5xl font-bold text-[#0f1a1c] dark:text-gray-200 mt-2 max-w-xl">
                              الأسئلة الشائعة
                         </h3>
                         <h4 className="lg:text-lg text-sm text-center text-[#5C6479] dark:text-gray-200 mt-2">
                              تعرف على المزيد عن القصر الاصيل وخدماتنا.
                         </h4>
                    </div>
                    <Accordion variant="separated">
                         {faqData.map((item, index) => (
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
