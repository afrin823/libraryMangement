import { useTranslation } from "react-i18next";
import { RiTeamLine } from "react-icons/ri";
const circleStyle = "absolute flex items-center justify-center w-9 h-9 bg-base rounded-full -left-4 ring-4 ring-secondary text-primary";
const iconStyle = "text-5xl p-2 rounded-full";
const positionStyle = "flex items-center mb-1 text-lg font-semibold text-gray-900";
const nameStyle = "block mb-2 text-sm font-normal";
const ManagementOne = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="mb-10 ml-8">
                <div className={circleStyle}>
                    <RiTeamLine className={iconStyle} />
                </div>
                <h3 className={positionStyle}>
                    {t("about:about_management_position1")}
                </h3>
                <time className={nameStyle}>
                    {t("about:about_management_name1")}
                </time>
            </div>
            <div className="mb-10 ml-8">
                <div className={circleStyle}>
                    <RiTeamLine className={iconStyle} />
                </div>
                <h3 className={positionStyle}>
                    {t("about:about_management_position2")}
                </h3>
                <time className={nameStyle}>
                    {t("about:about_management_name2")}
                </time>
            </div>
            <div className="mb-10 ml-8">
                <div className={circleStyle}>
                    <RiTeamLine className={iconStyle} />
                </div>
                <h3 className={positionStyle}>
                    {t("about:about_management_position3")}
                </h3>
                <time className={nameStyle}>
                    {t("about:about_management_name3")}
                </time>
            </div>
            <div className="ml-8">
                <div className={circleStyle}>
                    <RiTeamLine className={iconStyle} />
                </div>
                <h3 className={positionStyle}>
                    {t("about:about_management_position4")}
                </h3>
                <time className="block text-sm font-normal">
                    {t("about:about_management_name4")}
                </time>
            </div>
        </>
    );
};

export default ManagementOne;