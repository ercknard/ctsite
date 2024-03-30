"use client";
import React, { Component } from "react";

type Props = {};

type State = {};

export default class Projects extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section className="bg-[#02050a] min-h-full py-16 flex justify-center black-blur-effect px-4 pvot h-screen">
        <div className="relative w-full max-w-screen-xl flex flex-col items-center">
          <span className="projects" />
          <h2 className="relative text-4xl font-bold text-white mb-8 w-full text-center z-10">
            {" "}
            Projects{" "}
          </h2>
          {/* <p className="text-lg text-white text-left mb-4">
            For SECURITY service packages we offer:
          </p> */}
        </div>
      </section>
    );
  }
}
