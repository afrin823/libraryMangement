import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../src/swiper.css";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import NoticeCard from "./NoticeCard";

const Notice = () => {
  const axiosPublic = useAxiosPublic();

  const { isPending, data: noticeData = [] } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => {
      const res = await axiosPublic("/notice?limit=2&fields=title,description");
      return res.data.data;
    },
  });

  if (isPending) {
    return "Loading";
  }

  return (
    <div className="width-control">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {noticeData?.map((notice, index) => (
          <SwiperSlide key={index}>
            <NoticeCard notice={notice}></NoticeCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Notice;
