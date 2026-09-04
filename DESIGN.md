---
name: INMART Asesores de Seguros
description: One-page landing for a Colombian corporate insurance advisor — a tender control board (tablero de licitación) in deep navy with cyan signal ink.
colors:
  midnight-ground: "#0A0E2E"
  board-navy: "#0E1643"
  anchor-navy: "#1A1C63"
  executive-blue: "#2559A7"
  signal-cyan: "#37A9E7"
  ice-cyan: "#8DCCF5"
  frost: "#D9EDFB"
  ink: "#10163B"
  slate-ink: "#3C4670"
  muted-ink: "#6B7597"
  paper: "#FFFFFF"
  mist-paper: "#F3F6FB"
  line-dark: "rgba(141,204,245,.18)"
  line-dark-soft: "rgba(141,204,245,.10)"
  line-light: "rgba(16,26,78,.14)"
  line-light-soft: "rgba(16,26,78,.07)"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontWeight: 640
    lineHeight: 1.04
    letterSpacing: "-0.018em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.9rem)"
    fontWeight: 640
    lineHeight: 1.04
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 660
    letterSpacing: "0.015em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    letterSpacing: "0.14em"
  readout:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.2rem, 4.5vw, 4.3rem)"
    fontWeight: 680
    lineHeight: 1
rounded:
  tag: "2px"
  sm: "3px"
  md: "4px"
spacing:
  section: "clamp(5.5rem, 9vw, 8.5rem)"
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "{colors.midnight-ground}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.7rem"
  button-primary-hover:
    backgroundColor: "{colors.ice-cyan}"
    textColor: "{colors.midnight-ground}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.7rem"
  button-primary-active:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "{colors.midnight-ground}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.7rem"
  button-ghost:
    backgroundColor: "rgba(10,14,46,.25)"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.7rem"
  button-navy:
    backgroundColor: "{colors.anchor-navy}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.7rem"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.ice-cyan}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 1.25rem"
  nav-cta-hover:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "{colors.midnight-ground}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 1.25rem"
  sector-panel:
    backgroundColor: "{colors.mist-paper}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
  readout:
    backgroundColor: "rgba(14,22,67,.55)"
    textColor: "#FFFFFF"
    rounded: "0"
    padding: "2.1rem 2rem 1.9rem"
  contact-icon:
    backgroundColor: "transparent"
    textColor: "{colors.executive-blue}"
    rounded: "{rounded.sm}"
    size: "44px"
---

# Design System: INMART Asesores de Seguros

## Overview

**Creative North Star: "The Tender Control Board" (Tablero de Licitación)**

The page is INMART's tender control desk: the licitación lifecycle (oferta → adjudicación → ejecución) tracked with instrument precision. Every visual decision reads as instrumentation, not marketing — fixed-cell grids, folio codes (F-01, F-02, F-03), status lamps, a custody line that draws itself down the board, and segmented character cascades that type themselves in. Depth comes from navy veils over full-bleed photography, never from stacked cards. The system refuses the generic insurer page (hero + benefit cards + quote form) and consulting-editorial defaults.

Two worlds alternate down the page: deep navy instrument sections (hero, licitaciones, nosotros, CTA band) and white executive-document sections (sectores, por qué, contacto), separated by hairline rules rather than shadows. Signal cyan is the only saturated voice on navy — it marks live states, actions, and the drawing of lines — while executive blue carries links and icons on white. Photography is civil works, infrastructure, and executive meetings under navy gradient veils, framed by cyan corner brackets; never insurance clichés.

**Key Characteristics:**
- Deep navy ground running unbroken beneath dark sections; white data ink on top.
- Cyan as live-state ink only: buttons, lamps, custody lines, brackets, focus rings.
- Hairline borders (1px translucent rules) instead of shadows; near-square corners (2–4px).
- Archivo expanded-caps display + Spline Sans Mono tracked-uppercase labels; tabular numerals everywhere data appears.
- Corner-bracket readout in the hero with per-character segmented cascade.
- Signature motion: IntersectionObserver reveals (fade + 26px rise), character cascades, custody-line draw, status lamps igniting — all fully disabled under `prefers-reduced-motion`.

## Colors

A two-register palette: navy instrument-panel darks with one cyan signal voice, and a white executive-document light register with blue ink. All values are declared as CSS custom properties on `:root` in `index.html`; the frontmatter is the normative list.

### Primary

- **Signal Cyan** (#37A9E7, `--cyan-500`): the live ink. Primary buttons (Hablemos), corner brackets, status lamps, the custody line, hover underlines in nav, selection highlight, focus rings on dark, and the small tick marks in the status rail. Reserved strictly for live states and actions.
- **Ice Cyan** (#8DCCF5, `--cyan-300`): signal cyan's hover/rest tone — button hover fill, readout row keys, founder role caption, footer link hover, bracket readout labels.
- **Frost** (#D9EDFB, `--cyan-100`): lede text on dark sections and the readout label — pale cyan for secondary data ink on navy.

### Secondary

- **Executive Blue** (#2559A7, `--blue-600`): the accent of the white register. Arrow links, contact icons, the giant quote mark, fact values' underline world, scrollbar thumb, and focus rings on paper. It is blue-600, not navy — a step brighter so it survives on white.

### Neutral

- **Midnight Ground** (#0A0E2E, `--navy-950`): page body background, hero base, footer, dark-section ground; also the text color on cyan buttons.
- **Board Navy** (#0E1643, `--navy-900`): the tender board surface and the founder photo card base. Also the tonal source of the hero veil gradient (`rgba(14,22,67,…)`).
- **Anchor Navy** (#1A1C63, `--navy-700`): solid navy fills — the navy button, the nav CTA border on solid nav, why-terms, fact values, primary contact icon well.
- **Instrument Navy** (#121B52, `--navy-850`): declared in `:root` but currently unused — held in reserve for future tonal layering. Do not reach for it casually.
- **Ink** (#10163B, `--ink-900`): body text on paper; also the base of the sector-panel photo veil (`rgba(16,22,59,…)`).
- **Slate Ink** (#3C4670, `--ink-600`): secondary text on paper (ledes, why-descriptions, solid-nav link color).
- **Muted Ink** (#6B7597, `--ink-400`): micro-labels on paper (contact keys, fact keys).
- **Paper** (#FFFFFF): white sections, contact panel, solid nav strip.
- **Mist Paper** (#F3F6FB, `--paper-2`): hover wash on white rows and the sector panel base.
- **Dark Rules** (`rgba(141,204,245,.18)` full / `.10` soft): hairline borders and dividers on navy — frost-cyan at low alpha.
- **Light Rules** (`rgba(16,26,78,.14)` full / `.07` soft): hairline borders and dividers on white — ink at low alpha.

### Named Rules

**The Live-Ink Rule.** Cyan marks only what is alive: actions, active states, drawn lines, ignited lamps, focus. It never colors body text, headings, or decoration for its own sake. Its rarity is the signal.

**The Unbroken Ground Rule.** Dark sections share one continuous navy ground (body background `#0A0E2E`); a dark section never introduces a different dark base except the board's `#0E1643` surface sitting on that ground. White sections are separate sheets laid on the desk.

**The Hairline Rule.** Structure is drawn with 1px translucent rules (`--line-*` tokens), never with shadows or heavy borders. If a divider needs to be more than 1px, the design is wrong.

## Typography

**Display Font:** Archivo (variable: width 62–125, weight 100–900), fallback system-ui, sans-serif — loaded from Google Fonts with `display=swap`.
**Body Font:** Archivo (same variable load, regular width/weight).
**Label/Mono Font:** Spline Sans Mono (variable: weight 300–700), fallback ui-monospace, monospace.

**Character:** One grotesque family does everything, bent into two voices — expanded semibold caps for display authority (font-stretch 112–118%) and regular-width quiet body text; Spline Sans Mono supplies the instrument voice: uppercase, tracked (+0.14–0.22em), tabular numerals, for every label, folio code, and readout.

### Hierarchy

- **Display** (Archivo, 640, hero `clamp(2.55rem, 5.3vw, 5.1rem)` / section h2 `clamp(1.9rem, 3.2vw, 2.9rem)`, line-height 1.04, stretch 118%, tracking −0.018em, `text-wrap: balance`): hero H1 and every section H2. Sentence case, not all-caps — the expansion carries the authority.
- **Readout** (Archivo, 680, `clamp(3.2rem, 4.5vw, 4.3rem)`, line-height 1, stretch 112%, tabular numerals): the hero "15+" figure and big fact values (1.45rem variant for the 2007/2015/15+ facts). Numbers only.
- **Title** (Archivo, 660, 1.25–1.7rem, stretch 114%, slight +0.015em tracking, uppercase for panel names and why-terms): sector panel names, why-row terms. Uppercase only where the layout is document-like.
- **Lede** (Archivo, 400, `clamp(1.05rem, 1.4vw, 1.2rem)`, line-height 1.65, max-width 58ch): section intros; slate ink on paper, frost on navy.
- **Body** (Archivo, 400, 1.0625rem ≈ 17px, line-height 1.65): descriptions and paragraphs; line length capped at 44–60ch in context.
- **Label/Mono** (Spline Sans Mono, 500–600, 0.66–0.85rem, letter-spacing 0.14–0.22em, uppercase, tabular numerals): nav links (Archivo 620/108% stretch variant instead), folio codes, board column head, readout rows, status rail, contact keys, fact keys, footer bottom line. Every micro-text on the page is mono-tracked-uppercase.

### Named Rules

**The Tabular Data Rule.** Any numeral that aligns, counts, or sits in a cell gets `font-variant-numeric: tabular-nums` (`.num`), usually in Spline Sans Mono or the readout style. Prose numbers stay in Archivo.

**The Two-Voice Rule.** Archivo expanded caps = the firm speaking; Spline Sans Mono tracked caps = the instrument reading. Never mix: mono is never used for sentences, Archivo display is never used for labels.

## Layout

Single continuous-scroll page, max content width **1180px** (`--maxw`) with fluid gutters `clamp(1.25rem, 4vw, 2.5rem)` (`.wrap`). Fixed nav height **76px** (`--nav-h`); smooth scrolling with `scroll-padding-top: calc(var(--nav-h) + 12px)` so anchors never hide under the bar.

Section rhythm is one token: `--pad-section: clamp(5.5rem, 9vw, 8.5rem)` vertical padding per section (the two sections following photo panels override `padding-top: 0` so the paper/dark alternation stacks tightly). Section headers sit in `.sec-head` with `clamp(2.6rem, 5vw, 4.2rem)` bottom margin.

Grids are asymmetric and fixed-cell, echoing a control board:

- **Hero body:** `minmax(0,7fr) / minmax(0,4.5fr)` — headline left, bracket readout right, baseline-aligned to the bottom of the viewport (min-height 100svh); status rail runs beneath as a full-width hairline strip.
- **Sector grid:** 7fr/5fr photo panels; the construction panel is the larger "foco principal" cell.
- **Tender board:** fixed columns `110px / 1.1fr / 1.6fr / 44px` (folio · stage · coverage · lamp) with 1.2rem gaps, repeated identically in header and rows.
- **Why rows:** 4fr/8fr term-to-description ledger.
- **Nosotros:** 5.2fr photo / 6.8fr quote.
- **Contact rows:** `auto minmax(0,1fr) auto auto` (icon · text · action).
- **Footer:** 6fr/6fr.

Breakpoints (observed): **960px** hero collapses to one column (readout max 460px, rail tail hidden); **900px** sector grid and nosotros stack; **860px** board header hides and rows re-grid to `20px 1fr` with `grid-template-areas` (lamp column becomes a left rail, custody line moves to `left:12px`); **840px** nav links hide (logo + CTA only); **720px** why rows and footer stack; **680px** contact rows compact (action label hidden, icon-only arrow). Density is generous — this is an executive document, not a dashboard: rows breathe with 1.7rem+ vertical padding.

## Elevation & Depth

Flat by default; depth is photographic and atmospheric, not shadowed. Surfaces separate through hairline rules, tonal shifts between navy registers, and gradient veils over images (e.g. hero: two stacked linear gradients, `rgba(10,14,46,.62)→.34→.88` vertical plus a 100° lateral `rgba(14,22,67,.72)→.18`; sector panels: `rgba(16,22,59,.08)→rgba(10,14,46,.82)` bottom veil so white text always lands on dark). Glass is used exactly twice, and subtly: the hero readout (`backdrop-filter: blur(2px)`) and the founder card (`blur(3px)`) over photos.

### Shadow Vocabulary

- **Button lift** (`box-shadow: 0 6px 18px -6px rgba(5,8,26,.55)`): under the cyan primary button only; collapses to `0 2px 6px -3px` on `:active` as the button presses down.
- **Nav strip** (`box-shadow: 0 10px 30px -18px rgba(5,8,26,.35)`): appears only when the nav turns solid white on scroll — the paper strip lifting off the photo.

### Named Rules

**The Flat-Until-Action Rule.** Shadows exist only as responses: a button's lift, a nav's paper strip. Nothing is shadowed at rest, and no shadow ever sits under a container or card.

## Shapes

Near-square document geometry. Radii in use: **2px** (mono panel tags), **3px** (all buttons, nav CTA, contact icon wells), **4px** (photo panels, founder card, skip link), plus full-round only for instrument dots (status lamp 9px, status-rail dot 5px) and the 64px circular founder avatar. Scrollbar thumb 5px radius.

Structure is drawn, not filled: every container — board, readout, panels, contact list, footer — is outlined in a 1px translucent hairline (`--line-dark` on navy, `--line-light` on paper). The signature silhouette is the **corner bracket**: 22px L-shaped cyan brackets (2px stroke) on all four corners of the hero readout, and 14px brackets on two diagonal corners (top-left, bottom-right) of the tender board. On load, the readout brackets travel 6px outward. Rules are horizontal and full-bleed within the container; vertical structure comes only from the board's custody line and column grid.

## Components

### Navigation
Fixed full-width bar, 76px tall, transparent over the hero photo (white logo, white 82%-alpha links). On scroll past ~55% of the hero (or 420px), it turns `.solid`: white paper strip, dark logo swap, slate links, subtle drop shadow. Links: 0.8rem Archivo 620, stretch 108%, uppercase, +0.11em tracking, 1px bottom border that fills cyan (dark) / blue-600 (paper) on hover. Nav CTA: 1px cyan-outline pill-ish rectangle (3px), ice-cyan text; hover fills cyan with midnight text and 1px press-travel. Links hidden ≤840px; logo and CTA remain.

### Hero (readout cascade + status rail)
Full-viewport (100svh) photo hero: cable-stayed bridge, `object-fit: cover`, double navy veil, plus a faint 120px engineering grid (two repeating 1px gradients, masked vertically at the edges) over it. Bottom-anchored two-column body: display headline + single cyan WhatsApp CTA ("Hablemos", pressed-travel state) + mono micro-note left; **bracket readout** right. The readout: hairline box on translucent board-navy (`blur(2px)`), four cyan corner brackets that slide 6px outward on load; inside, the "15+" figure renders as fixed-width character cells (0.92ch wide, 2px cyan underline at 50% alpha) that flip in per character (`rotateX(-70deg)→0`, 0.55s, 120ms + 90ms stagger), a mono label "AÑOS DE TRAYECTORIA", a hairline rule, and three mono key-value rows (Desde 2007 · Constituida 2015 · Foco Construcción y salud). Beneath, the **status rail**: hairline-topped strip, mono uppercase `OFERTA · → · ADJUDICACIÓN · → · EJECUCIÓN` with 5px cyan dots, and a right-aligned tick + "Ciclo completo de garantías". Decorative; `aria-hidden`.

### Tender Board (licitaciones)
The signature component. Hairline-outlined board on `--navy-900` with two cyan corner brackets. Mono column header (hidden mobile), then fixed-grid rows: folio code (F-01…), stage name in mono 600 white split into per-character cells that cascade in when the row intersects (row base ×420ms + 70ms/char, `rotateX(-85deg)` flip), instrument name (Archivo 640 white) + description (frost 72%), and a **status lamp** — 9px dot, dormant at `rgba(141,204,245,.18)`, igniting full cyan with per-row delay (200/700/1200ms inline). A 1px **custody line** runs the full board height at the left of the stage column, drawn top-to-bottom (`scaleY(0)→1`, 1.4s, 0.2s delay) as the rows enter — the continuous custody of the guarantee across all three stages. Footer strip: mono "Ciclo completo de la garantía / INMART · Seguimiento por etapa".

### Sector Panels (sectores)
Two photo panels (4px radius, hairline border, min-height 380px): full-bleed image, navy bottom veil, white content docked bottom (1.6rem padding). Panel name: Archivo 660, stretch 114%, uppercase; description 0.98rem at 85% white, ≤44ch. Hover: image scales to 1.025 over 0.8s. The construction panel carries a mono tag top-left ("FOCO PRINCIPAL": 0.66rem, tracked 0.18em, cyan-300 text on `rgba(10,14,46,.72)` chip, 2px radius). A full-width open row beneath: 1.15–1.45rem statement + arrow link ("Consultar") whose arrow translates 2px up-right on hover.

### Why Rows (por qué)
Ledger list under a full-width top rule: each row is a 4fr/8fr baseline grid — term (Archivo 660 stretch 114% uppercase, anchor navy) over description (slate ink, ≤60ch, with ink-strong `<strong>` lead phrases). Hairline bottom rules; hover washes the row `--paper-2`. Reveal-staggered 80ms per row.

### Founder Card (nosotros)
Left cell: executive-meeting photo, 4px radius, hairline border, navy veil; docked at bottom, the **founder card** — translucent midnight strip (`rgba(10,14,46,.78)`, `blur(3px)`, hairline border, 4px radius) holding a 64px circular avatar (2px cyan ring, navy-800 fill) + name (Archivo 660 white) + role (mono 0.7rem tracked uppercase, cyan-300: "FUNDADOR · GERENTE GENERAL"). The avatar is a **slot with monogram fallback**: it renders "LEI" in ice cyan; `assets/gerente.jpg` loads with an `onerror`-equivalent JS listener — if the file is missing the `<img>` removes itself and the monogram stays; if it loads, `.has-photo` swaps monogram for photo. Replacing the photo is a one-file edit. Right cell: giant Georgia quote mark (3.2rem, blue-600 on paper / cyan-300 on dark), 1.25–1.55rem blockquote (≤34ch), mono attribution with a 42px rule, and three tabular fact values (2007 / 2015 / 15+) with mono micro-keys.

### Contact Rows (contacto)
White hairline-outlined panel of full-width link rows (`auto 1fr auto auto` grid): 44px icon well (3px radius, hairline border, executive-blue stroke icon), mono micro-key ("WHATSAPP — RESPUESTA RÁPIDA") over the value (1.1–1.35rem, Archivo 640, ink), and an arrow-link action. The WhatsApp row is `.primary`: its icon well is solid anchor-navy with a cyan icon. Rows hover-wash `--paper-2`; values use tabular numerals. Three rows: WhatsApp (wa.me/573103082226), mailto, tel. No forms anywhere — the section lede says so.

### CTA Band (hablemos)
Dark band capped by a horizontal **custody line**: 1px cyan gradient (`90deg, cyan → 15% alpha`) that draws left-to-right (`scaleX(0)→1`, 1.2s) when the band enters — the board's custody line resolved horizontal. Centered final display headline (up to 3.4rem, ≤22ch, verbatim brand line) + one cyan button ("Iniciar conversación" with arrow icon).

### Buttons
- **Shape:** near-square (3px radius), inline-flex with 0.65rem icon gap; 19px icons.
- **Primary (cyan):** signal-cyan fill, midnight-ground text, 640 weight 1.02rem, `0.95rem 1.7rem` padding, button-lift shadow. Hover: ice-cyan. Active: 2px press-travel (`translateY(2px)`) with shadow collapsed.
- **Ghost:** transparent midnight fill (25% alpha), 1px dark hairline, white text; hover turns border+text ice-cyan; active presses 2px. Used on-photo.
- **Navy:** anchor-navy fill, white text; hover shifts to executive-blue; active presses 2px.
- **Nav CTA:** see Navigation. All button transitions run 0.16s on `--ease`.

### Footer
Midnight ground, hairline top rule: white logo, legal name (Archivo 640 0.95rem), mono tracked tag line (frost-cyan 55%); right column of link list (white-78%, hover ice-cyan, 4px underline offset). Bottom strip above a soft hairline: mono 0.68rem copyright with JS-injected year and "COLOMBIA". No NIT, no address — none exists.

### Reveal & Cascade System (interaction layer)
Progressive enhancement gated on an `js` class on `<html>`; everything works without JS. `.pre` elements start `opacity: 0; translateY(26px)` and resolve over 0.8s (`--ease`) with per-element `--d` delays (60–320ms typical) when an IntersectionObserver (threshold 0.18, rootMargin −8% bottom) fires once. Three observers drive the set pieces: board rows (add `.in` → custody draw + lamp ignition), board rows at threshold 0.4 (per-character stage cascade), and the CTA band (horizontal custody draw). Readout brackets fire on `window.load`. Under `prefers-reduced-motion: reduce`: smooth scroll off, all reveals render final state, cascades/lamps/brackets/custody render static, and a global `transition/animation-duration: .01ms` kill-switch catches the rest. The JS also sets `role="img"` + `aria-label` on every cascaded readout and swaps the split characters to `aria-hidden` spans so screen readers hear "15+" and "OFERTA", not spelling drills.

## Do's and Don'ts

### Do:

- **Do** keep cyan (`#37A9E7`) for live states and actions only — buttons, lamps, brackets, focus, drawn lines (The Live-Ink Rule).
- **Do** use the hairline tokens for all borders and dividers: `rgba(141,204,245,.18)`/`.10` on navy, `rgba(16,26,78,.14)`/`.07` on paper (The Hairline Rule).
- **Do** set display type in Archivo at stretch 112–118% with tight −0.018em tracking, and every label/folio/readout in Spline Sans Mono uppercase at +0.14–0.22em tracking.
- **Do** apply `font-variant-numeric: tabular-nums` to any aligned or counting numeral.
- **Do** frame photography with navy gradient veils (bottom-heavy, e.g. `rgba(16,22,59,.08)→rgba(10,14,46,.82)`) and corner brackets; keep subjects to civil works, infrastructure, engineering, executive meetings.
- **Do** keep the founder avatar as a slot: `assets/gerente.jpg` with the "LEI" monogram fallback intact, so a missing file degrades silently.
- **Do** keep all motion behind the reveal system and fully neutralized under `prefers-reduced-motion: reduce`; keep cascades screen-reader-safe (`role="img"` + `aria-label`).
- **Do** preserve WCAG-conscious contrast pairs as built: ink-900 on paper, white/frost on navy, midnight-ground on cyan.

### Don't:

- **Don't** add drop shadows to containers, cards, or rows at rest — the only shadows in the system are the button lift and the solid-nav strip (The Flat-Until-Action Rule).
- **Don't** round corners beyond 4px (except the avatar/lamp circles) or reach for `--navy-850`; it is declared but unused reserve.
- **Don't** introduce a second accent, gradient buttons, or filled chips — the palette is two registers plus one signal voice.
- **Don't** use mono type for sentences or Archivo display for labels (The Two-Voice Rule).
- **Don't** stage insurance clichés (families, cars, smiling-at-camera people) or present stock photography as INMART's own works — the firm advises; it does not build.
- **Don't** invent footer data: no NIT, no address, no testimonials, no client logos, no prices — none exist.
- **Don't** let the nav CTA, hero CTA, or contact targets point anywhere but the confirmed channels: wa.me/573103082226, inmartseguros@gmail.com, tel:+573103082226.
