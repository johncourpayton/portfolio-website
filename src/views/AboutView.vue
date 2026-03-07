<template>
  <div class="page-container ide-container">
    <div class="ide-window glass-panel outline-effect">
      <div class="ide-header">
        <div class="ide-dots">
          <span class="dot close"></span>
          <span class="dot minimize"></span>
          <span class="dot expand"></span>
        </div>
        <div class="ide-title">helloWorld.cpp</div>
        <div class="ide-actions">
          <button class="run-button" @click="handleRun">
            <svg viewBox="0 0 24 24" width="14" height="14" class="run-icon">
              <path fill="currentColor" d="M8 5v14l11-7z"/>
            </svg>
            Run Code
          </button>
        </div>
      </div>

      <div class="ide-content">
        <!-- Line Numbers -->
        <div class="line-numbers">
          <span v-for="n in lineCount" :key="n">{{ n }}</span>
        </div>

        <!-- Code Content -->
        <div class="code-editor">
          <pre contenteditable="true" spellcheck="false" @input="updateLineNumbers" ref="codeBlock"><code><span class="ascii-art">                        _   _              ___ _           
                       | | | | ___ _   _  |_ _( )_ __ ___  
                       | |_| |/ _ \ | | |  | ||/| '_ ` _ \ 
                       |  _  |  __/ |_| |  | |  | | | | | |
                       |_| |_|\___|\__, | |___| |_| |_| |_|
                                   |___/                   

  ____             _                    _       _                                
 |  _ \ __ _ _   _| |_ ___  _ __       | | ___ | |__  _ __   ___ ___  _   _ _ __ 
 | |_) / _` | | | | __/ _ \| '_ \   _  | |/ _ \| '_ \| '_ \ / __/ _ \| | | | '__|
 |  __/ (_| | |_| | || (_) | | | | | |_| | (_) | | | | | | | (_| (_) | |_| | |   
 |_|   \__,_|\__, |\__\___/|_| |_|  \___/ \___/|_| |_|_| |_|\___\___/ \__,_|_|   
             |___/                                                               </span>
<span class="comment"> </span>
<span class="comment">// I’m a Computer Science student passionate about the </span>
<span class="comment">// intersection of software and hardware. </span>
<span class="comment">// Currently, I’m developing several personal projects while </span>
<span class="comment">// finishing my studies at Orange Coast College. </span>
<span class="comment">// I plan to transfer to a local university soon to complete </span>
<span class="comment">// my B.S. in Computer Science and Engineering.</span>


<span class="keyword">#include</span> <span class="string">&lt;Languages / Software / Hardware&gt;</span>

<span class="keyword">void</span> <span class="function">myTechStack</span>()
<span class="operator">{</span>
    <span class="type">set</span>&lt;<span class="type highlight">myTechStack</span>&gt; <span class="operator">=</span> {<span class="variable popup">C++</span> , <span class="variable popup">Python</span>, <span class="variable popup">Java</span>, <span class="variable popup">Git/Github</span>, 
    <span class="variable popup">Microcontrollers</span>, <span class="variable popup">Node.js</span>, <span class="variable popup">Vue.js</span>, <span class="variable popup">OpenCV</span>, <span class="variable popup">PyTorch</span>,
    <span class="variable popup">AI Tools</span>, <span class="variable popup">Linux</span>, <span class="variable popup">Google Colab Notebooks</span> };
<span class="operator">}</span>

<span class="keyword">void</span> <span class="function">myTechnicalStrengths_and_Interests</span>()
<span class="operator">{</span>
    <span class="type">list</span>&lt;<span class="type highlight">Technical_Strengths</span>&gt; <span class="operator">=</span> { <span class="variable popup">Data Structures &amp; Algorithms</span>, 
    <span class="variable popup">Discrete Structures</span>, <span class="variable popup">Object Oriented Programming</span>, 
    <span class="variable popup">Computer Vision</span>, <span class="variable popup">Problem Solving</span> };

    <span class="type">list</span>&lt;<span class="type highlight">Interests</span>&gt; <span class="operator">=</span> { <span class="variable popup">Hackathons</span>, <span class="variable popup">Robotics</span>, <span class="variable popup">Snowboarding</span>,
    <span class="variable popup">Camping</span>, <span class="variable popup">Hiking</span>};<br>}

</code></pre>
        </div>
      </div>

      <!-- Terminal Slide Up (Teleported to body to escape local positioning contexts) -->
      <teleport to="body">
        <transition name="slide-up">
          <div v-if="isTerminalOpen" class="terminal-panel">
            <div class="terminal-header">
              <span>Terminal</span>
              <div class="terminal-actions">
                <button class="close-terminal" @click="isTerminalOpen = false">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
              </div>
            </div>
            <div class="terminal-content">
              <div class="log-line">➜  portfolio-website git:(main) ✗ ./run-code.sh</div>
              <div class="log-line success">✔ Code compiled successfully.</div>
              <div class="log-line output">
                <span class="prompt">&gt;</span> Initiating Payton_Johncour_Profile.exe...<br>
                <br>
                Hello, World! I am Payton.
              </div>
              <div class="log-cursor">_</div>
            </div>
          </div>
        </transition>
      </teleport>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const codeBlock = ref(null);
const lineCount = ref(31);
const isTerminalOpen = ref(false);

const handleRun = () => {
  isTerminalOpen.value = true;
};

const updateLineNumbers = () => {
  if (!codeBlock.value) return;
  const text = codeBlock.value.innerText;
  const newlines = text.split('\n').length;
  lineCount.value = Math.max(1, newlines);
};

onMounted(() => {
  nextTick(() => {
    updateLineNumbers();
  });
});
</script>

<style scoped>
.ide-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  position: relative;
}

.ide-window {
  width: 100%;
  max-width: 900px;
  background: var(--surface-color, #121212);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8), 0 0 40px rgba(97, 175, 239, 0.1);
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  position: relative;
  z-index: 10;
}

.ide-header {
  height: 40px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  position: relative;
}

.ide-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
}

.dot:hover {
  transform: scale(1.2);
  opacity: 0.8;
}

.dot.close { background: #ff5f56; }
.dot.minimize { background: #ffbd2e; }
.dot.expand { background: #27c93f; }

.ide-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-muted, #a1a1aa);
  font-size: 0.85rem;
  font-family: var(--font-family, sans-serif);
}

.ide-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.run-button {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-active, #ffffff);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-family: var(--font-family, sans-serif);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.run-button:hover {
  background: rgba(46, 160, 67, 0.15);
  border-color: rgba(46, 160, 67, 0.4);
  color: #4ade80;
}

.run-button:active {
  transform: scale(0.97);
}

.run-icon {
  fill: currentColor;
}

.outline-effect {
  border: 1px solid var(--surface-border, #27272a);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.02) inset, 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(198, 120, 221, 0.15);
}

.ide-content {
  display: flex;
  padding: 1rem 0;
  min-height: 400px;
  position: relative;
}

.line-numbers {
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  text-align: right;
  color: #4b4b4b;
  user-select: none;
  font-size: 0.95rem;
  line-height: 1.6;
  border-right: 1px solid rgba(255, 255, 255, 0.08); /* faint line */
  background: rgba(0, 0, 0, 0.2);
}

.line-numbers span {
  display: block;
}



.code-editor {
  flex: 1;
  padding-left: 1.5rem;
  overflow-x: auto;
  position: relative;
}

pre {
  margin: 0;
  white-space: pre;
  word-break: normal;
  outline: none; /* remove focus outline when typing */
  min-height: 100%;
  font-family: inherit;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-active, #ffffff);
}

code {
  font-family: inherit;
}

/* Base colors reflecting the current monochrome theme */
.ascii-art {
  color: #4ade80; /* Vibrant code green */
  font-weight: 800;
  display: block;
  line-height: 1.1;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(74, 222, 128, 0.4); /* Subtle ambient glow */
}

.comment {
  color: var(--text-muted, #a1a1aa);
  font-style: italic;
}

.keyword {
  color: var(--accent-keyword, #71717a);
  font-weight: 500;
  text-shadow: 0 0 2px rgba(113, 113, 122, 0.5);
}

.string {
  color: var(--accent-string, #d4d4d8);
}

.function {
  color: var(--accent-function, #fafafa);
  font-weight: 600;
  text-shadow: 0 0 8px rgba(250, 250, 250, 0.3);
}

.variable {
  color: var(--accent-variable, #a1a1aa);
}

.type {
  color: var(--accent-keyword, #71717a);
}

.highlight {
  color: var(--text-active, #ffffff);
  font-weight: 600;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
}

.operator {
  color: var(--text-muted, #a1a1aa);
}

/* Pill-style badge for tech/skill items */
.popup {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  padding: 0px 4px;
  border-radius: 4px;
  display: inline-block;
  margin: 1px 0;
  transition: all 0.2s ease;
}

.popup:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}



/* Terminal Styles */
.terminal-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 250px;
  background: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid var(--surface-border);
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

.terminal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.close-terminal {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 2px;
  transition: all 0.2s ease;
}

.close-terminal:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-active);
}

.terminal-content {
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.85rem;
  color: var(--text-active);
  line-height: 1.5;
}

.log-line {
  margin-bottom: 0.4rem;
}

.log-line.success {
  color: var(--accent-string); /* Green */
}

.log-line.output {
  color: var(--text-muted);
}

.prompt {
  color: var(--accent-keyword); /* Purple */
  font-weight: bold;
}

.log-cursor {
  display: inline-block;
  width: 8px;
  height: 1em;
  background: var(--text-active);
  animation: blink 1s step-end infinite;
  vertical-align: bottom;
  margin-top: 0.5rem;
}

/* Slide up animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 768px) {
  .ide-window {
    border-radius: 4px;
  }
  .line-numbers {
    padding: 0 0.5rem;
    font-size: 0.8rem;
  }
  .code-editor {
    padding-left: 0.5rem;
  }
  pre {
    font-size: 0.8rem;
  }
}
</style>
