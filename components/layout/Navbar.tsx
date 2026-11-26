
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const services = [
  { name: "Logistics & Transportation", href: "/services/logistics" },
  { name: "Payment & POS Solutions", href: "/services/payment-pos" },
  { name: "Mobile Application Dev", href: "/services/mobile-apps" },
  { name: "Website Design & Dev", href: "/services/website-design" },
  { name: "Desktop Application", href: "/services/desktop-apps" },
  { name: "GIS & Location Solutions", href: "/services/gis-solutions" },
  { name: "Custom ERP Solutions", href: "/services/erp" },
  { name: "Web Hosting & Domains", href: "/services/hosting" },
];

const otherLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();

  const isServicesActive = pathname.startsWith("/services");

  return (
<header className="fixed top-0 left-0 z-50 w-full bg-bg/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-md font-heading font-semibold transition-colors ${
                pathname === link.href
                  ? "text-orange"
                  : "text-white hover:text-orange"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                isServicesActive
                  ? "text-orange"
                  : "text-white hover:text-orange"
              }`}
            >
              Services
              <FiChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
              />
            </button>

            <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="rounded-xl bg-blue-dark border border-line p-2 shadow-xl backdrop-blur-xl">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      pathname === service.href
                        ? " text-orange"
                        : "text-white hover:text-orange"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {otherLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === link.href
                  ? "text-orange"
                  : "text-white hover:text-orange"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange/90 md:inline-flex"
        >
          Let&apos; Talk
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-200 md:hidden bg-white"
        >
          <span
            className={`h-0.5 w-5 bg-gray-900 transition-all ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-gray-900 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-gray-900 transition-all ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-gray-100 bg-blue/10 transition-all duration-300 md:hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-6 py-4">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white "
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold ${
                  isServicesActive
                    ? "text-orange"
                    : "text-white"
                }`}
              >
                Services

                <FiChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  servicesOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="ml-4 flex flex-col border-l-2 border-[#EDEAF5] pl-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => {
                          setIsOpen(false);
                          setServicesOpen(false);
                        }}
                        className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                          pathname === service.href
                            ? "text-orange"
                            : "text-white hover:text-blue"
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white hover:text-orange"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-orange px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#FF671F]"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
