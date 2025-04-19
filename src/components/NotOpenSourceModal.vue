<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4"
    @click.self="closeModal"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="dialogTitleId"
  >
    <div
      class="bg-white rounded-xl p-6 sm:p-8 max-w-lg w-full shadow-lg relative border border-gray-300 flex flex-col gap-6 mx-4"
    >
      <!-- Header -->
      <div class="flex items-start justify-between">
        <div class="flex flex-col gap-2">
          <h1
            :id="dialogTitleId"
            class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight"
          >
            Demo Not Available
          </h1>
          <!-- Optional: Add subtitle if needed -->
          <!-- <p class="text-gray-500 text-sm">Information about this item.</p> -->
        </div>
        <button
          @click="closeModal"
          class="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-emerald-700 focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X :size="20" />
          <!-- Lucide X icon -->
        </button>
      </div>

      <!-- Body -->
      <div
        class="modal-body text-gray-700 leading-relaxed text-sm sm:text-base"
      >
        <p v-if="itemType === 'project'">
          The demo for this project is not publicly available at this time.
          Please check the project details or repository for more information or
          screenshots. Stay tuned for potential updates!
        </p>
        <p v-else-if="itemType === 'collaboration'">
          The demo for this collaboration is not publicly available at this
          time. Please check the collaboration details or repository for more
          information.
        </p>
        <p v-else>
          A demo for this item is not publicly available at this time.
        </p>
      </div>
      <!-- Footer -->
      <div class="flex justify-end mt-auto">
        <button
          @click="closeModal"
          class="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch, onBeforeUnmount } from 'vue';
import { X } from 'lucide-vue-next'; // Import the X icon

const props = defineProps({
  show: Boolean,
  item: Object, // Generic item (project or collaboration)
  itemType: {
    // To customize the message slightly
    type: String,
    default: 'item', // 'project', 'collaboration', or 'item'
  },
});

const emit = defineEmits(['close']);

// Use item's ID or a default for unique ID
const dialogTitleId = computed(
  () => `not-open-source-modal-title-${props.item?.id || 'default'}`
);

const closeModal = () => {
  emit('close');
};

// Add keyboard accessibility for closing modal
const handleKeydown = (event) => {
  if (props.show && event.key === 'Escape') {
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
    }
  }
);

// Cleanup listener on unmount
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Tailwind handles most styling */
button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.6); /* Tailwind emerald-600 with opacity */
}
</style>
