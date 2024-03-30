"use client";
import React, { Component } from "react";
import ServicesCards from "./ServicesCards";

type Props = {};

type State = {};

export default class About extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section className="bg-[#0f172a] min-h-full py-12 flex justify-center border-top-clip blur-effect px-4">
        <div className="relative w-full max-w-screen-xl flex flex-col items-center">
          <span className="what-do-we-offer" />
          <h2 className="relative text-4xl font-bold text-white mb-8 w-full text-center z-10">
            {" "}
            What do we offer?{" "}
          </h2>
          <p className="text-lg text-white text-center mb-4">
            We specialize in providing robust web3 and fullstack development
            services, with a primary focus on cryptocurrency, blockchain
            technology, and web design. Additionally, we offer expert services
            in the realms of cybersecurity , as well as technical support and
            consultation.
          </p>
          <ServicesCards />
        </div>
      </section>
    );
  }
}
