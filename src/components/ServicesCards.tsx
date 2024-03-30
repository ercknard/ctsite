"use client";
import React, { Component, useState } from "react";
import Marquee from "react-fast-marquee";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import Image from "next/image";

const services = [
  {
    name: "Full-Stack Web Development",
    href: "#",
    current:
      "Our full-stack web development approach involves proficiently handling both front-end and back-end aspects to deliver comprehensive and dynamic web solutions.",
    icon: <CurrencyBitcoinOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
  },
  {
    name: "Web3 And DAPP Development",
    href: "#",
    current:
      "As experts in Web3 and DApp development, we harness the power of decentralized technologies to build immersive and user-friendly applications.",
    icon: <PrecisionManufacturingOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
  },
  {
    name: "Solidity Development",
    href: "#",
    current:
      "We specialize in Solidity smart contract development, creating secure and efficient blockchain-based solutions tailored to your specific decentralized application needs.",
    icon: <ShieldOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
  },
  {
    name: "Web Design",
    href: "#",
    current:
      "Our web design approach focuses on crafting user-centric and aesthetically pleasing websites that align with your brand identity and business goals.",
    icon: <DesignServicesOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
  },
  {
    name: "Graphic Design",
    href: "#",
    current:
      "Our graphic design services involve translating your brand identity and messaging into visually compelling designs.",
    icon: <SupportAgentOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
  },
  {
    name: "Technical Consulation",
    href: "#",
    current:
      "We offer technical consultation by deeply understanding your project goals and challenges, and then providing targeted expertise and strategic guidance to optimize your systems, resolve technical issues, and enhance overall project success.",
    icon: <SupportAgentOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
  },
];

const ServicesCards = () => {
  return (
    <section className="flex flex-wrap items-center justify-center w-full">
      {services.map((item) => (
        <div
          className="flex flex-wrap items-center justify-center"
          key={item.name}
        >
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#1e293b] rounded-lg lg:min-w-[30rem] min-w-[20rem] max-w-[20rem] lg:h-[22.5rem] h-[27.5rem] shadow-lg hover:bg-[#004b9a75] border-solid hover:border-2 border-l-[#2e6dd0] border-transparent border-2 hover:scale-105">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: 0.01 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-1 px-10 flex items-center justify-center">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  //   background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              {/* <Image
                className="relative w-40"
                src="/images/4.png"
                alt=""
                width={100}
                height={100}
              /> */}
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 mb-4 bg-blue-500 rounded-full max-w-11 p-1">
                {item.icon}
              </span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">{item.name}</span>
                {/* <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                  $36.00
                </span> */}
              </div>
            </div>
            <span className="p-4 mt-1 block text-lg text-[#cccccc] overflow-wrap: break-word;">
              {item.current}
            </span>
          </div>
        </div>
      ))}
      ;
    </section>
  );
};

export default ServicesCards;
