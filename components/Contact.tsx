import AnimateIn from "@/components/AnimateIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-24 pb-20 bg-gradient-to-br from-orange-500 to-amber-400"
    >
      {/* Wave from Testimonials */}
      <div className="absolute top-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          className="w-full fill-white"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Floating blobs for depth */}
      <div className="absolute top-[-25%] left-[-15%] w-[44%] h-[52%] rounded-full bg-amber-300/20 blur-[40px] nv-float-1 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-12%] w-[40%] h-[48%] rounded-full bg-orange-700/15 blur-[36px] nv-float-2 pointer-events-none" />
      <div className="absolute top-[30%] right-[20%] w-[26%] h-[34%] rounded-full bg-white/[0.07] blur-[28px] nv-float-3 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <AnimateIn direction="scale">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white/90 px-4 py-1.5 rounded-full text-sm font-medium mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full shrink-0" />
            Currently accepting students for 2025-26
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white/90 text-lg mb-10">
            Reach out over WhatsApp or call to discuss your child&apos;s needs and current session
            fees - most families get started the same day.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {/* TODO: Replace href with real WhatsApp number - format: https://wa.me/91XXXXXXXXXX?text=... */}
            <a
              href="https://wa.me/910000000000?text=Hi%20Neeru%20Maam%2C%20I%27m%20interested%20in%20tutoring%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white/30 hover:bg-white/50 hover:scale-105 active:scale-95 backdrop-blur-sm rounded-2xl p-6 transition-all duration-150 group ring-1 ring-white/40"
            >
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                Fastest
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 mx-auto mt-1">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-sm">WhatsApp</div>
              {/* TODO: Replace with real WhatsApp number */}
              <div className="text-white/70 text-xs mt-1">+91 XXXXX XXXXX</div>
            </a>

            {/* TODO: Replace href with real phone number */}
            <a
              href="tel:+910000000000"
              className="bg-white/20 hover:bg-white/40 hover:scale-105 active:scale-95 backdrop-blur-sm rounded-2xl p-6 transition-all duration-150 group"
            >
              <div className="text-3xl mb-3" aria-hidden="true">📞</div>
              <div className="text-white font-semibold text-sm">Call</div>
              {/* TODO: Replace with real phone number */}
              <div className="text-white/70 text-xs mt-1">+91 XXXXX XXXXX</div>
            </a>

            {/* TODO: Replace href with real email */}
            <a
              href="mailto:contact@example.com"
              className="bg-white/20 hover:bg-white/40 hover:scale-105 active:scale-95 backdrop-blur-sm rounded-2xl p-6 transition-all duration-150 group"
            >
              <div className="text-3xl mb-3" aria-hidden="true">✉️</div>
              <div className="text-white font-semibold text-sm">Email</div>
              {/* TODO: Replace with real email address */}
              <div className="text-white/70 text-xs mt-1">contact details soon</div>
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.28}>
          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="https://www.youtube.com/c/MathAndMorewithNeeruVijh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube channel"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/30 hover:scale-105 active:scale-95 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>

            <a
              href="https://www.linkedin.com/in/neeruvijh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/30 hover:scale-105 active:scale-95 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
