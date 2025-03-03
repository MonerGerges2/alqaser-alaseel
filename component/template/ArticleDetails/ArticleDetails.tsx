import Image from "next/image";
import { useTranslation } from "react-i18next";

const ArticleDetails = ({ data }: any) => {
     const { i18n } = useTranslation();
     const language = i18n.language;
     const textDirectionClass = language === "ar" ? "text-right" : "text-left";

     return (
          <div className="container mx-auto px-5 lg:px-10">
               <div className="w-full flex justify-center my-5">
                    <Image src={`${data?.web_image}`} alt="project thumpnail" width={0} height={0} className="w-full h-auto rounded-md" />
               </div>
               <div className={`flex flex-col space-y-5 ${textDirectionClass}`}>
                    <h3 className="text-[#191919] dark:text-gray-200 font-cairo font-semibold text-xl lg:pb-3 lg:text-4xl">{data?.title}</h3>
                    {/* git content from tiny */}
                    <div className="font-cairo text-[#404040] dark:text-gray-400 text-base" dangerouslySetInnerHTML={{ __html: data?.content }} />
               </div>
          </div>
     );
};

export default ArticleDetails;
