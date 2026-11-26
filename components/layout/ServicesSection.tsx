import Link from "next/link";
import {
  FiTruck,
  FiCreditCard,
  FiSmartphone,
  FiMonitor,
  FiGlobe,
  FiMapPin,
  FiDatabase,
  FiServer,
  FiArrowRight,
} from "react-icons/fi";

const services = [
  {
    id: "logistics",
    icon: FiTruck,
    title: "Logistics & Transportation",
    desc: "Fleet management & tracking systems",
    color: "text-blue-bright",
    bgColor: "bg-blue/10",
    href: "/services/logistics",
  },
  {
    id: "payment",
    icon: FiCreditCard,
    title: "Payment & POS Solutions",
    desc: "Secure transaction processing",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    href: "/services/payment-pos",
  },
  {
    id: "mobile",
    icon: FiSmartphone,
    title: "Mobile Application Dev",
    desc: "iOS & Android native apps",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    href: "/services/mobile-apps",
  },
  {
    id: "website",
    icon: FiGlobe,
    title: "Website Design & Dev",
    desc: "Modern, responsive web experiences",
    color: "text-orange",
    bgColor: "bg-orange/10",
    href: "/services/website-design",
  },
  {
    id: "desktop",
    icon: FiMonitor,
    title: "Desktop Application",
    desc: "High-performance native software",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    href: "/services/desktop-apps",
  },
  {
    id: "gis",
    icon: FiMapPin,
    title: "GIS & Location Solutions",
    desc: "Interactive mapping & spatial data",
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    href: "/services/gis-solutions",
  },
  {
    id: "erp",
    icon: FiDatabase,
    title: "Custom ERP Solutions",
    desc: "Streamline your business operations",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    href: "/services/erp",
  },
  {
    id: "hosting",
    icon: FiServer,
    title: "Web Hosting & Domains",
    desc: "Reliable infrastructure & security",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    href: "/services/hosting",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-16 md:py-24">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1 w-6 rounded-full bg-orange" />
              <span className="text-sm font-semibold text-muted">
                Our Services
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-ice md:text-4xl">
              What does AlexTechBox offer?
            </h2>
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group flex flex-col justify-between rounded-2xl border border-line bg-[#0b1020]/50 p-5 transition-all duration-300 hover:border-blue/30 hover:bg-blue/5 hover:shadow-[0_0_20px_rgba(20,93,255,0.05)] backdrop-blur-sm"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${service.bgColor} ${service.color}`}
                  >
                    <Icon className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted transition-all duration-300 group-hover:bg-blue-bright group-hover:text-white">
                    <FiArrowRight className="text-sm -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="mb-2 text-base font-semibold text-ice transition-colors group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {service.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}