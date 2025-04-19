<template>
  <!-- Keep ID for navigation -->
  <section
    id="recent-projects"
    class="flex flex-col gap-8"
    aria-label="Recent Projects Section"
  >
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl sm:text-3xl font-semibold">Recent Projects</h2>
      <p class="text-gray-600">
        I'm thrilled to showcase some of the projects I've built and enjoyed
        working on! Each project highlights the technologies I used to bring it
        to life. Please note that all displayed projects focus solely on the
        <code>frontend</code>. will be uploading backend projects soon.
      </p>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-2">
      <!-- Render Project Cards -->
      <div
        v-for="project in projects"
        :key="project.id"
        class="border border-gray-200 rounded-xl p-3 sm:p-4 hover:border-emerald-600 transition-colors grid grid-rows-[auto_1fr_auto] gap-3 sm:gap-4"
      >
        <!-- Row 1: Image -->
        <img
          :src="project.img"
          :alt="project.projectTitle"
          class="w-full h-48 object-cover rounded-lg"
          loading="lazy"
        />

        <!-- Row 2: Content -->
        <div class="flex flex-col gap-2 sm:gap-3">
          <h3 class="text-lg sm:text-xl font-medium text-gray-800 mb-1 sm:mb-2">
            {{ project.projectTitle }}
          </h3>
          <p
            class="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3 overflow-hidden line-clamp-3"
          >
            {{ project.briefDescription }}
          </p>
          <div class="overflow-hidden max-h-14">
            <div class="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
              <span
                v-for="tech in project.techUsed"
                :key="tech"
                class="bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Row 3: Buttons -->
        <div class="flex flex-col lg:flex-row sm:flex-wrap gap-2 mt-1 sm:mt-2">
          <!-- Conditional Demo Button/Link -->
          <button
            v-if="project.demo === 'Not Open Source'"
            @click="handleNotOpenSourceClick(project)"
            class="bg-emerald-600 text-white px-4 py-2 flex-1 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm"
            :aria-label="`View Demo Information for ${project.projectTitle}`"
          >
            View Demo
          </button>
          <a
            v-else
            :href="project.demo !== '#' ? project.demo : undefined"
            class="bg-emerald-600 text-center text-white px-4 py-2 flex-1 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm"
            :class="{
              'opacity-50 cursor-not-allowed pointer-events-none':
                project.demo === '#',
            }"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`View Live Demo for ${project.projectTitle}`"
            :aria-disabled="project.demo === '#'"
            @click="project.demo === '#' && $event.preventDefault()"
          >
            Live Demo
          </a>
          <button
            @click="handleDetailsClick(project)"
            class="border border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors text-sm flex-1"
            :aria-label="`View Details for ${project.projectTitle}`"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Add Modal Components Here -->
  <ProjectDetailsModal
    :show="showDetailsModal"
    :project="selectedProject"
    @close="closeDetailsModal"
  />

  <NotOpenSourceModal
    :show="showNotOpenSourceModal"
    :item="selectedProject"
    itemType="project"
    @close="closeNotOpenSourceModal"
  />
</template>

<script setup>
import { ref } from 'vue';
import { getProjects } from '../data/data.js'; // Import the data function

// Import modal components
import ProjectDetailsModal from './ProjectDetailsModal.vue';
import NotOpenSourceModal from './NotOpenSourceModal.vue';

// --- Get Data ---
const projects = getProjects(); // Use the imported function

// --- Modal State ---
const showDetailsModal = ref(false);
const showNotOpenSourceModal = ref(false);
const selectedProject = ref(null);

// --- Event Handlers ---
const handleDetailsClick = (project) => {
  selectedProject.value = project;
  showDetailsModal.value = true;
};

const closeDetailsModal = () => {
  showDetailsModal.value = false;
  selectedProject.value = null;
};

const handleNotOpenSourceClick = (project) => {
  selectedProject.value = project;
  showNotOpenSourceModal.value = true;
};

const closeNotOpenSourceModal = () => {
  showNotOpenSourceModal.value = false;
  selectedProject.value = null; // Clear selected project when closing
};

const seeMoreProjects = () => {
  // Placeholder: Implement logic to load more projects or navigate
  console.log('See More Projects clicked');
  // Example: alert('Functionality to load more projects is not yet implemented.');
};
</script>

<style scoped>
/* Add component-specific styles here if needed. */
/* Tailwind classes handle most styling. */
img[loading='lazy'] {
  /* Optional: Add a subtle transition for when the image loads */
  transition: opacity 0.3s ease-in-out;
}
img:not([src]) {
  /* Optional: Style for images before they load */
  opacity: 0;
}

/* Ensure buttons/links have good focus states */
a:focus,
button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--emerald-600, #059669); /* Adjust color if needed */
}
</style>
