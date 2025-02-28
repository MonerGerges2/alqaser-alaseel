import logo from "/public/assets/logo-bg.png";
import { GoArrowUpLeft } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white pt-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image src={logo} alt="logo" className="h-40 w-auto object-contain" />
          </div>

          {/* روابط ذات صلة */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gold">{t("footer.relatedLinks")}</h3>
            <ul className="text-sm space-y-2">
              {[
                { label: t("footer.home"), to: "/" },
                { label: t("footer.projects"), to: "/#projects" },
                { label: t("footer.contactUs"), to: "/contact" },
                { label: t("footer.aboutUs"), to: "/about" },
              ].map((item, index) => (
                <li key={index} className="group transition duration-300 hover:text-gold">
                  {item.to.startsWith("/") ? (
                    <Link href={item.to} className="flex items-center justify-center gap-2 md:justify-start">
                      {item.label}
                      <GoArrowUpLeft className="ml-2 text-sm transition-transform duration-300 group-hover:-rotate-45" />
                    </Link>
                  ) : (
                    <Link href={item.to} className="flex items-center justify-center gap-2 md:justify-start">
                      {item.label}
                      <GoArrowUpLeft className="ml-2 text-sm transition-transform duration-300 group-hover:-rotate-45" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gold">{t("footer.contactInfo")}</h3>
            <p className="text-sm text-gray-400">{t("footer.address")}</p>
            <p className="text-lg text-gray-300 mt-3" dir="ltr">+000 0000 0000</p>
            <a href="mailto:info@example.com" className="text-sm text-gold hover:underline">
              info@example.com
            </a>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              {[
                { href: "#", icon: <FaFacebookF />, color: "hover:text-blue-500" },
                { href: "#", icon: <FaTwitter />, color: "hover:text-blue-400" },
                { href: "#", icon: <FaInstagram />, color: "hover:text-pink-500" },
                { href: "#", icon: <FaLinkedinIn />, color: "hover:text-blue-600" },
              ].map((social, index) => (
                <a key={index} href={social.href} className={`text-gray-400 text-lg transition duration-300 ${social.color}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* الحقوق محفوظة */}
      <div className="text-center text-sm text-gray-500 py-3 mt-5">
        {t("footer.rightsReserved")} {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
