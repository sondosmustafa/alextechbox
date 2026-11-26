"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your software remains secure, updated, and performing optimally after launch.",
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern, scalable tech stacks including React, Next.js, Node.js, TypeScript, Tailwind CSS, and cloud platforms like AWS and Vercel.",
  },
  {
    question: "Can you help with existing projects?",
    answer: "Absolutely. We frequently step into existing codebases to perform audits, fix bugs, add new features, or refactor legacy code to modern standards.",
  },
  {
    question: "How can I get a quote?",
    answer: "Simply reach out to us through our contact form or book a discovery call. We'll discuss your requirements and provide a detailed, transparent estimate.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes, we love working with startups. We offer agile development processes and scalable architectures designed to grow alongside your business.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        
        {/* Left Content (Header) */}
        <div className="flex flex-col items-start">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-1 w-6 rounded-full bg-orange" />
            <span className="text-sm font-semibold text-muted">FAQ</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-ice md:text-4xl">
            Frequently asked <br className="hidden lg:block" /> questions
          </h2>

          <p className="mb-6 max-w-xs text-sm leading-7 text-muted md:text-base">
            Find quick answers to the most common questions.
          </p>

        </div>

        {/* Right Content (Accordion List) */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-line/50 bg-[#0b1020]/60 backdrop-blur-md transition-colors duration-300 hover:border-line/80"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-4 text-left md:p-5"
                >
                  <span className={`text-sm font-medium transition-colors md:text-base ${isOpen ? "text-orange" : "text-ice"}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-blue/20 text-orange" : "text-muted hover:text-ice"
                    }`}
                  >
                    <FiPlus className="text-lg" />
                  </div>
                </button>
                
                {/* Answer Expansion */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-xs leading-relaxed text-muted md:px-5 md:pb-5 md:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}