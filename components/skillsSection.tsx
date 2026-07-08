"use client";
import React, { useEffect, useRef, useState } from "react";
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
                {category.skills.map((skill,skillIndex) => (
                  <div className="my-6" key={skillIndex}>
                    <div key={skillIndex} className="flex justify-between">
                      <p>{skill.name}</p>
                      <p>{skill.level}%</p>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-full bg-linear-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out" style={{width:isVisible?`${skill.level}%`:0}}/>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            
            <div></div>
            <div></div>
          </div>
          {/* box end */}
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
