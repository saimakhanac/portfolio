"use client";
import React, { useEffect, useRef, useState } from "react";
const cardData = [
  { number: "10+", text: "Project Completed" },
  { number: "12+", text: "Happy Clients" },
  { number: "1.5+", text: "Years Experience" },
  { number: "100%", text: "Client Satisfaction" },
];
const AboutMeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about">
      <div className="max-w-7xl mx-auto px-6 my-10">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* left */}
          <div
            className={`${isVisible ? "animate-slide-in-left delay-200" : "opacity-0"}`}
          >
            <div className="text-lg text-primary">About Me</div>
            <div className="font-bold text-foreground text-5xl text-balance my-6">
              Passionate about creating digital experiences
            </div>
            <div className="space-y-3 leading-relaxed text-lg text-muted-foreground">
              <p className="">
                I'm a software developer passionate about crafting fluid,
                pixel-perfect user interfaces that seamlessly bridge thoughtful
                design with robust modern engineering.
              </p>
              <p className="">
                Currently, I specialize in full-stack and frontend development,
                leveraging technologies like React, Next.js, and Node.js to
                bring dynamic web applications to life. I focus deeply on the
                technical implementation of clean UI/UX layout systems,
                utilizing modern design workflows and modular libraries like
                Tailwind CSS and Shadcn UI to build responsive, intuitive user
                journeys.
              </p>
              <p className="">
                Over my career, I’ve had the opportunity to develop software
                across a variety of environments, spanning both remote and
                collaborative office settings. My experience includes
                architecting everything from scalable, metadata-driven UI
                platforms and AI-powered recommendation systems to highly
                optimized, modern navigation components.
              </p>
            </div>
          </div>

          {/* right */}
          <div
            className={`${isVisible ? "animate-slide-in-right delay-200" : "opacity-0"}`}
          >
            <div className="grid grid-cols-2 gap-6">
              {/* card */}
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`border border-border bg-card rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 ${isVisible ? `animate-fade-up delay-${(index + 2) * 100}` : "opacity-0"}`}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="text-primary text-5xl font-bold">
                    {card.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {card.text}
                  </div>
                </div>
              ))}

              {/* card ends here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
