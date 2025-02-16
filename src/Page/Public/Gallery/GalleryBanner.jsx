import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../src/swiper.css";

const SlideContent = ({ backgroundImage, title, description }) => (
  <div
    className="relative"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      width: "100%",
      height: "400px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-24 text-center relative z-10">
      <h1 className="font-bold text-white text-xl sm:text-2xl md:text-3xl">
        {title}
      </h1>
      <p className="mt-4 text-sm sm:text-lg md:text-xl text-white opacity-80">
        {description}
      </p>
    </div>
  </div>
);

const GalleryBanner = ({ imageArray, galleryData }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="width-control">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={1000}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {imageArray?.map((img, index) => (
          <SwiperSlide key={index}>
            <SlideContent
              backgroundImage={img}
              // title={galleryData?.title}
              // description={galleryData?.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryBanner;

