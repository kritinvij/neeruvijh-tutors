export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-orange-500 to-amber-400"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-white/90 text-lg mb-10">
          Reach out to discuss your child&apos;s needs and get started with an introductory session.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {/* TODO: Replace href with real WhatsApp number - format: https://wa.me/91XXXXXXXXXX?text=... */}
          <a
            href="https://wa.me/910000000000?text=Hi%20Neeru%20Maam%2C%20I%27m%20interested%20in%20a%20free%20trial%20class."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/40 hover:scale-105 active:scale-95 backdrop-blur-sm rounded-2xl p-6 transition-all duration-150 group"
          >
            <div className="text-3xl mb-3">💬</div>
            <div className="text-white font-semibold text-sm">WhatsApp</div>
            {/* TODO: Replace with real WhatsApp number */}
            <div className="text-white/70 text-xs mt-1">+91 XXXXX XXXXX</div>
          </a>

          {/* TODO: Replace href with real phone number */}
          <a
            href="tel:+910000000000"
            className="bg-white/20 hover:bg-white/40 hover:scale-105 active:scale-95 backdrop-blur-sm rounded-2xl p-6 transition-all duration-150 group"
          >
            <div className="text-3xl mb-3">📞</div>
            <div className="text-white font-semibold text-sm">Call</div>
            {/* TODO: Replace with real phone number */}
            <div className="text-white/70 text-xs mt-1">+91 XXXXX XXXXX</div>
          </a>

          {/* TODO: Replace href with real email */}
          <a
            href="mailto:contact@example.com"
            className="bg-white/20 hover:bg-white/40 hover:scale-105 active:scale-95 backdrop-blur-sm rounded-2xl p-6 transition-all duration-150 group"
          >
            <div className="text-3xl mb-3">✉️</div>
            <div className="text-white font-semibold text-sm">Email</div>
            {/* TODO: Replace with real email address */}
            <div className="text-white/70 text-xs mt-1">contact details soon</div>
          </a>
        </div>

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
            href="https://x.com/NeeruVijh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) profile"
            className="flex items-center gap-2 bg-white/15 hover:bg-white/30 hover:scale-105 active:scale-95 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            @NeeruVijh
          </a>
        </div>
      </div>
    </section>
  );
}
