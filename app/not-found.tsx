import Link from "next/link";
import { FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
      
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3 rounded-full bg-orange/5 blur-[120px]" />

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        
        {/* Large Gradient 404 */}
        <h1 className="mb-4 mt-4 bg-gradient-to-br from-white via-ice to-muted/30 bg-clip-text text-[120px] font-bold leading-none tracking-tighter text-transparent sm:text-[160px] md:text-[200px]">
          404
        </h1>

        {/* Content */}
        <div className="mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-1 w-6 rounded-full bg-orange" />
            <span className="text-sm font-semibold text-muted">Page Not Found</span>
            <span className="h-1 w-6 rounded-full bg-orange" />
          </div>
          
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-ice md:text-4xl">
            Oops! You&apos;ve wandered off the map.
          </h2>
          
          <p className="mx-auto max-w-md text-sm leading-relaxed text-muted md:text-base">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange/90 sm:w-auto"
          >
            <FiHome className="text-lg" />
            Back to Home
          </Link>
          
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line/50 bg-white/5 px-8 py-3.5 text-sm font-semibold text-ice backdrop-blur-sm transition-all duration-300 hover:border-line hover:bg-white/10 sm:w-auto"
          >
            <FiSearch className="text-lg text-muted group-hover:text-ice transition-colors" />
            Search or Contact
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 w-full border-t border-line/50 pt-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted">
            Popular Destinations
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <Link href="/" className="transition-colors hover:text-orange">
              Home
            </Link>
            <Link href="/projects" className="transition-colors hover:text-orange">
              Our Work
            </Link>
            <Link href="/about" className="transition-colors hover:text-orange">
              About Us
            </Link>
            
          </div>
        </div>

      </div>
    </main>
  );
}