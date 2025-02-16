import { useTranslation } from "react-i18next";
import Notice from "../PublicComponent/Notice";
import SectionTitle from "../PublicComponent/SectionTitle";
import ViewAllBtn from "../PublicComponent/ViewAllBtn";
import HomeEvent from "./Event/HomeEvent";

const Event = () => {
  const { t } = useTranslation();


  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <section className="lg:col-span-1 space-y-4">
          <h5 className="text-center py-4 bg-primary text-natural font-bold">
            {t("home:notice_title")}
          </h5>
          <Notice />
        </section>
        {/* Events Section */}
        <section className="lg:col-span-3">
          <div className="mb-6 relative">
            <SectionTitle title={t("home:event_title")} />
            <ViewAllBtn href="" />
          </div>
          <HomeEvent />
        </section>
      </div>
    </div>
  );
};

export default Event;
