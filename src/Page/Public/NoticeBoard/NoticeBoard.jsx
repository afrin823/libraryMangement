import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic.jsx";
import Loader from "../../../loader/Loader";
import NoticeCard from "../PublicComponent/NoticeCard";
import SectionTitle from "../PublicComponent/SectionTitle";

 

const NoticeBoard = () => { 
  const axiosPublic = useAxiosPublic();
  
    const { isPending, data: noticeData=[] } = useQuery({
        queryKey: ["notice-board"],
        queryFn: async () => {
          const res = await axiosPublic("/notice?limit=6&fields=title,description");
          return res.data.data;
        },
      });
    
      if (isPending) {
        return <Loader />;
      } 
    return (
        <div className="width-control">
            <SectionTitle title="Notice" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {noticeData?.map((notice,index) =>    <NoticeCard key={index} notice={notice}></NoticeCard>)}
            </div>
        </div>
    );
};

export default NoticeBoard;