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

        <p className="text-white/70 text-sm mt-8">
          You can also{" "}
          <a
            href="https://www.youtube.com/c/MathAndMorewithNeeruVijh"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white hover:text-white/90"
          >
            explore free lessons on YouTube
          </a>{" "}
          before reaching out.
        </p>
      </div>
    </section>
  );
}
