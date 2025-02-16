import { useTranslation } from "react-i18next";

const AboutHero = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-natural">
            <div className="container flex flex-col justify-center mx-auto px-4 py-6 md:py-8 lg:flex-row lg:justify-between lg:gap-8">
                {/* Text Section */}
                <div className="flex flex-col justify-center items-start w-full md:w-[50%] lg:w-[50%]">
                    <h1 className="font-bold text-primary">
                    {t("about:about_hero_title")}
                    </h1>
                    <p className="text-justify mt-4 text-sm md:text-lg lg:text-xl">
                    {t("about:about_description")}
                    </p>
                </div>
                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 md:w-[50%] lg:w-[50%]">
                    <img
                        src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5919.jpg"
                        alt="Open textbook in a library"
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
