import Image from "next/image";
import Link from "next/link";
import {
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiArrowRight,
  FiMail,
} from "react-icons/fi";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Logistics & Transportation", href: "/services/logistics" },
      { name: "Payment & POS Solutions", href: "/services/payment-pos" },
      { name: "Mobile Application Dev", href: "/services/mobile-apps" },
      { name: "Website Design & Dev", href: "/services/website-design" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Desktop Application", href: "/services/desktop-apps" },
      { name: "GIS & Location Solutions", href: "/services/gis-solutions" },
      { name: "Custom ERP Solutions", href: "/services/erp" },
      { name: "Web Hosting & Domains", href: "/services/hosting" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line/50 bg-[#0b1020] pt-16 md:pt-24">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-blue/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Top Section: Newsletter & Links */}
        <div className="mb-16 grid gap-12 lg:grid-cols-[1fr_2.5fr] lg:gap-16">
          
          {/* Left: Brand & Newsletter */}
          <div>
            {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                    <Image 
                      src="/images/logo.svg"           
                      alt="AlexTechBox Logo" 
                      width={40}                
                      height={40}               
                      className="h-10 w-auto"    
                      priority                  
                    />
                  </Link>
            <p className="mb-6 mt-4 max-w-sm text-sm leading-relaxed text-muted">
              We build modern web and software solutions that empower businesses to innovate, grow and succeed in a fast-changing digital world.
            </p>
            
            <div className="mb-2 text-sm font-semibold text-ice">Subscribe to our newsletter</div>
            <form className="flex max-w-sm items-center gap-2 rounded-full border border-line/50 bg-white/5 p-1 transition-colors focus-within:border-blue/50 focus-within:bg-white/10">
              <div className="pl-3 text-muted">
                <FiMail size={16} />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent py-2 text-sm text-ice placeholder:text-muted focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-white transition-transform hover:scale-105"
              >
                <FiArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Right: Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-sm font-semibold text-ice">{column.title}</h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-orange"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line/50 py-8 sm:flex-row">
          
          <p className="text-xs text-muted" suppressHydrationWarning>
            © 2026 AlexTechBox. All rights reserved.
          </p>
          
          {/* <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter" className="text-muted transition-colors hover:text-orange">
              <FiTwitter size={18} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted transition-colors hover:text-orange">
              <FiLinkedin size={18} />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-muted transition-colors hover:text-orange">
              <FiGithub size={18} />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted transition-colors hover:text-orange">
              <FiInstagram size={18} />
            </Link>
          </div> */}
        </div>

      </div>
    </footer>
  );
}