"use client";

import { apps, HeroParallax } from "@/components/hero-parallax";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export function HomeHero() {
  return (
    <HeroParallax apps={apps}>
      <div className="p-2 xl:p-0 max-w-7xl">
        <Link href="https://docs.lecca.io/apps/web" target="_blank">
          <div className="hidden lg:flex items-center justify-center mb-28 space-x-2">
            <Badge variant={"default"} className="px-4 space-x-2">
              <span className="text-sm">
                Web extraction and phone calling now available
              </span>
              <span role="img" aria-label="fireworks">
                🎉
              </span>
            </Badge>
          </div>
        </Link>
        <div className="flex flex-col xl:flex-row lg:justify-between items-center">
          <div className="flex flex-col space-y-6">
            <h3 className="text-muted-foreground font-light">Lecca.io</h3>
            <h1 className="text-3xl md:text-5xl font-semibold max-w-[900px] animate-fade-in">
              <span>AI Automations</span>
              <br />
              <div>
                <span>for Greater</span>{" "}
                <Typewriter
                  words={["Insight", "Growth", "Efficiency"]}
                  cursor={true}
                  loop={true}
                />
              </div>
            </h1>
            <h2 className="text-lg md:text-xl text-muted-foreground max-w-[600px] opacity-0 animate-fade-in-delayed-0.5s">
              Lecca.io is a no-code platform for building AI agents & workflow
              automations.
            </h2>
            <div className="space-x-2 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="opacity-0 animate-fade-in-delayed-1s"
                size="lg"
              >
                <Link href="https://app.lecca.io">Try for free</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="opacity-0 animate-fade-in-delayed-1.5s"
                size="lg"
              >
                <Link href="https://docs.lecca.io" className="space-x-2">
                  <span>Explore Features</span>
                  <ChevronRightIcon />
                </Link>
              </Button>
            </div>
          </div>
          <div className="max-w-[650px] mt-10 lg:mt-0 px-10">
            <Image
              src="/gifs/demo-gif-light.gif"
              alt="Workflow Demo"
              width={1900}
              height={800}
              className="rounded-md border-4 shadow-lg block dark:hidden lg:scale-125 lg:ml-10"
            />
            <Image
              src="/gifs/demo-gif-dark.gif"
              alt="Workflow Demo"
              width={1900}
              height={800}
              className="rounded-md border-4 shadow-lg hidden dark:block lg:scale-125 lg:ml-10"
            />
          </div>
        </div>
        <div
          className="absolute left-0 right-0 -bottom-32 hidden lg:flex items-center justify-center flex-col animate-pulse"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
        >
          <span className="text-sm text-muted-foreground cursor-pointer">
            Scroll Down
          </span>
          <ChevronDownIcon className="size-8 text-muted-foreground" />
        </div>
      </div>
    </HeroParallax>
  );
}
