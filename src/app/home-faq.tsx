import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function HomeFAQ() {
  return (
    <div className="flex items-center justify-center w-full bg-muted py-12 lg:py-40">
      <div className="flex flex-col lg:flex-row items-start justify-center max-w-7xl gap-4 lg:gap-20 px-8 lg:px-0">
        <div className="flex-1 flex-col space-y-8">
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
            className="size-20"
          >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
          <h2 className="text-4xl font-semibold">Frequently Asked Questions</h2>
          <p>
            We're dedicated to providing our customers with the best support
            possible. If you have any questions, please feel free to reach out
            to us at <span className="underline">support@lecca.io</span>.
          </p>
        </div>
        <div className="flex-1 w-full">
          <Accordion type="single" collapsible>
            <AccordionItem value="item1">
              <AccordionTrigger>What is an AI Agent?</AccordionTrigger>
              <AccordionContent>
                An AI Agent is a model equipped with tools that enable it to
                perform tasks automatically, based on the instructions you
                provide. These tools include actions like sending emails,
                creating calendar events, and even running custom workflows
                you’ve set up. This allows the agent to handle tasks efficiently
                and support your projects without manual effort.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item2">
              <AccordionTrigger>What can an AI Agent do?</AccordionTrigger>
              <AccordionContent>
                An AI Agent can perform a wide range of tasks based on the tools
                and integrations you provide. With the right setup, they can
                access the web, perform Google searches, make phone calls, and
                use other integrations to complete tasks. This flexibility
                allows AI Agents to support your needs across various platforms
                and applications, all customized to work specifically for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item3">
              <AccordionTrigger>
                Can Agents interact with each other?
              </AccordionTrigger>
              <AccordionContent>
                Yes, any AI Agent can function as a sub-agent to another agent.
                Sub-agents are assigned specific tasks and will complete them
                before reporting back to the main agent. This flexibility allows
                agents to collaborate effectively, enabling complex, multi-step
                workflows to be carried out smoothly and efficiently.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item4">
              <AccordionTrigger>
                Should I use a Workflow or an Agent?
              </AccordionTrigger>
              <AccordionContent>
                Use a Workflow when you need tasks to follow a consistent,
                repeatable process every time—they’re ideal for predictable,
                structured tasks. An Agent, on the other hand, is best for tasks
                that may vary each time. With the instructions and tools
                provided, an Agent can adapt to different situations and
                accomplish tasks that require a more flexible approach. This
                makes Agents ideal for dynamic problem-solving, while Workflows
                ensure reliability for routine processes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item5">
              <AccordionTrigger>How do credits work?</AccordionTrigger>
              <AccordionContent>
                Currently, credits are only charged when you use specific
                actions, such as AI processing, web access, or phone actions.
                Both Workflows and Agents can use these actions, but if they
                don’t, no credits are deducted. For example, if your Workflow or
                Agent performs tasks without AI, web, or phone actions, it runs
                without any credit cost. In the future, we plan to introduce a
                small credit charge per run, but for now, only the specific
                actions mentioned will impact your credit balance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item6">
              <AccordionTrigger>What data do you store?</AccordionTrigger>
              <AccordionContent>
                We prioritize security by encrypting your authentication
                information, only decrypting it when needed to perform specific
                actions on your behalf. Additionally, we temporarily store
                responses generated during AI conversations or workflow
                executions to assist with debugging or to manage workflows that
                require human intervention or are paused. These temporary
                records are automatically deleted after a short period, ensuring
                your data is retained only as long as necessary to support your
                tasks.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-10">
            <Button>
              <Link
                href="https://app.lecca.io"
                className="flex space-x-2 items-center"
              >
                <span>Start Building</span>
                <ChevronRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
