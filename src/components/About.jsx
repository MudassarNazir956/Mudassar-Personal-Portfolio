import React from "react";
import imgMudi from "../assets/Mudassar Nazir B.jpg";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-5">
          <div className="text-4xl font-bold">
            {/* <p>      sm:text-left
              Hi, i'm Mudassar, Nice to meet you. Please take a look around.
            </p> */}
            <img
              src={imgMudi}
              className="h-96 rounded-3xl float-left sm:float-right"
              alt="Mudassar Image"
            />
          </div>
          <div>
            <p className="text-lg">
              If I had a software expert available at my fingertips, I would
              leverage their expertise to streamline processes, enhance
              productivity, and innovate solutions across various domains.
              Whether it's optimizing workflows, developing custom applications
              tailored to specific needs, or implementing cutting-edge
              technologies to solve complex problems, having a software expert
              readily accessible would be invaluable. Their ability to
              understand requirements and deliver high-quality software would
              undoubtedly elevate efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
