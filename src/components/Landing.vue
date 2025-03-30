<template>
  <!-- Keep the ID for potential navigation -->
  <header
    id="header"
    class="flex flex-col items-center text-center gap-6"
    aria-label="Landing Section"
  >
    <div class="flex flex-col gap-4">
      <div>
        <p class="text-gray-500 text-sm uppercase tracking-widest mb-2">
          Heads up
        </p>
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight">
          John <span class="text-emerald-600">Adam</span>
        </h1>
      </div>
      <p class="text-lg sm:text-xl text-gray-600 max-w-2xl">
        Building digital experiences through
        <code class="bg-gray-100 px-1 rounded-md">code</code>. Focused on web
        development and user experience.
      </p>
    </div>
    <div class="flex flex-col sm:flex-row gap-4">
      <a
        href="https://www.facebook.com/profile.php?id=100073189718801"
        target="_blank"
        rel="noopener noreferrer"
        class="border-2 border-emerald-600 text-white bg-emerald-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-200 cursor-pointer"
      >
        Connect on Facebook
      </a>
      <!-- Let Header handle scrolling -->
      <a
        href="#recent-projects"
        @click.prevent="scrollToSection('#recent-projects')"
        class="border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-emerald-50 transition-colors duration-200 cursor-pointer"
      >
        Recent Projects
      </a>
    </div>
  </header>
</template>

<script setup>
// No specific script logic needed for this static component yet.
// Scrolling is handled by the Header component or globally.

// Helper function (could be imported from a utility file or defined in App.vue/Header)
const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    const headerHeight =
      document.querySelector('.sticky.top-0')?.offsetHeight || 0;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
</script>

<style scoped>
/* Add component-specific styles here if needed. */
/* Tailwind classes handle most styling. */
</style>
