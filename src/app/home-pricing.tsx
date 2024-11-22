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
import Link from "next/link";

export function HomePricing() {
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
              Free
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
              <span>$20.00</span>
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
              <span>$50.00</span>
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
          <Link href="https://docs.lecca.io/credits" className="space-x-2">
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
