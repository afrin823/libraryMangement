import { useTranslation } from "react-i18next";
import RulesDescription from "./RulesDescription";
import RulesSection from "./RulesSection";
import SectionTitle from "../PublicComponent/SectionTitle";

const Rules = () => {
  const { t } = useTranslation();

  // member rules
  const memberRules = t("rules:member_rules_content", { returnObjects: true }) || [];
  // user rules
  const userRules = t("rules:user_rules_content", { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-natural">
      <div className="width-control py-16">
        <div className="mb-6">
          <SectionTitle title={t("rules:rules_title")} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <RulesSection title={t("rules:member_rules_title")} rules={memberRules.map(rule => rule.member_rules)} />
          </div>

          <div className="col-span-12 md:col-span-7">
            <RulesSection title={t("rules:user_rules_title")} rules={userRules.map(rule => rule.user_rules)} />
          </div>
        </div>

        <RulesDescription />
      </div>
    </div>
  );
};

export default Rules;
