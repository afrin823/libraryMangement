import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";

const inputStyle = "px-4 py-1.5 border-2 border-primary w-full";
const formStyle =
  "max-w-6xl mx-auto  flex flex-col md:flex-row items-center gap-2 justify-between h-auto   md:p-0";

const BooksNav = ({ handleSearch, handleRefresh }) => {
  const { t } = useTranslation();

  const [isFixed, setIsFixed] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.getElementById("mainNav")?.offsetHeight || 20;
      if (window.scrollY > navHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchClick = () => {
    handleSearch(searchText);
  };

  return (
    <div
      className={`w-full bg-natural left-0 right-0 p-4 mt-2 lg:mt-8 z-50    transition-all duration-700 shadow-md ${isFixed ? "fixed top-[56px] lg:top-[54px] max-w-screen" : "relative"
        }`}
    >
      <div className={formStyle}>
        <div className="flex flex-col w-full md:flex-row items-center gap-3">
          <input
            type="text"
            name="searchingText"
            placeholder={t("books:book_search")}
            className={inputStyle}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="flex w-full md:w-auto  items-center gap-2">
          <button
            onClick={handleRefresh}
            className="bg-secondary  text-natural px-4 py-2 w-full md:w-auto flex items-center justify-center gap-2"
          >
            <span>{t("books:book_refresh_btn")}</span>
          </button>
          <button
            onClick={handleSearchClick}
            className="bg-primary  text-natural px-4 py-2 w-full md:w-auto flex items-center justify-center gap-2"
          >
            <FaSearch className="h-5 w-5" />
            <span>{t("books:book_search_btn")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksNav;
