"use client";
import React, { Component } from "react";
import ProjectsCall from "./ProjectCoverflow.jsx";

type Props = {};

type State = {};

export default class Projects extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section className="bg-[#02050a] min-h-full py-16 flex justify-center black-blur-effect px-4 pvot h-screen">
        <span className="projects" />
        <div className="relative w-full max-w-screen flex flex-col items-center overflow-hidden">
          <div className="relative text-4xl font-bold text-white mb-12 w-full text-center z-10">
            {" "}
            Our <span className="text-[#0ea5e9]">Works</span>
          </div>
          {/* <p className="text-lg text-white text-left mb-4">
            For SECURITY service packages we offer:
          </p> */}
          <ProjectsCall />
        </div>
      </section>
    );
  }
}
