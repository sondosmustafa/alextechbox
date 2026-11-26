"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiLayers } from "react-icons/fi";
import { projectsData, categories } from "@/lib/projects-data";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <main className="overflow-hidden bg-[#03070d] py-20 md:py-32">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-1 w-6 rounded-full bg-orange" />
            <span className="text-sm font-semibold text-muted">Our Portfolio</span>
            <span className="h-1 w-6 rounded-full bg-orange" />
          </div>
          <h1 className="block font-heading text-4xl font-bold sm:text-5xl lg:text-6xl text-ice">
            Projects we&apos;ve delivered
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted md:text-lg">
            Explore our latest work across web, mobile, and cloud technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-orange text-white shadow-[0_0_15px_rgba(255,84,36,0.4)]"
                  : "border border-line/50 bg-[#0b1020] text-muted hover:border-line hover:text-ice"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line/50 bg-[#0b1020] transition-all duration-300 hover:border-blue/30 hover:shadow-[0_0_20px_rgba(20,93,255,0.05)]"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-[#0f1526]">
                {/* Fallback if no image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted/30">
                   <FiLayers size={40} />
                </div>
                {/* Next.js Image Component */}
                           <Image
                             src={project.image}
                             alt={project.title}
                             fill
                             className="object-cover transition-transform duration-500 hover:scale-105"
                             priority
                           />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 text-xs font-semibold text-orange">
                  {project.category}
                </span>
                <h3 className="mb-2 text-xl font-bold text-ice transition-colors group-hover:text-white">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm text-muted line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-orange">
                  View Case Study
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}