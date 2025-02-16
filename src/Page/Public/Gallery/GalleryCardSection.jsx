import BooksLoader from "../../../loader/BooksLoader";
import GalleryCard from "./GalleryCard";

const GalleryCardSection = ({galleryData, handleClick, isPending}) => {
    if(isPending){
        return <BooksLoader />
    }
    return (

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">

            {galleryData?.map((gallery, i) => (
                <GalleryCard key={gallery._id} handleClick={handleClick} gallery={gallery} i={i} />
            ))}
        </div>
    );
};

export default GalleryCardSection;