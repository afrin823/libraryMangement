import { useTranslation } from "react-i18next";
import { RiTeamLine } from "react-icons/ri";
const circleStyle = "absolute flex items-center justify-center w-9 h-9 bg-base rounded-full -left-4 ring-4 ring-secondary text-primary";
const iconStyle = "text-5xl p-2 rounded-full";
const positionStyle = "flex items-center mb-1 text-lg font-semibold text-gray-900";
const nameStyle = "block mb-2 text-sm font-normal";

const ManagementTwo = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="mb-10 ml-8">
                <div className={circleStyle}>
                    <RiTeamLine className={iconStyle} />
                </div>
                <h3 className={positionStyle}>
                    {t("about:about_management_position5")}
                </h3>
                <time className={nameStyle}>
                    {t("about:about_management_name5")}
                </time>
                <time className={nameStyle}>
                    {t("about:about_management_name6")}
                </time>
                <time className={nameStyle}>
                    {t("about:about_management_name7")}
                </time>
            </div>
            <div className="mb-10 ml-8">
                <div className={circleStyle}>
                    <RiTeamLine className={iconStyle} />
                </div>
                <h3 className={positionStyle}>
                    {t("about:about_management_position6")}
                </h3>
                <time className={nameStyle}>
                    {t("about:about_management_name8")}
                </time>
                <time className={nameStyle}>
                    {t("about:about_management_name9")}
                </time>
                <time className={nameStyle}>
                    {t("about:about_management_name10")}
                </time>
            </div>
            <div className="ml-8">
                <div className={circleStyle}>
                    <RiTeamLine className={iconStyle} />
                </div>
                <h3 className={positionStyle}>
                    {t("about:about_management_position7")}
                </h3>
                <time className={nameStyle}>
                    {t("about:about_management_name11")}
                </time>
                <time className={nameStyle}>
                    {t("about:about_management_name12")}
                </time>
                <time className="block text-sm font-normal">
                    {t("about:about_management_name13")}
                </time>
            </div>
        </>
    );
};

export default ManagementTwo;