import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowTopRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export function NavigationBar() {
  return (
    <div className="fixed top-0 sm:top-4 w-[96vw] sm:w-[90vw] max-w-7xl left-1/2 -translate-x-1/2 sm:border sm:rounded-lg bg-background shadow-sm z-20">
      <div className="flex items-center justify-between p-2 space-x-10">
        <div className="flex items-center justify-between space-x-4 w-full">
          <Link
            className="font-bold text-lg ml-2 flex items-center space-x-2 hover:underline"
            href="/"
          >
            <Image
              src="/branding/lecca-io.svg"
              width={25}
              height={25}
              alt="Lecca.io Logo"
              className="rounded-full"
            />
            <span>Lecca.io</span>
          </Link>
          <ul className="flex items-center space-x-4 font-semibold text-sm light:text-muted-foreground justify-between ml-4">
            {/* <li className="hidden sm:block hover:underline">
              <Link href="/features">Features</Link>
            </li> */}
            <li className="hidden sm:block hover:underline">
              <Link href="/#pricing">Pricing</Link>
            </li>
            <li className="hidden sm:block hover:underline">
              <Link href="/#features">Features</Link>
            </li>
            <li className="hidden sm:block hover:underline">
              <Link href="/integrations">Integrations</Link>
            </li>
            <li className="hidden sm:block hover:underline">
              <Link
                href="https://docs.lecca.io"
                className="flex space-x-1 items-center"
              >
                <span>Docs</span>
                <ExternalLinkIcon className="size-3" />
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <ul className="flex items-center space-x-4">
              <li className="hidden sm:block">
                <Button variant="outline" asChild>
                  <Link href="https://app.lecca.io/login">Login</Link>
                </Button>
              </li>
              <li>
                <Button variant="default" asChild>
                  <Link href="https://app.lecca.io/welcome">Sign up</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
