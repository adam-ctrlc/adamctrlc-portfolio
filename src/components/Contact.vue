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
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
      <!-- Email Card -->
      <div
        class="flex flex-col items-center border border-gray-400 rounded-xl p-6 text-center hover:border-emerald-600 transition-colors"
      >
        <div class="mb-4">
          <div class="w-8 h-8 text-emerald-600 mx-auto">
            <span style="font-size: 2rem">&#9993;</span>
            <!-- Mail icon -->
          </div>
        </div>
        <h3 class="text-lg font-medium mb-2">
          Shoot me an email at a2e56b85@gmail.com
        </h3>
        <p class="text-gray-600 mb-4">
          For project inquiries, collaboration ideas, or just a friendly hello,
          drop me an email. I'll do my best to get back to you within 24-48
          hours.
        </p>
        <div class="relative inline-block group">
          <a
            href="mailto:a2e56b85@gmail.com"
            class="bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors inline-block"
            rel="noopener noreferrer"
          >
            Send Email
          </a>
          <!-- Tooltip -->
          <div
            class="absolute hidden group-hover:block sm:-top-10 md:-top-12 lg:-top-14 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white p-2 rounded-md text-sm whitespace-nowrap z-10"
          >
            Having trouble accessing? Just shoot me an email at
            a2e56b85@gmail.com
            <div
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-8 border-x-transparent border-b-0 border-t-emerald-600"
            ></div>
            <!-- Tooltip arrow -->
          </div>
        </div>
      </div>
      <!-- Facebook Card -->
      <div
        class="flex flex-col items-center border border-gray-400 rounded-xl p-6 text-center hover:border-emerald-600 transition-colors"
      >
        <div class="mb-4">
          <div class="w-8 h-8 text-emerald-600 mx-auto">
            <span style="font-size: 2rem">&#128077;</span>
            <!-- Thumbs up icon -->
          </div>
        </div>
        <h3 class="text-lg font-medium mb-2">Connect on Facebook</h3>
        <p class="text-gray-600 mb-4">
          For quicker chats or networking, find me on Facebook! Let's connect
          and talk about tech, web development, or anything else that comes to
          mind.
        </p>
        <div class="relative inline-block group">
          <a
            href="https://www.facebook.com/profile.php?id=100073189718801"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors inline-block"
          >
            Facebook Profile
          </a>
          <!-- Tooltip -->
          <div
            class="absolute hidden group-hover:block sm:-top-10 md:-top-12 lg:-top-14 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white p-2 rounded-md text-sm whitespace-nowrap z-10"
          >
            Hey there! To see my profile, you'll need to log in to Facebook
            first.
            <div
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-8 border-x-transparent border-b-0 border-t-emerald-600"
            ></div>
            <!-- Tooltip arrow -->
          </div>
        </div>
      </div>
      <!-- Coffee/GCash Card -->
      <div
        class="flex flex-col items-center border border-gray-400 rounded-xl p-6 text-center hover:border-emerald-600 transition-colors"
      >
        <div class="mb-4">
          <div class="w-8 h-8 text-emerald-600 mx-auto">
            <span style="font-size: 2rem">&#9749;</span>
            <!-- Coffee icon -->
          </div>
        </div>
        <h3 class="text-lg font-medium mb-2">Buy me coffee via GCash</h3>
        <p class="text-gray-600 mb-4">
          Enjoying my work? Fuel my late-night coding and content creation by
          buying me a coffee through GCash! Your support adds that extra
          caffeine boost to keep the projects and helpful content coming.
        </p>
        <a
          href="https://www.gcash.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors inline-block"
        >
          Visit GCash
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No specific script logic needed for this static component.
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
