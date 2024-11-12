import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import logo from "../assets/logo1.png";
import resume from "../assets/Resume/Mudassar Nazir Resume.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const clickHandler = () => {
    setNav(!nav);
  };

  const emailAddress = "mudassarnazir137@gmail.com";
  const subject = "Type your Message towards Mudasssar Nazir";

  const openGmailCompose = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        emailAddress
      )}&su=${encodeURIComponent(subject)}`,
      "_blank"
    );
  };

  return (
    <>
      <div className="fixed w-full h-[70px] flex justify-between items-center px-4 shadow-lg shadow-[#522f66] bg-[#0a192f] text-gray-200">
        <div className="pl-6">
          <Link to="home" smooth={true} duration={700}>
            <a href="/">
              <img src={logo} alt="Logo" style={{ width: "90px" }} />
            </a>
          </Link>
        </div>

        {/* Menu */}
        <div className="text-[1.11rem] font-light">
          <ul className="hidden md:flex tracking-wider ">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-pink-600 hover:underline duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-pink-600 hover:underline duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-pink-600 hover:underline duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="work"
                smooth={true}
                duration={500}
                className="hover:text-pink-600 hover:underline duration-300"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-pink-600 hover:underline duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons for Mobile Screens */}
        <div onClick={clickHandler} className="md:hidden z-10 ">
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            !nav
              ? `hidden`
              : `absolute top-16 left-0 bg-[#0a192f] h-[40vh]  w-full flex flex-col justify-center items-center shadow-lg shadow-[#522f66] `
          }
        >
          <ul>
            <li className="py-4 text-2xl">
              <Link
                onClick={clickHandler}
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-pink-600 hover:underline duration-300"
              >
                Home
              </Link>
            </li>
            <li className="py-4 text-2xl">
              <Link
                onClick={clickHandler}
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-pink-600 hover:underline duration-300"
              >
                About
              </Link>
            </li>
            <li className="py-4 text-2xl">
              <Link
                onClick={clickHandler}
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-pink-600 hover:underline duration-300"
              >
                Skills
              </Link>
            </li>
            <li className="py-4 text-2xl">
              <Link
                onClick={clickHandler}
                to="work"
                smooth={true}
                duration={500}
                className="hover:text-pink-600 hover:underline duration-300"
              >
                Work
              </Link>
            </li>
            <li className="py-4 text-2xl">
              <Link
                onClick={clickHandler}
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-pink-600 hover:underline duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Left Social Icons */}
        <div className="hidden lg:flex flex-col fixed top-[32%] left-0">
          <ul>
            <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-sm">
              <a
                href="https://www.linkedin.com/in/mudassar-nazir-8ab1a31b3/"
                target="blank"
                className="flex justify-between items-center w-full text-gray-200 "
              >
                Linkedin
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-sm">
              <a
                href="https://github.com/MudassarNazir956"
                target="blank"
                className="flex justify-between items-center w-full text-gray-200 "
              >
                Github
                <FaGithub size={30} />
              </a>
            </li>
            <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#42a098] rounded-sm-sm">
              <a
                href="#"
                target="blank"
                className="flex justify-between items-center w-full text-gray-100 "
                onClick={(e) => {
                  e.preventDefault();
                  openGmailCompose();
                }}
              >
                Email
                <HiOutlineMail size={30} />
                <span className="hidden">{emailAddress}</span>
              </a>
            </li>
            <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3a4b5e] rounded-sm">
              <a
                href={resume}
                target="blank"
                className="flex justify-between items-center w-full text-gray-200 "
              >
                Resume
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>

        {/* Right Social Icons */}
        <div className="hidden lg:flex flex-col fixed top-[42%] right-0">
          <ul>
            <li className="flex justify-between items-center w-[160px] h-[60px] mr-[-100px] hover:mr-[-10px] duration-300 bg-[#1b8f59] rounded-sm">
              <a
                href="https://www.fiverr.com/mudi56"
                target="blank"
                className="flex justify-between items-center w-full text-gray-200 "
              >
                <TbBrandFiverr size={30} />
                <span className="text-lg">Fiverr</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Bug Faced Here **Solved SUccessfully. */}

        <div className="hidden lg:flex flex-col fixed top-[51.3%] right-0">
          <ul>
            <li className="flex justify-between items-center w-[160px] h-[60px] mr-[-100px] hover:mr-[-10px] duration-300 bg-[#28881b] rounded-sm">
              <a
                href="https://www.upwork.com/freelancers/~0118a884773505d5b3"
                target="blank"
                className="flex justify-between items-center w-full text-gray-200 "
              >
                <SiUpwork size={30} />
                <span className="text-lg">Upwork</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
