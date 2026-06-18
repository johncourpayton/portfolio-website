<template>
  <div>
    <header>
      <div class="header-top">
        <h1><a href="#" @click.prevent="currentView = 'home'" class="no-underline">Payton Johncour</a></h1>
        <div class="header-links">
          <a href="/resume.pdf" target="_blank">resume.pdf</a> | 
          <a href="https://github.com/johncourpayton" target="_blank">github</a> | 
          <a href="https://www.linkedin.com/in/payton-johncour-2b403136b" target="_blank">linkedin</a> | 
          <a href="mailto:johncourpayton.2025@gmail.com">email</a>
        </div>
      </div>
      <p>Computer Engineering Student @ Orange Coast College</p>
    </header>

    <!-- Home View -->
    <div v-if="currentView === 'home'">
      <section>
        <h2>Projects</h2>
        <div class="project">
          <span class="project-title">Micromouse Autonomous Robotics</span>
          <p>To prepare student teams for autonomous robotics competitions, I founded the Micro Mouse club at Orange Coast College. I am currently building and programming a fully autonomous micromouse system while facilitating weekly technical workshops on microcontroller programming, sensor integration, and maze-solving algorithms for over 20 active members. <a href="https://occmicromouse.space/" target="_blank">[Club Website]</a> <a href="#" @click.prevent="currentView = 'micromouse'">[more]</a></p>
        </div>
        <div class="project">
          <span class="project-title">Artificial Bin-telligence (Autonomous Waste Sorting System)</span>
          <p>To eliminate manual waste sorting, I engineered an autonomous device that automatically classifies and physically separates trash, compost, and recycling into distinct compartments. The system operates on a highly synchronized, event-based control loop powered by a Raspberry Pi and Arduino serial pipeline. By deploying an optimized YOLOv11 computer vision model directly onto a Sony IMX500 sensor, the device successfully identifies and routes waste with an 80% classification accuracy using a coordinated system of ultrasonic sensors, stepper motors, and servo motors. <a href="#" @click.prevent="currentView = 'bin-telligence'">[more]</a></p>
        </div>
        <div class="project">
          <span class="project-title">Math Solver</span>
          <p>To help students intuitively understand complex math concepts, I built a full-stack edu-tech web application that provides step-by-step solutions for problems ranging from basic arithmetic to linear algebra and calculus. By using Pix2Text OCR to extract mathematical equations from uploaded images and passing that text to the Google Gen AI API to generate solution steps, the Python-based application successfully breaks down complex problems into accessible, guided walkthroughs. <a href="https://github.com/johncourpayton/MathSolver" target="_blank">[Code]</a></p>
        </div>
      </section>

      <section>
        <h2>Skills &amp; Tools</h2>
        <ul>
          <li><strong>Languages &amp; Coursework:</strong> C++, C, Python, Data Structures, Discrete Structures</li>
          <li><strong>Frameworks &amp; AI:</strong> OpenCV, TensorFlow, PyTorch, ROS 2</li>
          <li><strong>Hardware:</strong> NVIDIA Jetson Orin Nano, STM32, Raspberry Pi, Arduino</li>
          <li><strong>Tools:</strong> VSCode, ArduinoIDE, STM32Cube, Fusion360, SolidWorks, Shaper3D, GitHub</li>
        </ul>
      </section>
    </div>

    <!-- Bin-telligence Detail View -->
    <div v-else-if="currentView === 'bin-telligence'">
      <section>
        <h2>Artificial Bin-telligence</h2>
        <p><a href="#" @click.prevent="currentView = 'home'">[back to projects]</a></p>
        <p>Inside look into the team and our prototyping and building process</p>
        
        <img src="/IMG_5362.jpeg" alt="Hardware Setup / Sony IMX500" class="project-image" />
        <p class="image-caption">Team picture at Giles T. Brown Research Symposium Presentation</p>
        
        <img src="/IMG_5310.jpeg" alt="The Sorting Mechanism" class="project-image" />
        <p class="image-caption">Spaghetti prototyping during testing</p>
      </section>
    </div>

    <!-- Math Solver Detail View -->
    <div v-else-if="currentView === 'math-solver'">
      <section>
        <h2>Math Solver</h2>
        <p><a href="#" @click.prevent="currentView = 'home'">[back to projects]</a></p>
        <p>An inside look at the OCR and Google Gen AI pipeline that powers the step-by-step math solver.</p>
        
        <div class="image-placeholder">[Image 1 Placeholder: App Interface / OCR Scan]</div>
        <div class="image-placeholder">[Image 2 Placeholder: Step-by-Step Breakdown]</div>
      </section>
    </div>

    <!-- Micromouse Detail View -->
    <div v-else-if="currentView === 'micromouse'">
      <section>
        <h2>Micromouse Autonomous Robotics</h2>
        <p><a href="#" @click.prevent="currentView = 'home'">[back to projects]</a> | <a href="https://occmicromouse.space/" target="_blank">[club website]</a></p>
        <p>An inside look at the hardware build and maze-solving algorithms powering the autonomous micromouse.</p>
        
        <img src="/micromouse.jpg" alt="Micromouse Hardware" class="project-image" />
        <p class="image-caption">Component layout and design process</p>
        
        <img src="/IMG_0412.jpeg" alt="Maze Solving Algorithm Testing" class="project-image" />
        <p class="image-caption">Soldering components to prototype board for testing</p>
      </section>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const currentView = ref('home')
</script>

<style scoped>
</style>
