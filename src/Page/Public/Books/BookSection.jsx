import BooksSidebar from "./BooksSidebar";

const BookSection = ({ searchByCategory, isPending }) => {
  return (
    <div className="mt-0 md:mt-6  ">
      <div className="flex flex-col lg:flex-row gap-2 md:gap-8">
        <div className="w-full lg:w-1/5">
          <BooksSidebar
            isPending={isPending}
            searchByCategory={searchByCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default BookSection;
