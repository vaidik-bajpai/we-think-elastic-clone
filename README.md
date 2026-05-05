# ✦ We Think Elastic — Award Site Recreation

A highly animated, editorial-grade landing page recreation inspired by the visual storytelling language of the **[wethinkelastic](https://wethinkelastic.com/)** website.

This build was not approached as a mere static clone.

It was treated as an **engineering reverse-dissection of premium frontend motion systems** — fluid typography, cinematic spacing mathematics, horizontal scroll illusion, layered parallax media, synchronized hover microinteractions, and scroll-driven narrative sequencing.

Built entirely in **React**, this project became a focused experimentation lab where I pushed deep into **:contentReference[oaicite:1]{index=1}**, modern responsive layout logic, and high-fidelity interaction design.

---

## ✦ Objective

The goal was simple in statement but brutal in execution:

> Reproduce the feel of an Awwwards-grade French agency website —  
> not just its visuals, but its movement psychology.

That meant understanding and rebuilding:

- oversized editorial typography systems
- fluid `vw / min() / clamp()` spacing formulas
- horizontal fake-scroll conveyors
- media parallax inside clipped viewports
- cursor-reactive hover choreography
- staggered line reveals
- responsive optical rhythm
- luxury font pairing systems

Every section was reverse engineered from browser inspection, motion observation, and manual reconstruction.

---

## ✦ Tech Stack

- **React**
- **TypeScript**
- **Tailwind CSS**
- **:contentReference[oaicite:2]{index=2}**
- Custom local font loading with `@font-face`
- ScrollTrigger powered cinematic motion systems

---

## ✦ Core Engineering Highlights

---

### 1. Desktop-First Editorial Layout

This project is currently built as a desktop-first recreation of the original landing page.

The focus was on capturing the visual style, spacing, typography, and motion behavior of the reference website rather than making the layout fully responsive from the start.

Current layout work includes:

- large-scale editorial typography
- viewport-based spacing
- desktop composition matching
- scroll-driven visual sections
- animation-heavy page structure

Responsive refinements for tablet and mobile views are planned as a future improvement.

---

### 2. Advanced GSAP ScrollTrigger Systems

The page contains multiple synchronized scroll experiences:

#### ✦ Horizontal pinned conveyor sections

A vertically scrolling page simulates horizontal travel by pinning the viewport and translating oversized content tracks.

#### ✦ Opposite-direction image drift

Floating media assets are layered on top of moving text belts and animated against the parent scroll direction to create visual tension.

#### ✦ Scroll-scrubbed line reveals

Headline blocks reveal progressively with clipped masks and scrub-linked staggered timelines.

#### ✦ Asset-inside-card parallax

Project thumbnails animate internally while their outer frames remain visually stable.

---

### 3. Premium Hover Choreography

Hover interactions were not handled through CSS transitions alone.

Custom GSAP hover systems were built for:

* cursor-follow directional indicator
* underline sweep reveals
* card shrink / media growth contrast
* instant tween interruption on mouse leave
* transform-origin based kinetic accents

These microinteractions were designed to make static sections feel alive.

---

### 4. Typography Recreation & Custom Font Infrastructure

The original website’s typographic identity depends heavily on:

* grotesk sans headings
* refined serif accents
* medium Helvetica utility text

To reproduce this faithfully, custom local font pipelines were built using `@font-face`, including:

* Degular Display
* Ivy Presto Headline
* Helvetica Neue Medium

These were then wired into Tailwind theme tokens for reusable utility-driven application.

Special care was taken to mimic:

* optical font-size imbalance
* serif/sans contrast hierarchy
* tracking irregularities
* baseline rhythm

---

### 5. Reverse Engineered Motion Psychology

This project was less about “adding animations” and more about studying:

> why premium websites feel expensive.

Significant effort went into understanding:

* movement delay ratios
* scrub elasticity
* viewport trigger psychology
* parallax depth illusion
* line reveal timing
* oversized text composition

Every interaction was tuned through repeated iteration to avoid the rigid “developer-made animation” feel.

---

## ✦ What This Project Really Represents

This project is a strong indicator of my ability to:

* architect non-trivial frontend interactions
* reason deeply about motion systems
* reverse engineer complex UIs from production references
* combine mathematics + typography + animation into a cohesive visual experience
* use React as a serious visual engineering platform, not just a component library

---

## ✦ Lessons Learned

Through this build I gained a significantly deeper understanding of:

* GSAP internals
* ScrollTrigger container animation patterns
* fluid responsive layout mathematics
* premium typography handling
* transform layering
* motion synchronization in React
* practical frontend visual engineering

This was not simply a clone.

It became a **frontend motion laboratory**.

---

## ✦ Preview

> A cinematic React recreation of one of the web’s most polished agency landing experiences.

---

## ✦ Author

Built with equal parts obsession, browser inspection, and GreenSock timelines.
