"use client";

import { useEffect, useState } from "react";

export const useTheme = () => {
  // State to track theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to determine the current theme based on the `html` element or media query
  const getTheme = () => {
    const htmlElement = document.documentElement;
    const colorScheme = htmlElement.style.colorScheme;

    if (colorScheme === "dark") return true;
    if (colorScheme === "light") return false;

    // Fallback to media query if `color-scheme` is not set explicitly
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  useEffect(() => {
    // Set initial theme based on `html` element or media query
    setIsDarkMode(getTheme());

    // Listener to update theme based on `prefers-color-scheme`
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", handleThemeChange);

    return () => {
      darkThemeMq.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return isDarkMode;
};
