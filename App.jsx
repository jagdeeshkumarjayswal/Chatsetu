import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ChatbotServices from "./components/ChatbotServices.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <ChatbotServices />
      </main>
      <Footer />
    </div>
  );
}
