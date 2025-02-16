import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink } from "react-router";
import logo from "../../../../assets/logo.webp";
import { navProperty } from "../../../../assets/navProperty";
import HotlinePhone from "./HotlinePhone";

const ComputerNav = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = navProperty;

  return (
    <div className="flex items-center justify-between width-control">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-full max-w-[90px] h-auto" />

      {/* Hamburger Menu (Mobile) */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-6 w-6 text-black" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-black" />
        )}
      </button>

      <div>
        <div className="text-end pb-3">
          <HotlinePhone />
        </div>
        {/* Navigation */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-6 lg:relative`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 font-normal  text-[16px] relative">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              <li>Home</li>
            </NavLink>

            {/* Service with Mega Menu */}
            <div
              className="relative lg:inline-block"
              onMouseEnter={() => !isMobileMenuOpen && setIsServicesOpen(true)}
              onMouseLeave={() => !isMobileMenuOpen && setIsServicesOpen(false)}
            >
              <button
                className="flex items-center text-black lg:text-black"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <li>Service</li>
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>

              {/* Mega Menu */}
              <div
                className={`absolute left-0 lg:top-full top-10 bg-natural shadow-lg rounded-md p-4 z-50 -ms-52 w-96 z-50  transform transition-all duration-300 ${
                  isServicesOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                }`}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="p-2 border-b border-gray-200 hover:bg-gray-100 rounded-md hover:text-primary cursor-pointer"
                  >
                    <p>{service.title}</p>
                    <p className="text-sm ">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* books  */}
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              <li>Books</li>
            </NavLink>
            {/* Rules */}
            <NavLink
              to="/rules"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              <li>Rules</li>
            </NavLink>
            {/* Notice Board */}
            <NavLink
              to="/notice"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              <li>Notice Board</li>
            </NavLink>
            {/* Gallery */}
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              <li>Gallery</li>
            </NavLink>
            {/* Scholarship */}
            <NavLink
              to="scholarship"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              <li>Scholarship</li>
            </NavLink>
            {/* About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              <li>About</li>
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ComputerNav;
