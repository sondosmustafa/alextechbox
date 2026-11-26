
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg">

      {/* Background Image */}
      <Image
        src="/images/hero-bg.svg"
        alt="Web development and digital technology"
        fill
        priority
        className="object-cover object-center opacity-50"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-bg/75" />

      {/* Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-8">

        <div className="flex items-center justify-between gap-8">
            <div className="max-w-3xl">

          {/* Badge */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 border border-line px-4 py-2 text-sm font-medium text-white">
            Creative Digital Solutions
          </span>


            {/* Heading */}
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl text-white">
            We Build
            <span className="block font-heading bg-gradient-to-r from-orange via-blue to-white bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                Digital Experiences
            </span>
            That Matter.
            </h1>



          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-ice sm:text-lg">
            Transform your ideas into powerful digital products.
            We specialize in web development, mobile applications,
            UI/UX design, and digital marketing.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">

            <Link
              href="/contact"
              className="rounded-full bg-orange px-8 py-4 text-sm font-bold text-white transition-all hover:bg-orange/90"
            >
              Lets Talk
            </Link>

            <Link
              href="#services"
              className="rounded-full border border-line bg-blue/10 px-8 py-4 text-sm font-bold text-ice transition-all  hover:bg-blue/5"
            >
              Explore Services
            </Link>

          </div>

          

        </div>
        {/* Right Side Image */}
        <div className="relative hidden flex-1 items-center justify-center lg:flex">
        <Image
            src="/images/hero-cover.svg"
            alt="Web development and digital technology"
            width={600}
            height={600}
            priority
            className="h-auto w-full max-w-[550px] object-contain"
        />
        </div>


        </div>
      </div>

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue/20 blur-[120px]" />

    </section>
  );
}
