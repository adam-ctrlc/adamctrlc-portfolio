<template>
  <div
    class="min-h-screen py-4 sm:py-8 px-4 mx-auto max-w-3xl sm:max-w-6xl flex flex-col gap-12"
    style="font-family: 'Geist', Arial, Helvetica, sans-serif"
  >
    <AppHeader />
    <main class="flex flex-col gap-12">
      <LandingSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup>
// Import all the section components
import AppHeader from './components/Header.vue';
import LandingSection from './components/Landing.vue';
import SkillsSection from './components/Skills.vue';
import ProjectsSection from './components/Projects.vue';
import AboutSection from './components/About.vue';
import ContactSection from './components/Contact.vue';

// You might want to add global setup here later, e.g., for smooth scroll polyfill or data fetching
</script>

<style>
/* Import global styles - adjust path if needed */
/* Assuming Tailwind is set up via main.js or a postcss config */
/* You might need to copy base styles or utility patterns from src1/style.css into src/style.css */

/* Example: Ensure smooth scrolling behavior is globally enabled */
html {
  scroll-behavior: smooth;
}

/* Basic body styling (some moved from body tag in original index.html) */
body {
  font-family: 'Geist', Arial, Helvetica, sans-serif; /* Applied to wrapper div instead */
  /* The py-4/px-4 etc are applied to the main wrapper div in the template */
  /* min-h-screen, flex, flex-col applied to wrapper */
  /* max-w applied to wrapper */
  background-color: #ffffff; /* Or your desired background */
  color: #374151; /* Default text color (Tailwind gray-700) */
}

/* If you are using Font Awesome via CDN, make sure the link is in your main public/index.html */
/* If using a Vue library for Font Awesome, ensure it's installed and configured. */
</style>
