"use client";
import React, { Component } from "react";
import TeamCards from "./TeamCards";

type Props = {};

type State = {};

export default class Team extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section className="bg-[#02050a] py-16 flex justify-center black-blur-effect px-4 pvot">
        <div className="relative w-full max-w-screen-xl flex flex-col items-center">
          <span className="what-do-we-offer" />
          <span className="text-[#0ea5e9] text-xl pt-10">Cryptech Team</span>
          <div className="relative text-4xl font-bold text-white mb-8 w-full text-center z-10 underlined">
            {" "}
            Meet The Expert<span className="text-[#0ea5e9]"> Team</span>
          </div>
          <p className="text-lg text-white text-center mb-4">
            People behind Cryptech Services
          </p>
          <TeamCards />
        </div>
      </section>
    );
  }
}
