<template>
  <!-- Keep ID for navigation -->
  <section
    id="about-me"
    class="flex flex-col gap-8"
    aria-label="About Me Section"
  >
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl sm:text-3xl font-semibold">About Me</h2>
      <p class="text-base sm:text-lg text-gray-600">
        As a student currently pursuing Computer Engineering, I am a passionate
        developer with a keen eye for detail and a love for creating
        user-friendly and efficient web applications.
      </p>
    </div>
    <!-- User Experience Focus Card -->
    <div id="uxFocusCard" class="bg-white rounded-lg px-4">
      <div>
        <article class="flex flex-col gap-2 border-l-4 border-emerald-600 pl-4">
          <h3 class="text-xl font-bold text-emerald-600">
            User Experience Focus
          </h3>
          <p class="text-base sm:text-lg text-gray-600">
            During development, I always prioritize user experience, striving to
            make it as seamless as possible. I consider users of all computer
            literacy levels, including those with minimal experience. For
            instance, if a user is not very tech-savvy, I ensure the website is
            intuitive, easy to understand, and effortless to navigate.
          </p>
          <p class="text-base sm:text-lg text-gray-600">
            As one of my instructors in computer engineering once said, always
            consider the people who will use the website, regardless of whether
            their skill level is beginner, intermediate, or advanced.
          </p>
        </article>
      </div>
    </div>
    <!-- A.D.A.M. Acronym Section -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
      <div class="flex items-start gap-4">
        <div
          class="min-w-10 sm:min-w-12 min-h-10 sm:min-h-12 bg-emerald-100 rounded-full flex items-center justify-center"
        >
          <span class="text-emerald-600 font-bold text-xl">A</span>
        </div>
        <div>
          <h3 class="text-lg sm:text-xl font-medium">Aspiring Fullstack</h3>
          <p class="text-gray-600 text-sm sm:text-base mt-1">
            Lifelong learner embracing challenges and growth opportunities. I
            enjoy learning and applying new technologies to projects.
          </p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <div
          class="min-w-10 sm:min-w-12 min-h-10 sm:min-h-12 bg-emerald-100 rounded-full flex items-center justify-center"
        >
          <span class="text-emerald-600 font-bold text-xl">D</span>
        </div>
        <div>
          <h3 class="text-lg sm:text-xl font-medium">Developer</h3>
          <p class="text-gray-600 text-sm sm:text-base mt-1">
            Dedicated to crafting pixel-perfect and accessible user experiences.
            Ensuring visually appealing, functional, and inclusive interfaces.
          </p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div
          class="min-w-10 sm:min-w-12 min-h-10 sm:min-h-12 bg-emerald-100 rounded-full flex items-center justify-center"
        >
          <span class="text-emerald-600 font-bold text-xl">A</span>
        </div>
        <div>
          <h3 class="text-lg sm:text-xl font-medium">Agile</h3>
          <p class="text-gray-600 text-sm sm:text-base mt-1">
            Thrives in dynamic environments, quickly adapting to evolving
            project needs. My agile approach ensures flexibility and
            responsiveness.
          </p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div
          class="min-w-10 sm:min-w-12 min-h-10 sm:min-h-12 bg-emerald-100 rounded-full flex items-center justify-center"
        >
          <span class="text-emerald-600 font-bold text-xl">M</span>
        </div>
        <div>
          <h3 class="text-lg sm:text-xl font-medium">
            Motivated, Disciplined, and Perseverant
          </h3>
          <p class="text-gray-600 text-sm sm:text-base mt-1">
            Driven by a passion for utilizing the latest tools and frameworks to
            develop innovative solutions, I am dedicated to remaining at the
            forefront of technology.
          </p>
        </div>
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
</style>
