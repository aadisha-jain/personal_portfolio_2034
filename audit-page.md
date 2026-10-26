# Webpage Audit

Review of the personal profile site (`index.html`, `style.css`, `script.js`), including the newly added Profile Picture and Educational Qualifications sections.

## Requirements checklist

| Requirement | Status | Notes |
| --- | --- | --- |
| HTML in `index.html` | Met | Single page with linked CSS and JavaScript. |
| Styling in `style.css` | Met | No `style` attributes in HTML. |
| No inline styles | Met | Presentation is handled only in the stylesheet. |
| Page title | Met | `<title>` is `Aadisha Jain \| Personal Profile`. |
| One main heading | Met | A single `<h1>` in the hero. |
| Profile picture section | Met | Circular framed photo in the hero, beside the name and tagline. |
| About section | Met | `#about` with introduction and contact email. |
| Educational qualifications | Met | `#education` timeline with degree, institution, duration, and achievements. |
| Skills section as a list | Met | `#skills` uses an unordered list. |
| Projects section with links | Met | `#projects` has three items with headings, descriptions, and links. |
| Responsive layout | Met | Hero stacks on small screens; education timeline and cards reflow; 640px breakpoint. |
| Placeholders marked PLACEHOLDER | Met | Profile image source and alt text, plus every education field and remaining project copy. |

## Newly added sections

### Profile Picture

- Placed in the hero (`.hero`) next to the main heading, not as a separate card.
- Markup: `.profile-picture` wrapping an `<img>` with `alt="PLACEHOLDER: Portrait of Aadisha Jain"`.
- Source is `PLACEHOLDER-profile.svg` (a labeled stand-in) until a real photo file is added.
- CSS: 180px circular crop (`border-radius: 50%`), inner surface border, accent ring, and shadow.
- On viewports at or below 640px the portrait shrinks to 140px and the hero centers.

### Educational Qualifications

- Section id `#education`, labeled by `Educational Qualifications`.
- Structured as an ordered timeline (`.education-timeline`) of three cards.
- Each card includes:
  - duration/year (`.education-year`)
  - degree or course name (`h3`)
  - institution (`.education-institution`)
  - key achievement or coursework (final paragraph)
- Primary nav includes an Education link to `#education`.
- All education values currently use the word PLACEHOLDER.

## Structure and accessibility

- Semantic landmarks remain: `header`, `nav`, `main`, `section`, and `footer`.
- New education section uses `aria-labelledby` on its `h2`.
- Profile image has descriptive alt text (still marked PLACEHOLDER).
- External project links still use `rel="noopener noreferrer"`.

## Visual design

- Layout is centered and capped at about 900px.
- Education cards sit on the page background color so they read as nested items on the section surface.
- A left-hand timeline line and accent dots mark each qualification.
- Color tokens in `:root` still switch when `body.dark` is applied.

## JavaScript behavior

- `#year` is filled with the current calendar year.
- `#theme-toggle` switches the `dark` class on `body` and updates the button label.
- Theme preference persists in `localStorage` under the key `theme`.

## Gaps and follow-up

- Replace `PLACEHOLDER-profile.svg` with a real portrait file (and update the alt text).
- Replace every education PLACEHOLDER with real degrees, schools, years, and achievements.
- Project titles, descriptions, and URLs are still PLACEHOLDER.
- The bundled SVG is a labeled stand-in so the circular frame still renders before a photo is added.

## How to find placeholders

Search the project for the word `PLACEHOLDER`. New matches live in:

- the profile image `src` and `alt`
- each education year, degree, institution, and achievement
- remaining project titles, descriptions, and hrefs
