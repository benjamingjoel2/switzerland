const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel) as NodeListOf<T>);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Reveal on enter ---------- */
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  },
  { rootMargin: '0px 0px 10% 0px' },
);
$$('[data-reveal], [data-mask]').forEach((el) => io.observe(el));

/* ---------- Word-by-word statements ---------- */
const wordBlocks = $$('[data-words]');
for (const block of wordBlocks) {
  const walk = (node: Node) => {
    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        for (const part of (child.textContent ?? '').split(/(\s+)/)) {
          if (!part) continue;
          if (/^\s+$/.test(part)) frag.append(part);
          else {
            const s = document.createElement('span');
            s.className = 'w';
            s.textContent = part;
            frag.append(s);
          }
        }
        child.replaceWith(frag);
      } else walk(child);
    }
  };
  walk(block);
}

/* ---------- Scroll-linked pieces ---------- */
type DayState = {
  rows: HTMLElement[];
  clock: HTMLElement | null;
  label: HTMLElement | null;
  sun: SVGCircleElement | null;
  active: number;
};
const dayRoot = document.querySelector<HTMLElement>('[data-day]');
const day: DayState | null = dayRoot
  ? {
      rows: $$('.day-row', dayRoot),
      clock: dayRoot.querySelector('[data-day-clock]'),
      label: dayRoot.querySelector('[data-day-label]'),
      sun: dayRoot.querySelector('[data-sun]'),
      active: -1,
    }
  : null;

function setDay(i: number) {
  if (!day || i === day.active) return;
  day.active = i;
  day.rows.forEach((r, j) => r.classList.toggle('on', j === i));
  const row = day.rows[i];
  if (day.clock) day.clock.textContent = row.dataset.time ?? '';
  if (day.label) day.label.textContent = row.dataset.title ?? '';
  if (day.sun) {
    // Sun travels along a half circle: centre (200,190), radius 180.
    const a = Math.PI - (Math.PI * i) / Math.max(1, day.rows.length - 1);
    day.sun.setAttribute('cx', String(200 + 180 * Math.cos(a)));
    day.sun.setAttribute('cy', String(190 - 180 * Math.sin(a)));
  }
}

let ticking = false;
function onScroll() {
  ticking = false;
  const vh = innerHeight;
  for (const block of wordBlocks) {
    const r = block.getBoundingClientRect();
    if (r.top > vh || r.bottom < 0) continue;
    const words = block.querySelectorAll('.w');
    const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
    const n = Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle('on', i < n));
  }
  if (day) {
    let best = 0;
    let bestD = Infinity;
    day.rows.forEach((row, i) => {
      const r = row.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - vh * 0.5);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    setDay(best);
  }
}
addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);
addEventListener('resize', onScroll);
onScroll();

/* ---------- Hero scenes ---------- */
// Scenes 2–4 ship inside <template> so they don't compete with the first image.
// Each is mounted just ahead of its turn: the next scene loads while the current one is showing.
const mountScene = (scene: HTMLElement | undefined) => {
  const t = scene?.querySelector<HTMLTemplateElement>('template[data-defer]');
  if (t) t.replaceWith(t.content.cloneNode(true));
};

const hero = document.querySelector<HTMLElement>('[data-hero]');
if (hero) {
  const scenes = $$('.scene', hero);
  const tabs = $$<HTMLButtonElement>('.tab', hero);
  const dur = 7000;
  let i = 0;
  let timer: number | undefined;
  hero.style.setProperty('--dur', `${dur}ms`);
  const go = (n: number) => {
    i = (n + scenes.length) % scenes.length;
    scenes.forEach((s, j) => {
      s.classList.toggle('active', j === i);
      s.setAttribute('aria-hidden', String(j !== i));
    });
    tabs.forEach((t, j) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', String(j === i));
    });
    mountScene(scenes[i]);
    void tabs[i]?.offsetWidth; // restart the progress animation
    tabs[i]?.classList.add('active');
    clearTimeout(timer);
    if (!reduced) timer = window.setTimeout(() => go(i + 1), dur);
  };
  // Preload the upcoming scene once the page has finished loading, and after each change.
  const preloadNext = () => mountScene(scenes[(i + 1) % scenes.length]);
  if (document.readyState === 'complete') setTimeout(preloadNext, 1500);
  else addEventListener('load', () => setTimeout(preloadNext, 1500), { once: true });
  hero.addEventListener('transitionend', preloadNext);
  tabs.forEach((t, j) => t.addEventListener('click', () => go(j)));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearTimeout(timer);
    else go(i);
  });
  go(0);
}

/* ---------- Filter chips ---------- */
for (const group of $$('[data-filter-group]')) {
  const chips = $$<HTMLButtonElement>('[data-filter]', group);
  const items = $$('[data-item]', group);
  chips.forEach((chip) =>
    chip.addEventListener('click', () => {
      const f = chip.dataset.filter!;
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      items.forEach((it) => it.classList.add('out'));
      setTimeout(() => {
        items.forEach((it) => {
          const show = f === 'All' || (it.dataset.tags ?? '').split(',').includes(f);
          it.hidden = !show;
          if (show) requestAnimationFrame(() => requestAnimationFrame(() => it.classList.remove('out')));
        });
      }, reduced ? 0 : 280);
    }),
  );
}

/* ---------- Accordion ---------- */
for (const acc of $$('.acc')) {
  const btn = acc.querySelector('button')!;
  btn.addEventListener('click', () => {
    const open = acc.getAttribute('open-state') !== 'true';
    acc.setAttribute('open-state', String(open));
    btn.setAttribute('aria-expanded', String(open));
  });
}

/* ---------- Mobile menu ---------- */
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
if (menuBtn && menu) {
  const b1 = menuBtn.querySelector<HTMLElement>('[data-bar1]')!;
  const b2 = menuBtn.querySelector<HTMLElement>('[data-bar2]')!;
  const set = (open: boolean) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    // Labels live on the button so the pre-rendered FR/DE/ES pages carry their own.
    menuBtn.setAttribute('aria-label', (open ? menuBtn.dataset.labelClose : menuBtn.dataset.labelOpen) ?? '');
    menu.classList.toggle('opacity-0', !open);
    menu.classList.toggle('pointer-events-none', !open);
    document.body.style.overflow = open ? 'hidden' : '';
    b1.style.transform = open ? 'translateY(5.5px) rotate(45deg)' : '';
    b2.style.transform = open ? 'translateY(-5.5px) rotate(-45deg)' : '';
  };
  menuBtn.addEventListener('click', () => set(menuBtn.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => set(false)));
  addEventListener('keydown', (e) => e.key === 'Escape' && set(false));
}

/* ---------- Forms (static site: confirm locally) ---------- */
const nl = document.querySelector<HTMLFormElement>('[data-newsletter]');
nl?.addEventListener('submit', (e) => {
  e.preventDefault();
  nl.hidden = true;
  document.querySelector('[data-newsletter-ok]')?.classList.remove('hidden');
});

const booking = document.querySelector<HTMLFormElement>('[data-booking]');
booking?.addEventListener('submit', (e) => {
  e.preventDefault();
  let ok = true;
  for (const field of $$<HTMLInputElement>('[required]', booking)) {
    const err = booking.querySelector(`[data-err="${field.name}"]`);
    const bad = !field.checkValidity();
    field.setAttribute('aria-invalid', String(bad));
    err?.classList.toggle('hidden', !bad);
    if (bad && ok) {
      field.focus();
      ok = false;
    }
  }
  if (!ok) return;
  const name = (booking.elements.namedItem('name') as HTMLInputElement).value.split(' ')[0];
  booking.hidden = true;
  const done = document.querySelector<HTMLElement>('[data-booking-ok]');
  if (done) {
    done.hidden = false;
    const n = done.querySelector('[data-name]');
    if (n) n.textContent = name;
    done.focus();
  }
});

/* ---------- Gentle parallax on wide banners ---------- */
const parallax = $$('[data-parallax]');
if (parallax.length && !reduced) {
  const move = () => {
    for (const el of parallax) {
      const r = el.parentElement!.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) continue;
      const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      el.style.transform = `translate3d(0, ${p * -60}px, 0) scale(1.15)`;
    }
  };
  addEventListener('scroll', () => requestAnimationFrame(move), { passive: true });
  move();
}

/* ---------- Pre-select a journey from ?journey= ---------- */
const journeySelect = document.querySelector<HTMLSelectElement>('#journey');
const wanted = new URLSearchParams(location.search).get('journey');
if (journeySelect && wanted && [...journeySelect.options].some((o) => o.value === wanted)) journeySelect.value = wanted;
