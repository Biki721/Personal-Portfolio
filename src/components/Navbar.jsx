import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NAV_LINKS } from "../constants";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-[52px]" src={logo} alt="logo" />
      </div>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {NAV_LINKS.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/bikidey721/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Biki721"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/vicky_dey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/biki.dey.125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        {/* <FiAlignJustify /> */}
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <FiX
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <FiAlignJustify
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-neutral-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {NAV_LINKS.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
