import { Suspense } from "react";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/projects-data";
import ProjectContent from "./ProjectContent"; // We'll create this

export default function ProjectPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Don't await params here! Pass the promise down.
  return (
    <Suspense fallback={<ProjectSkeleton />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

// Simple loading skeleton
function ProjectSkeleton() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#03070d]">
      <div className="text-muted">Loading project...</div>
    </main>
  );
}