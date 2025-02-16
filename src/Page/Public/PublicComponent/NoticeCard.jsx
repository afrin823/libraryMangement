import { useTranslation } from "react-i18next";

const title = "font-bold text-primary";
const contextDiv =
  "text-start p-6 h-full shadow-md hover:shadow-2xl w-full object-cover rounded-md cursor-pointer hover:shadow-2xl transition-all duration-500";

const NoticeCard = ({ notice }) => {
  const { i18n } = useTranslation();
  return (
    <div className={contextDiv}>
      <h6 className={title}>{notice?.title[i18n.language]}</h6>
      <p className="text-justify">
        {notice.description[i18n.language].length > 250
          ? notice.description[i18n.language].slice(0, 250) + "..."
          : notice.description[i18n.language]}
      </p>
    </div>
  );
};

export default NoticeCard;
