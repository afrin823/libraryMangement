import logo from "../../../../assets/logo.webp";
const textStyle = "text-gray-700 hover:text-blue-600 mb-2 block";
const titleStyle = "text-primary font-semibold mb-2";
const Footer = () => {
    return (
        <div className="bg-gray-200 mt-14">
            <footer className=" width-control text-base-content p-10">
                <div className="flex flex-wrap gap-10">
                    <aside className="flex-1">
                        <img src={logo} alt="Logo" className="w-full max-w-[90px] h-auto mb-4" />
                        <p>
                            ACME Industries Ltd.
                            <br />
                            Providing reliable tech since 1992
                        </p>
                    </aside>
                    <nav className="flex-1">
                        <h6 className={titleStyle}>Services</h6>
                        <a href="#" className="">Branding</a>
                        <a href="#" className={textStyle}>Design</a>
                        <a href="#" className={textStyle}>Marketing</a>
                        <a href="#" className={textStyle}>Advertisement</a>
                    </nav>
                    <nav className="flex-1">
                        <h6 className={titleStyle}>Company</h6>
                        <a href="#" className={textStyle}>About us</a>
                        <a href="#" className={textStyle}>Contact</a>
                        <a href="#" className={textStyle}>Jobs</a>
                        <a href="#" className={textStyle}>Press kit</a>
                    </nav>
                    <nav className="flex-1">
                        <h6 className={titleStyle}>Legal</h6>
                        <a href="#" className={textStyle}>Terms of use</a>
                        <a href="#" className={textStyle}>Privacy policy</a>
                        <a href="#" className={textStyle}>Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
