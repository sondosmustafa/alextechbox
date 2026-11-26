import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

// 1. Updated array to include category and description
const projects = [
  {
    id: "business-analytics-dashboard",
    title: "Business Analytics Dashboard",
    image: "/images/projects/dashboard-cover.png",
    category: "Web Applications",
    description: "A comprehensive real-time analytics platform for enterprise clients to track KPIs and financial metrics.",
    color: "from-[#0a1526] to-[#1c2c4a]",
    accent: "text-blue-bright",
  },
  {
    id: "ecommerce-mobile-app",
    title: "Mobile App for E-commerce",
    image: "/images/projects/mobile-cover.png",
    category: "Mobile Apps",
    description: "A native mobile application for a high-end retail brand, featuring AR product views and a seamless checkout.",
    color: "from-[#1a0b2e] to-[#3a1c6c]",
    accent: "text-purple-400",
  },
  {
    id: "saas-platform-teams",
    title: "SaaS Platform for Teams",
    image: "/images/projects/saas-cover.png",
    category: "Web Applications",
    description: "A collaborative workspace application designed for remote teams with real-time document editing.",
    color: "from-[#0f172a] to-[#2a3b5c]",
    accent: "text-slate-300",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1 w-6 rounded-full bg-orange" />
              <span className="text-sm font-semibold text-muted">Our Work</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ice md:text-4xl">
              Projects we have delivered
            </h2>
          </div>
          
          <div className="max-w-xs">
            <p className="mb-4 text-sm leading-relaxed text-muted">
              Explore some of our latest projects and see our work in action.
            </p>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-bright transition-colors hover:text-orange/80"
            >
              View all projects
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}