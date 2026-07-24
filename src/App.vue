<script setup>
const links = [
  { label: 'resume', href: '/resume.pdf' },
  { label: 'github', href: 'https://github.com/johncourpayton' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/payton-johncour-2b403136b' },
  { label: 'email', href: 'mailto:johncourpayton.2025@gmail.com' },
]

const projects = [
  {
    title: 'Bintelligence',
    subtitle: 'Autonomous waste-sorting system',
    meta: 'Fall 2025 \u2013 Spring 2026 \u00b7 Team Lead',
    description:
      "Designed, built, and tested a fully autonomous waste-sorting device that classifies trash, compost, and recycling with 80% accuracy, removing the need for manual sorting downstream. I trained a YOLOv11 model in PyTorch on our own environment-specific datasets for real-time classification, then optimized it for edge deployment on a Sony IMX500 sensor to cut inference latency and take the load off the host CPU. On the hardware side, I selected and wired the sensor and actuator stack and set up UART/USB serial communication between an Arduino motor controller and a Raspberry Pi host, so classification results trigger sorting actuation in real time through an event-based control loop written in C++.",
    link: { label: 'website', href: 'https://bintelligence-front-end.vercel.app/' },
    image: { src: '/bintelligence-symposium.jpg', alt: 'Payton and teammates presenting Bin-telligence', caption: 'Presenting at the Giles T. Brown Research Symposium' },
  },
  {
    title: 'OC Robotics Rover',
    subtitle: 'Embedded software',
    meta: 'Fall 2025 \u2013 Present \u00b7 Embedded Software Developer',
    description:
      "Implemented an iterative acceleration-ramping algorithm in C++ that incrementally steps motor velocity setpoints toward a target speed, replacing abrupt on/off control and eliminating mechanical stress on the drivetrain's joints. I manage the shared codebase with the team through GitHub, using issue tracking to identify, assign, and resolve bugs together.",
    link: null,
    image: null,
  },
  {
    title: 'Micromouse Autonomous Robotics',
    subtitle: 'Micro Mouse @ OCC',
    meta: 'Jan 2026 \u2013 Present \u00b7 Founder',
    description:
      "There wasn't a robotics club at OCC for students who wanted to build hands-on, so I started one \u2014 membership has grown to 20+ active students. I run the weekly workshops myself, covering microcontroller programming and sensor integration, and teaching maze-solving from basic wall-following up through Flood Fill. I integrated I2C-based time-of-flight sensors into the workshop robot builds for real-time wall detection, and I've been prototyping and hand-soldering PCBs for the club's robots while learning PCB design in KiCad, working toward a competition-ready board.",
    link: { label: 'club website', href: 'https://occmicromouse.space/' },
    image: { src: '/micromouse-hardware.jpg', alt: 'The micromouse hardware, mid-build', caption: 'The micromouse hardware, mid-build' },
  },
  {
    title: 'Math Solver',
    subtitle: 'AI-powered problem solving web app',
    meta: '2025 \u00b7 1st of 25 submissions',
    description:
      "A full-stack web app (Next.js, Python, Flask) that automates recognition and step-by-step solving of math and physics problems. Pix2Text extracts the equation from an image into LaTeX, and Google's Gemini API generates the solution \u2014 chaining OCR with LLM reasoning into a single pipeline that runs in under 60 seconds. Live-demoed to a judging panel and won 1st place out of 25 submissions, plus a $500 scholarship for Best Overall Project.",
    link: { label: 'code', href: 'https://github.com/johncourpayton/MathSolver' },
    image: null,
  },
]

const skills = [
  { label: 'Languages', value: 'C, C++, Python, Java, Bash' },
  { label: 'Frameworks & libraries', value: 'Next.js, React, Flask, PyTorch, OpenCV' },
  { label: 'Hardware & PCB', value: 'Microcontrollers, embedded systems, KiCad, I2C, UART, USB, additive manufacturing' },
  { label: 'CAD', value: 'Fusion 360, SolidWorks' },
  { label: 'Tools & platforms', value: 'Git/GitHub, VS Code, Unix/Linux, Vercel' },
]
</script>

<template>
  <div class="page">
    <header class="header">
      <h1>Payton Johncour</h1>
      <p class="header__role">Computer Engineering Student &middot; Irvine, CA</p>
      <p class="header__links">
        <template v-for="(link, i) in links" :key="link.href">
          <a :href="link.href" target="_blank" rel="noopener">{{ link.label }}</a>
          <span v-if="i < links.length - 1"> &middot; </span>
        </template>
      </p>
      <p class="header__bio">
        I design and build autonomous systems that live at the intersection
        of software and hardware &mdash; code that has to work, because a
        motor, sensor, or microcontroller is on the other end of it. I'm a
        transfer student at Orange Coast College working toward degrees in
        Computer Science, Mathematics, and Physics, on my way to UC Irvine
        for a B.S. in Computer Engineering.
      </p>
    </header>

    <section class="section">
      <h2>Projects</h2>
      <div class="projects">
        <article class="project" v-for="p in projects" :key="p.title">
          <div class="project__head">
            <div class="project__title-row">
              <h3>{{ p.title }}</h3>
              <a
                v-if="p.link"
                class="project__link"
                :href="p.link.href"
                target="_blank"
                rel="noopener"
              >{{ p.link.label }} &#8599;</a>
            </div>
            <p class="project__subtitle">{{ p.subtitle }}</p>
            <p class="project__meta">{{ p.meta }}</p>
          </div>
          <p class="project__description">{{ p.description }}</p>
          <figure v-if="p.image" class="project__figure">
            <img :src="p.image.src" :alt="p.image.alt" loading="lazy" />
          </figure>
        </article>
      </div>
    </section>

    <section class="section">
      <h2>Skills</h2>
      <dl class="skills">
        <div class="skills__row" v-for="s in skills" :key="s.label">
          <dt>{{ s.label }}</dt>
          <dd>{{ s.value }}</dd>
        </div>
      </dl>
    </section>

    <section class="section">
      <h2>Education</h2>
      <p class="education">
        University of California, Irvine &mdash; B.S. Computer Engineering (Transfer) &middot; Expected May 2029<br />
        Orange Coast College &mdash; A.S. Computer Science, Physics, Mathematics &middot; GPA 3.8 &middot; May 2027<br />
        Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming (C++), Engineering Circuits.
      </p>
    </section>
  </div>
</template>

<style scoped>
.page {
  max-width: var(--measure);
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 5.5rem) var(--edge) 5rem;
}

.header h1 {
  font-size: 1.9rem;
  letter-spacing: -0.01em;
}

.header__role {
  color: var(--ink-mid);
  margin-top: 0.4rem;
}

.header__links {
  margin-top: 0.9rem;
  font-size: 0.95rem;
}

.header__links span {
  color: var(--ink-faint);
}

.header__bio {
  margin-top: 1.6rem;
  max-width: 56ch;
  color: var(--ink);
}

.section {
  margin-top: 3.5rem;
}

.section h2 {
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
}

.projects {
  display: flex;
  flex-direction: column;
}

.project {
  padding: 1.6rem 0;
  border-top: 1px solid var(--rule);
}

.project:first-child {
  padding-top: 0;
  border-top: none;
}

.project__title-row {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.project__head h3 {
  font-size: 1.08rem;
}

.project__link {
  font-size: 0.85rem;
  color: var(--ink-mid);
  white-space: nowrap;
}

.project__link:hover,
.project__link:focus-visible {
  color: var(--ink);
}

.project__subtitle {
  color: var(--ink-mid);
  font-size: 0.92rem;
  margin-top: 0.2rem;
}

.project__meta {
  color: var(--ink-faint);
  font-size: 0.85rem;
  margin-top: 0.2rem;
}

.project__description {
  margin-top: 0.9rem;
  max-width: 62ch;
}

.project__figure {
  margin-top: 1.1rem;
  max-width: 420px;
}

.skills__row {
  display: grid;
  grid-template-columns: 11.5rem 1fr;
  gap: 1rem;
  padding: 0.55rem 0;
}

.skills__row dt {
  color: var(--ink-mid);
  font-size: 0.9rem;
}

.skills__row dd {
  margin: 0;
}

.education {
  max-width: 56ch;
}

@media (max-width: 520px) {
  .skills__row {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }
}
</style>
