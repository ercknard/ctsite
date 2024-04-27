"use client";
import React, { Component } from "react";
import ProjectsCall from "./ProjectCoverflow.jsx";

type Props = {};

type State = {};

export default class Projects extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section className="bg-[#0b1120] min-h-full py-16 flex justify-center black-blur-effect px-4 h-screen">
        <span className="projects" />
        <div className="relative w-full max-w-screen flex flex-col items-center overflow-hidden">
          <span className="text-[#0ea5e9] text-xl">Cryptech Potfolio</span>
          <div className="relative text-4xl font-bold text-white mb-12 w-full text-center z-10 underlined-1">
            {" "}
            <span className="text-[#0ea5e9]">Project</span> Highlights
          </div>
          <p className="text-lg text-white text-left mb-4 max-w-screen-xl">
            Explore a diverse array of innovative projects showcasing expertise
            in various fields, from software development to sustainable design.
          </p>
          <ProjectsCall />
        </div>
      </section>
    );
  }
}
