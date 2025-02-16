import { useTranslation } from "react-i18next";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router";

const BooksCard = ({ collection }) => {
  const { t } = useTranslation();

  const ratings = collection.rating || [];
  const averageRating = ratings.length > 0
    ? ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
    : 0;
    

  return (
    <div className="flex flex-col justify-between bg-natural shadow-lg p-4 ">
      <div className="relative h-full group overflow-hidden">
        <div className="absolute top-2 left-2 z-10">
          <span
            className={`bg-${collection?.inStock ? "green" : "red"
              }-500 text-natural text-xs font-bold px-2 py-1 rounded-full`}
          >
            {collection?.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className="relative group-hover:bg-opacity-70 group-hover:bg-light-gray transition-all duration-300 ease-in-out rounded-md">
          <img
            src={collection?.image}
            alt={collection?.bookName}
            className="w-full h-36 lg:h-56 object-cover transform group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-natural opacity-0 group-hover:opacity-50 transition-all duration-300 ease-in-out"></div>
        </div>

        <h3 className="mt-2 text-lg font-semibold">{collection?.bookName}</h3>
        <p className="text-sm text-primary">{collection?.writerName}</p>
        <p className="text-sm text-primary">{collection?.publisher}</p>

      </div>
      <div className="">
        <div className="flex items-center space-x-1 mt-1">
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
        </div>

        <div className="my-2">
          <span className="text-primary font-bold">
            Quantity:{" "}
            {collection?.quantity === 0
              ? "Stock Out"
              : collection?.quantity > 0 && collection?.quantity < 10
                ? `0${collection?.quantity}`
                : collection?.quantity}
          </span>
        </div>

        <Link to={`/details/${collection?._id}`}>
          <button className="w-full bg-primary py-2 text-natural">
            {t("home:view_details")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BooksCard;
