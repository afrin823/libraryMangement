import { FaFacebook, FaInstagramSquare, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const socialStyle = "w-6 h-6 text-primary";

const ContactMap = () => {
    const { t } = useTranslation();
    return (
        <div className="width-control my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 sm:p-8 text-primary">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("contact:contact_map_title")}</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-3">
                            <MdEmail className={socialStyle} />
                            <a href="mailto:info@betechlab.com" className="text-lg hover:underline">
                            {t("contact:contact_msg_email")}
                            </a>
                        </div>

                        <div className="flex items-start gap-3">
                            <FaWhatsapp className={socialStyle}/>
                            <a href="tel:+8801700891599" className="text-lg hover:underline">
                                {t("contact:contact_msg_wpp")}
                            </a>
                        </div>
                        <div className="flex items-start gap-3">
                            <FaLocationDot className={socialStyle}/>
                            <span className="text-lg">
                            {t("contact:contact_msg_location")}</span>
                        </div>
                    </div>
                    {/* Social Media Section */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">{t("contact:contact_flw_us")}</h3>
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a
                                href="#"
                                className="hover:opacity-80"
                                title="Facebook"
                            >
                                <FaFacebook className="w-8 h-8" />
                            </a>
                            {/* Instagram */}
                            <a
                                href="#"
                                className="hover:opacity-80"
                                title="Instagram"
                            >
                                <FaInstagramSquare className="w-8 h-8" />
                            </a>
                            {/* YouTube */}
                            <a
                                href="#"
                                className="hover:opacity-80"
                                title="YouTube"
                            >
                                <FaYoutube className="w-8 h-8" />
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="#"
                                className="hover:opacity-80"
                                title="LinkedIn"
                            >
                                <FaLinkedin className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Map Section */}
                <div className="h-full min-h-[300px] md:min-h-[400px] w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29135.551308411978!2d90.93690612864275!3d24.10346776956319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37541e5c9c80f90d%3A0xad1da2c8e65cb628!2sGozariya!5e0!3m2!1sen!2sbd!4v1737724704666!5m2!1sen!2sbd"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map location for Gozariya"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;
