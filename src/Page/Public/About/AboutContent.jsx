import { useTranslation } from "react-i18next";
import SectionTitle from "../PublicComponent/SectionTitle";
import ManageMentTeam from "./ManageMentTeam";

const AboutContent = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-base h-3/4">
            <div className="container width-control p-6 ">
                <div className="mb-6">
                    <SectionTitle title={t("about:about_management_title")} />
                </div>
                <ManageMentTeam />


            </div>
        </div>
    );
};

export default AboutContent;
