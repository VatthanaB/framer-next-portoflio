"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 0,
    color: "from-red-300 to-red-200",
    title: "Buzzly x Datacom",
    desc: "At Buzzly, I contribute to building a platform, currently in production, empowering young voices in New Zealand by tackling engagement challenges through co-design with youth. I work on both frontend (Next.js 14) and backend (Strapi) development, and manage AWS infrastructure (Lambda, S3, ECS, Amplify) for reliability and performance. My role includes ongoing support and optimization to ensure the platform's scalability and impact on youth engagement.",
    img: "/buzzly.png",
    link: "https://www.buzzly.nz/",
    demo: true,
  },
  {
    id: 1,
    color: "from-red-200 to-blue-300",
    title: "Dialect revitalisation",
    desc: "In my role as a contractor for Toro Technology, I collaborated with Datacom on a proof of concept to revitalize Te Reo Nāti in Gisborne. The project used AI services like Azure OCR, custom translation, Text-to-Speech, and OpenAI APIs. We trained a translator and voice model, with Next.js for the frontend and Strapi CMS for the backend. As the lead developer, I worked with a Datacom software architect and a designer to implement this solution.",
    img: "/maia.png",
    link: "https://vath-alex-wedding.vercel.app/",
    demo: false,
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Datacom Scheduler",
    desc: "The Datacom Scheduler was a 10-week project that I fully delivered during my internship at Datacom. I played a major role in developing this content management system using Next.js, Strapi CMS, and Azure Services. The project was executed in an Agile manner, incorporating DevOps best practices to ensure efficient workflows and high-quality outputs. Although a live demo is not available, please contact me for more details about the project.",
    img: "/datacom.png",
    link: "",
    demo: false,
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Infinite Anime Scroll",
    desc: "Dive into the captivating world of anime with the Infinite Anime Viewer, a dynamic application built on the Next.js framework. This app combines the fluidity of infinite scrolling, the immersive animations of Framer Motion, and the power of React to bring you an unparalleled anime discovery experience.",
    img: "/AnimeInfiniteviewer.png",
    link: "https://infinite-anime-viewer.vercel.app/",
    demo: true,
  },
  // {
  //   id: 4,
  //   color: "from-purple-300 to-red-300",
  //   title: "Project Portfolio",
  //   desc: "First draft of my portfolio website, showcasing my projects and skills. This website is built with React, Tailwind CSS, and Daisy UI, Express, MongoDB offering a clean and responsive design that highlights my work and experience.",
  //   img: "/portfolio.png",
  //   link: "https://projects-portfolio-vatthana.vercel.app/",
  //   demo: true,
  // },
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
            <div className="  h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-start pt-8 px-12 justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col justify-start gap-8 text-white">
                  <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative">
                    <img
                      src={item.img}
                      alt=""
                      className="rounded-2xl md:w-96 md:h-64 lg:w-[700px] lg:h-[350px] xl:w-[700px] xl:h-[400px] object-fill"
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[700px] text-sm lg:text-lg xl:w-[700px]">
                    {item.desc}
                  </p>
                  <div className="flex justify-end flex-grow">
                    {item.demo ? (
                      <Link href={item.link} target="_blank">
                        <button className=" p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                          See Demo
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-5xl md:text-8xl">Do you have a project?</h1>
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
