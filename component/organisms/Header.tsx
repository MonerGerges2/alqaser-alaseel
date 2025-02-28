import { useState, useEffect } from "react";
import logo from "/public/assets/logo.png";
import logoScrolled from "/public/assets/logo.png";
import { Burger, Transition, Paper, Menu } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../mucles/NavLink";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const [opened, setOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.body.setAttribute("dir", dir);
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  const handleDropdownToggle = (index: any) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    { text: t("nav.home"), link: "/" },
    { text: t("nav.about"), link: "/about" },
    {
      text: t("nav.services"),
      link: "/services",
      dropdown: [
        {
          text: t("nav.webDevelopment"),
          link: "/services/web-development",
          subDropdown: [
            { text: t("nav.frontend"), link: "/services/web-development/frontend" },
            { text: t("nav.backend"), link: "/services/web-development/backend" },
          ],
        },
        { text: t("nav.mobileDevelopment"), link: "/services/mobile-development" },
      ],
    },
    { text: t("nav.blog"), link: "/blog" },
    { text: t("nav.contact"), link: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? "bg-white shadow-md backdrop-blur-xl" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Mobile Menu Toggle */}
        {isMobile && (
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="md" color="black" />
        )}

        {/* Logo */}
        <Link href="/" className="lg:w-44 w-36 lg:h-16 h-10 transition-all duration-300 ease-in-out ">
          <Image src={scrolled ? logoScrolled : logo} alt="logo" className="object-contain w-full h-full" />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="bg-white/50 backdrop-blur-2xl rounded-2xl px-6 py-2">
            <div className="flex items-center text-black gap-4">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <div key={index} className="group">
                    <Menu trigger="hover" openDelay={100} closeDelay={200} position="bottom-start">
                      <Menu.Target>
                        <button className="text-black flex items-center px-5 py-2 gap-1">
                          {item.text}
                          <MdArrowOutward className="ml-1 transition-transform duration-300 group-hover:rotate-[135deg]" />
                        </button>
                      </Menu.Target>
                      <Menu.Dropdown>
                        {item.dropdown.map((subItem, subIndex) =>
                          subItem.subDropdown ? (
                            <Menu key={subIndex} trigger="hover" openDelay={100} closeDelay={200} position="right-start">
                              <Menu.Target>
                                <Menu.Item>{subItem.text}</Menu.Item>
                              </Menu.Target>
                              <Menu.Dropdown>
                                {subItem.subDropdown.map((subSubItem, subSubIndex) => (
                                  <Menu.Item key={subSubIndex} component={Link} href={subSubItem.link}>
                                    {subSubItem.text}
                                  </Menu.Item>
                                ))}
                              </Menu.Dropdown>
                            </Menu>
                          ) : (
                            <Menu.Item key={subIndex} component={Link} href={subItem.link}>
                              {subItem.text}
                            </Menu.Item>
                          )
                        )}
                      </Menu.Dropdown>
                    </Menu>
                  </div>
                ) : (
                  <NavLink key={index} text={item.text} link={item.link} />
                )
              )}
              <button className="flex items-center gap-1 text-mainColor" onClick={toggleLanguage}>
                <p>{i18n.language === "ar" ? "EN" : "AR"}</p>
                <FaGlobe className="text-xl" />
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper
              style={styles}
              className="absolute top-full left-0 right-0 bg-gray-900 backdrop-blur-xl mx-5 shadow-lg text-white rounded-lg"
              shadow="md"
              radius={20}
              withBorder
            >
              <nav className="flex flex-col gap-4 p-4 text-white">
                {navItems.map((item, index) =>
                  item.dropdown ? (
                    <div key={index}>
                      <button
                        className="w-full text-left flex items-center px-5 py-2"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        <MdArrowOutward className={`transition-transform ml-2 ${activeDropdown === index ? "rotate-90" : ""}`} />
                        {item.text}
                      </button>
                      {activeDropdown === index && (
                        <div className="ml-4">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link key={subIndex} href={subItem.link} className="block py-1">
                              {subItem.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink key={index} text={item.text} link={item.link} onClick={() => setOpened(false)} />
                  )
                )}
                <button className="flex items-center justify-center gap-1 text-mainColor font-bold" onClick={toggleLanguage}>
                  <p>{i18n.language === "ar" ? "EN" : "AR"}</p>
                  <FaGlobe className="text-2xl" />
                </button>
              </nav>
            </Paper>
          )}
        </Transition>
      )}
    </header>
  );
};

export default Header;
