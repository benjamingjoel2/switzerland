# Swiss Horizon — Design Brief

Independent travel site for Switzerland. Stack: **Astro + Tailwind CSS**, static output, deployed on Vercel.
Reference for structure, rhythm and motion: stillwild.framer.website. Everything below (copy, palette, fonts, logo, imagery) is Swiss Horizon's own.

---

## 1. Concept

**Swiss Horizon** is a small-group, slow-travel company for Switzerland: rail-first itineraries, mountain huts, lake towns, and one well-organised week instead of ten rushed cities. The site sells the feeling of *the line where the peaks meet the sky* — calm, precise, quietly confident. Very Swiss: on time, nothing extra.

**Tagline:** *Above the clouds. On schedule.*

## 2. Colour palette

A dark "alpine night" base like the reference's moody dark canvas, but cooler and bluer — glacier ink instead of forest green — with Swiss red as the single warm accent (instead of the reference's orange).

| Token | Hex | Use |
|---|---|---|
| `ink-950` | `#0B1114` | Page background (night above the Matterhorn) |
| `ink-900` | `#111A1F` | Alternate section background |
| `ink-800` | `#1C2830` | Hairlines, card borders |
| `slate-400` | `#8A989F` | Secondary text, muted copy |
| `snow` | `#EEF1EE` | Primary text, light buttons (fresh snow, slightly cool) |
| `limestone` | `#D9D4C7` | Tertiary surfaces, warm highlights |
| `alpenglow` | `#E0402F` | Accent: status dots, sun arc, active states (Swiss red, softened for dark bg) |
| `glacier` | `#7FB7C9` | Rare secondary accent: "open" status, map/rail details |

Contrast: `snow` on `ink-950` ≈ 17:1; `slate-400` on `ink-950` ≈ 6.4:1 (AA for body).

## 3. Font pairing

- **Inter Tight** (variable, self-hosted via Fontsource) — display + UI. A neo-grotesk in the Helvetica lineage, a nod to Swiss typography. Headlines set big and tight: `letter-spacing: -0.045em`, `line-height: 0.95–1.05`, weight 500.
- **JetBrains Mono** (self-hosted) — small uppercase labels: section numbers `(01) THE IDEA`, times `06:30`, timetable data, counters `01 / 03`. Tracking `+0.06em`, 11–13 px.

Two families, self-hosted, `font-display: swap`, subset to Latin — no third-party font requests.

## 4. Tone of voice

Calm, specific, a little dry. Short sentences. Real numbers (altitudes, train times, lake temperatures). Never "breathtaking", "hidden gem" or "bucket list". We talk like a mountain guide who also reads the SBB timetable for fun.
- ✅ "The 07:52 from Interlaken Ost. Window seat on the left. You're welcome."
- ❌ "Experience the breathtaking beauty of the majestic Alps!"

## 5. Hero concept

Full-viewport, edge-to-edge media with a dark gradient for legibility (as in the reference). Four **auto-advancing scenes**, each with its own image/video and a tab in a bottom bar with a thin progress line that fills, then the next scene cross-fades in (click a tab to jump):

1. `01` **Zermatt** — Matterhorn at first light
2. `02` **Lauterbrunnen** — valley of 72 waterfalls
3. `03` **Lucerne** — lake & paddle steamers
4. `04` **Lugano** — palms under the Alps

Bottom-left: huge headline **"Above the clouds. On schedule."** Right column: one short paragraph + two pill buttons (`Explore destinations ↗`, `Dates ↗`). Desktop: muted, looping Pexels video with poster image. Mobile: still image only.

## 6. Logo idea

Wordmark **Swiss Horizon** in Inter Tight 600 with a small circular mark to its left: a ring containing a **mountain silhouette cut by a horizon line**, the lower half filled in alpenglow red — sunrise behind a peak. A subtle "+" (Swiss cross) is formed by the negative space where the horizon line meets the summit. Inline SVG, used in the header, footer and favicon.

## 7. Layout system

- Max width 1440 px, 40 px gutters on desktop (16 px on mobile), 12-column grid.
- Hairline borders (`ink-800`) divide everything, as in the reference: header cells, card columns, table rows.
- Sticky header split into bordered cells: logo | nav | live "next departure" ticker with a pulsing red dot | `Book ↗` pill.
- Section rhythm: ~160 px vertical padding desktop, ~96 px mobile. Each section opens with a mono label `(0X) NAME`.
- Pill buttons: label + circular icon chip with `↗`; on hover the chip rotates 45° and the pill fills.
- Text links: underline that wipes in from the left, arrow nudges right.

## 8. Motion & interactions (recreated, not copied)

- Hero: cross-fade + slow Ken Burns scale (1.08 → 1) on scene change; tab progress bars.
- Large statements reveal **word by word** (opacity 0.15 → 1 as you scroll).
- Headings slide up from a mask on enter (IntersectionObserver + CSS transitions).
- Cards: image zoom on hover; filter chips animate the grid (fade/scale out → in).
- "A day here": sticky left column with a **sun arc** whose dot travels across as you scroll through the day's schedule; the big clock `06:30` updates to the active row.
- Testimonial slider with `01 / 03` counter and arrows; press-logo strip.
- FAQ accordion with `+` rotating to `×`.
- Respects `prefers-reduced-motion` (all motion disabled, content visible).
- No animation libraries — small vanilla scripts, so the site stays fast.

## 9. Section-by-section map (Home)

| # | Reference section | Swiss Horizon version |
|---|---|---|
| — | Sticky bordered header: logo, nav, "Next · retreat · date · spots left" ticker, Reserve pill | Logo, nav (Destinations · Things to Do · Travel Tips · Contact), ticker "Next · Glacier Express Week · 12 Jan · 4 seats left", `Book ↗` pill. Mobile: burger → full-screen menu. |
| 00 | Hero: full-bleed media, 4 location tabs with progress bars, intro paragraph + 2 pill CTAs | Zermatt / Lauterbrunnen / Lucerne / Lugano scenes; headline "Above the clouds. On schedule."; CTAs Explore destinations / Dates. |
| 01 | **The idea**: big word-reveal statement + 3 category columns (Wellness / Adventure / Hybrid) with tall images | "(01) The idea" — statement about one week, one rail pass, small groups. Columns: **Peaks** (high alpine, hiking), **Lakes** (slow, water, towns), **Rails** (panoramic train journeys). |
| 02 | **Who we are**: image left, two-tone headline right, "Our story →", two big stats | Image of a chalet at dusk; "A travel company run by mountain people, not marketers." Stats: **4.9** avg rating · **96%** of trains on time (a wink — SBB punctuality). |
| 03 | **Retreats**: filter chips + grid of trip cards (price, place, dates, nights, group size, spots, effort meter) | "(03) Journeys" — chips All / Peaks / Lakes / Rails; 6 cards: Matterhorn & Five Lakes, Jungfrau Huts, Glacier Express Winter Week, Lake Lucerne Slow Week, Ticino Lakes & Lugano, Bern & Lavaux Wine Terraces. Prices in CHF; "Effort 1–5" meter. |
| 04 | **How it works**: wide image banner + 4 numbered steps | Panorama banner (Glacier Express) + 4 steps: Choose your week · Pick your room · Hold it with 25% · We handle the rest (Swiss Travel Pass included). |
| 05 | **A day here**: sticky sun arc + giant clock, scrolling schedule with thumbnails | "Tuesday on the Jungfrau Huts week" — 06:15 sunrise at Männlichen … 12:30 rösti at the hut … 19:30 cheese fondue … 21:30 stars over Grindelwald. |
| 06 | **Places**: horizontal place cards with best season, altitude, airport | "(06) Destinations" — Zermatt, Jungfrau Region, Lucerne, Lugano (best season, altitude, nearest airport + train time). Links to Destinations page. |
| 07 | **Departures** table: dates, trip, place, length, price, status, Reserve | Swiss-timetable styled departures board (mono digits, like an SBB board) with status: Open / 2 seats left / Waitlist. |
| 08 | **Hosts**: 4 portrait cards with role + quote on hover | "(08) Guides" — 4 fictional guides (mountain guide, rail nerd, cheesemaker's daughter, lake skipper) with a one-line quote. Images: Swiss landscape/activity shots (no fake portraits of real people). |
| 09 | **Guests**: star testimonial slider + press-logo text strip | 3 testimonials, slider `01 / 03`; text-only strip of fictional publication names. |
| 10 | **Included**: "One price. Bring boots." + 8 icon tiles + "Not included" row | "One price. Bring a jacket." — tiles: Your room · Breakfast & dinners · Swiss Travel Pass · Certified guides · Luggage forwarding · Mountain lifts · Local guides · Ten guests at most. Not included: flights, insurance, lunches, wine. |
| 11 | **Questions**: left heading + CTA, right accordion | "Before you book" — 5 Switzerland-specific FAQs (fitness, weather, ETIAS/visa note, currency, luggage on trains). |
| 12 | **Journal**: 3 article cards | "(12) Field notes" — 3 cards linking to Travel Tips page sections. |
| 13 | Closing CTA: one-liner + button | "Ten people. One timetable. Your week." + `Find your journey ↗`. |
| — | Footer: brand blurb, link columns, contact, newsletter, legal | Same structure + **photo credits** block (each photographer linked, plus Unsplash/Pexels links). |

## 10. Other pages

All reuse the header/footer, section labels, cards and motion system.

- **Destinations** — hero + filterable grid of ~10 places (Zermatt, Jungfrau Region/Grindelwald/Lauterbrunnen, Lucerne, Lake Geneva/Lavaux/Montreux, Lugano & Ticino, Bern, Zurich, St. Moritz/Engadin, Appenzell, Basel), each with best season, altitude, getting there, and "don't miss".
- **Things to Do** — sections by theme: Peaks & lifts (Jungfraujoch, Gornergrat), Scenic trains (Glacier Express, Bernina Express, GoldenPass), Lakes, Food (fondue, raclette, rösti, chocolate), Festivals (Fête de l'Escalade, Basel Fasnacht, Montreux Jazz, Swiss National Day 1 Aug, Alpine cattle descent), Winter.
- **Travel Tips** — practical guide: getting around (Swiss Travel Pass vs Half Fare), money (CHF, cards, Twint), entry & visas (flagged to verify), weather by season, etiquette (Sunday quiet, recycling), packing, budget table, journal articles.
- **Contact / Booking** — booking-request form (journey, date, guests, room type, message) with client-side validation; contact details; FAQ mini-accordion. Form posts nowhere real (shows success state) unless you want a provider wired in.

## 11. Media

- Unsplash API for photos (key from `UNSPLASH_ACCESS_KEY`), Pexels API for video (key from `PEXELS_API_KEY`).
- Fetched at build time by a script into `src/data/media.json`; only images whose location/description confirms Switzerland are kept, and I review each pick visually.
- Images served through Unsplash's CDN with `w`, `q`, `fm=auto` params + `srcset` and lazy loading; hero gets `fetchpriority="high"`.
- Every used photo/video credited in the footer with photographer link + Unsplash/Pexels link (and Unsplash download-tracking pinged as their guidelines require).

## 12. SEO

Per-page `<title>` and meta description, canonical, Open Graph + Twitter image (a Swiss photo at 1200×630), `@astrojs/sitemap`, `robots.txt`, JSON-LD `TravelAgency`.

---

## ⚠️ Blockers found during setup

1. **`PEXELS_API_KEY` is not set** in this environment (Pexels returns 401). Unsplash works. Options: (a) you add the key to the environment and I use Pexels for hero video, or (b) I proceed with Unsplash stills only and the hero uses a slow Ken Burns animation instead of video.
2. Vercel CLI isn't installed yet — I'll install it locally; `VERCEL_TOKEN` is present.
3. `gh auth status` reports the GH_TOKEN as invalid, though an API call returned user `benjamingjoel2`. I'll verify again at the repo step and stop if it fails.
