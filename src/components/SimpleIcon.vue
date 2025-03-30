<template>
  <span
    v-if="icon && icon.svg"
    v-html="processedSvg"
    :style="{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }"
    role="img"
    :aria-label="icon.title"
  ></span>
  <span
    v-else
    v-html="defaultIconSvg"
    role="img"
    aria-label="Default icon"
  ></span>
  <!-- Fallback icon -->
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: Object, // Expects the imported object from simple-icons/icons
    required: true,
  },
  size: {
    type: String,
    default: '1em', // Default size
  },
  // Optional: Add color prop if needed, otherwise uses currentColor
  // color: {
  //   type: String,
  //   default: 'currentColor'
  // }
});

// A basic default icon SVG (e.g., a code symbol) if an icon is missing
const defaultIconSvg = computed(
  () =>
    `<svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="${props.size}" 
      height="${props.size}" 
      fill="currentColor">
     <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
   </svg>`
);

// Process the SVG string to add width, height, and fill
const processedSvg = computed(() => {
  if (!props.icon || !props.icon.svg) {
    return defaultIconSvg.value; // Return default if icon is invalid
  }

  let svgString = props.icon.svg;

  // Add width, height, and fill attributes
  svgString = svgString.replace(
    '<svg',
    `<svg width="${props.size}" height="${props.size}" fill="currentColor"`
  );

  // Ensure role="img" is present for accessibility
  if (!svgString.includes('role="img"')) {
    svgString = svgString.replace('<svg', '<svg role="img"');
  }

  return svgString;
});
</script>

<style scoped>
/* Ensure the SVG scales correctly within the span */
span > svg {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
