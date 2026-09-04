---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief — index.html (one-page landing)

## Scope & mode

Single continuous-scroll page `index.html`, static. Mode: **Persuade** — the visitor decides and contacts. Language: Spanish (Colombian).

## Audience, job, action, proof

- Audience: gerentes y equipos de contratación de empresas constructoras y de salud en Colombia que licitan y necesitan pólizas de cumplimiento.
- Job: evaluar credibilidad en segundos (trayectoria + dominio técnico de licitaciones).
- Action: contacto directo — WhatsApp wa.me/573103082226 o correo inmartseguros@gmail.com.
- Proof: trayectoria verificable (actividad 2007, firma 2015), dominio del ciclo oferta→adjudicación→ejecución, acceso directo al gerente general. Sin testimonios, clientes, casos ni precios (no existen; no inventar).

## Constraints

- Azul oscuro + blanco; serio, elegante, sobrio, empresarial; jamás apariencia de aseguradora genérica.
- Texto mínimo; jerarquía + blanco; sans-serif elegante; microanimaciones sutiles.
- Fotografía: obras civiles/infraestructura/ingeniería/reuniones ejecutivas. Cero clichés de seguros.
- Sin NIT ni dirección (no existen); footer sin datos inventados.
- Foto del gerente: pendiente de subir por el usuario → slot con monograma "LEI" y `<img onerror>` fallback; se reemplaza editando un solo src.

## Direction (locked by user delegation)

**Tablero de Licitación** (assigned, seed 4ba19027, code-led). La página es la mesa de control del ciclo licitatorio seguido con precisión de instrumento. Memorable moment: el tablero de licitaciones — filas de celda fija con cascada por caracteres y línea de custodia continua que se dibuja al entrar.

## Direction contract

THESIS: The page is INMART's tender control board: the licitación lifecycle (oferta → adjudicación → ejecución) tracked with instrument precision. Refuses the generic insurer page (hero + benefit cards + form) and consulting-editorial defaults.

OWN-WORLD: Deep navy ground (#0B1030→#101A4E, anchor #1A1C63) running unbroken beneath dark sections; white data ink; cyan #37A9E7 reserved for live states and actions; fixed-cell grids with fine executive-document rules (folio codes, stamped badges); Archivo (expanded caps display, regular body) + Spline Sans Mono for segmented readouts; photography full-bleed under navy veil, framed by corner brackets.

STORY: In seconds the visitor sees a firm with 15+ formal years commanding tender guarantees; construction is home turf, health follows; reaching the gerente is one tap.

FIRST VIEWPORT: Full-bleed bridge/steel photo under navy veil + faint engineering grid; top nav (white logo over photo, white paper strip on scroll); left: display headline «Más de 15 años protegiendo grandes decisiones.» + single CTA «Hablemos» (WhatsApp, pressed-travel state); right: corner-bracket readout with segmented cascade «15+ AÑOS · DESDE 2007 · FIRMA CONSTITUIDA 2015»; bottom hairline status rail previewing OFERTA · ADJUDICACIÓN · EJECUCIÓN.

FORM: assigned direction of seed 4ba19027; build path code (no image generation this run).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved

- Foto del gerente (usuario la subirá; slot preparado).
- Reemplazo de fotografía stock por fotos reales si el usuario las aporta (URLs verificadas documentadas en DESIGN.md/README).
