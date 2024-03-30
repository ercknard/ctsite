"use client";
import React, { Component, useState } from "react";
import Marquee from "react-fast-marquee";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const services = [
  {
    name: "Cryptocurrency",
    href: "#",
    current: true,
    icon: <CurrencyBitcoinOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
  },
  {
    name: "Blockchain Technology",
    href: "#",
    current: false,
    icon: <PrecisionManufacturingOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
  },
  {
    name: "Cyber Security",
    href: "#",
    current: false,
    icon: <ShieldOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
  },
  {
    name: "Web Design",
    href: "#",
    current: false,
    icon: <DesignServicesOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
  },
  {
    name: "Technical Consulation",
    href: "#",
    current: false,
    icon: <SupportAgentOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
  },
];

const ServicesMarquee = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <Marquee className="marquee-width mt-8">
      {services.map((item) => (
        <div
          className="flex items-center text-[2rem] mx-10 text-gray-500 font-semibold"
          key={item.name}
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            color: item.name === hoveredItem ? item.color : "inherit",
          }}
        >
          <div className="mr-1">{item.icon}</div>
          <div className="mt-1">{item.name}</div>
        </div>
      ))}
    </Marquee>
  );
};

export default ServicesMarquee;
