import { Linkedin, X, Youtube } from "lucide-react";
import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import Link from "next/link";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer />
    </HomeLayout>
  );
}

function Footer() {
  return (
    <footer className="bg-muted flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-5xl px-10 py-16 flex space-y-10 md:space-y-0 space-x-0 md:space-x-10 justify-between flex-col md:flex-row">
        <section className="flex flex-col justify-between space-y-8">
          <p>
            <span className="font-bold">Lecca.io</span> <br />
            <span className="text-sm text-muted-foreground">
              AI Agent and Workflow Automation
            </span>
          </p>
          <div className="flex space-x-6 items-center">
            <Link href="https://x.com/lecca_io">
              <X className="text-muted-foreground size-4" />
            </Link>
            <Link href="https://www.linkedin.com/company/lecca-io">
              <Linkedin className="text-muted-foreground size-5" />
            </Link>
            <Link href="https://www.youtube.com/@lecca_io">
              <Youtube className="text-muted-foreground size-6" />
            </Link>
          </div>
        </section>
        <section className="flex flex-col space-y-2">
          <h3 className="font-bold">Resources</h3>
          <ul className="text-muted-foreground text-sm space-y-2">
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            {/* <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/report-issue">Report an issue</Link>
          </li>
          <li>
            <Link href="/request-integration">Request an integration</Link>
          </li> */}
            <li>
              <Link href="/docs/overview">Docs</Link>
            </li>
            {/* <li>
            <Link href="/faq">FAQ</Link>
          </li> */}
          </ul>
        </section>
        <section className="flex flex-col space-y-2">
          <h3 className="font-bold">Product</h3>
          <ul className="text-muted-foreground text-sm space-y-2">
            {/* <li>
            <Link href="/features">Features</Link>
          </li> */}
            <li>
              <Link href="/integrations">Integrations</Link>
            </li>
            {/* <li>
            <Link href="/changelog">Changelog</Link>
          </li> */}
            <li>
              <Link href="/#pricing">Pricing</Link>
            </li>
          </ul>
        </section>
        {/* <section className="flex flex-col space-y-2">
        <h3 className="font-bold">Company</h3>
        <ul className="text-muted-foreground text-sm space-y-2">
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </section> */}
      </div>
    </footer>
  );
}
