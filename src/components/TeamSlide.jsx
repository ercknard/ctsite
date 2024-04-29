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
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Parallax, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
  },
  {
    name: "Baydroid",
    href: "Developer",
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
  },
  {
    name: "Boehmerang",
    href: "Developer",
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
  },
  {
    name: "Rasalghul",
    href: "Developer",
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
  },
  {
    name: "Ercknard",
    href: "Developer",
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
  },
  {
    name: "Vanikoro",
    href: "Junior Developer",
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
  },
];

const TeamSlide = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper max-w-screen-vxl"
      >
        <div
          slot="container-start"
          className="parallax-bg p-[3rem]"
          style={{
            "background-image":
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        {services.map((item) => (
          <SwiperSlide key={item.name} className="p-[3rem]">
            <div className="title" data-swiper-parallax="-300">
              {item.name}
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              {item.href}
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
        ))}
        ;
      </Swiper>
    </>
  );
};

export default TeamSlide;
