export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-orange-500 to-amber-400"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-white/90 text-lg mb-10">
          Interested in Maths or Science tutoring? Reach out to discuss your child&apos;s needs and
          get started.
        </p>

        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
          {/* TODO: Add phone, email, and/or WhatsApp link */}
          <p className="text-white font-medium text-lg mb-2">Contact details coming soon.</p>
          <p className="text-white/80 text-sm">
            Phone, email, and WhatsApp details will be added here.
          </p>
        </div>
      </div>
    </section>
  );
}
