"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const heroApps = [
  {
    title: "Gmail",
    link: "https://gmail.com",
    thumbnail: "/apps/gmail.svg",
  },
  {
    title: "Google Sheets",
    link: "https://docs.google.com/spreadsheets",
    thumbnail: "/apps/google-sheets.svg",
  },
  {
    title: "Hubspot",
    link: "https://www.hubspot.com/",
    thumbnail: "/apps/hubspot.svg",
  },
  {
    title: "OpenAI",
    link: "https://openai.com/",
    thumbnail: "/apps/openai.svg",
  },
  {
    title: "Stripe",
    link: "https://stripe.com/",
    thumbnail: "/apps/stripe.svg",
  },
  {
    title: "Google Calendar",
    link: "https://calendar.google.com/calendar",
    thumbnail: "/apps/google-calendar.svg",
  },
  {
    title: "Google Docs",
    link: "https://docs.google.com/document",
    thumbnail: "/apps/google-docs.svg",
  },
  {
    title: "Notion",
    link: "https://www.notion.so/",
    thumbnail: "/apps/notion.svg",
  },
  {
    title: "Google Drive",
    link: "https://www.google.com/drive/",
    thumbnail: "/apps/google-drive.svg",
  },
  {
    title: "Google Forms",
    link: "https://docs.google.com/forms",
    thumbnail: "/apps/google-forms.svg",
  },
  {
    title: "Outlook",
    link: "https://outlook.live.com",
    thumbnail: "/apps/outlook.svg",
  },
  {
    title: "Google Slides",
    link: "https://docs.google.com/presentation",
    thumbnail: "/apps/google-slides.svg",
  },
  {
    title: "Slack",
    link: "https://slack.com/",
    thumbnail: "/apps/slack.svg",
  },
  {
    title: "Gemini",
    link: "https://gemini.google.com/app",
    thumbnail: "/apps/gemini.svg",
  },
  {
    title: "Anthropic",
    link: "https://www.anthropic.com/",
    thumbnail: "/apps/anthropic.svg",
  },
];

export const HeroParallax = ({
  apps = heroApps,
  children,
}: {
  apps?: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  children?: React.ReactNode;
}) => {
  const firstRow = apps.slice(0, 5);
  const secondRow = apps.slice(5, 10);
  const thirdRow = apps.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 3000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -3000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.4, 1], [0.05, 0.8, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-200, 500]),
    springConfig
  );
  return (
    <div className="max-w-full">
      <div className="absolute flex items-center flex-col left-0 right-0 md:py-40 px-4 sm:px-0 p-6 w-full space-y-8 z-10">
        <div className="max-w-7xl">{children}</div>
      </div>
      <div
        ref={ref}
        className="-mt-14 pt-32 h-[1250px] md:h-[1780px] lg:h-[2350px] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className=""
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((product) => (
              <AppCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row  mb-20 space-x-20 ">
            {secondRow.map((product) => (
              <AppCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((product) => (
              <AppCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export const AppCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-48 lg:h-96 w-[15rem] lg:w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-contain object-center absolute h-full w-full inset-0 p-2"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white hidden">
        {product.title}
      </h2>
    </motion.div>
  );
};
