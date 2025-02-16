import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hook/useAxiosPublic";
// import SectionTitle from "../PublicComponent/SectionTitle";
import GalleryBanner from "./GalleryBanner";
import GalleryCardSection from "./GalleryCardSection";

import GalleryVideo from "./GalleryVideo";


const Gallery = () => { 

    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedGallery, setSelectedGallery] = useState(null);

    const axiosPublic = useAxiosPublic();

    const { isPending, data: galleryData } = useQuery({
        queryKey: ["gallery"],
        queryFn: async () => {
            const res = await axiosPublic.get(`gallery?limit=5&fields=title,singleImage,imageArray,description,createdAt`);
            return res.data.data;
        },
    });

    useEffect(() => {
        if (galleryData?.length > 0) {
            setSelectedImages(galleryData[0].imageArray || []);
            setSelectedGallery(galleryData[0]);
        }
    }, [galleryData]);

    const handleClick = (index) => {
        const selectedItem = galleryData[index];
        setSelectedImages(selectedItem.imageArray || []);
        setSelectedGallery(selectedItem); 
    };


    return (

        <div className="width-control px-2">

            <GalleryBanner
                imageArray={selectedImages}
                galleryData={selectedGallery}
            />
            <div>

                {/* <div className="mb-8">
                    <SectionTitle title="Gallery" />
                </div> */}

                <GalleryCardSection galleryData={galleryData} handleClick={handleClick} isPending={isPending} />
            </div>
            <GalleryVideo />
        </div>
    );
};

export default Gallery;
