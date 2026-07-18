import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-white/60 max-w-xs">
            Chatbot services that bridge your business to customers, in the
            language and price that fits their region.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#services" className="hover:text-teal">Chatbot Services</a></li>
            <li><a href="#pricing" className="hover:text-teal">Pricing</a></li>
            <li><a href="#demo" className="hover:text-teal">Live demo</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#contact" className="hover:text-teal">Contact support</a></li>
            <li><a href="#login" className="hover:text-teal">Log in</a></li>
            <li><a href="#signup" className="hover:text-teal">Get started</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} ChatSetu. All rights reserved.
      </div>
    </footer>
  );
}
