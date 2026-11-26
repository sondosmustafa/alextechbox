import Link from "next/link";
import { notFound } from "next/navigation";
import { FiCheckCircle, FiArrowRight, FiChevronRight } from "react-icons/fi";
import { servicesData, ServiceSlug } from "@/lib/services-data";

// Generate static params for optimal performance during build
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

// Next.js 16 requires params to be typed as a Promise
export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await the params Promise to get the actual slug
  const { slug } = await params;

  // Look up the service data
  const service = servicesData[slug as ServiceSlug];

  // If the slug doesn't exist, show the 404 page
  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="overflow-hidden bg-[#03070d]">
      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-32">
        {/* Background Glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/10 blur-[150px]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center justify-center gap-2 text-xs font-medium text-muted">
            <Link href="/" className="hover:text-ice transition-colors">Home</Link>
            <FiChevronRight />
            <Link href="/services" className="hover:text-ice transition-colors">Services</Link>
            <FiChevronRight />
            <span className="text-blue-bright">{service.title}</span>
          </div>

          <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl ${service.bgColor} ${service.color} shadow-lg`}>
            <Icon className="text-4xl" />
          </div>
          
          {/* Updated H1 with Gradient */}
          <h1 className="block font-heading text-4xl font-bold sm:text-5xl lg:text-6xl text-ice">
            {service.title}
          </h1>
          
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted md:text-lg mt-6">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Details Section */}
      <section className="relative pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
            
            {/* Left: Description */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-ice md:text-3xl">Overview</h2>
              <p className="text-sm leading-8 text-muted md:text-base">
                {service.description}
              </p>
            </div>

            {/* Right: Features Card */}
            <div className="relative">
              <div className="rounded-3xl border border-line/50 bg-[#0b1020]/60 p-8 shadow-2xl shadow-blue/5 backdrop-blur-md">
                <h3 className="mb-6 text-xl font-bold text-ice">Key Capabilities</h3>
                <ul className="flex flex-col gap-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FiCheckCircle className={`mt-0.5 shrink-0 text-lg ${service.color}`} />
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 border-t border-line/50 pt-6">
                  <Link
                    href="/contact"
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange/90"
                  >
                    Request a Quote
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="border-t border-line/50 bg-[#0b1020]/30 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ice md:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mb-8 max-w-xl text-sm text-muted md:text-base">
            Let&apos;s discuss how our {service.title.toLowerCase()} services can help you achieve your business goals.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange/90"
            >
              Contact Us
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-line/50 bg-white/5 px-6 py-3 text-sm font-semibold text-ice transition-all hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}