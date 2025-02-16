import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const ViewAllBtn = ({ href = "#" }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Link
        to={href}
        className="text-natural bg-primary p-2 px-4 hover:underline text-end absolute right-0 top-3"
      >
        {t("home:view_all_btn")}
      </Link>
    </div>
  );
};

export default ViewAllBtn;
