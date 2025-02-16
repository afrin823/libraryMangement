import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { useParams } from "react-router";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import Loader from "../../../loader/Loader";

const EventDetails = () => {
  const { t, i18n } = useTranslation(); // useTranslation Hook
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { isPending, data: eventDetails } = useQuery({
    queryKey: ["eventDetails", id],
    queryFn: async () => {
      const res = await axiosPublic(`event/${id}`);
      return res.data.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-5xl mx-auto">
      {/* Title & Category */}
      <div className="text-center mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t("home:event_details_organization")}
        </h2>
        <p className="text-lg font-bold text-gray-900 mb-2">
          {t("home:event_details_address")}
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {eventDetails.title[i18n.language]}
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          <strong>{t("category")}:</strong>{" "}
          {eventDetails.category[i18n.language]}
        </p>

        {/* Time & Date */}
        <div className="flex justify-center text-sm mb-3">
          <div className="flex items-center mr-4">
            <IoTimeOutline className="mr-1" />
            {eventDetails.date[i18n.language] || "N/A"}
          </div>
          <div className="flex items-center">
            <MdOutlineDateRange className="mr-1" />
            {eventDetails.year[i18n.language] || "N/A"}
          </div>
        </div>

        {/* Event Image */}
        <div className="relative w-1/2 mx-auto mb-4">
          <img
            src={eventDetails.image}
            alt={eventDetails.title[i18n.language]}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-justify mb-4">
        {eventDetails.description[i18n.language]}
      </p>

      {/* Remarks */}
      <div className="bg-gray-100 p-3 rounded-md">
        <strong className="block mb-1">{t("remarks")}:</strong>
        <p className="text-gray-700">{eventDetails.remark[i18n.language]}</p>
      </div>

      {/* Content Sections */}
      <div className="mt-4">
        {eventDetails?.content?.length > 0 ? (
          eventDetails.content.map((section) => (
            <div key={section._id} className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {section.title2?.[i18n.language]}
                {/* Default to 'en' if the language is missing */}
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                {section.list?.map((item) => (
                  <li key={item._id}>
                    {item?.[i18n.language] || item?.["en"]}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>{t("noContentAvailable")}</p> // Optional message if no content is available
        )}
      </div>
    </div>
  );
};

export default EventDetails;
