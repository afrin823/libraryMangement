import { useTranslation } from "react-i18next";

const btnStyle = 'bg-natural hover:bg-primary hover:text-natural focus:outline-none  px-6 py-3 border border-natural text-primary font-medium transition-colors group';

const Brand = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="relative bg-primary width-control min-h-[200px]  my-6  overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-primary bg-[length:30px_30px]" />
                <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h3 className=" font-bold text-natural leading-tight">
                        {t("home:brand_title")}
                        </h3>
                    </div>

                    <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
                        <p className="text-natural max-w-md">
                        {t("home:brand_description")}
                        </p>
                        <button className={btnStyle}>
                        {t("home:brand_btn")}
                            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;
