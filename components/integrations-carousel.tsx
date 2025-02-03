"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function IntegrationsCarousel() {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (ul.nextSibling as any)?.setAttribute?.("aria-hidden", "true");
    }
  }, []);

  return (
    <section className="relative z-[1] w-full space-y-16 py-0">
      {/* <p className="text-center p-8">
        <span className="font-semibold text-3xl">
          Connect your business tools
        </span>
        <br />
        <span className="text-muted-foreground text-lg">
          We&apos;re adding new integrations every week.
        </span>
      </p> */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul
          ref={logosRef}
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <Image
              src="/apps/anthropic.svg"
              width={60}
              height={60}
              alt="Anthropic"
            />
          </li>
          <li>
            <Image src="/apps/gmail.svg" width={60} height={60} alt="Gmail" />
          </li>
          <li>
            <Image
              src="/apps/google-calendar.svg"
              width={60}
              height={60}
              alt="Google Calendar"
            />
          </li>
          <li>
            <Image
              src="/apps/google-docs.svg"
              width={60}
              height={60}
              alt="Google Docs"
            />
          </li>
          <li>
            <Image
              src="/apps/google-drive.svg"
              width={60}
              height={60}
              alt="Google Drive"
            />
          </li>
          <li>
            <Image
              src="/apps/google-forms.svg"
              width={60}
              height={60}
              alt="Google Forms"
            />
          </li>
          <li>
            <Image
              src="/apps/google-sheets.svg"
              width={60}
              height={60}
              alt="Google Sheets"
            />
          </li>
          <li>
            <Image
              src="/apps/hubspot.svg"
              width={60}
              height={60}
              alt="Hubspot"
            />
          </li>
          <li>
            <Image src="/apps/notion.svg" width={60} height={60} alt="Notion" />
          </li>
          <li>
            <Image
              src="/apps/openai.svg"
              width={60}
              height={60}
              alt="OpenAI"
              className="dark:bg-white dark:rounded dark:p-2"
            />
          </li>
          <li>
            <Image
              src="/apps/outlook.svg"
              width={60}
              height={60}
              alt="Outlook"
            />
          </li>
          <li>
            <Image src="/apps/slack.svg" width={60} height={60} alt="Slack" />
          </li>
          <li>
            <Image src="/apps/gemini.svg" width={60} height={60} alt="Gemini" />
          </li>
        </ul>
      </div>
    </section>
  );
}
