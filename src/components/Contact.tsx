"use client";
import React, { Component } from "react";
import ContactUs from "./Email";

type Props = {};

type State = {};

export default class Contact extends Component<Props, State> {
  state = {};

  render() {
    return (
      <section className="contact-bg py-16 flex justify-center black-blur-effect px-4 blur-effect-2">
        <span className="contact flex z-10" />
        <span className="contact-bgs" />
        <div className="relative w-full max-w-screen flex flex-col items-center z-10">
          <span className="text-[#0ea5e9] text-xl flex z-10">Get In Touch</span>
          <div className="relative text-4xl font-bold text-white mb-12 w-full text-center z-10 underlined-1">
            {" "}
            <span className="text-[#0ea5e9]">Contact</span> Us!
          </div>
          <p className="text-lg text-white text-left mb-4 max-w-screen-xl">
            LETS TALK ABOUT YOUR PROJECT, Fill the form and send in your
            queries. We will respond as soon as we can.
          </p>
          <ContactUs />
        </div>
      </section>
    );
  }
}
