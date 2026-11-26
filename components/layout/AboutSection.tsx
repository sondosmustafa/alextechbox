import Link from "next/link";
import {
  FiZap,
  FiUsers,
  FiAward,
  FiHeadphones,
  FiArrowRight,
} from "react-icons/fi";

const stats = [
  { 
    icon: FiZap, 
    value: "8+", 
    label: "Years Experience", 
    color: "text-orange",
    bgColor: "bg-orange/10"
  },
  { 
    icon: FiUsers, 
    value: "150+", 
    label: "Happy Clients", 
    color: "text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  { 
    icon: FiAward, 
    value: "200+", 
    label: "Projects Delivered", 
    color: "text-blue-bright",
    bgColor: "bg-blue/10"
  },
  { 
    icon: FiHeadphones, 
    value: "99%", 
    label: "Client Satisfaction", 
    color: "text-pink-400",
    bgColor: "bg-pink-500/10"
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

        {/* Left Content */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-1 w-6 rounded-full bg-orange" />
            <span className="text-sm font-semibold text-muted">
              About AlexTechBox
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-ice md:text-4xl">
            From idea to impact
          </h2>

          <p className="max-w-lg text-sm leading-7 text-muted md:text-base">
            We build modern web and software solutions that empower
            businesses to innovate, grow and succeed in a fast-changing
            digital world.
          </p>

          <Link
            href="/about"
            className="group mt-6 inline-flex items-center gap-2 rounded-full border border-blue/10 px-5 py-2.5 text-sm font-semibold text-ice bg-blue/5 transition-all duration-300 hover:bg-blue/10"
          >
            Learn More
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right Stats */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl" />

          <div className="relative grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-[#0b1020]/90 md:grid-cols-4">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`group flex flex-col items-center justify-center gap-2 px-2 py-7 transition-colors duration-300 hover:bg-blue/5 md:py-6
                    ${index % 2 === 0 ? "border-r border-line" : ""}
                    ${index < 2 ? "border-b border-line md:border-b-0" : ""}
                    ${index === 1 ? "md:border-r md:border-line" : ""}
                  `}
                >
                  {/* Icon Container to match Services Section */}
                  <div className={`mb-1 flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor} ${stat.color} transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="text-2xl group-hover:drop-shadow-[0_0_10px_currentColor]" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-ice md:text-3xl">
                    {stat.value}
                  </h3>

                  <p className="text-center text-[10px] font-medium text-muted md:text-xs">
                    {stat.label}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}