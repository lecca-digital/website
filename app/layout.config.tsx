import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center space-x-2">
        <Image
          src="/branding/lecca-io-logo-icon-96.png"
          width={30}
          height={30}
          alt="Lecca.io Logo"
          className="rounded-full border-[.5px]"
        />
        <span>Lecca.io</span>
      </div>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: "/docs/overview",
      active: "nested-url",
    },
    {
      text: "Tools",
      url: "/tools",
      active: "url",
    },
    {
      text: "AI Providers",
      url: "/ai-providers",
      active: "url",
    },
    {
      text: "Github",
      url: "https://github.com/lecca-digital/lecca-io",
      active: "url",
    },
    {
      text: "Sign Up",
      url: "https://app.lecca.io",
      secondary: true,
      type: "button",
    },
  ],
  githubUrl: "https://github.com/lecca-digital/lecca-io",
};
