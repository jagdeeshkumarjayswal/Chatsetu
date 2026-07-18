# ChatSetu — Frontend

React + Vite + Tailwind frontend for ChatSetu, matching the project spec
(`chatsetu-project-spec.md`) shared earlier.

## What's in this build

- **Navbar** (`src/components/Navbar.jsx`) — original ChatSetu logo mark +
  wordmark, with a "Chatbot Services" nav link.
- **Logo** (`src/components/Logo.jsx`) — an original bridge-arc mark (not a
  third-party brand), reused in the navbar, demo chatbot header, and footer.
- **Hero** (`src/components/Hero.jsx`) — headline on the left, a **live demo
  chatbot on the right** (`src/components/DemoChatbot.jsx`), matching your
  home-page layout request.
- **Chatbot Services** (`src/components/ChatbotServices.jsx`) — a grid of
  chatbot service offerings, each with its own original icon
  (`src/components/ServiceIcon.jsx`). These icons are custom-drawn rather than
  copies of real messaging-app logos, so the page stays free of trademarked
  marks — happy to restyle them (e.g. to match a specific brand palette) if
  you'd like.
- **Footer** — contact + quick links.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Next pieces (not built yet — from the spec doc)

- Customer dashboard (`/dashboard`) and Admin dashboard (`/admin`) routes —
  these need React Router + the backend auth/pricing APIs to be live first.
- `react-i18next` wiring for the area-wise language switching described in
  the spec (the demo bot currently fakes a Hindi reply as a preview of that
  behavior).
- Backend (Node/Express + PostgreSQL) per section 6–7 of the spec — say the
  word and I'll scaffold that next in the same file-by-file style.
