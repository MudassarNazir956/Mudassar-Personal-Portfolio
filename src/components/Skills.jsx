import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import JSX from "../assets/JSX.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap-logo.png";
import MaterialUI from "../assets/MUI.png";
import ReactImg from "../assets/react.png";
import Nextjs from "../assets/nextjs.svg";
import GitHub from "../assets/github.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#0a192f] w-full h-screen text-gray-200 pt-[400px] sm:pt-10"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 text-lg">
            From concept to launch, I specialize in crafting user-centric
            designs that resonate with your audience and drive tangible results
            for your business.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 w-full text-center py-8">
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-125"
              src={HTML}
              alt="Html Icon"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-125"
              src={CSS}
              alt="CSS Icon"
            />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-150"
              src={JavaScript}
              alt="JavaScript Icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-150"
              src={JSX}
              alt="JSX Icon"
            />
            <p className="my-4">JSX</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={Tailwind}
              alt="Tailwind Icon"
            />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={Bootstrap}
              alt="Bootstrap Icon"
            />
            <p className="my-4">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={MaterialUI}
              alt="MaterialUI Icon"
            />
            <p className="my-4">Material UI</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={ReactImg}
              alt="ReactImg Icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={Nextjs}
              alt="Nextjs Icon"
            />
            <p className="my-4">Next JS</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={GitHub}
              alt="GitHub Icon"
            />
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
