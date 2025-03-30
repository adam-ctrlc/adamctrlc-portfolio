<template>
  <!-- Close if clicking on the backdrop -->
  <div
    v-if="show"
    class="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4"
    @click.self="closeModal"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="dialogTitleId"
  >
    <div
      class="bg-white rounded-xl p-4 sm:p-6 md:p-8 max-w-[95%] sm:max-w-lg md:max-w-2xl w-full shadow-lg relative border border-gray-300 flex flex-col gap-4 sm:gap-6 mx-4"
    >
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-start justify-between">
        <div class="flex flex-col gap-1 sm:gap-2 pr-8 sm:pr-0">
          <h1
            :id="dialogTitleId"
            class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight"
          >
            Project Details
          </h1>
          <p class="text-gray-500 text-xs sm:text-sm">
            Learn more about this project.
          </p>
        </div>
        <button
          @click="closeModal"
          class="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-emerald-700 focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X :size="20" />
        </button>
      </div>

      <!-- Body (Scrollable) -->
      <div
        class="modal-body max-h-[70vh] overflow-y-auto pr-2 flex flex-col gap-4 sm:gap-6"
        v-if="project"
      >
        <div class="image-container w-full flex justify-center">
          <img
            :src="project.img"
            :alt="project.projectTitle"
            class="project-image w-full max-w-[400px] h-[200px] sm:h-[250px] object-cover rounded-lg bg-gray-100"
            loading="lazy"
          />
        </div>

        <div class="flex flex-col gap-2 sm:gap-3">
          <h2
            class="text-base sm:text-lg md:text-xl font-semibold text-gray-800"
          >
            {{ project.projectTitle }}
          </h2>
          <p
            class="project-description text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base"
          >
            {{ project.description }}
          </p>
        </div>

        <div
          class="flex flex-col gap-1 sm:gap-2"
          v-if="project.techUsed?.length"
        >
          <h3
            class="text-sm sm:text-base md:text-lg font-semibold text-gray-800"
          >
            Technologies Used
          </h3>
          <div class="flex flex-wrap gap-1 sm:gap-2">
            <span
              v-for="tech in project.techUsed"
              :key="tech"
              class="bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div
          class="flex flex-col gap-1 sm:gap-2"
          v-if="project.gallery?.length"
        >
          <h3
            class="text-sm sm:text-base md:text-lg font-semibold text-gray-800"
          >
            Gallery
          </h3>
          <div
            class="gallery-container grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"
          >
            <div
              v-for="(imageUrl, index) in project.gallery"
              :key="index"
              class="gallery-thumbnail cursor-pointer border-2 hover:border-emerald-600 transition-colors rounded-md overflow-hidden h-20 sm:h-24"
              :class="
                selectedGalleryIndex === index
                  ? 'border-emerald-600'
                  : 'border-transparent'
              "
              @click="viewFullImage(imageUrl, index)"
              @keydown.enter="viewFullImage(imageUrl, index)"
              @keydown.space="viewFullImage(imageUrl, index)"
              tabindex="0"
              role="button"
              :aria-label="`View image ${index + 1} of ${
                project.gallery.length
              } for ${project.projectTitle}`"
            >
              <img
                :src="imageUrl"
                :alt="`${project.projectTitle} gallery image ${index + 1}`"
                class="w-full h-full object-cover bg-gray-100"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-1 sm:gap-2">
          <h3
            class="text-sm sm:text-base md:text-lg font-semibold text-gray-800"
          >
            Links
          </h3>
          <div class="links-container flex flex-col gap-2 sm:flex-row sm:gap-6">
            <a
              v-if="project.demo && project.demo !== 'Not Open Source'"
              :href="project.demo !== '#' ? project.demo : undefined"
              target="_blank"
              rel="noopener noreferrer"
              class="text-emerald-600 hover:underline text-xs sm:text-sm md:text-base flex items-center"
              :class="{
                'opacity-50 cursor-not-allowed pointer-events-none':
                  project.demo === '#',
              }"
              :aria-disabled="project.demo === '#'"
              @click="project.demo === '#' && $event.preventDefault()"
            >
              <span class="mr-1">&#127760;</span> View Live Demo
            </a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-end mt-auto">
        <button
          @click="closeModal"
          class="bg-emerald-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-xs sm:text-sm"
        >
          Close
        </button>
      </div>
    </div>

    <!-- Full image viewer overlay -->
    <div
      v-if="fullImageViewerVisible"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-transparent p-4"
      @click.self="closeFullImageViewer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fullImageViewerTitle"
    >
      <!-- Container to center the image box -->
      <div
        class="relative w-auto h-auto flex items-center justify-center"
        @click.stop
      >
        <!-- Image Box (relative positioning context for buttons) -->
        <div class="relative inline-block">
          <img
            :src="fullImageUrl"
            :alt="fullImageAlt"
            class="block max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-xl bg-white"
            ref="fullImageRef"
          />
          <h2 id="fullImageViewerTitle" class="sr-only">
            Full Image Viewer: {{ fullImageAlt }}
          </h2>

          <!-- Previous Button -->
          <button
            v-if="project?.gallery?.length > 1"
            @click="goToPreviousImage"
            :disabled="selectedGalleryIndex === 0"
            class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <!-- Next Button -->
          <button
            v-if="project?.gallery?.length > 1"
            @click="goToNextImage"
            :disabled="selectedGalleryIndex === project?.gallery?.length - 1"
            class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <!-- Close Button -->
          <button
            @click="closeFullImageViewer"
            class="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 transition-opacity leading-none"
            aria-label="Close full image viewer"
          >
            <X :size="20" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onBeforeUnmount } from 'vue';
import { X } from 'lucide-vue-next';

const props = defineProps({
  show: Boolean,
  project: Object, // Expects a project object with title, description, img, gallery, techUsed, links, demo
});

const emit = defineEmits(['close']);

const fullImageViewerVisible = ref(false);
const fullImageUrl = ref('');
const fullImageAlt = ref('');
const selectedGalleryIndex = ref(null);
const fullImageRef = ref(null); // Ref for the full image element

const dialogTitleId = computed(
  () => `project-modal-title-${props.project?.id || 'default'}`
);

const closeModal = () => {
  closeFullImageViewer();
  emit('close');
};

const viewFullImage = (url, index) => {
  // Ensure index is valid before proceeding
  if (index < 0 || index >= (props.project?.gallery?.length || 0)) {
    console.warn('Attempted to view image with invalid index:', index);
    return;
  }

  fullImageUrl.value = url;
  fullImageAlt.value = `${
    props.project?.projectTitle || 'Project'
  } gallery image ${index + 1}`;
  selectedGalleryIndex.value = index;
  fullImageViewerVisible.value = true;
  nextTick(() => {
    // Try focusing the close button first for accessibility
    const closeButton = document.querySelector(
      '[aria-label="Close full image viewer"]'
    );
    if (closeButton) {
      closeButton.focus();
    } else if (fullImageRef.value) {
      // Fallback to image if needed, though button is better
      fullImageRef.value.focus();
    }
  });
};

const closeFullImageViewer = () => {
  fullImageViewerVisible.value = false;
  // Optional: Delay clearing image to allow fade-out if you add transitions
  // setTimeout(() => {
  fullImageUrl.value = '';
  fullImageAlt.value = '';
  selectedGalleryIndex.value = null;
  // }, 300);
};

const goToPreviousImage = () => {
  if (selectedGalleryIndex.value === null || selectedGalleryIndex.value <= 0)
    return;
  const newIndex = selectedGalleryIndex.value - 1;
  const newUrl = props.project?.gallery?.[newIndex];
  if (newUrl !== undefined) {
    // Check if URL exists at index
    viewFullImage(newUrl, newIndex);
  }
};

const goToNextImage = () => {
  const galleryLength = props.project?.gallery?.length || 0;
  if (
    selectedGalleryIndex.value === null ||
    selectedGalleryIndex.value >= galleryLength - 1
  )
    return;
  const newIndex = selectedGalleryIndex.value + 1;
  const newUrl = props.project?.gallery?.[newIndex];
  if (newUrl !== undefined) {
    // Check if URL exists at index
    viewFullImage(newUrl, newIndex);
  }
};

// Add keyboard accessibility
const handleKeydown = (event) => {
  if (fullImageViewerVisible.value) {
    if (event.key === 'Escape') {
      closeFullImageViewer();
    } else if (event.key === 'ArrowLeft') {
      goToPreviousImage();
    } else if (event.key === 'ArrowRight') {
      goToNextImage();
    }
  } else if (props.show && event.key === 'Escape') {
    closeModal();
  }
};

watch(
  () => props.show,
  (newValue) => {
    if (newValue) {
      document.addEventListener('keydown', handleKeydown);
    } else {
      document.removeEventListener('keydown', handleKeydown);
      closeFullImageViewer(); // Ensure viewer is closed if modal closes
    }
  }
);

// Cleanup listener on unmount
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Add component-specific styles here if needed. */
/* Tailwind handles most styling */

.modal-body::-webkit-scrollbar {
  width: 8px;
}

.modal-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.modal-body::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: #bbb;
}

/* Improve focus visibility */
button:focus,
a:focus,
[tabindex='0']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.6); /* Tailwind emerald-600 with opacity */
}

[role='button']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.6); /* Tailwind emerald-600 with opacity */
}
</style>
