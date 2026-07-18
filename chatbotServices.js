/**
 * Each service maps to an icon key in ServiceIcon.jsx.
 * priceNote is intentionally a "starting from" figure — the real, final
 * number a customer pays is the "effective price" computed server-side
 * (see /api/pricing/quote in the backend), which also factors in region,
 * discounts and tax. Never hardcode a final price on the frontend.
 */
const chatbotServices = [
  {
    id: "website-bot",
    icon: "website",
    name: "Website Chatbot",
    description:
      "Embed a chat widget on your site that answers FAQs, qualifies leads, and hands off to a human when needed.",
    priceNote: "From ₹999/mo",
  },
  {
    id: "messaging-bot",
    icon: "messaging",
    name: "Messaging Platform Bot",
    description:
      "Connect your bot to the messaging apps your customers already use, with the same conversation history everywhere.",
    priceNote: "From ₹1,499/mo",
  },
  {
    id: "voice-bot",
    icon: "voice",
    name: "Voice Assistant",
    description:
      "Handle phone-in queries with a voice bot that understands regional accents and hands off complex calls to agents.",
    priceNote: "From ₹2,499/mo",
  },
  {
    id: "support-bot",
    icon: "support",
    name: "Customer Support Bot",
    description:
      "Resolve tickets automatically, escalate the rest to your team, and track every conversation from one dashboard.",
    priceNote: "From ₹1,799/mo",
  },
  {
    id: "sales-bot",
    icon: "sales",
    name: "Sales & Order Bot",
    description:
      "Walk customers through your catalogue, quote effective prices instantly, and take orders inside the chat.",
    priceNote: "From ₹1,999/mo",
  },
  {
    id: "multilingual-bot",
    icon: "multilingual",
    name: "Multilingual Bot",
    description:
      "Auto-detects a customer's region and replies in their language — Hindi, Marathi, Tamil, Bengali, and more.",
    priceNote: "From ₹2,199/mo",
  },
];

export default chatbotServices;
