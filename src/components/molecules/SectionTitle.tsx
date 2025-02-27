import { useTranslation } from "react-i18next";

type SectionTitleProps = {
  color: string;
  children: string;
  className?: string;
};

const SectionTitle = ({ color, children, className }: SectionTitleProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const direction = lang === "ar" ? "ltr" : "rtl";
  return (
    <div dir={direction} className={`mb-10 flex justify-end text-right w-full relative container px-5 lg:px-10 ${className}`} style={{ color: color }}>
      <h1
        className="text-[10px] md:text-lg font-bold font-laxr flex items-center" // استخدام flexbox
        style={{ color: color }}
      >
        <span
          style={{
            display: "inline-block",
            height: "1px",
            backgroundColor: color,
            marginRight: "15px",
            marginLeft: "15px",
            marginTop: "5px"
          }}
          className="w-[100px] md:w-[199px]"
        />
        {children}
      </h1>
    </div>
  );
};

export default SectionTitle;
