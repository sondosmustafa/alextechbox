import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  FiArrowLeft, 
  FiArrowRight, 
  FiCheckCircle, 
  FiTarget, 
  FiZap, 
  FiTrendingUp,
  FiLayers
} from "react-icons/fi";
import { projectsData } from "@/lib/projects-data";
import Image from "next/image";

export default async function ProjectContent({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // 1. Await the params promise safely inside this component
  const { id } = await params;

  // 2. Find the project
  const project = projectsData.find((p) => p.id === id);

  // 3. Trigger 404 if not found
  if (!project) {
    notFound();
  }

  // 4. Find next project for the bottom CTA
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <main className="overflow-hidden bg-[#03070d]">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full hover:border-blue/30 hover:shadow-[0_0_20px_rgba(20,93,255,0.05)] blur-[150px]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Link 
            href="/projects" 
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-orange"
          >
            <FiArrowLeft /> Back to Projects
          </Link>
          
          <span className="mb-4 inline-block rounded-full bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange border border-orange/20">
            {project.category}
          </span>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-ice md:text-6xl">
            {project.title}
          </h1>
          
          <p className="mb-8 text-lg leading-relaxed text-muted md:text-xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="flex items-center gap-1.5 rounded-lg border border-line/50 bg-white/5 px-3 py-1.5 text-xs font-medium text-ice">
                <FiCheckCircle className="text-orange" /> {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Main Cover Image */}
       <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line/50 bg-[#0f1526] shadow-2xl shadow-orange/5">
           
           {/* Next.js Image Component */}
           <Image
             src={project.image}
             alt={project.title}
             fill
             className="object-cover transition-transform duration-500 hover:scale-105"
             priority
           />

        </div>
      </section>

      {/* 3. Case Study Content (Challenge, Solution, Results) */}
      <section className="border-t border-line/50 bg-[#0b1020]/30 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Challenge */}
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <FiTarget className="text-2xl" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-ice">The Challenge</h2>
              <p className="text-sm leading-7 text-muted md:text-base">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue-bright">
                <FiZap className="text-2xl" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-ice">Our Solution</h2>
              <p className="text-sm leading-7 text-muted md:text-base">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="mt-16 rounded-3xl border border-line/50 bg-[#0b1020] p-8 md:p-12">
             <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                  <FiTrendingUp className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-ice">The Results</h2>
             </div>
             <div className="grid gap-6 sm:grid-cols-3">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 shrink-0 text-green-400" />
                    <span className="text-sm font-medium text-ice leading-relaxed">{result}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

     

      {/* 5. Bottom Navigation (Next Project) */}
      <section className="border-t border-line/50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium text-muted">Up Next</p>
          <Link
            href={`/projects/${nextProject.id}`}
            className="group inline-flex flex-col items-center justify-center gap-2"
          >
            <h2 className="text-3xl font-bold text-ice transition-colors group-hover:text-orange md:text-5xl">
              {nextProject.title}
            </h2>
            <div className="flex items-center gap-2 text-sm font-semibold text-orange mt-2">
              View Project <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}