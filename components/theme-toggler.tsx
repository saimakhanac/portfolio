"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  },[]);
  if (!mount) {
    return (
      <Button variant="outline" size="icon" className="h-10 w-10"></Button>
    );
  }
  const toggleTheme = () => {
    const isDark = resolvedTheme === "dark" ? "light" : "dark";
    const overlay = document.createElement("div");
    overlay.className =
      `theme-transition-overlay to-${isDark}`;
    document.body.appendChild(overlay);
    setTimeout(() => {
      setTheme(isDark);
    }, 400);
    setTimeout(() => {
      overlay.remove();
    }, 850);
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        aria-label={`Switch to ${resolvedTheme === "light" ? "dark" : "light"}`}
        className=" relative p-2.5 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110 active:scale-100  group overflow-hidden"
        onClick={toggleTheme}
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:rotate-90 dark:scale-0 text-primary"></Sun>
        <Moon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-primary"></Moon>
      </Button>
     
    </div>
  );
}
