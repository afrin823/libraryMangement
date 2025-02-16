import { useTranslation } from "react-i18next";
const titleStyle = "text-primary font-bold";
const mainContentStyle = "space-y-4";
const descriptionStyle = "text-lg text-justify";

const AboutMission = () => {
  const { t } = useTranslation();
  return (
    <div className="width-control grid grid-cols-1 md:grid-cols-2 gap-8  py-6">
      <div className={mainContentStyle}>
        <h5 className={titleStyle}>{t("about:about_mission_title")}</h5>
        <p className={descriptionStyle}>
          {t("about:about_mission_description")}
        </p>
      </div>

      <div className={mainContentStyle}>
        <h5 className={titleStyle}>{t("about:about_vision_title")}</h5>
        <p className={descriptionStyle}>
          {t("about:about_vision_description")}
        </p>
      </div>
    </div>
  );
};

export default AboutMission;