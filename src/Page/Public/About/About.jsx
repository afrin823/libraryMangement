import { useTranslation } from "react-i18next";
import Brand from "../Home/Brand";
import SectionTitle from "../PublicComponent/SectionTitle";
import AboutContent from "./AboutContent";
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutObjectives from "./AboutObjectives";



const About = () => {
    const { t } = useTranslation();
    return (
        <div className="width-control">
            <div className="py-3 md:py-6">
                <SectionTitle title={t("about:about_hero_title")} />
            </div>
            <AboutHero />
            <Brand />
            <AboutMission />
            <AboutObjectives />
            <AboutContent />
        </div>
    );
};

export default About;