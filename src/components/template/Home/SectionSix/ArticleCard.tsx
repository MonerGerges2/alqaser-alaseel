import { FaCalendarAlt } from "react-icons/fa";

const ArticleCard = ({ article }: { article: any }) => {
     return (
          <div className="bg-white shadow-lg !rounded-2xl transition-transform transform cursor-pointer w-[90%] mx-auto border group">
               <div className="w-full h-60 overflow-hidden !rounded-t-2xl">
                    <img src={article.image} alt={article.title} className="w-full h-60 object-cover group-hover:scale-110 duration-500" />
               </div>
               <div className="p-5 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{article.title}</h3>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">{article.description}</p>
                    <div className="flex items-center justify-center text-gray-500 text-sm mt-4">
                         <FaCalendarAlt className="mr-2 text-gold" />
                         <span>{article.date}</span>
                    </div>
               </div>
          </div>
     );
};

export default ArticleCard;