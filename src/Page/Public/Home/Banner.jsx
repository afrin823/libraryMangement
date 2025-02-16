import { useTranslation } from "react-i18next";
import banner from "../../../assets/ptl-corner-bg.webp";
import BannerSearch from "./BannerSearch";
const btn =
  "bg-primary text-natural px-4 py-2 mt-2 lg:px-6 lg:py-3 hover:bg-natural hover:text-primary text-sm sm:text-base md:text-lg mb-0";
const pera =
  "text-natural text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl";

const Banner = () => {
  const { t } = useTranslation();
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const isClosed = ["Sunday", "Monday", "Tuesday"].includes(today);
  return (
    <div className="relative w-full p-4 sm:p-8 md:p-12 lg:p-16 min-h-[300px] sm:min-h-[400px] md:min-h-[550px]  overflow-hidden">
      <img
        src={banner}
        alt="Historical Street Scene"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="flex flex-col gap-0 lg:gap-4 items-center justify-center h-full px-4">
          <h1 className="text-natural font-bold text-center">
            <h1>{t("home:banner_welcome")}</h1>
          </h1>
          <p className={pera}>{t("home:banner_change_language")}</p>
          <button className={btn}>{t("home:banner_button")}</button>
        </div>
        <div className="flex flex-col sm:flex-row width-control items-stretch w-full pb-4 sm:pb-8 px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Search Bar */}
          <BannerSearch />

          {/* Opening Hours */}
          <div className="bg-primary text-natural p-2 sm:p-3 md:p-4 sm:w-64 flex flex-col justify-center items-center">
            <p className="text-xs sm:text-sm">
              {isClosed
                ? t("home:banner_close_library")
                : t("home:banner_open_library")}
            </p>
            <h3 className="text-base ">{t("home:banner_time_range")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
