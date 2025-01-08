/* eslint-disable @next/next/no-img-element */
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroParallax } from "@/components/hero-parallax";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CheckCircledIcon,
  ChevronRightIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { ArrowLeftIcon, ChevronDownIcon, CodeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IntegrationsCarousel } from "@/components/integrations-carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeBenefits />
      <HomeFeatures />
      <IntegrationsCarousel />
      <HomePricing />
      <Separator />
      <HomeUseCases />
    </>
  );
}

function HomeHero() {
  return (
    <HeroParallax>
      <main className="flex flex-1 flex-col items-center justify-center text-center space-y-8">
        <div className="flex flex-col items-center space-y-6 lg:-mt-12">
          <h1 className="flex items-center space-x-3 font-bold flex-col space-y-3">
            <Image
              src="/branding/lecca-io-logo-icon-500.png"
              width={80}
              height={80}
              alt="Lecca.io Logo"
              className="rounded-full border-[.5px] hidden md:block"
            />
            <span className="text-2xl md:text-5xl ">Lecca.io</span>
          </h1>
          <h2 className="md:text-xl font-semibold">
            {" "}
            AI Agents & Automations{" "}
          </h2>
        </div>
        <div className="max-w-[1000px] mt-10 lg:mt-0 sm:px-10">
          <video
            src={"/videos/agent-demo.mp4"}
            width={1900}
            height={800}
            autoPlay={true}
            controls
            loop
            className="rounded-md border-4 shadow-lg"
          />
        </div>
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
            <Link href="/docs/overview" className="space-x-2">
              <span>Explore Features</span>
              <ChevronRightIcon />
            </Link>
          </Button>
        </div>
      </main>
      <div
        className="absolute left-0 right-0 -bottom-32 flex items-center justify-center flex-col animate-pulse"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 1.5,
            behavior: "smooth",
          });
        }}
      >
        <span className="text-sm text-muted-foreground cursor-pointer">
          Scroll Down
        </span>
        <ChevronDownIcon className="size-8 text-muted-foreground" />
      </div>
    </HeroParallax>
  );
}

function HomeBenefits() {
  return (
    <div className="border-y-2 relative -mt-96 xl:-mt-96 w-full bg-muted py-20 flex flex-col items-center justify-center px-8 lg:px-0">
      {/* Create 4 blocks using grid or flex. When screen size gets smaller, stack them */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl">
        <div className="flex flex-col lg:px-8">
          <p className="text-sm">Primary Benefits</p>
          <h3 className="text-3xl font-semibold mt-8">Why choose Lecca.io?</h3>
          <div className="w-20 h-0.5 bg-primary mt-8"></div>
        </div>
        <BenefitBlock
          title={"Modular"}
          description={
            "Bring your own API Keys, build custom tools, select AI providers to power your AI, and more."
          }
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="size-10"
            >
              <path d="M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm0 1.292c2.942 2.31 5.12 2.655 8 2.701v10.542c0 3.891-2.638 4.943-8 8.284-5.375-3.35-8-4.414-8-8.284v-10.542c2.88-.046 5.058-.391 8-2.701zm5 7.739l-5.992 6.623-3.672-3.931.701-.683 3.008 3.184 5.227-5.878.728.685z"></path>
            </svg>
          }
        />
        <BenefitBlock
          title="Human in the loop"
          description={
            "Add human oversight to your automations to ensure quality and compliance."
          }
          icon={<PersonIcon className="size-10" />}
        />
        <BenefitBlock
          title="Source Available"
          description={
            "Host Lecca.io on your own infrastructure and customize it to fit your needs."
          }
          icon={<CodeIcon className="size-10" />}
        />
      </div>
    </div>
  );
}

const BenefitBlock = ({
  title,
  description,
  icon,
  separator = true,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  separator?: boolean;
}) => {
  return (
    <div
      className={cn("flex flex-col lg:px-8", {
        "xl:border-l-[0.5px] border-primary": separator,
      })}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-4">{description}</p>
    </div>
  );
};

function HomeUseCases() {
  return (
    <section className="flex justify-center items-center md:px-32 py-24 lg:py-80">
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-40 items-center justify-center max-w-7xl px-8 lg:px-0">
        <div className="flex-1">
          <Image
            src="/images/agent-dark.png"
            alt="Agent Chat"
            width={1900}
            height={800}
            className="rounded-md border-4 shadow-lg hidden dark:block lg:scale-125"
          />
          <Image
            src="/images/agent-light.png"
            alt="Agent Chat"
            width={1900}
            height={800}
            className="rounded-md border-4 shadow-lg block dark:hidden lg:scale-125"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="text-4xl font-semibold lg:ml-8 mb-8">
            Find Your Use Case
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <BenefitBlock
              separator={false}
              title="Sales"
              description="Automate your sales process and close more deals faster with AI."
              icon={
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10"
                >
                  <path
                    d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="size-10"
                  ></path>
                </svg>
              }
            />
            <BenefitBlock
              separator={false}
              title={"Support"}
              description={
                "Upload custom data for your AI agent to provide personalized support."
              }
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-10"
                >
                  <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
                  <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                  <path d="m2 13 6 6" />
                </svg>
              }
            />
            <BenefitBlock
              separator={false}
              title="Social Media"
              description={
                "Generate ideas, schedule posts, and automate your social media presence."
              }
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-10"
                >
                  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                  <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                  <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              }
            />
            <BenefitBlock
              separator={false}
              title="Development"
              description={
                "Trigger automations via webhook and return a response to your applications."
              }
              icon={
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10"
                >
                  <path
                    d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              }
            />
          </div>
          <div className="mt-10 ml-8">
            <Button>
              <Link
                href="https://app.lecca.io"
                className="flex space-x-2 items-center"
              >
                <span>Start Building for Free</span>
                <ChevronRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeFeatures() {
  return (
    <section className="flex items-center justify-center w-full" id="features">
      <div className="flex flex-col items-center justify-center max-w-7xl space-y-8 w-full  py-12 lg:py-40 px-8 lg:px-0">
        <h2 className="text-4xl font-semibold">Explore our Features</h2>
        <Tabs
          defaultValue="Agents"
          className="w-full flex flex-col items-center justify-center"
        >
          <TabsList className="md:flex grid grid-cols-3 gap-2 md:gap-0 mb-12 md:mb-0">
            <TabsTrigger value="Agents">Agents</TabsTrigger>
            <TabsTrigger value="Workflows">Workflows</TabsTrigger>
            <TabsTrigger value="Triggers">Triggers</TabsTrigger>
            <TabsTrigger value="Projects">Projects</TabsTrigger>
            <TabsTrigger value="Connections">Connections</TabsTrigger>
            <TabsTrigger value="Knowledge">Knowledge</TabsTrigger>
            <TabsTrigger value="Variables">Variables</TabsTrigger>
            <TabsTrigger value="Logging">Logging</TabsTrigger>
          </TabsList>
          <FeatureContent
            id="Agents"
            title="Empower Your Workflow with AI Agents"
            description="Agents are AI models equipped with a range of tools, from sending emails and creating calendar invites to accessing CRM data. Provide them with the right tools, and they’ll handle tasks efficiently and intelligently."
            imageSrc=""
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-12"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
            }
            learnMoreLink="/docs/overview/components/agents"
          />
          <FeatureContent
            id="Workflows"
            title="Automate Tasks with Custom Workflows"
            description="Workflows execute a series of automated steps, each with a specific trigger, such as recurring schedules, webhooks, or app events. Set up workflows to streamline and automate your processes effortlessly."
            imageSrc=""
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-12"
              >
                <rect width="8" height="8" x="3" y="3" rx="2" />
                <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                <rect width="8" height="8" x="13" y="13" rx="2" />
              </svg>
            }
            learnMoreLink="/docs/overview/components/workflows"
          />
          <FeatureContent
            id="Triggers"
            title="Flexible Triggers for Seamless Automation"
            description="Triggers allow you to activate both workflows and AI agents autonomously. From new emails and events to new leads, use triggers to start your agents and automations right when you need them."
            imageSrc=""
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-12"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            }
            learnMoreLink="/docs/overview/components/workflows"
          />
          <FeatureContent
            id="Projects"
            title="Organize and Secure Your Automations"
            description="Projects help you organize automations and manage access to sensitive app connections. With projects, you can ensure that only authorized users have access to specific components, keeping your data secure and organized."
            imageSrc=""
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-12"
              >
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                <path d="M8 10v4" />
                <path d="M12 10v2" />
                <path d="M16 10v6" />
              </svg>
            }
            learnMoreLink="/docs/overview/components/projects"
          />
          <FeatureContent
            id="Connections"
            title="Securely Connect to Your Favorite Apps"
            description="Set up connections to multiple apps using secure methods like API keys and OAuth2. Every connection is encrypted on the server, ensuring your data stays protected while enabling seamless integrations."
            imageSrc=""
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-12"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            }
            learnMoreLink="/docs/overview/components/connections"
          />
          <FeatureContent
            id="Knowledge"
            title="Store and Retrieve Custom Data with Knowledge"
            description="Upload your custom data—such as PDFs and Word documents—for easy retrieval by AI agents and workflows. Perfect for chatbots, Q&A systems, or accessing any tailored information when you need it."
            imageSrc=""
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-12"
              >
                <path d="M12 7v14" />
                <path d="M16 12h2" />
                <path d="M16 8h2" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                <path d="M6 12h2" />
                <path d="M6 8h2" />
              </svg>
            }
            learnMoreLink="/docs/overview/components/knowledge"
          />
          <FeatureContent
            id="Variables"
            title="Create Reusable Variables for Workflows"
            description="Define reusable values—such as text, dates, numbers, and true/false options—that can be quickly referenced within your workflows. Simplify setup and ensure consistency across your automations."
            imageSrc=""
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-12"
              >
                <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
                <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
              </svg>
            }
            learnMoreLink="/docs/overview/components/variables"
          />
          <FeatureContent
            id="Logging"
            title="Track and Debug with Detailed Logs"
            description="Access temporary logs of AI conversations and workflow executions. Review each step, interact with workflows when human-in-the-loop is enabled, and dive into AI conversations. A valuable tool for monitoring and debugging."
            imageSrc=""
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-12"
              >
                <path d="M15 12h-5" />
                <path d="M15 8h-5" />
                <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
              </svg>
            }
            learnMoreLink="/docs/overview/components/executions"
          />
        </Tabs>
      </div>
    </section>
  );
}

function FeatureContent({
  id,
  title,
  description,
  icon,
  learnMoreLink,
}: {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  icon?: React.ReactNode;
  learnMoreLink: string;
}) {
  return (
    <TabsContent value={id} className="w-full mt-10">
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 lg:p-10">
          <div className="mb-6">{icon}</div>
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-muted-foreground">{description}</p>

          <Link
            href={learnMoreLink}
            className="flex space-x-2 mt-8 items-center"
          >
            <span className="text-sm">Learn More</span>
            <ChevronRightIcon />
          </Link>
        </div>
        {/* <div className="flex-1 flex items-center justify-center">
          <Image
            src={imageSrc}
            width={1000}
            height={1000}
            alt={title}
            className="border-4 rounded-md"
          />
        </div> */}
      </div>
    </TabsContent>
  );
}

function HomePricing() {
  return (
    <section
      id="pricing"
      className="bg-background w-full flex flex-col space-y-16 items-center py-12 lg:py-40 px-8 lg:px-0"
    >
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-semibold">Pricing</h2>
        <h3 className="text-lg text-muted-foreground max-w-[250px] sm:max-w-full">
          Start for free and upgrade as you grow
        </h3>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 max-w-6xl">
        <Card>
          <CardHeader>
            <CardTitle>Starter</CardTitle>
            <CardDescription className="text-2xl font-bold">
              <span className="text-primary">Free</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <ul className="space-y-2">
              <Feature title="1 User" />
              <Feature title="1 Project" />
              <Feature title="250 credits per month" />
              <Feature title="Unlimited Workflows" />
              <Feature title="Unlimited Agents" />
              <Feature title="Unlimited Variables" />
              <Feature title="Unlimited Connections" />
              <Feature title="Access to all apps" />
              <Feature title="1 hour polling trigger" />
              <Feature title="Execution history 3 days" />
              <Feature title="Agent task history 3 days" />
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Professional</CardTitle>
            <CardDescription className="text-2xl font-bold">
              <span className="text-primary">$20.00</span>
              <span className="text-sm">/ month</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <Feature title="1 User" />
              <Feature title="Unlimited Projects" />
              <Feature title="Unlimited Workflows" />
              <Feature title="Unlimited Agents" />
              <Feature title="Unlimited Knowledge Notebooks" />
              <Feature title="1500 credits per month" />
              <Feature title="15 minute polling trigger" />
              <Feature title="Execution history 1 week" />
              <Feature title="Agent task doesn't clear" />
            </ul>
          </CardContent>
          <CardFooter>
            <p className="flex items-center space-x-2 text-muted-foreground text-sm">
              <ArrowLeftIcon className="hidden lg:block" />
              <span>Plus all of Starter</span>
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Team</CardTitle>
            <CardDescription className="text-2xl font-bold">
              <span className="text-primary">$50.00</span>
              <span className="text-sm">/ month</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <Feature title="Unlimited Users" />
              <Feature title="Unlimited Projects" />
              <Feature title="Unlimited Workflows" />
              <Feature title="Unlimited Agents" />
              <Feature title="Unlimited Knowledge Notebooks" />
              <Feature title="5000 credits per month" />
              <Feature title="Priority support" />
              <Feature title="Priority apps integrations" />
            </ul>
          </CardContent>
          <CardFooter>
            <p className="flex items-center space-x-2 text-muted-foreground text-sm">
              <ArrowLeftIcon className="hidden lg:block" />
              <span>Plus all of Professional</span>
            </p>
          </CardFooter>
        </Card>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
        <h3 className="text-muted-foreground">Learn more about</h3>
        <Button asChild>
          <Link
            href="/docs/overview/credits/credit-usage"
            className="space-x-2"
          >
            <span>Credit Usage</span>
            <ChevronRightIcon className="size-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function Feature({ title }: { title: string; notIncluded?: boolean }) {
  return (
    <li className="flex items-center space-x-2">
      <CheckCircledIcon className="text-green-600" />
      <span className="text-muted-foreground font-semibold text-sm">
        {title}
      </span>
    </li>
  );
}
