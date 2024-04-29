"use client";
import React, { Component, useState } from "react";
import Marquee from "react-fast-marquee";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import Image from "next/image";
import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const services = [
  {
    name: "Squidicuzz",
    href: "Admin",
    role1: "Consultant",
    role2: "Developer",
    current:
      "Our full-stack web development approach involves proficiently handling both front-end and back-end aspects to deliver comprehensive and dynamic web solutions.",
    icon: (
      <Image
        alt="team"
        width={512}
        height={512}
        className="border-dashed border-2 border-[#0ea5e975] rounded-full team-image"
        src="/images/team/squid-nobg.webp"
      />
    ),
    color: "#d4e3ff",
    email: "mailto:squid@cryptech.services",
    discord: "https://discord.com/users/294414250376429569",
  },
  {
    name: "Seqsee",
    href: "Admin",
    role1: "Consultant",
    role2: "Developer",
    current:
      "As experts in Web3 and DApp development, we harness the power of decentralized technologies to build immersive and user-friendly applications.",
    icon: (
      <Image
        alt="team"
        width={512}
        height={512}
        className="border-dashed border-2 border-[#0ea5e975] rounded-full team-image"
        src="/images/team/seqsee-1-nobg.webp"
      />
    ),
    color: "#d4e3ff",
    email: "mailto:seqsee@cryptech.services",
    discord: "https://discord.com/users/412122437954830337",
  },
  {
    name: "Jekz",
    href: "Security Researcher",
    role1: "Graphic Artist",
    role2: "Penetration Tester",
    current:
      "We specialize in Solidity smart contract development, creating secure and efficient blockchain-based solutions tailored to your specific decentralized application needs.",
    icon: (
      <Image
        alt="team"
        width={512}
        height={512}
        className="border-dashed border-2 border-[#0ea5e975] rounded-full team-image"
        src="/images/team/jekz9-bg.webp"
      />
    ),
    color: "#d4e3ff",
    email: "mailto:jekz@cryptech.services",
    discord: "https://discord.com/users/943186466744463421",
  },
  {
    name: "Baydroid",
    href: "Developer",
    role1: "Consultant",
    role2: "Cryptographer",
    current:
      "Our web design approach focuses on crafting user-centric and aesthetically pleasing websites that align with your brand identity and business goals.",
    icon: (
      <Image
        alt="team"
        width={512}
        height={512}
        className="border-dashed border-2 border-[#0ea5e975] rounded-full team-image"
        src="/images/team/loma3-nobg.webp"
      />
    ),
    color: "#d4e3ff",
    email: "mailto:baydroid@cryptech.services",
    discord: "https://discord.com/users/426261793426636804",
  },
  {
    name: "Boehmerang",
    href: "Developer",
    role1: "Consultant",
    role2: "CAD Designer",
    current:
      "Our graphic design services involve translating your brand identity and messaging into visually compelling designs.",
    icon: (
      <Image
        alt="team"
        width={512}
        height={512}
        className="border-dashed border-2 border-[#0ea5e975] rounded-full team-image"
        src="/images/team/valor3-nobg.webp"
      />
    ),
    color: "#d4e3ff",
    email: "mailto:boehmerang@cryptech.services",
    discord: "https://discord.com/users/161986311832600576",
  },
  {
    name: "Rasalghul",
    href: "Developer",
    role1: "Consultant",
    role2: "Photographer",
    current:
      "We offer technical consultation by deeply understanding your project goals and challenges, and then providing targeted expertise and strategic guidance to optimize your systems, resolve technical issues, and enhance overall project success.",
    icon: (
      <Image
        alt="team"
        width={512}
        height={512}
        className="border-dashed border-2 border-[#0ea5e975] rounded-full team-image"
        src="/images/team/raz-nobg-2.webp"
      />
    ),
    color: "#d4e3ff",
    email: "mailto:ras@cryptech.services",
    discord: "https://discord.com/users/306288896516423680",
  },
  {
    name: "Ercknard",
    href: "Developer",
    role1: "Web Developer",
    role2: "Web Designer",
    current:
      "We offer technical consultation by deeply understanding your project goals and challenges, and then providing targeted expertise and strategic guidance to optimize your systems, resolve technical issues, and enhance overall project success.",
    icon: (
      <Image
        alt="team"
        width={512}
        height={512}
        className="border-dashed border-2 border-[#0ea5e975] rounded-full team-image"
        src="/images/team/ercknard3-nobg.webp"
      />
    ),
    color: "#d4e3ff",
    email: "mailto:ercknard@cryptech.services",
    discord: "https://discord.com/users/615741889366458369",
  },
  {
    name: "Vanikoro",
    href: "Junior Developer",
    role1: "-",
    role2: "-",
    current:
      "We offer technical consultation by deeply understanding your project goals and challenges, and then providing targeted expertise and strategic guidance to optimize your systems, resolve technical issues, and enhance overall project success.",
    icon: (
      <Image
        alt="team"
        width={512}
        height={512}
        className="border-dashed border-2 border-[#0ea5e975] rounded-full team-image"
        src="/images/team/vani-2-nobg.webp"
      />
    ),
    color: "#d4e3ff",
    email: "mailto:vanikoro@cryptech.services",
    discord: "https://discord.com/users/500376620708659212",
  },
];

const TeamCards = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-[.25rem] w-full mb-8">
      {services.map((item) => (
        <div
          data-aos="zoom-out-right"
          className="relative flex flex-wrap items-center justify-center to-z-20"
          key={item.name}
        >
          <div className="blurs-effect flex-shrink-0 m-6 relative overflow-hidden bg-[#1e293b] rounded-lg lg:min-w-[22.5rem] lg:max-w-[22.5rem] min-w-[20rem] max-w-[20rem] lg:h-full h-[30rem] shadow-lg border-solid hover:border-2 border-l-[#2e6dd0] border-transparent border-2 hover:scale-105 team-hover team-card-hover">
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
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
            </div>
            <div className="relative text-white px-6 pb-6 mt-6 bg-team-card cover-team z-10">
              <div>{item.icon}</div>
              <div className="flex justify-between team-name">
                <span className="font-semibold text-3xl mt-2">{item.name}</span>
              </div>
              <span className="text-[#0ea5e9] text-xl pt-10 team-name">
                {item.href}{" "}
                {/* <span className="team-desc mx-2"> {item.role1} </span>{" "}
                <span className="team-desc"> {item.role2} </span> */}
              </span>{" "}
              {/* <span className="block font-semibold text-3xl mt-2 team-desc">
                Roles:
              </span>
              <span className="text-white text-l team-desc">{item.href}</span>
              <span className="text-white text-l team-desc">{item.role1}</span>
              <span className="text-white text-l team-desc ml-1">
                {item.role2}
              </span> */}
              <div className="flex gap-4 justify-center">
                <span className="text-white text-l team-desc">
                  {item.role1}
                </span>
                <span className="text-white text-l team-desc ml-1">
                  {item.role2}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="p-4 mt-1 block text-lg text-[#cccccc] overflow-wrap: break-word;">
                Cryptech Services
              </span>
              <div className="flex gap-[.5rem] mr-2">
                <a href={item.email} target="_blank">
                  <Button variant="contained">
                    <MailOutlineIcon />
                  </Button>
                </a>
                <a href={item.discord} target="_blank">
                  <Button variant="contained">
                    <PermIdentityIcon />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </section>
  );
};

export default TeamCards;
