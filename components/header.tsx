"use client";
import React, { useEffect, useState } from "react";
import ThemeToggler from "./theme-toggler";
import Link from "next/link";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "work", label: "Work" },
  { href: "skills", label: "Skills" },
  { href: "contact", label: "Contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
      console.log(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"}`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between p-4 h-20">
          <Link href="/" className="text-xl font-semibold text-foreground">
            <span className="text-primary">S</span>aima Khan
          </Link>
          <nav className="flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-tight text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>
          <div className="flex gap-4">
            <ThemeToggler />
            <Button className="dark:bg-primary rounded-full px-6 py-5">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
