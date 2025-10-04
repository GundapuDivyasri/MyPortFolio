import React from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../../assets/r-p-s.jpg";
import img2 from "../../assets/musicimage.png";
import img3 from "../../assets/timer.jpg";
import img4 from "../../assets/turtlerace.jpg";
import img5 from "../../assets/expensehome.bg.jpg";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
         <ProjectCard
          title="Budget Expense Tracker"
          main="This is a mini web application developed using stack:HTML,CSS,PHP,MYSQL to store and manage the expenses."
          img={img5}
          link="https://github.com/GundapuDivyasri/Budget-Expense-Tracker"
        />
        <ProjectCard
          title="Mini-MusicPlayList"
          main="This is a mini music playlist designed using tech stack:html,css,js,express,mongodb.In this music playlist we can
          listen to trending playlists based on language."
          img={img2}
          link="https://github.com/GundapuDivyasri/MiniMusicPlaylist.git"
        />
        <ProjectCard
          title="Pomodomo-Timer"
          main="This is a mini python application developed using Tkinter Library."
          img={img3}
          link="https://github.com/GundapuDivyasri/Timer_setup.git"
        />
        <ProjectCard
          title="Rock-Paper-Scissor"
          main="Developed a mini game rock-paper-scissor using html,css,js."
          img={img1}
          link="https://github.com/GundapuDivyasri/Rock-paper-scissor.git"
        />
        <ProjectCard
          title="Turtle-Race"
          main="A mini python project developed using turtle library."
          img={img4}
          link="https://github.com/GundapuDivyasri/Turtlerace.git"
        />
      </div>
    </div>
  );
};

export default Projects;