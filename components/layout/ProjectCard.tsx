import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiLayers } from "react-icons/fi";

// We updated the interface to include the fields needed for the new design
interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    image?: string; 
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line/50 bg-[#0b1020] transition-all duration-300 hover:border-blue/30 hover:shadow-[0_0_20px_rgba(20,93,255,0.05)]"
    >
     {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-[#0f1526]">
        
        {/* Next.js Image Component */}
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Fallback ONLY shows if project.image is missing in data */
          <div className="absolute inset-0 flex items-center justify-center text-muted/30">
            <FiLayers size={40} />
          </div>
        )}
        
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
  );
}