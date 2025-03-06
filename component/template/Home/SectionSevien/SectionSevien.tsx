import Link from "next/link";
import { useTranslation } from "react-i18next";

const SectionSevien = () => {
     const { t } = useTranslation();

     return (
          <section className="py-16 bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
               <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">{t("have_a_question")}</h2>
                    <p className="text-lg mb-8">{t("question_description")}</p>
                    <Link
                         href="/contact"
                         className="bg-yellow-500 text-black hover:bg-yellow-600 px-10 py-3 text-xl font-bold rounded-lg group gap-4 shadow-lg transition-all duration-300 inline-block"                    >
                         {t("contact_us_now")}
                    </Link>
               </div>
          </section>
     );
};

export default SectionSevien;
