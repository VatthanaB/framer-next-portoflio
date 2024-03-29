"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Wedding Website",
    desc: "Create unforgettable memories for your special day with the Wedding Website, a beautiful and customizable platform built on the Next.js framework. This website combines the elegance of Tailwind CSS, the type-safety of TypeScript, and the power of Daisy UI to bring you a seamless wedding planning experience.",
    img: "/portfolio/wedding.png",
    link: "https://vath-alex-wedding.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Tindog Concept App",
    desc: "A charming and simple frontend project crafted at the beginning of my coding journey. Tindog is designed with HTML, CSS, and Bootstrap, offering a delightful visual experience with no complex interactions or functionalities.",
    img: "/portfolio/tindog.png",
    link: "https://vatthanab.github.io/TindogWebsite/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Infinite Anime Scroll App",
    desc: "Dive into the captivating world of anime with the Infinite Anime Viewer, a dynamic application built on the Next.js framework. This app combines the fluidity of infinite scrolling, the immersive animations of Framer Motion, and the power of React to bring you an unparalleled anime discovery experience.",
    img: "/portfolio/AnimeInfiniteviewer.png",
    link: "https://infinite-anime-viewer.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Project Portfolio Website",
    desc: "First draft of my portfolio website, showcasing my projects and skills. This website is built with React, Tailwind CSS, and Daisy UI, Express, MongoDB offering a clean and responsive design that highlights my work and experience.",
    img: "/portfolio/portfolio.png",
    link: "https://projects-portfolio-vatthana.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] ">
                    <Image src={item.img} alt="" fill className="rounded-lg" />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-end"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-Stack Developer & Bug Fixer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
