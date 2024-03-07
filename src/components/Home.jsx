import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { TbArrowBarUp } from "react-icons/tb";

const Home = () => {
  return (
    <>
      <div name="home" className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full left">
          <p className="text-pink-600 text-xl sm:text-2xl">Hi, My Name is</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#dbe2fc] pb-2">
            Mudassar Nazir
          </h1>

          <h2 className="text-lg sm:text-2xl font-bold text-[#afb8d6]">
            <TypeAnimation
              sequence={[
                "I am a Front-End Developer",
                1000,
                "I am a UI/UX Developer",
                1000,
                "I am a Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1.8em",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-[#ced3e4] py-4 max-w-[700px] text-lg dua">
            As a freelance front-end web developer, I specialize in creating
            exceptional digital experiences through user-friendly interfaces and
            visually stunning web applications. Leveraging cutting-edge
            technologies and close collaboration with clients, I strive to
            exceed expectations, pushing the boundaries of web development to
            set new standards for excellence.
          </p>
          <div>
            <button className="text-white group py-3 px-6 border-2 my-2 flex items-center rounded-md hover:bg-pink-600 hover:border-pink-600 duration-300">
              <Link to="work" smooth={true} duration={700}>
                View Work
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2 size-5" />
              </span>
            </button>
          </div>
        </div>

        {/* Arrow Settiing */}
        <div>
          <Link to="home" smooth={true} duration={700}>
            <TbArrowBarUp
              className="text-[#ffffff] flex  fixed top-[92%] left-[85%] sm:top-[90%] sm:left-[95%] cursor-pointer"
              size={40}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
