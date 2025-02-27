import { MdArrowOutward } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import {useTranslation} from "react-i18next";

const NavLink = ({
     text,
     link = "#",
     onClick
}: {
     text: string,
     link: string
     onClick?: () => void
}) => {
     const {i18n} = useTranslation();
     const dir = i18n.dir();

     return (
          <HashLink smooth to={link}
               onClick={onClick}
               className="text-black bg-inherit px-5 py-2 flex items-center group text-base"
               >
               <MdArrowOutward className={`inline-block ml-2 transition-transform duration-300 group-hover:rotate-45 ${dir === "rtl" ? "block" : "hidden" }`} />
               {text}
               <MdArrowOutward className={`inline-block ml-2 transition-transform duration-300 group-hover:rotate-45 ${dir === "rtl" ? "hidden" : "block" }`} />
          </HashLink>
     );
}

export default NavLink;
