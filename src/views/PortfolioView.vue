<template>
  <div class="page-container portfolio-container">
    <header class="portfolio-header">
      <h1 class="page-title"><span class="keyword">export default</span> <span class="variable">MyProjects</span></h1>
      <p class="page-subtitle code-comment">
        <span class="comment-line">// Here are a few of the things I've been working on recently, feel free to click around</span>
      </p>
    </header>

    <div class="projects-grid">
      <!-- Project Card 1 -->
      <article class="project-card glass-panel">
        <div class="project-content">
          <h3 class="project-title"><span class="function">Aritificial_Bin-telligence()</span> <span class="bracket">{</span></h3>
          <div class="project-description code-comment">
            <span class="comment-line">/* Edge-deployed CV model fitted to a tri-</span>
            <span class="comment-line"> * compartment trash bin for autonomous sorting. */</span>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">C++</span>
            <span class="tech-tag">Python</span>
            <span class="tech-tag">OpenCV</span>
            <span class="tech-tag">Arduino</span>
          </div>
          <div class="project-links">
            <button class="btn btn-outline small-btn" @click="showToast">View Code</button>
          </div>
        </div>
      </article>

      <!-- Project Card 2 -->
      <article class="project-card glass-panel">
        <div class="project-content">
          <h3 class="project-title"><span class="function">Math_Solver()</span> <span class="bracket">{</span></h3>
          <div class="project-description code-comment">
            <span class="comment-line">/* Full-stack web app that processes image inputs</span>
            <span class="comment-line"> * using OCR (Pix2Text) and Google Gen AI API for step-by-step math breakdowns. */</span>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">OCR</span>
            <span class="tech-tag">Google Gen AI</span>
          </div>
          <div class="project-links">
            <button class="btn btn-outline small-btn" @click="showToast">View Code</button>
          </div>
        </div>
      </article>

      <!-- Project Card 3 -->
      <article class="project-card glass-panel">
        <div class="project-content">
          <h3 class="project-title"><span class="function">Project3()</span> <span class="bracket">{</span></h3>
          <div class="project-description code-comment">
            <span class="comment-line">/* place ____ information here text</span>
            <span class="comment-line"> * for the rest */</span>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Tech 1</span>
            <span class="tech-tag">Tech 2</span>
            <span class="tech-tag">Tech 3</span>
          </div>
          <div class="project-links">
            <button class="btn btn-outline small-btn" @click="showToast">View Code</button>
          </div>
        </div>
      </article>
      
      <!-- Project Card 4 -->
      <article class="project-card glass-panel">
        <div class="project-content">
          <h3 class="project-title"><span class="function">Project4()</span> <span class="bracket">{</span></h3>
          <div class="project-description code-comment">
            <span class="comment-line">/* place ____ information here text</span>
            <span class="comment-line"> * for the rest */</span>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Tech 1</span>
            <span class="tech-tag">Tech 2</span>
          </div>
          <div class="project-links">
            <button class="btn btn-outline small-btn" @click="showToast">View Code</button>
          </div>
        </div>
      </article>

    </div>

    <!-- Coming Soon Toast -->
    <transition name="fade-toast">
      <div v-if="toastVisible" class="coming-soon-toast">
        <span class="toast-icon">🚧</span> Coming Soon
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const toastVisible = ref(false);
let toastTimer = null;

const showToast = () => {
  toastVisible.value = true;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastVisible.value = false;
  }, 2000);
};
</script>

<style scoped>
.portfolio-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 2.5rem;
  letter-spacing: -1px;
}

.page-subtitle {
  font-size: 1.15rem;
  margin-top: 1rem;
}

/* Syntax Highlighting */
.keyword { color: var(--accent-keyword); }
.variable { color: var(--accent-variable); }
.function { color: var(--accent-function); }
.bracket { color: var(--text-muted); /* Muted brackets */ }

.code-comment {
  color: var(--text-muted); /* Neutral grey for comments */
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
}

.comment-line {
  display: block;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease;
  position: relative;
}

.project-card:hover {
  border-color: var(--text-active); /* Flat white focus border */
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.project-title {
  font-size: 1.25rem;
  color: var(--text-active);
  margin-bottom: 0.5rem;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
  text-align: left;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  font-size: 0.9rem;
  padding: 0.2rem 0.4rem;
  background: transparent;
  color: var(--accent-string);
  font-weight: 500;
}

.tech-tag::before {
  content: '"';
}

.tech-tag::after {
  content: '",';
  color: var(--text-active);
}

.project-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: auto;
}

.small-btn {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  cursor: pointer;
}

.coming-soon-toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(20, 20, 20, 0.95);
  color: var(--text-active);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  z-index: 9999;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  pointer-events: none;
}

.fade-toast-enter-active,
.fade-toast-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-toast-enter-from,
.fade-toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
