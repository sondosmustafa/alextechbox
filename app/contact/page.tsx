import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiInstagram,
} from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-28">
        {/* Background Glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/10 blur-[150px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 rounded-full bg-orange/10 blur-[100px]" />
        
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-1 w-6 rounded-full bg-orange" />
            <span className="text-sm font-semibold text-muted">Contact Us</span>
            <span className="h-1 w-6 rounded-full bg-orange" />
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-ice md:text-6xl">
            Let&apos;s build something great together
          </h1>
          
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Have a project in mind? Fill out the form below or reach out directly. We usually respond within 24 hours.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Section */}
      <section className="relative pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            
            {/* Left Column: Contact Information */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-2xl font-bold text-ice md:text-3xl">Get in touch</h2>
              <p className="mb-8 text-sm leading-relaxed text-muted md:text-base">
                Whether you&apos;re a startup looking to launch your first product or an enterprise needing a digital transformation, our team is ready to help.
              </p>

              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line/50 bg-[#0b1020] text-blue-bright transition-colors group-hover:border-blue/30 group-hover:bg-blue/10">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ice">Email us at</p>
                    <a href="mailto:sondos.mustafa77@gmail.com" className="text-sm text-muted transition-colors hover:text-blue-bright">
                      sondos.mustafa77@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line/50 bg-[#0b1020] text-orange transition-colors group-hover:border-orange/30 group-hover:bg-orange/10">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ice">Call us</p>
                    <a href="tel:+1234567890" className="text-sm text-muted transition-colors hover:text-orange">
                      (+02) 01288628268
                    </a>
                  </div>
                </div>

                

                {/* Hours */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line/50 bg-[#0b1020] text-green-400 transition-colors group-hover:border-green-400/30 group-hover:bg-green-500/10">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ice">Working hours</p>
                    <p className="text-sm text-muted">Mon - Fri, 9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>
              
              {/* Socials */}
              {/* <div className="mt-10 border-t border-line/50 pt-8">
                <p className="mb-4 text-sm font-semibold text-ice">Follow our journey</p>
                <div className="flex gap-4">
                  <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-line/50 bg-white/5 text-muted transition-all hover:border-blue-bright hover:bg-blue-bright hover:text-white">
                    <FiTwitter size={18} />
                  </Link>
                  <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-line/50 bg-white/5 text-muted transition-all hover:border-blue-bright hover:bg-blue-bright hover:text-white">
                    <FiLinkedin size={18} />
                  </Link>
                  <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-line/50 bg-white/5 text-muted transition-all hover:border-blue-bright hover:bg-blue-bright hover:text-white">
                    <FiGithub size={18} />
                  </Link>
                  <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-line/50 bg-white/5 text-muted transition-all hover:border-blue-bright hover:bg-blue-bright hover:text-white">
                    <FiInstagram size={18} />
                  </Link>
                </div>
              </div> */}
            </div>

            {/* Right Column: Contact Form */}
            <div className="relative">
              {/* Form Container */}
              <div className="relative overflow-hidden rounded-3xl border border-line/50 bg-[#0b1020]/60 p-6 shadow-2xl shadow-blue/5 backdrop-blur-md md:p-10">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ice md:text-2xl">Send us a message</h3>
                  <p className="mt-2 text-sm text-muted">We&apos;d love to hear about your project.</p>
                </div>

                <form className="flex flex-col gap-5">
                  
                  {/* Name Row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="firstName" className="text-xs font-medium text-ice">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        placeholder="First Name" 
                        className="w-full rounded-xl border border-line/50 bg-[#0f1526] px-4 py-3 text-sm text-ice placeholder:text-muted/50 focus:border-blue-bright focus:outline-none focus:ring-1 focus:ring-blue-bright transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="lastName" className="text-xs font-medium text-ice">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        placeholder="Last Name" 
                        className="w-full rounded-xl border border-line/50 bg-[#0f1526] px-4 py-3 text-sm text-ice placeholder:text-muted/50 focus:border-blue-bright focus:outline-none focus:ring-1 focus:ring-blue-bright transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-ice">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="name@example.com" 
                        className="w-full rounded-xl border border-line/50 bg-[#0f1526] px-4 py-3 text-sm text-ice placeholder:text-muted/50 focus:border-blue-bright focus:outline-none focus:ring-1 focus:ring-blue-bright transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-medium text-ice">Phone (Optional)</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full rounded-xl border border-line/50 bg-[#0f1526] px-4 py-3 text-sm text-ice placeholder:text-muted/50 focus:border-blue-bright focus:outline-none focus:ring-1 focus:ring-blue-bright transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-medium text-ice">What service do you need?</label>
                    <select 
                          id="service"
                          defaultValue=""
                          className="w-full rounded-xl border border-line/50 bg-[#0f1526] px-4 py-3 text-sm text-ice focus:border-blue-bright focus:outline-none focus:ring-1 focus:ring-blue-bright transition-all appearance-none"
                        >
                          <option value="" disabled className="text-muted">Select a service...</option>
                          <option value="logistics">Logistics & Transportation</option>
                          <option value="payment">Payment & POS Solutions</option>
                          <option value="mobile">Mobile Application Dev</option>
                          <option value="website">Website Design & Dev</option>
                          <option value="desktop">Desktop Application</option>
                          <option value="gis">GIS & Location Solutions</option>
                          <option value="erp">Custom ERP Solutions</option>
                          <option value="hosting">Web Hosting & Domains</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-ice">Project Details</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full rounded-xl border border-line/50 bg-[#0f1526] px-4 py-3 text-sm text-ice placeholder:text-muted/50 focus:border-blue-bright focus:outline-none focus:ring-1 focus:ring-blue-bright transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:orange/90"
                  >
                    Send Message
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}