"use client";
import React, { Component } from "react";
import SecurityCards from "./SecurityCards";

type Props = {};

type State = {};

export default class SecurityServices extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section className="bg-[#0f172a] min-h-full py-12 flex justify-center px-4 pb-32">
        <div className="relative w-full max-w-screen-xl flex flex-col items-center">
          <span className="security-services" />
          <h2 className="relative text-4xl font-bold text-white mb-8 w-full text-center z-10">
            {" "}
            Security Services{" "}
          </h2>
          <p className="text-lg text-white text-left mb-4">
            For SECURITY service packages we offer:
          </p>
          <SecurityCards />
        </div>
      </section>
    );
  }
}
