import { motion } from 'framer-motion';

const ServiceCard = ({ service, index, btn }) => {
  return (
    <div className="relative aspect-[4/3] overflow-hidden group">
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
  );
};

export default ServiceCard;
