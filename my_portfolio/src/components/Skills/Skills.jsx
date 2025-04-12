import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress} from "react-icons/si";

const Skills = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
       
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-pink-950 flex items-center rounded-2xl">
            <SiExpress color="#001122" size={50} /> 
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#339933" size={50} /> 
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        </div>

       
        <div className="md:w-2/5 mt-10 md:mt-0">
          <h2 className="text-xl md:text-2xl text-white font-semibold mb-4">Soft Skills</h2>
          <div className="bg-slate-950 bg-opacity-45 rounded-lg p-6">
            <ul className="text-white text-sm md:text-lg space-y-4">
              <li>- Strong Communication Skills</li>
              <li>- Problem Solving & Critical Thinking</li>
              <li>- Adaptability & Quick Learner</li>
              <li>- Team Collaboration & Leadership</li>
              <li>- Time Management & Organizational Skills</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-xl md:text-2xl text-white font-semibold mb-4">Core Knowledge</h2>
        <div className="bg-slate-950 bg-opacity-45 rounded-lg p-6 md:w-3/5">
          <ul className="text-white text-sm md:text-lg space-y-4">
            <li>- Operating Systems (OS)</li>
            <li>- Computer Networks (CN)</li>
            <li>- Data Structures and Algorithms (DSA)</li>
            <li>- Dense Wavelength Division Multiplexing (DWDM)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

