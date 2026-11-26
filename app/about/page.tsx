import Link from "next/link";
import {
  FiArrowRight,
  FiTarget,
  FiZap,
  FiShield,
  FiHeart,
  FiUsers,
  FiAward,
  FiHeadphones,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import Image from "next/image";

// --- Data ---

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

const values = [
  {
    icon: FiTarget,
    title: "Client-Centric Approach",
    desc: "Your goals are our goals. We listen, strategize, and execute with your vision at the forefront of every decision.",
  },
  {
    icon: FiZap,
    title: "Innovation First",
    desc: "We stay ahead of the curve by utilizing cutting-edge technologies and modern development practices.",
  },
  {
    icon: FiShield,
    title: "Uncompromising Quality",
    desc: "From the first line of code to the final deployment, we ensure secure, scalable, and robust solutions.",
  },
  {
    icon: FiHeart,
    title: "Passionate Team",
    desc: "We are a team of dedicated developers and designers who genuinely love building great software.",
  },
];

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/images/team/alex.jpg", // Replace with real images
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    image: "/images/team/sarah.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Marcus Rivera",
    role: "Head of Design",
    image: "/images/team/marcus.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Emily Taylor",
    role: "Project Manager",
    image: "/images/team/emily.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
];

// --- Components ---

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-32">
        {/* Background Glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/10 blur-[150px]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-1 w-6 rounded-full bg-orange" />
            <span className="text-sm font-semibold text-muted">About Us</span>
            <span className="h-1 w-6 rounded-full bg-orange" />
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-ice md:text-6xl">
            We are AlexTech<span className="text-blue-bright">Box</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            A passionate team of developers, designers, and strategists dedicated to building digital experiences that drive real business growth.
          </p>
        </div>
      </section>

      {/* 2. Stats Section (From your original About logic) */}
      <section className="relative border-y border-line/50 bg-[#0b1020]/50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`group flex flex-col items-center justify-center gap-2 py-6 transition-colors duration-300 hover:bg-white/[0.02]
                    ${index % 2 === 0 ? "border-r border-line/50 md:border-r-0" : ""}
                    ${index < 2 ? "border-b border-line/50 md:border-b-0" : ""}
                    ${index !== 3 ? "md:border-r md:border-line/50" : ""}
                  `}
                >
                  <div className={`mb-1 flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor} ${stat.color} transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="text-2xl group-hover:drop-shadow-[0_0_10px_currentColor]" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-ice md:text-4xl">
                    {stat.value}
                  </h3>
                  <p className="text-center text-[10px] font-medium text-muted md:text-sm">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Our Story & Values */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            
            {/* Left: Text */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-1 w-6 rounded-full bg-orange" />
                <span className="text-sm font-semibold text-muted">Our Story</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-ice md:text-4xl">
                From a small idea to a leading tech partner.
              </h2>
              <div className="space-y-4 text-sm leading-7 text-muted md:text-base">
                <p>
                  Founded in 2016, AlexTechBox started with a simple mission: to bridge the gap between complex technology and business goals. We saw too many companies struggling with outdated systems and poor digital experiences.
                </p>
                <p>
                  Today, we are a full-service software agency working with startups and enterprise clients globally. We donot just write code; we become an extension of your team, ensuring every pixel and every line of code serves a purpose.
                </p>
              </div>
              
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange/90"
              >
                Work with us
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: Abstract Graphic / Image Placeholder */}
            <div className="relative">
               <div className="absolute inset-0 rounded-3xl"></div>
               <div className="relative aspect-video lg:aspect-square flex items-center justify-center">
                  {/* Replace this div with an actual Image of your office or team */}
                  <Image
                          src="/images/about-sec.svg"
                          alt="Web development and digital technology"
                          fill
                          priority
                          className="h-auto w-full max-w-[550px] object-contain"
                        />
               </div>
            </div>

          </div>

          {/* Values Grid */}
          <div className="mt-24">
            <h3 className="mb-10 text-center text-2xl font-bold text-ice md:text-3xl">What drives us</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i} className="rounded-2xl border border-line/50 bg-[#0b1020]/50 p-6 transition-colors hover:bg-white/[0.02]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue-bright">
                      <Icon className="text-2xl" />
                    </div>
                    <h4 className="mb-2 text-base font-semibold text-ice">{value.title}</h4>
                    <p className="text-sm leading-relaxed text-muted">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      {/* <section className="border-t border-line/50 bg-[#0b1020]/30 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-1 w-6 rounded-full bg-orange" />
              <span className="text-sm font-semibold text-muted">Our Team</span>
              <span className="h-1 w-6 rounded-full bg-orange" />
            </div>
            <h2 className="text-3xl font-bold text-ice md:text-4xl">Meet the experts</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="relative mx-auto mb-4 aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl border border-line/50 bg-[#0f1526]">
                   <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue/10 to-purple-500/10 transition-transform duration-500 group-hover:scale-105">
                      <FiUsers className="text-4xl text-muted/30" />
                   </div>
                   
                   <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#0b1020]/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <Link href={member.socials.linkedin} className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-bright text-white transition-transform hover:scale-110">
                        <FiLinkedin size={18} />
                      </Link>
                      <Link href={member.socials.twitter} className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-bright text-white transition-transform hover:scale-110">
                        <FiTwitter size={18} />
                      </Link>
                   </div>
                </div>
                
                <h3 className="text-lg font-semibold text-ice">{member.name}</h3>
                <p className="text-sm text-blue-bright">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </main>
  );
}