"use client";
import { Mail, MapPin, Send } from "lucide-react";
import React, { FormEvent, useEffect, useRef, useState } from "react";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });
    alert("Thianks for your message! I'll get back to you soon");
  };
  return (
    <section id="contact" ref={sectionRef} className="bg-secondary/30">
      <div className="py-12 lg:px-4 max-w-7xl lg:mx-auto md:mx-8 mx-6">
        <div
          className={`text-center max-w-3xl mx-auto my-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="uppercase text-primary text-sm my-4">
            Get in touch
          </div>
          <div className="font-bold text-4xl my-4">Let's Work Together</div>
          <div className="text-lg text-muted-foreground">
            Have a project in mind or want to discuss a potential collaboration
            ? I'd love to hear from you. Let's create something amazing together
          </div>
        </div>
        {/* form & info */}
        <div className="grid lg:grid-cols-2 gap-x-10 my-8 ">
          {/* right */}
          <div
            className={`${isVisible ? "animate-slide-in-left delay-200" : "opacity-0"}`}
          >
            {/* head start */}
            <div className="lg:block flex flex-col items-center">
              {/* 1 */}
              <div className="text-2xl text-foreground font-bold">
                Contact Info
              </div>
              {/* 2 */}
              <div className="flex items-center gap-4 my-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:saimakhan0zy0@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    saimakhan0zy0
                  </a>
                </div>
              </div>
              {/* 3 */}
              <div className="flex items-center gap-4 my-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <a
                    href="mailto:saimakhan0zy0@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Mumbai, India
                  </a>
                </div>
              </div>

              {/* Follow */}

              <div className="text-xl text-foreground font-semibold mt-8">
                Follow Me
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-4 my-4">
                  <a
                    href="https://www.linkedin.com/in/saima-khan-b50486220/"
                    className="rounded-full bg-card p-3 text-primary"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                    >
                      <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center gap-4 my-4">
                  <a
                    href="https://github.com/saimakhanac"
                    className="rounded-full bg-card p-3 text-primary"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                    >
                      <path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* head end */}

            {/* card */}
            <div className="bg-card p-7 rounded-2xl my-4 select-none">
              <p className="text-lg text-foreground my-2">
                Ready to bring ideas to life?
              </p>
              <p className="text-muted-foreground">
                {" "}
                Whether you have a project in mind or just want to chat about
                web development, I'm always open to discussing new
                opportunities.
              </p>
            </div>
          </div>
          {/* left */}

          {/* form */}
          <div
            className={`${isVisible ? "animate-slide-in-right delay-200" : "opacity-0"}`}
          >
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  value={formState.name}
                  onChange={(e) => {
                    setFormState({ ...formState, name: e.target.value });
                  }}
                  type="text"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="text-sm mb-4 font-medium text-foreground bg-card px-4 py-5 w-full border border-border rounded-2xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/*  */}
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  value={formState.email}
                  onChange={(e) => {
                    setFormState({ ...formState, email: e.target.value });
                  }}
                  type="email"
                  id="email"
                  required
                  placeholder="your@email.com"
                  className="text-sm mb-4 font-medium text-foreground bg-card px-4 py-5 w-full border border-border rounded-2xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/*  */}
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value });
                  }}
                  value={formState.message}
                  id="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project"
                  className="text-sm mb-4 font-medium text-foreground bg-card px-4 py-5 w-full border border-border rounded-2xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/*  */}
              <button
                disabled={isSubmitting}
                type="submit"
                className="inline-flex justify-center gap-2 items-center text-primary-foreground font-medium bg-primary w-full rounded-2xl px-6 py-4"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
