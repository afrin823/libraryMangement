import { useTranslation } from "react-i18next";
import SectionTitle from "../PublicComponent/SectionTitle";
import ContactForm from "./ContactForm";

const cardDiv = "flex items-start gap-4";
const descriptionStyle = "text-black";
const numberStyle = "flex-shrink-0 w-10 h-10 rounded-full bg-primary text-natural flex items-center justify-center font-bold text-xl";


const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <div className="my-6">
      <SectionTitle title={t("contact:contact_title")} />
      <div className="flex flex-col my-6 md:flex-row flex-wrap w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
          <h1 className="text-primary font-bold mb-4">{t("contact:contact_title")}</h1>
          <h6 className="text-secondary mb-8">
            {t("contact:contact_sub_title")}
          </h6>

          {/* Steps */}
          <div className="space-y-6 sm:space-y-8">
            <div className={cardDiv}>
              <div className={numberStyle}>1</div>
              <div className={descriptionStyle}>
                <span className="font-bold">{t("contact:contact_card_title1")}:</span> {t("contact:contact_card_description1")}
              </div>
            </div>

            <div className={cardDiv}>
              <div className={numberStyle}>2</div>
              <div className={descriptionStyle}>
                <span className="font-bold">{t("contact:contact_card_title2")}:</span> {t("contact:contact_card_description2")}
              </div>
            </div>

            <div className={cardDiv}>
              <div className={numberStyle}>3</div>
              <div className={descriptionStyle}>
                <span className="font-bold">{t("contact:contact_card_title3")}:</span> {t("contact:contact_card_description3")}
              </div>
            </div>

            <div className={cardDiv}>
              <div className={numberStyle}>4</div>
              <div className={descriptionStyle}>
                <span className="font-bold">{t("contact:contact_card_title4")}:</span> {t("contact:contact_card_description4")}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 shadow-md p-6 sm:p-8 md:p-12">
       <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
