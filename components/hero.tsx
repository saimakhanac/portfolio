"use client";
import React, { useEffect, useState } from "react";
import { ArrowDown, Mail, Phone, Calendar } from "lucide-react";
import Link from "next/link";
const techstack = ["React", "TypeScript", "Next.js", "Tailwind"];
const roles = [
  "Software Developer",
  "TypeScript Enthusiast",
  "React & Next.js Specialist",
  "Frontend Engineer",
];

const chipPosition = [
  {
    position: "-top-1 left-1/4",
    delay: "0s",
  },
  { position: "top-1/3 -left-4", delay: "0.5s" },
  { position: "bottom-1/4 -right-4", delay: "1s" },
  { position: "-bottom-2 right-1/4", delay: "1.5s" },
];
const spanList = [
  "UI Engine: -35% Dev Time, +92% Consistency",
  "Performance: -45% Load Time, -30% Bundle",
  "AI Integration: -50% Latency, +15% Engagement",
  "Design System: 100% Reuse, -25% Friction",
];
const details = [
  {
    display: "saimakhan0zy0@gmail.com",
    href: "saimakhan0zy0@gmail.com",
    icon: <Mail size={18} />,
  },
  {
    display: "+91 9930802015",
    href: "tel:+919930802015",
    icon: <Phone size={18} />,
  },
  {
    display: "Linkedin",
    href: "https://www.linkedin.com/in/saima-khan-b50486220/",
    icon: <Phone size={18} />,
  },
  {
    display: "Book a Call",
    href: "https://www.linkedin.com/in/saima-khan-b50486220/",
    icon: <Calendar size={18} />,
  },
  {
    display: "Contact",
    href: "#contact",
    icon: <ArrowDown size={18} />,
  },
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="min-h-screen px-8 py-26 ">
        <div className="min-h-screen flex justify-evenly flex-col">

          <div className="flex items-center gap-12">
            {/* circle design  */}
            <div className="">
              <div className="relative overflow-hidden rounded-full border-4 border-primary w-56 h-56 shadow-lg">
                <div className="flex flex-col items-center justify-center w-full h-full z-100">
                  <span className="text-6xl font-bold text-primary">5+</span>
                  <span className="text-muted-foreground">
                    years experience
                  </span>
                </div>
                {/* chip */}
                {techstack.map((tech, key) => {
                  const styles = chipPosition[key];
                  return (
                    <div
                      key={tech}
                      className={`animate-float shadow-lg opacity-100 w-fit bg-card m-1 px-4 py-2 rounded-xl absolute -z-10 ${styles.position}`}
                      style={{ animationDelay: styles.delay }}
                    >
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* circle ends here */}

            {/* Info */}
            <div>
              <div className="text-7xl font-bold text-balance leading-tight">
                Saima Khan
              </div>

              <div
                key={currentRole}
                className={`text-2xl text-primary my-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              >
                {roles[currentRole]}
              </div>

              <div className="border py-6 px-3 bg-card/40 shadow-lg rounded-xl my-3 text-balance">
                I am a Frontend Engineer combining strong technical foundations
                with a year of development experience. Specialized in
                TypeScript, React, and Next.js, I bridge the gap between backend
                functionality and dynamic frontend interfaces to architect
                high-performance web experiences that drive business growth,
                improve customer satisfaction, and deliver measurable value.
              </div>

              {/* span list */}
              <div className="flex flex-wrap gap-3 my-4">
                {spanList.map((list, index) => (
                  <span
                    className="text-xs border rounded-full border-primary/30 text-primary font-semibold text-center bg-primary/10 py-1 px-2"
                    key={index}
                  >
                    {list}
                  </span>
                ))}
              </div>
              {/* contact details */}
              <div className="flex flex-wrap my-8 gap-4">
                {details.map((info, index) => {
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className=" text-sm text-muted-foreground hover:text-primary flex flex-row-reverse gap-1"
                    >
                      {info.display}
                      {info.icon}
                    </a>
                  );
                })}
              </div>
              {/* CTA button */}
              <div className="flex gap-5">
                <Link
                  href="#work"
                  className="border py-4 px-8 font-medium rounded-full animate-pulse-glow transition-all bg-primary text-primary-foreground"
                >
                  View my work
                </Link>
                <Link
                  href="#contact"
                  className="border py-4 px-8  font-medium text- rounded-full transition-all hover:bg-secondary text-foreground"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
            {/* Info ends here */}
          </div>
          {/* Scroll down */}
          <div className="flex justify-center animate-bounce">
            <Link href="#about" className="">
              <ArrowDown size={30} />
            </Link>
          </div>

        </div>

        {/* Info Section ends here */}
      </section>
    </>
  );
};
