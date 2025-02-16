import { useTranslation } from "react-i18next";
const mainDinStyle = "container flex flex-col justify-center items-center mx-auto px-4 py-6 lg:flex-row lg:justify-between lg:items-center lg:gap-8";
const imgStyle = "object-contain w-full h-auto max-h-[200px] sm:max-h-[300px] lg:max-h-[400px]";

const AboutObjectives = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-natural">
            <div className={mainDinStyle}>
                <div className="flex items-center justify-center w-full lg:w-[50%]">
                    <img
                        src="https://cdn.pixabay.com/photo/2024/04/19/12/13/ai-generated-8706226_640.png"
                        alt="About Us"
                        className={imgStyle}
                    />
                </div>
                <div className="flex flex-col justify-center items-start w-full mt-6 lg:mt-0 lg:w-[50%]">
                    <h5 className="justify-start font-bold text-primary">
                        {t("about:about_objectives_title")} :
                    </h5>
                    <div className="mt-4 text-sm lg:text-lg text-left">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>{t("about:about_objectives_dec_1")}</li>
                            <li>{t("about:about_objectives_dec_2")}</li>
                            <li>{t("about:about_objectives_dec_3")}</li>
                            <li>{t("about:about_objectives_dec_4")}</li>
                            <li>{t("about:about_objectives_dec_5")}</li>
                        </ol>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutObjectives;
