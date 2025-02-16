import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import BooksCard from "../PublicComponent/collection/BooksCard";
import SectionTitle from "../PublicComponent/SectionTitle";
import ViewAllBtn from "../PublicComponent/ViewAllBtn";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import BooksLoader from "../../../loader/BooksLoader";
const Collection = () => {
  const { t } = useTranslation();
  const axiosPublic = useAxiosPublic();

  const { isPending, data: collections } = useQuery({
    queryKey: ['collection'],
    queryFn: async () => {
      const res = await axiosPublic(`/book?fields=bookName,_id,writerName,publisher,registrationNo,quantity,bookshelfLocation,year,image,edition,ISBN,language,category,description,rating&limit=4&sort=bookName`); 
      return res.data.data; 
    }
  });
 
  if (isPending) {
    return <BooksLoader />;
  }

  return (
    <div className="w-full width-control px-2 py-8">
      <div className="mb-6 relative">
        <SectionTitle title={t("home:latest_collection")} />
        <ViewAllBtn href="/books" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {collections?.slice(0,4).map((book) => (
          <BooksCard key={book.bookName} collection={book} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
