import { useTranslation } from "react-i18next";
import SectionTitle from "../PublicComponent/SectionTitle";
import ScholarshipForm from "./SholarshipForm";

const  Scholarship = () => {
  const {t} = useTranslation(); 

  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl bg-natural px-4 sm:px-6 md:px-8 py-8 mx-auto">
        <div>
          <SectionTitle title={t("scholarship:scholarship_title")} />
        </div>
        <div>
         <ScholarshipForm />
        </div>
      </div>
    </div>
  );
}

export default Scholarship;