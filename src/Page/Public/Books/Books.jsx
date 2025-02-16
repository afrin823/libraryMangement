import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import BooksLoader from "../../../loader/BooksLoader";
import BooksCard from "../PublicComponent/collection/BooksCard";
import SectionTitle from "../PublicComponent/SectionTitle";
import BooksNav from "./BooksNav";
import BooksSidebar from "./BooksSidebar";
import { useTranslation } from "react-i18next";

const Books = () => {
  const {t} = useTranslation()

  const axiosPublic = useAxiosPublic();
  const { searchText, setSearchText } = useAuthContext();
  const [search, setSearch] = useState(searchText || "");

  // **বই লোড করার ফাংশন**
  const fetchBooks = async ({ pageParam = 0 }) => {
    const response = await axiosPublic(
      `/book?searchTerm=${search}&fields=bookName,writerName,publisher,quantity,image,category,rating&limit=8&page=${pageParam}`
    );
    return response?.data.data;
  };

  const {
    data = [],
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["allBooks", search],
    queryFn: fetchBooks,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      // Check if lastPage exists and is an array
      if (!lastPage || !Array.isArray(lastPage) || lastPage.length < 8) {
        return undefined; // No more pages
      }
      return pages.length; // Next page index
    },
  });

  const handleSearch = (text) => {
    setSearch(text);
  };

  const handleRefresh = () => {
    setSearch("");
  };
  const searchByCategory = (category) => {
    setSearch(category)
  }

  setSearchText("");
  return (
    <div className="width-control px-1 lg:px-3 relative">
      <SectionTitle title={t("books:books_title")} />
      <div className="width-control z-50 bg-base overflow-hidden">
        <BooksNav handleSearch={handleSearch} handleRefresh={handleRefresh} />
      </div>
      <div className="grid lg:grid-cols-12 gap-4 mt-6">
        <div className="lg:col-span-2  overflow-x-hidden ">
          <BooksSidebar searchByCategory={searchByCategory} />
        </div>
        <div className="lg:col-span-10  ">
          {status === "loading" ? (
            <BooksLoader />
          ) : status === "error" ? (
            <div>Error: {error.message}</div>
          ) : (
            <>
              {data?.pages?.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {data.pages.map((page, index) => (
                    <React.Fragment key={index}>
                      {Array.isArray(page) &&
                        page.map((book) => (
                          <BooksCard key={book._id} collection={book} />
                        ))}
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <p className="text-center mt-4">{t("books:book_loading")}</p>
              )}
            </>
          )}

          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage || !hasNextPage}
              className={`bg-primary text-white py-2 px-4 rounded transition-opacity ${
                !hasNextPage ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isFetchingNextPage
                ? `${t("books:book_loading_more")}`
                : hasNextPage
                ? `${t("books:book_load_more")}`
                : `${t("books:book_no_more_boos")}`}
            </button>
          </div>
          <div>{isFetching ? <BooksLoader /> : null}</div>
        </div>
      </div>
    </div>
  );
};

export default Books;
