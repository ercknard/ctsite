import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import GitHubIcon from "@mui/icons-material/GitHub";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const project_picker = [
  {
    name: "CryptechTest Game",
    href: "#",
    current:
      "Our full-stack web development approach involves proficiently handling both front-end and back-end aspects to deliver comprehensive and dynamic web solutions.",
    icon: <CurrencyBitcoinOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
    bg: "ctg",
    icon: (
      <Image
        alt="team"
        width={64}
        height={64}
        className="team-image"
        src="/images/mug.png"
      />
    ),
  },
  {
    name: "Metrix LGP",
    href: "#",
    current:
      "As experts in Web3 and DApp development, we harness the power of decentralized technologies to build immersive and user-friendly applications.",
    icon: <PrecisionManufacturingOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
    bg: "lgp",
    icon: (
      <Image
        alt="team"
        width={64}
        height={64}
        className="team-image"
        src="/images/logo-g-color.png"
      />
    ),
  },
  {
    name: "metrix.place",
    href: "#",
    current:
      "We specialize in Solidity smart contract development, creating secure and efficient blockchain-based solutions tailored to your specific decentralized application needs.",
    icon: <ShieldOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
    bg: "mp",
    icon: (
      <Image
        alt="team"
        width={64}
        height={64}
        className="team-image"
        src="/images/placelogo.png"
      />
    ),
  },
  {
    name: "MetriMask Mobile",
    href: "#",
    current:
      "Our web design approach focuses on crafting user-centric and aesthetically pleasing websites that align with your brand identity and business goals.",
    icon: <DesignServicesOutlinedIcon fontSize="large" />,
    color: "#d4e3ff",
    bg: "mm",
    icon: (
      <Image
        alt="team"
        width={64}
        height={64}
        className="team-image"
        src="/images/mm.webp"
      />
    ),
  },
];

export default function ProjectsCall() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-[99vw] bg-[#0b1120] visibility-hidden"
      >
        <SwiperSlide>
          <section className="relative flex items-center min-h-[75vh] cryptechtest">
            <span className="dust-cover" />
            <div className="grid lg:px-8 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 z-[1]">
                <div className="max-w-2xl mb-4 text-5xl font-bold tracking-tight leading-none md:text-5xl xl:text-5xl text-white underlined-1">
                  CryptechTest Game
                </div>
                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
                  Community-driven Minetest Game with endless possibilities.
                  Join us and embark on a journey of creativity, collaboration,
                  and adventure in our immersive world.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
                >
                  Get started
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border  rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
                >
                  Speak to Sales
                </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex z-[1] ml-auto mr-auto justify-center">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/ship-2.webp"
                  alt="mockup"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative flex items-center min-h-[75vh] lgp">
            <span className="dust-cover" />
            <div className="grid lg:px-8 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 z-[1]">
                <div className="max-w-2xl mb-4 text-5xl font-bold tracking-tight leading-none md:text-5xl xl:text-5xl text-white">
                  Liquid Governance Protocol
                </div>
                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
                  Empowering MRX holders with MetrixCoin governance-driven
                  liquidity strategies, fostering decentralization and
                  resilience within the ecosystem.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
                >
                  Get started
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border  rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
                >
                  Speak to Sales
                </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex z-[1] w-[50%] ml-auto mr-auto justify-center">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/logo-g-color.png"
                  alt="mockup"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="relative flex items-center min-h-[75vh] place">
            <span className="dust-cover" />
            <div className="grid lg:px-8 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 z-[1]">
                <div className="max-w-2xl mb-4 text-5xl font-bold tracking-tight leading-none md:text-5xl xl:text-5xl text-white">
                  metrix.place
                </div>
                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
                  A communal graffiti board which any address can set a single
                  pixel per MetrixCoin block by paying the gas fee for the
                  transaction.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
                >
                  Get started
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border  rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
                >
                  Speak to Sales
                </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex z-[1] w-[50%] ml-auto mr-auto justify-center">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/placelogo.png"
                  alt="mockup"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="relative flex items-center min-h-[75vh] metrimask">
            <span className="dust-cover" />
            <div className="grid lg:px-8 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 z-[1]">
                <div className="max-w-2xl mb-4 text-5xl font-bold tracking-tight leading-none md:text-5xl xl:text-5xl text-white">
                  MetriMask Mobile
                </div>
                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
                  Use MetriMask to interact with Metrixcoin Web3 apps from your
                  mobile device. Store your coins and complete your transactions
                  without needing desktop machine access.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
                >
                  Get started
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border  rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
                >
                  Speak to Sales
                </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex z-[1] w-[50%] ml-auto mr-auto justify-center">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/mm.webp"
                  alt="mockup"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-[75vw] project-selector"
      >
        <SwiperSlide>
          <Image
            width={1000}
            height={1000}
            src="/images/BG-B2.webp"
            alt="mockup"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1000}
            height={1000}
            src="/images/Lgp.PNG"
            alt="mockup"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1000}
            height={1000}
            src="/images/place.PNG"
            alt="mockup"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4s.jpg" />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper> */}

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={40}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper max-w-screen-vxl project-selector flex -mt-[7.5rem]"
      >
        {project_picker.map((item) => (
          <SwiperSlide
            className="flex flex-wrap items-center hover:opacity-100 cursor-pointer"
            key={item.name}
          >
            <div
              className={
                "flex-shrink-0 m-6 relative overflow-hidden bg-[#1e293b] rounded-lg lg:min-w-[20rem] lg:max-w-[20rem] min-w-[20rem] max-w-[20rem] lg:h-[15rem] h-[27.5rem] shadow-lg hover:bg-[#004b9a50] border-solid hover:border-2 border-l-[#2e6dd0] border-transparent border-2 hover:scale-105 " +
                item.bg
              }
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
              <span className="to-fog-proj"></span>
              <div className="relative text-white px-6 pb-6 mt-6 bg-team-card cover-team z-10">
                <div>{item.icon}</div>
                <div className="flex justify-between team-name">
                  <span className="font-semibold text-2xl mt-2">
                    {item.name}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="p-4 mt-1 block text-lg text-[#cccccc] overflow-wrap: break-word;">
                  Cryptech Services
                </span>
                <div className="flex gap-[.5rem] mr-4">
                  <Button variant="contained">
                    <GitHubIcon />
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        ;
      </Swiper>
    </>
  );
}
