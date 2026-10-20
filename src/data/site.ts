export const brand = {
  name: 'Swiss Horizon',
  tagline: 'Above the clouds. On schedule.',
  email: 'hello@swisshorizon.ch',
  instagram: '@swisshorizon.travel',
  base: 'Interlaken, Bernese Oberland',
};

export const nav = [
  { href: '/destinations/', label: 'Destinations' },
  { href: '/things-to-do/', label: 'Things to Do' },
  { href: '/travel-tips/', label: 'Travel Tips' },
  { href: '/contact/', label: 'Contact' },
];

export const heroScenes = [
  { n: '01', place: 'Zermatt', line: 'Matterhorn at first light', img: 'hero-zermatt' },
  { n: '02', place: 'Lauterbrunnen', line: 'The valley of 72 waterfalls', img: 'hero-lauterbrunnen' },
  { n: '03', place: 'Lucerne', line: 'Old town, lake and steamers', img: 'hero-lucerne' },
  { n: '04', place: 'Lugano', line: 'Palm trees under the Alps', img: 'hero-lugano' },
];

export const themes = [
  {
    name: 'Peaks',
    count: 2,
    text: 'Hut nights, ridge walks, glaciers you can hear. Effort 3–4.',
    img: 'idea-peaks',
  },
  {
    name: 'Lakes',
    count: 2,
    text: 'Paddle steamers, swims off the jetty, long lunches. Effort 1–2.',
    img: 'idea-lakes',
  },
  {
    name: 'Rails',
    count: 2,
    text: 'Panorama cars, viaducts and a window seat with a plan. Effort 1.',
    img: 'idea-rails',
  },
];

export type Journey = {
  slug: string;
  title: string;
  theme: 'Peaks' | 'Lakes' | 'Rails';
  place: string;
  dates: string;
  nights: number;
  max: number;
  price: string;
  status: string;
  low?: boolean;
  effort: number;
  img: string;
};

export const journeys: Journey[] = [
  {
    slug: 'matterhorn',
    title: 'Matterhorn & Five Lakes',
    theme: 'Peaks',
    place: 'Zermatt, Valais',
    dates: '7 — 12 Jul 2027',
    nights: 5,
    max: 10,
    price: 'CHF 2,950',
    status: 'Waitlist',
    effort: 3,
    img: 'j-matterhorn',
  },
  {
    slug: 'jungfrau',
    title: 'Jungfrau Huts & Waterfalls',
    theme: 'Peaks',
    place: 'Grindelwald & Lauterbrunnen',
    dates: '15 — 21 Jun 2027',
    nights: 6,
    max: 10,
    price: 'CHF 3,280',
    status: 'Open · 9 left',
    effort: 4,
    img: 'j-jungfrau',
  },
  {
    slug: 'glacier-express',
    title: 'Glacier Express Winter Week',
    theme: 'Rails',
    place: 'Zermatt → St. Moritz',
    dates: '12 — 18 Jan 2027',
    nights: 6,
    max: 10,
    price: 'CHF 3,640',
    status: '4 seats left',
    low: true,
    effort: 1,
    img: 'j-glacier',
  },
  {
    slug: 'lucerne',
    title: 'Lake Lucerne Slow Week',
    theme: 'Lakes',
    place: 'Lucerne, Vitznau & Rigi',
    dates: '18 — 23 May 2027',
    nights: 5,
    max: 10,
    price: 'CHF 2,480',
    status: 'Open · 10 left',
    effort: 2,
    img: 'j-lucerne',
  },
  {
    slug: 'ticino',
    title: 'Ticino Lakes & Lugano',
    theme: 'Lakes',
    place: 'Lugano, Locarno & Verzasca',
    dates: '21 — 26 Sep 2027',
    nights: 5,
    max: 10,
    price: 'CHF 2,390',
    status: 'Open · 8 left',
    effort: 2,
    img: 'j-ticino',
  },
  {
    slug: 'grand-rails',
    title: 'Grand Rails: Lavaux to Bernina',
    theme: 'Rails',
    place: 'Montreux → Tirano',
    dates: '4 — 10 Dec 2026',
    nights: 6,
    max: 10,
    price: 'CHF 3,890',
    status: '2 seats left',
    low: true,
    effort: 1,
    img: 'j-rails',
  },
];

export const steps = [
  { n: '01', title: 'Choose your week', text: 'Filter by season, region and how many metres of ascent you fancy.' },
  { n: '02', title: 'Pick your room', text: 'Twin, double or single. Mountain hotels, lake houses, one proper hut night.' },
  { n: '03', title: 'Hold it with 25%', text: 'Balance due 60 days out. Change your dates once, free of charge.' },
  { n: '04', title: 'We handle the rest', text: 'Rail passes, luggage forwarding, dietary notes, packing list — done.' },
];

export const day = {
  title: 'Tuesday on Jungfrau Huts & Waterfalls',
  intro: 'Every journey keeps a rhythm like this. Join all of it, or skip the afternoon and take a book to the lake.',
  rows: [
    {
      t: '06:15',
      title: 'Sunrise on the Eiger',
      text: 'Coffee on the terrace at Kleine Scheidegg, 2,061 m. The north face turns pink for about four minutes. Worth the alarm.',
      img: 'day-sunrise',
    },
    {
      t: '07:30',
      title: 'Breakfast, properly',
      text: 'Birchermüesli, braided Zopf, alpine butter, mountain cheese and honey from a farm you can see from the window.',
      img: 'day-breakfast',
    },
    {
      t: '08:45',
      title: 'The Eiger Trail',
      text: 'Six kilometres along the foot of the north face, from Eigergletscher down to Alpiglen. Two guides, one slow pace.',
      img: 'day-walk',
    },
    {
      t: '12:30',
      title: 'Rösti at the hut',
      text: 'Crisp potato rösti with a fried egg and alpine cheese, a cold apple juice, boots off on the bench outside.',
      img: 'day-lunch',
    },
    {
      t: '14:00',
      title: 'Nothing at all',
      text: 'Train down to Grindelwald. Nap, read, or ride the gondola to First and walk to Bachalpsee. No programme.',
      img: 'day-free',
    },
    {
      t: '17:30',
      title: 'Apéro with a view',
      text: 'A glass of Valais white on the chalet balcony while the valley goes blue. Cheese plate optional, never refused.',
      img: 'day-apero',
    },
    {
      t: '19:30',
      title: 'Fondue moitié-moitié',
      text: 'Half Gruyère, half Vacherin Fribourgeois. House rule: drop your bread in the pot and you pour the next round.',
      img: 'day-fondue',
    },
    {
      t: '21:30',
      title: 'Stars over the valley',
      text: 'Blankets, herbal tea and the last train whistle from Grindelwald Grund. On clear nights, the Milky Way.',
      img: 'day-stars',
    },
  ],
};

export const places = [
  {
    country: 'Valais',
    name: 'Zermatt',
    region: 'Matterhorn valley',
    season: 'June — September, December — April',
    k2: 'Altitude',
    v2: '1,608 m village',
    airport: 'Geneva (GVA) · about 3 h 40 by train',
    img: 'p-zermatt',
  },
  {
    country: 'Bernese Oberland',
    name: 'Jungfrau Region',
    region: 'Grindelwald · Lauterbrunnen · Wengen',
    season: 'June — October, December — March',
    k2: 'Altitude',
    v2: '1,034 m Grindelwald',
    airport: 'Zurich (ZRH) · about 2 h 30 by train',
    img: 'p-jungfrau',
  },
  {
    country: 'Central Switzerland',
    name: 'Lucerne',
    region: 'Lake Lucerne & Rigi',
    season: 'May — October',
    k2: 'Lake',
    v2: '18 — 22°C in summer',
    airport: 'Zurich (ZRH) · about 1 h by train',
    img: 'p-lucerne',
  },
  {
    country: 'Ticino',
    name: 'Lugano',
    region: 'Lake Lugano & Lake Maggiore',
    season: 'April — October',
    k2: 'Altitude',
    v2: '273 m lakeside',
    airport: 'Zurich (ZRH) · about 2 h 40 by train',
    img: 'p-lugano',
  },
];

export const departures = [
  { d: '4 — 10 Dec', y: '2026', trip: 'Grand Rails: Lavaux to Bernina', place: 'Montreux → Tirano', len: '6 nights', price: 'CHF 3,890', status: '2 seats left', kind: 'low' },
  { d: '12 — 18 Jan', y: '2027', trip: 'Glacier Express Winter Week', place: 'Zermatt → St. Moritz', len: '6 nights', price: 'CHF 3,640', status: '4 seats left', kind: 'low' },
  { d: '9 — 15 Feb', y: '2027', trip: 'Glacier Express Winter Week', place: 'Zermatt → St. Moritz', len: '6 nights', price: 'CHF 3,640', status: 'Open · 8 left', kind: 'open' },
  { d: '18 — 23 May', y: '2027', trip: 'Lake Lucerne Slow Week', note: 'Early booking CHF 150 off until 31 Jan', place: 'Lucerne, Vitznau & Rigi', len: '5 nights', price: 'CHF 2,330', status: 'Open · 10 left', kind: 'open' },
  { d: '15 — 21 Jun', y: '2027', trip: 'Jungfrau Huts & Waterfalls', place: 'Grindelwald & Lauterbrunnen', len: '6 nights', price: 'CHF 3,280', status: 'Open · 9 left', kind: 'open' },
  { d: '7 — 12 Jul', y: '2027', trip: 'Matterhorn & Five Lakes', place: 'Zermatt, Valais', len: '5 nights', price: 'CHF 2,950', status: 'Waitlist', kind: 'wait' },
  { d: '23 — 28 Aug', y: '2027', trip: 'Matterhorn & Five Lakes', place: 'Zermatt, Valais', len: '5 nights', price: 'CHF 2,950', status: 'Open · 7 left', kind: 'open' },
  { d: '21 — 26 Sep', y: '2027', trip: 'Ticino Lakes & Lugano', place: 'Lugano, Locarno & Verzasca', len: '5 nights', price: 'CHF 2,390', status: 'Open · 8 left', kind: 'open' },
];

export const guides = [
  {
    name: 'Reto Imboden',
    role: 'Mountain guide · Zermatt',
    quote: "The Matterhorn doesn't care about your schedule. Luckily, the trains do.",
    img: 'g-reto',
  },
  {
    name: 'Annina Caflisch',
    role: 'Rail lead · Graubünden',
    quote: 'Ask me which side of the carriage to sit on. It matters more than you think.',
    img: 'g-annina',
  },
  {
    name: 'Lena Brülisauer',
    role: 'Food & cheese · Appenzell',
    quote: 'Good fondue is mostly patience, a little kirsch and nobody in a hurry.',
    img: 'g-lena',
  },
  {
    name: 'Matteo Ferretti',
    role: 'Lakes & boats · Ticino',
    quote: 'South of the Gotthard the Alps take their shoes off. Come and see.',
    img: 'g-matteo',
  },
];

export const testimonials = [
  {
    text: "I'd done Switzerland before — five cities in six days. This was one valley, one hut and the best week I've had in years. Every train was on time, and so were we.",
    name: 'Sarah M.',
    trip: 'Jungfrau Huts & Waterfalls · June 2026',
  },
  {
    text: 'Annina knew exactly where to sit on the Glacier Express and when to put the camera down. Eight hours went by like two.',
    name: 'David & Kenji',
    trip: 'Glacier Express Winter Week · January 2026',
  },
  {
    text: 'I came for the lakes and left with a swimming habit at 19°C and a strong opinion on rösti. Nothing felt rushed, not once.',
    name: 'Priya R.',
    trip: 'Lake Lucerne Slow Week · May 2026',
  },
];

export const press = ['Platform Seven', 'The Slow Line', 'Thin Air Review', 'Kilometre Zero', 'Valley Post'];

export const included = [
  { title: 'Your room', text: 'Mountain hotels, lake houses, one hut night.', icon: 'bed' },
  { title: 'Breakfast & dinner', text: 'Regional, seasonal, every diet.', icon: 'fork' },
  { title: 'Swiss Travel Pass', text: 'Trains, boats and buses for the week.', icon: 'ticket' },
  { title: 'Certified guides', text: 'One guide per five guests.', icon: 'compass' },
  { title: 'Luggage forwarding', text: 'Your case meets you at the next hotel.', icon: 'case' },
  { title: 'Mountain lifts', text: 'Every gondola and cogwheel on the plan.', icon: 'lift' },
  { title: 'Local hosts', text: 'Cheesemakers, skippers, winemakers.', icon: 'hand' },
  { title: 'Ten at most', text: 'Most guests travel solo.', icon: 'group' },
];

export const notIncluded = ['Flights', 'Travel insurance (required)', 'Lunches', 'Wine & drinks'];

export const faqs = [
  {
    q: 'How fit do I need to be?',
    a: 'Each journey has an effort score from 1 to 5. Rails and Lakes weeks (1–2) need nothing more than comfortable shoes. Peaks weeks (3–4) mean 4–6 hours on foot with up to 900 m of ascent — if you hike at home on weekends, you will be fine.',
  },
  {
    q: 'What will the weather be like?',
    a: 'Mountain weather changes quickly. In summer expect 20–28°C in the valleys and near-freezing at 3,000 m on the same day. We plan every day with a bad-weather version and send a packing list built around layers.',
  },
  {
    q: 'Do I need a visa for Switzerland?',
    a: 'Switzerland is part of the Schengen Area. Many nationalities can visit visa-free for up to 90 days in any 180-day period, but rules depend on your passport and are changing with the EU’s new entry systems. Always check the official Swiss State Secretariat for Migration (SEM) website before booking flights.',
  },
  {
    q: 'Do I need Swiss francs?',
    a: 'Switzerland uses the Swiss franc (CHF), not the euro. Cards and contactless payment work almost everywhere; we suggest carrying a little cash for mountain huts, farm shops and honesty boxes.',
  },
  {
    q: 'How does luggage work on the trains?',
    a: 'You travel light. Your suitcase is forwarded between hotels by rail luggage service, so on travel days you carry only a daypack. We handle the labels and the timing.',
  },
];

export const journal = [
  {
    tag: 'Before you go',
    read: '5 min read',
    title: 'Swiss Travel Pass or Half Fare Card? The honest maths',
    href: '/travel-tips/#getting-around',
    img: 'jr-pass',
  },
  {
    tag: 'Food',
    read: '4 min read',
    title: 'Fondue rules nobody tells you — and the one that really matters',
    href: '/things-to-do/#food',
    img: 'jr-fondue',
  },
  {
    tag: 'Seasons',
    read: '6 min read',
    title: 'The case for late September, Switzerland’s quietest good month',
    href: '/travel-tips/#seasons',
    img: 'jr-autumn',
  },
];
