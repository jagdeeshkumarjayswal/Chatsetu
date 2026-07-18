import DemoChatbot from "./DemoChatbot.jsx";

export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-6 pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: headline */}
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-teal-dark mb-4">
            Chatbots, built for every region
          </p>
          <h1 className="font-display font-semibold text-4xl md:text-5xl leading-[1.1] text-ink">
            The bridge between your business and every customer's language.
          </h1>
          <p className="mt-5 text-muted text-base md:text-lg max-w-md">
            ChatSetu sets up chatbots that answer in the language your customer
            already speaks, and quotes an honest, effective price before they
            ever confirm an order.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#signup"
              className="bg-ink text-white text-sm font-medium px-6 py-3 rounded-bridge hover:bg-teal-dark transition-colors"
            >
              Get started free
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-ink hover:text-teal transition-colors"
            >
              See chatbot services →
            </a>
          </div>

          <div className="bridge-arc mt-12 max-w-xs" />
          <p className="mt-4 text-xs text-muted font-mono">
            Trusted across 12+ Indian states · 6 regional languages
          </p>
        </div>

        {/* Right: live demo chatbot */}
        <div id="demo" className="flex justify-center md:justify-end">
          <DemoChatbot />
        </div>
      </div>
    </section>
  );
}
