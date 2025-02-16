import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import Loader from '../../../loader/Loader';
import axios from 'axios'; 
const btn = 'btn bg-primary text-natural focus:outline-none rounded-none hover:bg-natural hover:text-primary hover:border-primary text-xl font-bold px-6 py-3 transition-colors group';

const Services = () => {

  const { isPending, data: services } = useQuery({
    queryKey: ['service'],
    queryFn: async () => {
      const res = await axios.get('/services.json'); 
      return res.data; 
    }
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto py-4 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div 
            key={index}
            className="relative aspect-[4/3] overflow-hidden group"
          >
            <img
              src={service.image}
              alt={service.alt}
              className="object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-60" />
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="absolute bottom-0 left-0 p-6"
            >
              <button className={btn}>
                {service.title}
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
