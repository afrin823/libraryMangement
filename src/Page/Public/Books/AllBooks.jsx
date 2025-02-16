import BooksLoader from "../../../loader/BooksLoader";
import BooksCard from "../PublicComponent/collection/BooksCard";
 
const AllBooks = ({ books, postPerPage }) => {


    // if (!isFetched) return <BooksLoader />;
    // if (isLoading) return <BooksLoader />;
    if (books.length < 0) return <BooksLoader />; 

  

    return (
        <div>
            <section className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books?.slice(0, postPerPage).map((book) => (
                        <BooksCard key={book._id} collection={book} />
                    ))}
                </div>

             
                <div className="flex justify-center mt-6">
                    {books.length < 8 ? (
                        <div className="text-center text-red-500 font-semibold text-lg">
                            No books found.
                        </div>
                    ) : (
                        <button 
                            className="px-6 py-2 bg-primary text-natural  hover:bg-secondary transition"
                        >
                            next
                        </button>
                    )}
                </div>
            </section>
 
        </div>
   
  );
};

export default AllBooks;