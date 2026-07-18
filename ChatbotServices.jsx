import chatbotServices from "../data/chatbotServices.js";
import ServiceIcon from "./ServiceIcon.jsx";

export default function ChatbotServices() {
  return (
    <section id="services" className="bg-surface border-y border-line">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-xl">
          <p className="font-mono text-xs tracking-widest uppercase text-teal-dark mb-3">
            Chatbot services
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
            One platform, every kind of bot your business needs.
          </h2>
          <p className="mt-3 text-muted">
            Pick a service to start — each one connects to the same customer
            dashboard, pricing engine, and language settings.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chatbotServices.map((service) => (
            <article
              key={service.id}
              className="group border border-line rounded-2xl p-6 bg-bg hover:border-teal hover:bg-teal-light/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-line flex items-center justify-center text-ink group-hover:text-teal-dark group-hover:border-teal transition-colors">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-ink">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-teal-dark">{service.priceNote}</span>
                <a
                  href="#signup"
                  className="text-xs font-medium text-ink group-hover:text-teal-dark"
                >
                  Choose →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
