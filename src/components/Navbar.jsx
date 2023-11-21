import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set menuOpen to false when the screen size becomes medium or larger
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const navItems = [
    { to: "/menu", text: "Menu", exact: true },
    { to: "/maps", text: "Locate" },
    { to: "/orders", text: "Orders" },
    { to: "/orders", text: "About" },
  ];

  return (
    <>
      <nav className="sticky top-0 flex flex-col items-center justify-between bg-secondary text-primary md:flex-row lg:flex-row">
        <div className="flex items-center justify-between w-full h-14">
          <Link to="/" className="p-2 text-2xl font-logo">
            Chutney bites
          </Link>
          {/* hamburger menu */}
          <div
            className="absolute flex flex-col justify-between w-8 h-8 md:hidden lg:hidden top-3 right-2"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="w-full h-2 rounded-md bg-primary "></span>
            <span className="w-full h-2 rounded-md bg-primary "></span>
            <span className="w-full h-2 rounded-md bg-primary "></span>
          </div>
        </div>
        {/* small screen menu */}
        <div
          className={`w-full text-center  font-main  ${
            menuOpen ? "" : "hidden md:hidden lg:hidden"
          }`}
        >
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                className="w-full p-2 text-lg transition-colors duration-300 ease-in-out font-main hover:bg-primary hover:text-secondary"
              >
                {item.exact ? (
                  <NavLink
                    to={item.to}
                    exact
                    className=""
                    activeClassName=" font-main bg-primary text-secondary"
                  >
                    {item.text}
                  </NavLink>
                ) : (
                  <Link
                    to={item.to}
                    activeClassName=" font-main bg-primary text-secondary"
                  >
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* big screen nav items */}
        <ul className="hidden md:flex lg:flex">
          {navItems.map((item, index) => (
            <li key={index} className="p-2 mx-2 rounded-md">
              {item.exact ? (
                <NavLink
                  to={item.to}
                  exact
                  className="p-2 text-lg transition-colors duration-300 ease-in-out rounded-md font-main hover:bg-primary hover:text-secondary "
                  activeClassName="bg-primary text-secondary"
                >
                  {item.text}
                </NavLink>
              ) : (
                <NavLink
                  to={item.to}
                  className="p-2 text-lg transition-colors duration-300 ease-in-out rounded-md font-main hover:bg-primary hover:text-secondary "
                  activeClassName="bg-primary text-secondary "
                >
                  {item.text}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
