<template>
  <!-- Keep ID for navigation -->
  <section
    id="collaborations"
    class="flex flex-col gap-8"
    aria-label="Collaborations Section"
  >
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl sm:text-3xl font-semibold">Collaborations</h2>
      <p class="text-base sm:text-lg text-gray-600">
        I believe that the best innovations come from collaboration. Working
        with others not only enhances project outcomes but also provides
        valuable opportunities for learning and growth. I'm always open to
        collaborative projects that challenge me and push the boundaries of what
        we can create together.
      </p>
    </div>

    <!-- Why I Value Collaboration Card -->
    <div id="collaborationCard" class="bg-white rounded-lg px-4">
      <div>
        <article class="flex flex-col gap-2 border-l-4 border-emerald-600 pl-4">
          <h3 class="text-xl font-bold text-emerald-600">
            Why I Value Collaboration
          </h3>
          <p class="text-base sm:text-lg text-gray-600">
            Collaboration brings diverse perspectives and skill sets together,
            resulting in more innovative and comprehensive solutions. Through
            collaboration, I've found that projects become more robust,
            creative, and user-focused. It's also an incredible opportunity to
            learn new approaches and technologies from fellow developers and
            designers.
          </p>
          <p class="text-base sm:text-lg text-gray-600">
            If you have a project idea or are looking for a developer to join
            your team, I'd love to hear about it. Together, we can turn concepts
            into reality while learning from each other along the way.
          </p>
        </article>
      </div>
    </div>

    <!-- Collaboration Cards Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="collab in collaborations"
        :key="collab.id"
        class="border border-gray-200 rounded-xl p-4 sm:p-6 hover:border-emerald-600 transition-colors flex flex-col gap-3 sm:gap-4"
      >
        <!-- Add lazy loading for images -->
        <img
          :src="collab.img"
          :alt="collab.title"
          class="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
          loading="lazy"
        />
        <div>
          <h3 class="text-lg sm:text-xl font-medium text-gray-800 mb-2 sm:mb-3">
            {{ collab.title }}
          </h3>
          <div class="text-gray-500 text-xs sm:text-sm mb-2">
            {{ collab.date }}
          </div>
          <p class="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
            {{ collab.description }}
          </p>
          <div class="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
            <div
              class="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-full flex items-center justify-center"
            >
              <span class="text-emerald-600 font-bold text-sm sm:text-base">{{
                collab.partner.initials
              }}</span>
            </div>
            <div>
              <p class="font-medium text-sm sm:text-base">
                {{ collab.partner.name }}
              </p>
              <p class="text-gray-500 text-xs sm:text-sm">
                {{ collab.partner.role }}
              </p>
            </div>
          </div>
          <div class="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
            <span
              v-for="tech in collab.technologies"
              :key="tech"
              class="bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mt-1 sm:mt-2">
          <!-- Conditional Demo Button/Link -->
          <button
            v-if="collab.demo === 'Not Open Source'"
            @click="handleNotOpenSourceClick(collab)"
            class="bg-emerald-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-xs sm:text-sm"
            :aria-label="`View Demo Information for Collaboration: ${collab.projectTitle}`"
          >
            View Demo
          </button>
          <a
            v-else
            :href="collab.demo"
            class="bg-emerald-600 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-xs sm:text-sm"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`View Live Demo for Collaboration: ${collab.projectTitle}`"
          >
            Live Demo
          </a>
          <button
            @click="handleDetailsClick(collab)"
            class="border border-emerald-600 text-emerald-600 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors text-xs sm:text-sm"
            :aria-label="`View Details for Collaboration: ${collab.projectTitle}`"
          >
            Details
          </button>
        </div>
      </div>
    </div>

    <!-- Open Opportunities Card -->
    <div
      class="open-opportunities border border-gray-200 rounded-xl p-6 hover:border-emerald-600 transition-colors"
    >
      <h3 class="text-xl font-medium text-gray-800 mb-3">
        Open to New Opportunities
      </h3>
      <p class="text-gray-600 mb-4">
        I'm actively seeking collaborative projects in web development,
        particularly those focused on:
      </p>
      <ul class="list-disc list-inside text-gray-600 space-y-2 mb-4">
        <li>Frontend Development</li>
        <li>Backend Development</li>
        <li>Full-stack Development</li>
      </ul>
      <!-- Use helper for smooth scroll -->
      <a
        href="#get-in-touch"
        @click.prevent="scrollToSection('#get-in-touch')"
        class="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors mt-4"
      >
        Let's Work Together
      </a>
    </div>
  </section>

  <!-- Add Modal Components Here -->
  <!-- Repurpose ProjectDetailsModal for Collaborations -->
  <ProjectDetailsModal
    :show="showDetailsModal"
    :project="selectedCollab"
    @close="closeDetailsModal"
  />

  <NotOpenSourceModal
    :show="showNotOpenSourceModal"
    :item="selectedCollab"
    itemType="collaboration"
    @close="closeNotOpenSourceModal"
  />
</template>

<script setup>
import { ref } from 'vue';
import { getCollaborations } from '../data/data.js'; // Import the data function

// Import modal components
import ProjectDetailsModal from './ProjectDetailsModal.vue';
import NotOpenSourceModal from './NotOpenSourceModal.vue';

// --- Get Data ---
const collaborations = getCollaborations(); // Use the imported function

// --- Modal State ---
const showDetailsModal = ref(false);
const showNotOpenSourceModal = ref(false);
const selectedCollab = ref(null); // Using a different name to avoid conflict if Projects also uses selectedProject

// --- Event Handlers ---
const handleDetailsClick = (collab) => {
  selectedCollab.value = collab;
  showDetailsModal.value = true;
};

const closeDetailsModal = () => {
  showDetailsModal.value = false;
  selectedCollab.value = null;
};

const handleNotOpenSourceClick = (collab) => {
  selectedCollab.value = collab;
  showNotOpenSourceModal.value = true;
};

const closeNotOpenSourceModal = () => {
  showNotOpenSourceModal.value = false;
  selectedCollab.value = null;
};

// --- Helper for scrolling (if needed within this component) ---
const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    const headerHeight =
      document.querySelector('.sticky.top-0')?.offsetHeight || 0;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
</script>

<style scoped>
/* Add component-specific styles here if needed. */
/* Tailwind classes handle most styling. */
img[loading='lazy'] {
  transition: opacity 0.3s ease-in-out;
}
img:not([src]) {
  opacity: 0;
}

a:focus,
button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--emerald-600, #059669);
}
</style>
