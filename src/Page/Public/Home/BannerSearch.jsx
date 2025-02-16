import { useTranslation } from "react-i18next";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../../AuthProvider/AuthProvider";
import { responseMessage } from "../../../utils/responseMessage/responseMessage";
const searchStyle =
  "w-full border-b-2 border-primary py-2 sm:py-3 px-3 sm:px-4 pr-10 text-sm  md:text-lg bg-natural focus:outline-none";
const btnStyle =
  "absolute right-3 top-1/2 transform -translate-y-1/2 text-primary";

const BannerSearch = () => {
  const { t } = useTranslation();
  const { setSearchText } = useAuthContext();
  const navigate = useNavigate();

  const getSearchText = (e) => {
    e.preventDefault();
    if (e.target.searchingText.value) {
      setSearchText(e.target.searchingText.value);
      navigate("/books");
    } else {
      responseMessage(
        "error",
        "Please enter your books name or category",
        "Empty text"
      );
    }
  };
  return (
    <div className="flex-grow bg-natural p-2 sm:p-3 md:p-4">
      <form onSubmit={getSearchText} className="relative">
        <input
          type="text"
          name="searchingText"
          placeholder={t("home:banner_placeholder")}
          className={searchStyle}
        />
        <button className={btnStyle} aria-label="Search">
          <IoMdSearch className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </form>
    </div>
  );
};

export default BannerSearch;
