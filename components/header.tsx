"use client";
import React, { useEffect, useState } from "react";
import ThemeToggler from "./theme-toggler";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "work", label: "Work" },
  { href: "skills", label: "Skills" },
  { href: "contact", label: "Contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
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

          {/* desktop start */}
          <nav className="flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hidden md:block text-sm mx-4 font-semibold tracking-tight text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>
          <div className="md:flex gap-4 hidden">
            <ThemeToggler />
            <Button className="dark:bg-primary rounded-full px-6 py-5">
              Get in touch
            </Button>
          </div>
          {/* desktop end */}

          {/* mobile start*/}

          <div className="md:hidden flex gap-3">
            <ThemeToggler />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* mobile end  */}
        </div>
      </div>

      {/* mobile menu start*/}
      <div
        className={`md:hidden border-b border-border absolute top-20 left-0 right-0 sm:text-base bg-background/95 w-full px-4 ${isMenuOpen ? "block opacity-100" : "hidden opacity-0 pointer-events-none"}`}
      >
        {navLinks.map((link) => (
          <Link className="block my-4" key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Button className="dark:bg-primary rounded-full w-full mb-6  px-6 py-5">
          Get in touch
        </Button>
      </div>
      {/* mobile menu end */}
    </header>
  );
};
