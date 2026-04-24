# MFK Stukadoors

Website voor **MFK Stukadoors** — een stukadoorsbedrijf gevestigd in Heusden-Zolder met meer dan 20 jaar ervaring in pleisterwerken, gyproc, spuitplamuur, schilderwerken en renovatie in heel Limburg.

**Live site:** [www.mfkstukadoors.be](https://www.mfkstukadoors.be)

---

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Radix UI](https://www.radix-ui.com/) — accessible UI primitives
- [Resend](https://resend.com/) — contact form email delivery
- [next-themes](https://github.com/pacocoursey/next-themes) — theme support

---

## Project structure

```
src/
├── app/
│   ├── api/send/route.ts   # Contact form API route (Resend)
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Homepage (all sections composed here)
│   └── globals.css
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Services.tsx
    ├── TrustStrip.tsx
    ├── BeforeAfter.tsx
    ├── Portfolio.tsx
    ├── FAQ.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

---

## Getting started

**Requirements:** Node.js 18+ and npm.

```sh
# Clone the repo
git clone https://github.com/YOUR_USERNAME/mfk-stukadoors-2.git
cd mfk-stukadoors-2

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

---

## Environment variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

This is required for the contact form to send emails via the `/api/send` route.

---

## Available scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm start`     | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## Deployment

The site is deployed on [Vercel](https://vercel.com/). Push to `main` to trigger a new deployment. Make sure to set the `RESEND_API_KEY` environment variable in your Vercel project settings.
