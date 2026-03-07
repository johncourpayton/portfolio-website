<template>
  <div id="app-wrapper">
    <!-- Persistent Navigation Bar -->
    <header class="navbar glass-panel">
      <div class="nav-content">
        <div class="logo">
          <router-link to="/">
            <span><span class="cpp-keyword">void</span> Paytons_Portfolio_Website(</span>
          </router-link>
        </div>
        <nav class="nav-links">
          <router-link to="/" class="nav-item">About</router-link><span class="param-comma">,</span>
          <router-link to="/portfolio" class="nav-item">Portfolio</router-link><span class="param-comma">,</span>
          <router-link to="/links" class="nav-item">Links</router-link>
        </nav>
        <div class="logo-end">
          <span>)</span>
        </div>
      </div>
    </header>

    <!-- Page Content with Transitions -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <!-- Removed Ambient Glows for IDE aesthetic -->
  </div>
</template>

<script setup>
</script>

<style scoped>
#app-wrapper {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: none;
  z-index: 100;
  border-radius: 0;
  border-bottom: none; /* Removed border to blend into background */
  padding: 1.5rem 2rem; /* Increased padding for more breathing room */
  background: var(--bg-color); /* Matches pure black background */
}

.nav-content {
  display: flex;
  justify-content: center; /* Center the function call */
  align-items: center;
  gap: 0.5rem; /* Small gap between parameters */
  flex-wrap: wrap;
}

.logo a, .logo-end span {
  font-size: 1.15rem; /* Matched to Connect header */
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 0px;
  color: var(--accent-function); /* Yellow for function name */
}

.cpp-keyword {
  color: var(--accent-keyword); /* Blue for void */
  font-weight: 500;
}

.nav-links {
  display: flex;
  gap: 0.25rem; /* Gap for commas and params */
  align-items: center;
}

.param-comma {
  color: var(--text-muted);
  font-weight: 800;
  font-size: 1.15rem;
  margin-right: 0.5rem;
}

.nav-item {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.15rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid transparent; /* No border normally */
  border-radius: 4px;
  background: transparent;
  transition: all 0.2s ease;
}

.nav-item:hover,
.nav-item.router-link-exact-active {
  color: var(--text-active);
  border-color: var(--surface-border);
  background: rgba(255, 255, 255, 0.05); /* Slight highlight */
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  padding-top: 60px; /* Offset for the fixed full-width navbar */
}

@media (max-width: 600px) {
  .navbar {
    padding: 0.75rem 1rem;
  }
}
</style>
