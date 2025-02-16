import { useState } from "react";
import { useTranslation } from "react-i18next";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { responseMessage } from "../../../utils/responseMessage/responseMessage";

const inputStyle =
  "block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary";
const labelStyle = "block text-primary font-medium";

const ContactForm = () => {
  const { t } = useTranslation();
  const axiosPublic = useAxiosPublic();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      responseMessage(
        "error",
        "All fields are required!",
        "Please fill in all the fields."
      );
      return;
    }

    try {
      const res = await axiosPublic.post("message/create", {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        isRead: false,
      });

      responseMessage(
        "success",
        "Message Sent!",
        "Your message has been successfully sent."
      );
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      responseMessage(
        "error",
        "Oops...",
        "Something went wrong while sending the message."
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <label htmlFor="name" className={labelStyle}>
          {t("contact:contact_input_name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={t("contact:contact_input_name")}
          className={inputStyle}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone" className={labelStyle}>
          {t("contact:contact_input_number")}
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          placeholder={t("contact:contact_input_number")}
          className={inputStyle}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="message" className={labelStyle}>
          {t("contact:contact_input_message")}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={t("contact:contact_input_message")}
          rows={6}
          className="w-full p-3 border border-gray-300"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-primary text-natural py-3 px-6"
        >
          {t("contact:contact_send_message")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
