<template>
  <!-- Keep ID for navigation -->
  <section
    id="get-in-touch"
    class="flex flex-col gap-8"
    aria-label="Get in Touch Section"
  >
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl sm:text-3xl font-semibold">Let's Connect!</h2>
      <p class="text-base sm:text-lg text-gray-600">
        I'm currently open to new opportunities and collaborations. Whether you
        have a project idea, a question, or just want to connect, I'd love to
        hear from you! Reach out through any of the channels below.
      </p>
    </div>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <!-- Dynamic Contact Cards -->
      <div
        v-for="method in contactMethods"
        :key="method.type"
        class="flex flex-col flex-1 items-center border border-gray-400 rounded-xl p-6 text-center hover:border-emerald-600 transition-colors justify-between"
      >
        <div>
          <div
            style="font-size: 2rem"
            class="text-emerald-600 mx-auto"
            v-html="method.icon"
          ></div>
        </div>
        <h3 class="text-lg font-medium mb-2">{{ method.title }}</h3>
        <p class="text-gray-600 mb-4">{{ method.description }}</p>
        <div class="relative inline-block group">
          <a
            :href="method.link"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors inline-block"
          >
            {{ method.buttonText }}
          </a>
          <div
            v-if="method.tooltip"
            class="absolute hidden group-hover:block sm:-top-10 md:-top-12 lg:-top-14 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white p-2 rounded-md text-sm whitespace-nowrap z-10"
          >
            {{ method.tooltip }}
            <div
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-8 border-x-transparent border-b-0 border-t-emerald-600"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const contactMethods = ref([
  {
    type: 'email',
    icon: '&#9993;',
    title: 'Shoot me an email at a2e56b85@gmail.com',
    description:
      "For project inquiries, collaboration ideas, or just a friendly hello, drop me an email. I'll do my best to get back to you within 24-48 hours.",
    link: 'mailto:a2e56b85@gmail.com',
    buttonText: 'Send Email',
    tooltip:
      'Having trouble accessing? Just shoot me an email at a2e56b85@gmail.com',
  },
  {
    type: 'facebook',
    icon: '&#128077;',
    title: 'Connect on Facebook',
    description:
      "For quicker chats or networking, find me on Facebook! Let's connect and talk about tech, web development, or anything else that comes to mind.",
    link: 'https://www.facebook.com/profile.php?id=100073189718801',
    buttonText: 'Facebook Profile',
    tooltip:
      "Hey there! To see my profile, you'll need to log in to Facebook first.",
  },
  {
    type: 'gcash',
    icon: '&#9749;',
    title: 'Buy me coffee via GCash',
    description:
      'Enjoying my work? Fuel my late-night coding and content creation by buying me a coffee through GCash! Your support adds that extra caffeine boost to keep the projects and helpful content coming.',
    link: 'https://www.gcash.com/',
    buttonText: 'Visit GCash',
    tooltip: null,
  },
]);
</script>

<style scoped>
/* Add component-specific styles here if needed. */
/* Tailwind classes handle most styling. */

/* Ensure tooltips work correctly (Tailwind group-hover handles visibility) */
.group:hover .group-hover\:block {
  display: block;
}

/* Add focus styles for accessibility if Tailwind doesn't provide adequate defaults */
a:focus,
button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--emerald-600, #059669); /* Adjust color if needed */
}
</style>
