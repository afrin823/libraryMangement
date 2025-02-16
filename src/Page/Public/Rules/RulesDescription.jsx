import { useTranslation } from "react-i18next";
const pera = 'font-medium text-lg text-paragraph';
const description = "text-xl font-medium";

const RulesDescription = () => {
    const { t } = useTranslation();

    return (
        <div className="text-center max-w-4xl mx-auto mt-8">
            <p className={description}>{t("rules:member_rules_description")}</p>
            <p className={pera}>{t("rules:member_rules_thanks")}</p>
            <p className={pera}>{t("rules:member_rules_committee")}</p>
            <p className={pera}>{t("rules:member_rules_organization")}</p>
            <p className={pera}>{t("rules:member_rules_address")}</p>
        </div>
    )

}

export default RulesDescription;
