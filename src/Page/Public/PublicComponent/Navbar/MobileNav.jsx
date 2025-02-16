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

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = navProperty;

  return (
    <div className="relative  ">
      {/* Header */}
      <div className="flex items-center justify-between px-4  width-control">
        {/* Logo  */}
        <img src={logo} alt="Logo" className="w-[70px] h-auto" />
        {/* Hamburger Button */}
        <div className="">
          <div className="flex justify-end px-2 pt-1"></div>
          <div className="flex justify-end px-2 pt-1">
            <button
              className="text-black focus:outline-none "
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              {isNavOpen ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-natural shadow-md transition-all duration-300 transform z-50 ${
          isNavOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col p-4 space-y-4 text-sm">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black"
            }
            onClick={() => setIsNavOpen(false)}
          >
            <li>Home</li>
          </NavLink>

          {/* Service with Dropdown */}
          <div>
            <button
              className="flex items-center w-full justify-between text-black"
              onClick={() => setIsServicesOpen((prev) => !prev)}
            >
              <span>Services</span>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isServicesOpen && (
              <ul className="mt-2 space-y-2 pl-4">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="border-b pb-2 last:border-none hover:text-primary cursor-pointer"
                  >
                    <h6 className="text-sm ">{service.title}</h6>
                    <p className="text-sm  ">{service.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black"
            }
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <li>Books</li>
          </NavLink>
          <NavLink
            to="/rules"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black"
            }
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <li>Rules</li>
          </NavLink>
          {/* Notice Board */}
          <NavLink
            to="/notice"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black"
            }
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <li>Notice Board</li>
          </NavLink>
          {/* Gallery */}
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black"
            }
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <li>Gallery</li>
          </NavLink>
          {/* Scholarship */}
          <NavLink
            to="scholarship"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black"
            }
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <li>Scholarship</li>
          </NavLink>
          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black"
            }
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <li>About</li>
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black"
            }
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <li>Contact</li>
          </NavLink>
        </ul>

        <div className="text-center pb-8">
          <HotlinePhone />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
