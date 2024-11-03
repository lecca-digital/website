import type React from "react";

/**
 * Get icons from https://lucide.dev/icons or https://www.radix-ui.com/icons or https://spectrum.adobe.com/page/icons/ for best compatibility
 */

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  xTwitter: (props?: IconProps) => (
    <svg
      width="18"
      height="18"
      fill="#9c9da1"
      viewBox="0 0 16 16"
      role="img"
      focusable="false"
      {...props}
    >
      <path d="M12.06 1.683h2.145l-4.71 5.362 5.502 7.275H10.68L7.3 9.9l-3.871 4.42H1.282l4.99-5.736-5.27-6.901h4.426L8.483 5.72l3.576-4.038Zm-.751 11.378h1.189L4.803 2.895H3.526l7.783 10.166Z"></path>
    </svg>
  ),
  youtube: (props?: IconProps) => (
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
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  ),
};
