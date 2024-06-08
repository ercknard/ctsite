"use client";
import React, { Component } from "react";
import SecurityCards from "./SecurityCards";

type Props = {};

type State = {};

export default class SecurityServices extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section
        id="security"
        className="min-h-full py-20 flex justify-center px-4 landing-hero-1 border-solid border-b-[.5px] border-t-[.5px]"
      >
        <div className="relative w-full max-w-screen-vxl flex flex-col items-center">
          <span className="security-services" />
          <span className="text-[#0ea5e9] text-xl">Our Services</span>
          <div className="relative text-4xl font-bold text-white mb-8 w-full text-center z-10 underlined">
            {" "}
            <span className="text-[#0ea5e9]">Security Services</span> We Provide
            For You{" "}
          </div>
          <p className="text-lg text-white text-left mb-8">
            For SECURITY service packages we offer:
          </p>
          <SecurityCards />
        </div>
      </section>
    );
  }
}
