import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export function HomeFeatures() {
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
            learnMoreLink="https://docs.lecca.io/agents"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="size-12"
              >
                <rect width="8" height="8" x="3" y="3" rx="2" />
                <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                <rect width="8" height="8" x="13" y="13" rx="2" />
              </svg>
            }
            learnMoreLink="https://docs.lecca.io/workflows"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="size-12"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            }
            learnMoreLink="https://docs.lecca.io/triggers"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="size-12"
              >
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                <path d="M8 10v4" />
                <path d="M12 10v2" />
                <path d="M16 10v6" />
              </svg>
            }
            learnMoreLink="https://docs.lecca.io/projects"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="size-12"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            }
            learnMoreLink="https://docs.lecca.io/connections"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
            learnMoreLink="https://docs.lecca.io/knowledge"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="size-12"
              >
                <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
                <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
              </svg>
            }
            learnMoreLink="https://docs.lecca.io/variables"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="size-12"
              >
                <path d="M15 12h-5" />
                <path d="M15 8h-5" />
                <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
              </svg>
            }
            learnMoreLink="https://docs.lecca.io/executions"
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
  imageSrc,
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
