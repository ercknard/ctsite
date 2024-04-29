"use client";
import React, { Component } from "react";
import TeamCards from "./TeamCards";
import TeamSlide from "./TeamSlide";

type Props = {};

type State = {};

export default class Team extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section className="bg-[#02050a] py-16 flex justify-center black-blur-effect px-4 pvot z-20">
        <div className="relative w-full max-w-screen-pxl flex flex-col items-center">
          <span className="team-services" />
          <span className="text-[#0ea5e9] text-xl">Cryptech Services</span>
          <div className="relative text-4xl font-bold text-white mb-8 w-full text-center z-10 underlined">
            {" "}
            Meet The Expert<span className="text-[#0ea5e9]"> Team</span>
          </div>
          <p className="text-lg text-white text-center mb-4">
            People behind Cryptech Services
          </p>
          {/* <TeamSlide /> */}
          <TeamCards />
        </div>
      </section>
    );
  }
}
