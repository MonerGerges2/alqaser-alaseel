import { MdArrowOutward } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";

const NavLink = ({
     text,
     link = "#",
     onClick
}: {
     text: string,
     link: string
     onClick?: () => void
}) => {
     const { i18n } = useTranslation();
     const dir = i18n.dir();
     const isMobile = useMediaQuery("(max-width: 1023px)");
     const router = useRouter();
     const isActive = router.pathname === link;

     return (
          <Link href={link}
               onClick={onClick}
               className={`bg-inherit px-5 py-2 flex items-center group text-base ${isMobile ? "text-white" : "text-black dark:text-white"}`}
          >
               <MdArrowOutward className={`inline-block ml-2 transition-transform duration-300 ${isActive ? "rotate-45" : "group-hover:rotate-45"} ${dir === "rtl" ? "block" : "hidden"}`} />
               {text}
               <MdArrowOutward className={`inline-block ml-2 transition-transform duration-300 ${isActive ? "rotate-45" : "group-hover:rotate-45"} ${dir === "rtl" ? "hidden" : "block"}`} />
          </Link>
     );
}

export default NavLink;
