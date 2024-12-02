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
          src="/branding/lecca-io.svg"
          width={20}
          height={20}
          alt="Lecca.io Logo"
          className="rounded-full"
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
  ],
  githubUrl: "https://github.com/lecca-digital/lecca-io",
};
