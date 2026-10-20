export type Thing = { title: string; place: string; text: string; tip: string; img: string };
export type ThingGroup = { id: string; n: string; label: string; title: string; intro: string; items: Thing[]; also?: string[] };

export const thingGroups: ThingGroup[] = [
  {
    id: 'peaks',
    n: '01',
    label: 'Peaks & lifts',
    title: 'Go up. Then a bit higher.',
    intro: 'Cogwheel railways, gondolas and cable cars put 3,000 m summits within reach of anyone with a ticket and a warm jacket.',
    items: [
      { title: 'Jungfraujoch — Top of Europe', place: 'Bernese Oberland', text: 'The railway tunnels through the Eiger to Europe’s highest station at 3,454 m. Step out onto the Sphinx terrace above the Aletsch Glacier.', tip: 'Go on a clear morning and check the summit webcam first.', img: 't-jungfraujoch' },
      { title: 'Gornergrat Railway', place: 'Zermatt, Valais', text: 'A cogwheel train climbs from Zermatt to 3,089 m, opening up a ring of 4,000 m peaks with the Matterhorn front and centre.', tip: 'Sit on the right-hand side going up for Matterhorn views.', img: 't-gornergrat' },
      { title: 'Great Aletsch Glacier', place: 'Aletsch Arena, Valais', text: 'The longest glacier in the Alps, a river of ice about 20 km long. Ridge-top viewpoints at Eggishorn, Bettmerhorn and Moosfluh.', tip: 'The ridge walk between Bettmerhorn and Moosfluh is mostly level.', img: 't-aletsch' },
      { title: 'Oeschinensee', place: 'Kandersteg, Bernese Oberland', text: 'A turquoise lake under 3,000 m cliffs. Ride the gondola, walk 20 minutes down, and rent a rowing boat if the water is calm.', tip: 'Loop back via the panorama trail above the lake.', img: 't-oeschinensee' },
      { title: 'Tandem paragliding', place: 'Interlaken', text: 'Launch from above the town and spiral down between Lake Thun and Lake Brienz, landing on the Höhematte meadow in the centre of Interlaken.', tip: 'Book for the morning — the air is calmer.', img: 't-paragliding' },
      { title: 'Bern old town', place: 'Bern', text: 'Not a peak, but a high point: six kilometres of sandstone arcades and fountains, all inside a UNESCO World Heritage Site.', tip: 'Watch the Zytglogge clock’s figures perform just before the hour.', img: 't-bern' },
    ],
  },
  {
    id: 'trains',
    n: '02',
    label: 'Scenic trains',
    title: 'The window seat is the attraction.',
    intro: 'Switzerland’s panoramic trains turn a transfer into the best day of the trip. Most run with a Swiss Travel Pass plus a seat reservation.',
    items: [
      { title: 'Glacier Express', place: 'Zermatt → St. Moritz', text: 'About eight hours, 91 tunnels and 291 bridges, over the Oberalp Pass at 2,033 m. Lunch is served at your seat.', tip: 'Reservations are required and sell out in summer.', img: 't-glacier' },
      { title: 'Bernina Express', place: 'Chur or St. Moritz → Tirano', text: 'Over the Bernina Pass without a single rack section, past glaciers and down the spiral viaduct at Brusio into Italy.', tip: 'Part of the Rhaetian Railway UNESCO World Heritage line.', img: 't-bernina' },
      { title: 'GoldenPass Express', place: 'Montreux → Interlaken', text: 'From Lake Geneva’s vineyards to the Bernese Oberland, through the cheese country of Gruyère and the chalets of Gstaad.', tip: 'Prestige class has lowered seats with bigger windows.', img: 'j-rails' },
      { title: 'Landwasser Viaduct', place: 'Filisur, Graubünden', text: 'The curving stone viaduct that runs straight into a cliff tunnel. Ride across on the Albula line, then walk to the viewpoint below.', tip: 'A signposted trail from Filisur station takes about 30 minutes.', img: 'jr-pass' },
    ],
  },
  {
    id: 'lakes',
    n: '03',
    label: 'Lakes',
    title: 'Slower, by water.',
    intro: 'Swiss lakes are clean enough to swim in and served by historic steamers that run like trains.',
    items: [
      { title: 'Lake Lucerne by steamer', place: 'Lucerne → Vitznau → Flüelen', text: 'Restored paddle steamers sail between Lucerne and the villages of the lake, with rack railways waiting at Vitznau for Rigi.', tip: 'Covered by the Swiss Travel Pass.', img: 't-lucerne' },
      { title: 'Lavaux vineyard terraces', place: 'Lake Geneva', text: 'Stone-walled terraces dropping straight into the lake, a UNESCO site since 2007. Walk between villages and taste Chasselas at the cellar door.', tip: 'Lutry to Saint-Saphorin is a gentle half-day.', img: 't-lavaux' },
      { title: 'Verzasca valley', place: 'Ticino', text: 'Emerald water over granite, stone villages and the double-arched Ponte dei Salti at Lavertezzo.', tip: 'The river is cold and fast — swim only in calm pools.', img: 't-verzasca' },
      { title: 'Seealpsee & Aescher', place: 'Appenzell', text: 'Ride up to Ebenalp, walk down past the cliff-side Aescher guesthouse and on to the green mirror of Seealpsee.', tip: 'Wear proper shoes; the path below Aescher is steep.', img: 't-appenzell' },
    ],
  },
  {
    id: 'food',
    n: '04',
    label: 'Food & drink',
    title: 'Mostly cheese. No regrets.',
    intro: 'Swiss food is mountain food: built for cold evenings and hungry walkers, and best eaten slowly.',
    items: [
      { title: 'Cheese fondue', place: 'Fribourg & everywhere', text: 'Moitié-moitié is half Gruyère, half Vacherin Fribourgeois, with white wine and a splash of kirsch. Stir in a figure of eight.', tip: 'Tradition: lose your bread in the pot and you buy the next round.', img: 't-fondue' },
      { title: 'Raclette', place: 'Valais', text: 'A half-wheel is melted by the fire and scraped onto potatoes, with pickled onions and gherkins on the side.', tip: 'Valais raclette cheese has protected AOP status.', img: 't-raclette' },
      { title: 'Swiss chocolate', place: 'Zurich, Broc, Bern', text: 'Milk chocolate was perfected here in the 1870s. Visit a chocolatier, or a factory tour like Maison Cailler in Broc.', tip: 'Supermarket chocolate here is excellent — no need to overspend.', img: 't-chocolate' },
      { title: 'Alpine cheese & dairies', place: 'Appenzell, Gruyères, Emmental', text: 'In summer, cows graze high pastures and cheese is made on the alp. Show dairies explain how a wheel is born.', tip: 'Look for “Alpkäse” — cheese made on the summer pasture.', img: 'day-breakfast' },
    ],
    also: ['Rösti — crispy grated potato, the Bernese breakfast that became a national dish', 'Zürcher Geschnetzeltes — veal in cream sauce, with rösti', 'Älplermagronen — alpine macaroni with potatoes, cheese and apple purée', 'Basler Läckerli — spiced honey biscuits from Basel'],
  },
  {
    id: 'festivals',
    n: '05',
    label: 'Festivals',
    title: 'Masks, bonfires and cows in flowers.',
    intro: 'Swiss traditions are local, loud and very well organised. Plan a trip around one of these and you will remember it.',
    items: [
      { title: 'Basel Fasnacht', place: 'Basel · Feb or Mar', text: 'At 4 a.m. on the Monday after Ash Wednesday the city lights go out for the Morgestraich, and 72 hours of fifes, drums and lanterns begin.', tip: 'Don’t wear a costume — in Basel, spectators don’t.', img: 't-fasnacht' },
      { title: 'Swiss National Day', place: 'Everywhere · 1 August', text: 'Bonfires on the hills, lantern parades, fireworks over the lakes and brunch on farms across the country.', tip: 'Shops close; book restaurants in advance.', img: 't-nationalday' },
      { title: 'Alpine cattle descent', place: 'Alpine villages · Sep — Oct', text: 'Called Alpabzug or Désalpe: cows decorated with flowers and huge bells walk down from the summer pastures, followed by the whole village.', tip: 'Dates depend on the weather — check the village website the week before.', img: 't-alpabzug' },
    ],
    also: ['Sechseläuten, Zurich (April) — a snowman’s head explodes to predict the summer', 'Montreux Jazz Festival (July) — two weeks of concerts on the lake', 'Fête de l’Escalade, Geneva (December) — chocolate cauldrons and torch-lit parades'],
  },
  {
    id: 'winter',
    n: '06',
    label: 'Winter',
    title: 'Snow, sledges and soft light.',
    intro: 'From December to March the Alps turn quiet and blue. You don’t need to ski to love it.',
    items: [
      { title: 'Skiing & snowboarding', place: 'Verbier, Zermatt, St. Moritz, Jungfrau', text: 'From the Matterhorn glacier to the wide sunny slopes of the Engadin — big resorts with efficient lifts and pistes for every level.', tip: 'Weekday skiing outside school holidays is much quieter.', img: 't-skiing' },
      { title: 'Sledging & winter walks', place: 'Grindelwald, Wengen, Engadin', text: 'Groomed sledge runs and winter hiking trails mean anyone can be out in the snow all day. Rent a wooden sledge at the station.', tip: 'Many runs finish at a station — ride back up and go again.', img: 'day-stars' },
    ],
    also: ['Christmas markets in Basel, Montreux and Zurich (late Nov — Dec)', 'Glacier Express in snow — our winter favourite'],
  },
];
