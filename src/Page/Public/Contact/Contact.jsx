import Brand from "../Home/Brand";
import ContactSection from "./ContactSection";
import ContactMap from "./ContactMap";

 

const Contact = () => {
    return (
        <div className="width-control">
            <ContactSection />
            <Brand />
            <ContactMap />
        </div>
    );
};

export default Contact;