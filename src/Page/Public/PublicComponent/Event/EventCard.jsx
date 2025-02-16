import { useTranslation } from "react-i18next";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  const { t, i18n } = useTranslation(); // useTranslation Hook

  return (
    <div className="relative p-4 bg-white shadow-md rounded-md flex flex-col justify-between">
      <div className="flex justify-between text-sm mb-2">
        <div className="flex items-center">
          <IoTimeOutline className="mr-1" />
          {event?.date ? event?.date[i18n.language] : "date"}
        </div>
        <div className="flex items-center">
          <MdOutlineDateRange className="mr-1" />
          {event.year[i18n.language]}
        </div>
      </div>

      <div className="relative">
        <img
          src={
            event?.image
              ? event.image
              : "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          }
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
      </div>

      {/* Title & Category */}
      <div className="px-2 pt-3">
        <h3 className="text-xl font-semibold  text-gray-800">
          {event.title[i18n.language]}
        </h3>
        <p className="text-sm text-gray-600">
          <strong>{t("category")}:</strong> {event.category[i18n.language]}
        </p>
      </div>

      <Link to={`/event-details/${event._id}`}>
        <button className="bg-primary text-natural duration-200 rounded-sm hover:bg-secondary w-full py-2 mt-3">
          {t("home:event_btn")}
        </button>
      </Link>
    </div>
  );
};

export default EventCard;
