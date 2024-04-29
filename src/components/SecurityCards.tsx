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
    name: "Standard (1 time¹) ⇒",
    price: "0.015 BTC⁴",
    href: "#",
    current:
      "Our full-stack web development approach involves proficiently handling both front-end and back-end aspects to deliver comprehensive and dynamic web solutions.",
    icon: "1",
    color: "#d4e3ff",
    queue_1:
      "❖ Report of Website Vulnerabilities and some basic resources to self-remedy any issues.",
    queue_2:
      "❖  VPS Pentest and some basic resources to self-remedy any issues.",
  },
  {
    name: "Deluxe (1 time¹) ⇒",
    price: "0.02 BTC⁴",
    href: "#",
    current:
      "As experts in Web3 and DApp development, we harness the power of decentralized technologies to build immersive and user-friendly applications.",
    icon: "2",
    color: "#d4e3ff",
    queue_1:
      "❖  Report of Website Vulnerabilities and some basic resources to self-remedy any issues.",
    queue_2:
      "❖  VPS Pentest and some basic resources to self-remedy any issues.",
    queue_3:
      "❖  Additional One on One support in remedying the security issues³.",
  },
  {
    name: "Deluxe LTS (1 year²) ⇒",
    price: "0.04 BTC⁴",
    href: "#",
    current:
      "We specialize in Solidity smart contract development, creating secure and efficient blockchain-based solutions tailored to your specific decentralized application needs.",
    icon: "3",
    color: "#d4e3ff",
    queue_1:
      "❖  Monthly Report of Website Vulnerabilities and some basic resources to self-remedy.",
    queue_2: "❖  Monthly VPS Pentest.",
    queue_3: "❖  Monthly list of CVEs for your server.",
    queue_4:
      "❖  Monthly One on One support in remedying web-server and security issues³.",
  },
  //   {
  //     name: "Web Design",
  //     href: "#",
  //     current:
  //       "Our web design approach focuses on crafting user-centric and aesthetically pleasing websites that align with your brand identity and business goals.",
  //     icon: <DesignServicesOutlinedIcon fontSize="large" />,
  //     color: "#d4e3ff",
  //   },
];

const SecurityCards = () => {
  return (
    <section className="relative justify-around ml-auto mr-auto">
      <div className="flex flex-wrap items-center xxxl:gap-[3rem] gap-[.5rem] w-full justify-center">
        {services.map((item) => (
          <div
            data-aos="zoom-in"
            className="lg:min-w-[384px] flex-shrink-0 mt-6 relative overflow-hidden bg-[#1e293b] rounded-lg lg:max-w-[20rem] min-w-[90vw] max-w-[90vw] min-h-[35rem] shadow-lg border-solid border-l-[#2e6dd0] border-transparent border-2 to-z-20"
            key={item.name}
          >
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
            <div className="relative px-10 flex items-center justify-center">
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
            <div className="relative text-white px-6 pb-6 mt-6 z-10">
              <div className="flex gap-2 items-center">
                <span className="to-package" />
                <span className="block opacity-75 mb-4 bg-blue-500 rounded-full min-w-11 p-1 text-3xl text-center">
                  {item.icon}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="block font-semibold text-xl">{item.name}</span>
                <span className="border-top-clip" />
                <span className="block font-bold text-xl text-[#0079ef]">
                  {item.price}
                </span>
                {/* <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                  $36.00
                </span> */}
              </div>
              <div className="mt-10 block text-lg text-[#cccccc] overflow-wrap: break-word;">
                {item.queue_1}
              </div>
              <div className="mt-10 block text-lg text-[#cccccc] overflow-wrap: break-word;">
                {item.queue_2}
              </div>
              <div className="mt-10 block text-lg text-[#cccccc] overflow-wrap: break-word;">
                {item.queue_3}
              </div>
              <div className="mt-10 block text-lg text-[#cccccc] overflow-wrap: break-word;">
                {item.queue_4}
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
      {/* <span className="border-top-clip" /> */}
      <div className="mt-10 block text-lg text-[#cccccc] overflow-wrap: break-word;">
        ❖ ¹Final price may be adjusted or negotiated after review of report(s).
      </div>
      <div className="block text-lg text-[#cccccc] overflow-wrap: break-word;">
        ❖ ²Additional Time may be arranged and allotted when expiration time
        nears.
      </div>
      <div className="block text-lg text-[#cccccc] overflow-wrap: break-word;">
        ❖ ³Final price may be adjusted if hours of support exceed 8 hours.
      </div>
      <div className="block text-lg text-[#cccccc] overflow-wrap: break-word;">
        ❖ ⁴Currency denomination may be negotiated.
      </div>
    </section>
  );
};

export default SecurityCards;
