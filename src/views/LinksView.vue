<template>
  <div class="page-container links-container">
    <div class="profile-header">
      <h1 class="profile-name"><span class="keyword">import</span> { <span class="variable">Connect</span> } <span class="keyword">from</span> <span class="string">'./socials'</span>;</h1>
      <p class="profile-bio code-comment"><span class="comment-line">// Here you can find all my professional and social links, including my GitHub repositories, LinkedIn profile, and my resume. Feel free to reach out!</span></p>
    </div>

    <div class="links-list">
      <a href="https://github.com/johncourpayton" target="_blank" class="link-item file-item">
        <div class="link-content">
          <span class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </span>
          <span class="link-title file-name">github.ts</span>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/paytonjohncour" target="_blank" class="link-item file-item">
        <div class="link-content">
          <span class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </span>
          <span class="link-title file-name">linkedin.ts</span>
        </div>
      </a>

      <a href="mailto:paytonjohncour.2025@gmail.com" class="link-item file-item">
        <div class="link-content">
          <span class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </span>
          <span class="link-title file-name">email_me.ts</span>
        </div>
      </a>

      <a href="/payton_johncour_resume.pdf" target="_blank" class="link-item file-item">
        <div class="link-content">
          <span class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </span>
          <span class="link-title file-name">resume.pdf</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.links-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 680px;
  min-height: 75vh;
}

.profile-header {
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}



.profile-name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-active);
}

.profile-bio {
  color: var(--text-muted);
  font-size: 1.1rem;
}

/* Syntax Highlighting */
.keyword { color: var(--accent-keyword); }
.variable { color: var(--accent-variable); }
.string { color: var(--accent-string); }

.code-comment {
  color: var(--text-muted); /* Neutral grey for comments */
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
}

.links-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.file-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
}

.file-item:hover {
  background: rgba(255, 255, 255, 0.08); /* Subtle highlight */
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.link-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  z-index: 1;
}

.link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted); /* Inherit grey icon color */
}

.file-item:hover .link-icon {
  color: var(--accent-variable);
}

.file-name {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-active);
}

/* Removing old highlight CSS */
</style>
