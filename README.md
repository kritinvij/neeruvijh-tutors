# Neeru Vijh - Maths & Science Tutor

Personal website for Neeru Vijh, offering private tutoring in Maths (Classes 6-12) and Science (Classes 6-10). CBSE and ICSE, English and Hindi medium.

**Live site:** https://neeruvijhtutors.vercel.app *(rename pending - see below)*

YouTube: https://www.youtube.com/c/MathAndMorewithNeeruVijh

---

## Development

```bash
npm run dev       # http://localhost:3000
npm run build     # production build check
```

## Deploy

```bash
cd ~/Documents/neeruvijh-tutors
vercel --prod
```

---

## Content TODOs

Search for `// TODO` in the codebase to find all placeholder locations.

| What | File | Notes |
|---|---|---|
| Her photo | `components/About.tsx` | Replace the 📷 placeholder. Put photo file in `public/`, use Next.js `<Image>`. |
| Contact info | `components/Contact.tsx` | Add phone, email, or WhatsApp. WhatsApp link format: `https://wa.me/91XXXXXXXXXX` |
| Real testimonials | `components/Testimonials.tsx` | Replace placeholder quotes with real parent/student feedback. |

YouTube section already shows the 3 most-viewed videos from the channel.

---

## Vercel Rename

Project deployed as `neeru-vijh-tutoring`. To get `neeruvijhtutors.vercel.app`:

1. Go to vercel.com/dashboard
2. Open the `neeru-vijh-tutoring` project
3. Settings > General > Project Name > change to `neeruvijhtutors` > Save

---

## Stack

Next.js 16 (App Router) - Tailwind CSS v4 - TypeScript - Vercel (free hobby tier)
