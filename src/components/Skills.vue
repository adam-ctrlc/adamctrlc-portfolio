<template>
  <!-- Keep ID for navigation -->
  <section
    id="technical-skills"
    class="flex flex-col gap-8"
    aria-label="Technical Skills Section"
  >
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl sm:text-3xl font-semibold">Technical Skills</h2>
      <p class="text-gray-600">
        My toolkit for building exceptional digital experiences. I continuously
        expand my knowledge to stay current with the latest technologies.
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-2">
      <!-- Render skill categories using imported data -->
      <div
        v-for="(skills, category) in technologies"
        :key="category"
        class="bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-600 transition-colors"
      >
        <div class="flex items-center gap-4 mb-5 pb-4 border-b border-gray-100">
          <div
            class="flex items-center justify-center w-10 h-10 bg-emerald-50 rounded-lg text-emerald-600"
          >
            <!-- Category Icon -->
            <component :is="getCategoryIcon(category)" :size="20" />
          </div>
          <h3 class="text-xl font-medium capitalize">{{ category }}</h3>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <!-- Render skills within category -->
          <div
            v-for="skill in skills"
            :key="skill"
            class="flex items-center gap-3 border border-gray-200 rounded-lg p-3 hover:border-emerald-600 hover:bg-emerald-50 transition-all duration-200"
          >
            <span class="flex-shrink-0 text-emerald-600 w-5 text-center">
              <!-- Skill Icon -->
              <component :is="getTechIcon(skill)" :size="16" />
            </span>
            <span class="text-gray-700 text-sm truncate">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'; // Use computed if needed, otherwise just call function
import { getSkills } from '../data/data.js'; // Import the data function

// --- Import required icons from lucide-vue-next ---
import {
  Code, // Default/Fallback
  Braces, // HTML/CSS like
  Wind, // Tailwind
  LayoutGrid, // Bootstrap
  Binary, // JS/TS?
  Database, // Databases
  Server, // Backend/Node/Express
  GitBranch, // Git
  Github, // Github
  TerminalSquare, // VS Code?
  Atom, // React
  AppWindow, // Vue
  Box, // Next.js
  Type, // jQuery?
  DatabaseZap, // PHP/SQL?
} from 'lucide-vue-next';

// --- Get Data ---
// Directly use the imported data. No need for ref() if data is static.
const technologies = getSkills();

// --- Icon Mappings (using imported Lucide components) ---
const categoryIconMap = {
  frontend: Atom, // React icon for Frontend
  backend: Server, // Server icon for Backend
  databases: Database, // Database icon
  tools: GitBranch, // Git icon for Tools
};

const techIconMap = {
  html5: Braces,
  css3: Braces,
  'tailwind css': Wind,
  bootstrap: LayoutGrid,
  javascript: Binary,
  typescript: Binary,
  jquery: Type,
  react: Atom,
  'vue.js': AppWindow,
  'next.js': Box,
  'node.js': Server,
  express: Server,
  php: DatabaseZap, // Reusing PHP/SQL icon
  mysql: DatabaseZap,
  sqlite: DatabaseZap,
  postgresql: DatabaseZap,
  git: GitBranch,
  github: Github,
  'visual studio code': TerminalSquare,
};

const defaultIcon = Code; // Fallback icon

// --- Helper Functions ---
const getCategoryIcon = (category) => {
  return categoryIconMap[category.toLowerCase()] || defaultIcon;
};

const getTechIcon = (tech) => {
  const normalizedTech = tech.toLowerCase().trim();
  return techIconMap[normalizedTech] || defaultIcon;
};
</script>

<style scoped>
/* Tailwind classes handle most styling. */
.capitalize {
  text-transform: capitalize;
}
</style>
