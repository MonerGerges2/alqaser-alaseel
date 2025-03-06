import { useState, useEffect } from "react";
import logo from "/public/assets/logo-bg.png";
import { Burger, Transition, Paper, Menu } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaMoon, FaSun } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../mucles/NavLink";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const [opened, setOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

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

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const servicesDropdown = [
    {
      category: t("nav.construction"),
      services: [
        { text: t("nav.servicesList.buildingRenovation"), link: "/services/building-renovation" },
        { text: t("nav.servicesList.facadeRenovation"), link: "/services/facade-renovation" },
        { text: t("nav.servicesList.tiling"), link: "/services/tiling" },
        { text: t("nav.servicesList.painting"), link: "/services/painting" }
      ],
    },
    {
      category: t("nav.insulation"),
      services: [
        { text: t("nav.servicesList.waterproofing"), link: "/services/waterproofing" }
      ],
    },
    {
      category: t("nav.interiorExterior"),
      services: [
        { text: t("nav.servicesList.gypsumBoard"), link: "/services/gypsum-board" },
        { text: t("nav.servicesList.interlockStone"), link: "/services/interlock-stone" },
        { text: t("nav.servicesList.interiorExteriorDecor"), link: "/services/interior-exterior-decor" }
      ],
    },
    {
      category: t("nav.electricalPlumbing"),
      services: [
        { text: t("nav.servicesList.electricalPlumbing"), link: "/services/electrical-plumbing" },
        { text: t("nav.servicesList.acCooling"), link: "/services/ac-cooling" }
      ],
    }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? "bg-white dark:bg-black shadow-md" : "bg-transparent"}`} dir={dir}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Mobile Menu Toggle */}
        {isMobile && <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="md" color="black" />}

        {/* Logo */}
        <Link href="/" className="lg:w-44 w-10 lg:h-16 h-10">
          <Image src={logo} alt="logo" className="object-contain w-full h-full" />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="bg-white/50 dark:bg-black/50 backdrop-blur-2xl rounded-2xl px-6 py-2">
            <div className="flex items-center gap-4">
              <NavLink text={t("nav.home")} link="/" />
              <NavLink text={t("nav.about")} link="/about" />

              {/* Services Dropdown */}
              <Menu trigger="hover" openDelay={100} closeDelay={200} position="bottom-start">
                <Menu.Target>
                  <button className="flex items-center px-5 py-2 gap-1 group  text-black dark:text-white">
                    <MdArrowOutward className={`mx-1 transition-transform group-hover:rotate-[135deg] ${dir === "rtl" ? "block" : "hidden"}`} />
                    {t("nav.services")}
                    <MdArrowOutward className={`mx-1 transition-transform group-hover:rotate-[135deg] ${dir === "ltr" ? "block" : "hidden"}`} />
                  </button>
                </Menu.Target>
                <Menu.Dropdown className="bg-white dark:bg-gray-900 border dark:border-gray-700 shadow-lg">
                  {servicesDropdown.map((category, index) => (
                    <Menu key={index} trigger="hover" openDelay={100} closeDelay={200} position="right-start" withArrow>
                      <Menu.Target>
                        <Menu.Item className="hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white">
                          {category.category}
                        </Menu.Item>
                      </Menu.Target>
                      <Menu.Dropdown className="bg-white dark:bg-gray-900 border dark:border-gray-700 shadow-lg">
                        {category.services.map((service, subIndex) => (
                          <Menu.Item
                            key={subIndex}
                            component={Link}
                            href={service.link}
                            className="hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white"
                          >
                            {service.text}
                          </Menu.Item>
                        ))}
                      </Menu.Dropdown>
                    </Menu>
                  ))}
                </Menu.Dropdown>
              </Menu>

              <NavLink text={t("nav.blog")} link="/blog" />
              <NavLink text={t("nav.contact")} link="/contact" />

              <button onClick={toggleLanguage} className="flex items-center gap-1 text-black dark:text-white">
                <p>{i18n.language === "ar" ? "EN" : "AR"}</p>
                <FaGlobe className="text-xl" />
              </button>
              <button onClick={toggleDarkMode} className="p-2 rounded-full transition">
                {darkMode ? <FaSun className="text-yellow-500" size={20} /> : <FaMoon className="text-gray-900 dark:text-white" size={20} />}
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
                <NavLink text={t("nav.home")} link="/" onClick={() => setOpened(false)} />
                <NavLink text={t("nav.about")} link="/about" onClick={() => setOpened(false)} />

                {/* Mobile Services Dropdown */}
                <Menu trigger="hover" openDelay={100} closeDelay={200} position="bottom-start">
                  <Menu.Target>
                    <button className="flex items-center w-full text-left px-5 py-2">
                      {t("nav.services")}
                      <MdArrowOutward className="ml-1 transition-transform group-hover:rotate-[135deg]" />
                    </button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    {servicesDropdown.map((category, index) => (
                      <Menu key={index} trigger="hover" openDelay={100} closeDelay={200} position="right-start">
                        <Menu.Target>
                          <Menu.Item>{category.category}</Menu.Item>
                        </Menu.Target>
                        <Menu.Dropdown>
                          {category.services.map((service, subIndex) => (
                            <Menu.Item key={subIndex} component={Link} href={service.link}>
                              {service.text}
                            </Menu.Item>
                          ))}
                        </Menu.Dropdown>
                      </Menu>
                    ))}
                  </Menu.Dropdown>
                </Menu>

                <NavLink text={t("nav.blog")} link="/blog" onClick={() => setOpened(false)} />
                <NavLink text={t("nav.contact")} link="/contact" onClick={() => setOpened(false)} />

                <div className="flex items-center justify-center">
                  <button onClick={toggleLanguage} className="flex items-center gap-1 text-mainColor">
                    <p>{i18n.language === "ar" ? "EN" : "AR"}</p>
                    <FaGlobe className="text-2xl" />
                  </button>
                  <button onClick={toggleDarkMode} className="p-2 rounded-full transition">
                    {darkMode ? <FaSun className="text-yellow-500" size={20} /> : <FaMoon className="text-gray-900" size={20} />}
                  </button>
                </div>
              </nav>
            </Paper>
          )}
        </Transition>
      )}
    </header>
  );
};

export default Header;
