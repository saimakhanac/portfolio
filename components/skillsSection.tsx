"use client";
import { title } from "process";
import React, { useEffect, useRef, useState } from "react";
import { CodeXml, Layers, LibraryIcon, Package } from "lucide-react";
import {
  SiCypress,
  SiDocker,
  SiFigma,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSass,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiWebpack,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import type { IconType } from "react-icons";
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "PostgresSQL", level: 85 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Figma", level: 85 },
      { name: "AWS/Vercel", level: 80 },
    ],
  },
];
const techStack = [
  {
    title: "Programming",
    icon: CodeXml,
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    items: ["React", "Next.js", "Vue.js", "Node.js"],
  },
  {
    title: "Libraries",
    icon: LibraryIcon,
    items: ["Tailwind CSS", "GraphQL", "REST APIs", "Sass", "Jest", "Cypress"],
  },
  {
    title: "Packages & Tools",
    icon: Package,
    items: [
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "Figma",
      "StoryBook",
      "Webpack",
    ],
  },
];
const techIcon: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  GraphQL: SiGraphql ,
  "REST APIs": TbApi,
  Sass: SiSass,
  Jest: SiJest,
  Cypress: SiCypress,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  Vercel: SiVercel,
  Figma: SiFigma,
  StoryBook: SiStorybook ,
  Webpack: SiWebpack,
  AWS: FaAws,
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section id="skills" ref={sectionRef} className="py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center px-6 lg:px-10 max-w-3xl mx-auto">
            <div className="text-sm text-primary uppercase my-4">
              {" "}
              Skills & Expertise{" "}
            </div>
            <div className="font-bold text-4xl text-balance text-foreground my-4">
              Technologies I work with
            </div>
            <div className="text-lg text-muted-foreground my-4">
              I've worked with a variety of technologies in the web development
              world. Here's a quick overview of my main technical skill set.
            </div>
          </div>
          {/* box */}
          <div className="grid grid-cols-3 gap-8 my-16">
            {skillCategories.map((category, categoryIndex) => (
              <div className="bg-card rounded-xl p-8 mx-4" key={categoryIndex}>
                <p>{category.title}</p>
                {category.skills.map((skill, skillIndex) => (
                  <div className="my-6" key={skillIndex}>
                    <div key={skillIndex} className="flex justify-between">
                      <p>{skill.name}</p>
                      <p>{skill.level}%</p>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div
                        className="h-full bg-linear-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${skill.level}%` : 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* box end */}

          {/* tech stack start */}
          <div>
            <div className="capitalize text-lg font-semibold text-foreground text-center">
              Technology stack
            </div>
          </div>

          <div className="lg:grid grid-cols-2 gap-6 my-6">
            {techStack.map((list, index) => {
              const TitleIcon = list.icon;
              return (
                <div
                  className="bg-card p-6 rounded-md border border-border hover:border-primary/10"
                  key={index}
                >
                  <div className="flex gap-4 items-center">
                    <div className="bg-primary/10 text-primary rounded-md w-8 h-8 flex items-center justify-center">
                      <TitleIcon size={18} />
                    </div>
                    <div className="text-base text-foreground font-semibold">
                      {list.title}
                    </div>
                  </div>
                
                  {/* chip */}
                  <div className="flex flex-wrap gap-2 my-2">
                    {list.items.map((item, index) => {
                      const TechIcon = techIcon[item];
                      return (
                        <div
                          key={index}
                          className="mt-1 py-1 px-2 flex gap-2.5 bg-secondary dark:bg-primary dark:text-background font-semibold items-center rounded-full text-xs text-foreground"
                        >
                          <div>{TechIcon && <TechIcon />}</div>
                          <div>{item}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* tech start ends here */}
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
