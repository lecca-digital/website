"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeftIcon,
  CheckCircledIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function HomePage() {
  const logosRef = useRef<HTMLUListElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setIsDarkMode(true)
      : setIsDarkMode(false);
  }, []);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      (ul.nextSibling as any)?.setAttribute?.("aria-hidden", "true");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-28 sm:pb-48">
      <section className="w-full flex items-center justify-center flex-col overflow-hidden relative">
        <div className="max-w-5xl w-full space-y-8 p-8 xl:p-0">
          <h1 className="text-3xl md:text-5xl font-bold max-w-[900px] animate-fade-in">
            AI Automations for Greater Insight, Growth, Efficiency
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-muted-foreground max-w-[600px] opacity-0 animate-fade-in-delayed-0.5s">
            Lecca.io is a no-code platform for building AI agents & workflow
            automations.
          </h2>
          <div className="space-x-4">
            <Button asChild className="opacity-0 animate-fade-in-delayed-1s">
              <Link href="https://app.lecca.io">Try for free</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="opacity-0 animate-fade-in-delayed-1.5s"
            >
              <Link href="https://docs.lecca.io" className="space-x-2">
                <span>Explore Features</span>
                <ChevronRightIcon />
              </Link>
            </Button>
          </div>
        </div>
        <div
          className="relative hidden sm:flex justify-center w-full max-w-8xl h-[700px] md:h-[900px] pointer-events-none select-none mt-24 opacity-0 animate-fade-in-delayed-1.5s"
          style={{
            perspective: "4000px",
            perspectiveOrigin: "100% 0;",
          }}
        >
          <Image
            src={`/images/workflow-screenshot-${
              isDarkMode ? "dark" : "light"
            }.JPG`}
            width={1600}
            height={900}
            priority
            alt="Workflow Automation Example"
            className="absolute border-2 rounded-sm [transform:rotateX(40deg)rotateY(20deg)rotate(330deg)translateX(-50px)translateY(50px)] light:drop-shadow-2xl dark:shadow-xl"
            style={{ transformOrigin: "top left" }}
          />
          <div className="bg-gradient-to-t from-background via-background/80 via-80% to-bg-background h-72 w-full absolute bottom-40" />
        </div>
        <div
          className="relative sm:hidden flex justify-center w-full max-w-8xl h-[700px] md:h-[900px] pointer-events-none select-none mt-24 opacity-0 animate-fade-in-delayed-1.5s"
          style={{
            perspective: "4000px",
            perspectiveOrigin: "100% 0;",
          }}
        >
          <Image
            src={`/images/workflow-screenshot-${
              isDarkMode ? "dark" : "light"
            }.JPG`}
            width={1600}
            height={900}
            priority
            alt="Workflow Automation Example"
            className="absolute border rounded-sm [transform:rotateX(40deg)rotateY(20deg)rotate(330deg)translateX(-450px)translateY(-50px)scale(2)] drop-shadow-xl"
            style={{ transformOrigin: "top left" }}
          />
          <div className="bg-gradient-to-t from-background via-background/80 via-80% to-bg-background h-60 w-full absolute bottom-60" />
        </div>
      </section>
      <section className="-mt-80 xl:-mt-40 relative z-[1] bg-background w-full space-y-16">
        <p className="text-center p-8">
          <span className="font-bold text-3xl">
            Connect your business tools
          </span>
          <br />
          <span className="font-bold text-muted-foreground text-2xl">
            We&apos;re adding new integrations every week.
          </span>
        </p>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul
            ref={logosRef}
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li>
              <Image
                src="/apps/github.svg"
                width={80}
                height={80}
                alt="Github"
                className="dark:bg-white dark:rounded dark:p-2"
              />
            </li>
            <li>
              <Image src="/apps/gmail.svg" width={80} height={80} alt="Gmail" />
            </li>
            <li>
              <Image
                src="/apps/google-calendar.svg"
                width={80}
                height={80}
                alt="Google Calendar"
              />
            </li>
            <li>
              <Image
                src="/apps/google-docs.svg"
                width={80}
                height={80}
                alt="Google Docs"
              />
            </li>
            <li>
              <Image
                src="/apps/google-drive.svg"
                width={80}
                height={80}
                alt="Google Drive"
              />
            </li>
            <li>
              <Image
                src="/apps/google-forms.svg"
                width={80}
                height={80}
                alt="Google Forms"
              />
            </li>
            <li>
              <Image
                src="/apps/google-sheets.svg"
                width={80}
                height={80}
                alt="Google Sheets"
              />
            </li>
            <li>
              <Image
                src="/apps/hubspot.svg"
                width={80}
                height={80}
                alt="Hubspot"
              />
            </li>
            <li>
              <Image
                src="/apps/notion.svg"
                width={80}
                height={80}
                alt="Notion"
              />
            </li>
            <li>
              <Image
                src="/apps/openai.svg"
                width={80}
                height={80}
                alt="OpenAI"
                className="dark:bg-white dark:rounded dark:p-2"
              />
            </li>
            <li>
              <Image
                src="/apps/outlook.svg"
                width={80}
                height={80}
                alt="Outlook"
              />
            </li>
            <li>
              <Image src="/apps/slack.svg" width={80} height={80} alt="Slack" />
            </li>
            <li>
              <Image
                src="/apps/todoist.svg"
                width={80}
                height={80}
                alt="Todoist"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-background w-full pt-40 mb-8 sm:mb-44 flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center lg:flex-row space-y-8 lg:space-y-0 lg:space-x-20">
          <div className="max-w-xl p-8 xl:p-0 space-y-8">
            <p className="text-left">
              <span className="font-bold  text-2xl sm:text-4xl">
                Agents can execute tasks like creating documents, sending
                emails, setting appointments, and more.
              </span>
            </p>
            <div className="space-y-8">
              <ol className="space-y-4">
                <li className="flex items-start space-x-2">
                  <CheckCircledIcon className="text-green-600 size-6" />
                  <span className="font-bold text-xl">Create a project</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircledIcon className="text-green-600 size-6" />
                  <span className="font-bold text-xl">
                    Add an agent to your project
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircledIcon className="text-green-600 size-6" />
                  <span className="font-bold text-xl">
                    Give your agent access to your apps
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircledIcon className="text-green-600 size-6" />
                  <span className="font-bold text-xl">
                    Give your agent instructions to define its role
                  </span>
                </li>
              </ol>

              <p className="text-lg text-muted-foreground">
                Setup triggers, chat with your agent, and execute tasks from
                workflows.
              </p>
            </div>
          </div>
          <div className="hidden sm:block border p-2 m-4 xl:m-0 rounded-sm drop-shadow">
            <Image
              src={`/images/agent-conversation-${
                isDarkMode ? "dark" : "light"
              }.JPG`}
              width={600}
              height={600}
              alt="Agent Conversation"
            />
          </div>
          <div className="block sm:hidden h-[580px]">
            <Image
              src={`/images/agent-conversation-${
                isDarkMode ? "dark" : "light"
              }.JPG`}
              width={600}
              height={600}
              alt="Agent Conversation"
              className="translate-x-40 translate-y-20 scale-150 p-2 border rounded drop-shadow-sm"
            />
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="bg-background w-full flex flex-col space-y-16 items-center justify-center8 p-8 pt-0 xl:p-0"
      >
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-4xl font-bold">Pricing</h2>
          <h3 className="text-2xl font-bold text-muted-foreground max-w-[250px] sm:max-w-full">
            Start for free and upgrade as you grow
          </h3>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription className="text-2xl font-bold">
                Free
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              <ul className="space-y-2">
                <Feature title="1 User" />
                <Feature title="1 Project" />
                <Feature title="1 Knowledge Notebook" />
                <Feature title="3 Workflows" />
                <Feature title="3 Agents" />
                <Feature title="7,000 credits per day" />
                <Feature title="Unlimited Variables" />
                <Feature title="Unlimited Connections" />
                <Feature title="Access to all apps" />
                <Feature title="15 minute polling trigger" />
                <Feature title="Execution history 3 days" />
                <Feature title="Agent task history 3 days" />
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-muted-foreground text-xs">
                *Unlimited within reason
              </p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Professional</CardTitle>
              <CardDescription className="text-2xl font-bold">
                <span>$99.00</span>
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
                <Feature title="200,000 credits per day" />
                <Feature title="5 minute polling trigger" />
                <Feature title="Execution history 1 week" />
                <Feature title="Agent task history 1 week" />
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
                <span>$300.00</span>
                <span className="text-sm">/ month</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <Feature title="Unlimited Users" />
                <Feature title="800,000 credits per day" />
                <Feature title="Priority support" />
                <Feature title="Priority apps integrations" />
                <Feature title="1 minute polling trigger" />
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
          <h3 className="text-lg font-semibold text-muted-foreground">
            Get started for free
          </h3>
          <Button asChild>
            <Link href="https://app.lecca.io" className="space-x-2">
              <span>Start building</span>
              <ChevronRightIcon className="size-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
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
