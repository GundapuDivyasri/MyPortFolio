import React from "react";
import AboutImg from "../../assets/avatar2.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
        <img className="md:h-80 rounded-full" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-4 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full Stack developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I'm an aspiring Full Stack Developer with a passion for building scalable web applications and exploring intelligent systems.
                </p>
              </span>
            </div>
            <div className="flex gap-4 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  AI-ML
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Enthusiastic about AI & Machine Learning.Excited and Eager to explore the amazing AI tools.
                </p>
              </span>
            </div>
            
            <div className="flex gap-4 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Areas Interested In
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Always eager to learn and stay updated with the latest trends in web development and AI.
                
                </p>
              </span>
            </div>
            <div className="flex gap-4 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Goal
                </h1>
                <p className="text-sm md:text-md leading-tight">
                <li>To become a professional Full Stack Developer and develop solutions for real world problems.</li>
                <li>To Expand my knowledge in AI & ML.</li>
                
                </p>
              </span>
            </div>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;