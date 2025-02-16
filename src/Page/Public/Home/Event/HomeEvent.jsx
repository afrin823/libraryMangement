 
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hook/useAxiosPublic';
import Loader from '../../../../loader/Loader';
import EventCard from '../../PublicComponent/Event/EventCard';

const HomeEvent = () => {
    const axiosPublic = useAxiosPublic();
    const { isPending, data: eventData } = useQuery({
      queryKey: ["eventData"],
      queryFn: async () => {
        const res = await axiosPublic(
          `event?limit=3&fields=title,image,category,year,date`
        );
        return res.data.data;
      },
    });
  
    if (isPending) {
      return <Loader />;
  }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventData?.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    );
};

export default HomeEvent;