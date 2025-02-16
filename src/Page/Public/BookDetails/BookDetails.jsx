import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { MdLanguage, MdOutlineDateRange } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import Collection from "../Home/Collection";
import SectionTitle from "../PublicComponent/SectionTitle";
import BookDetailsLoader from "../../../loader/BookDetailsLoader";
const peraStyle = "text-gray-700";

const BookDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    const { isLoading, data: singleBook } = useQuery({
        queryKey: ['singleBook', id],
        queryFn: async () => {
            const res = await axiosPublic(`book/${id}`);
            return res.data.data;
        }
    });

    if (isLoading) return <BookDetailsLoader />;


    const ratings = singleBook.rating || [];
    const averageRating = ratings.length > 0
        ? ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
        : 0;

    return (
        <div className="width-control">
            <div className="my-4">
                <SectionTitle title="Books Details" />
            </div>
            <div className="p-6 bg-natural shadow-lg ">
                <div className="flex flex-col md:flex-row items-stretch gap-6">

                    <div className="w-full md:w-1/3">
                        <img
                            src={singleBook.image}
                            alt={singleBook.bookName}
                            className="w-full h-72 md:h-[500px] max-h-[600px] object-cover shadow-md"
                        />
                    </div>


                    <div className="flex flex-col justify-between h-full space-y-3 mt-6">
                        <div>
                            <div>
                                <h2 className="text-2xl font-bold">{singleBook.bookName}</h2>
                                <p className="text-lg font-semibold text-gray-800">{singleBook.writerName}</p>
                                <p className="text-md text-gray-700">{singleBook.publisher}</p>
                            </div>

                            <div className="flex items-center gap-4 text-gray-600 text-sm">
                                <div className="flex items-center">
                                    <MdOutlineDateRange className="mr-1" />
                                    {singleBook.year}
                                </div>
                                <div className="flex items-center">
                                    <MdLanguage className="mr-1" />
                                    {singleBook.language}
                                </div>
                            </div>

                            <strong className="block text-gray-900">{singleBook.registrationNo}</strong>

                            <div className="flex items-center text-yellow-500 text-xl">
                                {ratings.length > 0 ? (
                                    <>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <IoStar
                                                key={index}
                                                className={index < Math.round(averageRating) ? "fill text-yellow-500" : "text-gray-300"}
                                            />
                                        ))}
                                    </>
                                ) : (
                                    <span className="text-gray-500">No ratings yet</span>
                                )}
                            </div>

                            <p className="text-sm text-gray-600">{singleBook.category}</p>
                            <p className={peraStyle}>{singleBook.bookshelfLocation}</p>

                            <p className={peraStyle}>{singleBook.edition}</p>
                            <p className={peraStyle}>{singleBook.ISBN}</p>
                            <p className={peraStyle}>{singleBook.quantity}</p>
                            <p className="text-gray-700 text-justify">
                                {singleBook.description}
                            </p>

                        </div>
                        <div className="flex gap-3">
                            <button className="bg-secondary text-natural px-4 py-2 w-full hover:bg-primary">
                                Wishlist
                            </button>
                            <button className="bg-primary text-natural px-4 py-2 w-full hover:bg-secondary">
                                Borrowed
                            </button>
                        </div>

                    </div>


                </div>


            </div>
            <Collection />
        </div>
    );
};

export default BookDetails;
